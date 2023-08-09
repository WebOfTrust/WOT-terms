/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Scrape websites using puppeteer.
*/


import puppeteer from 'puppeteer';
import createOutput from './createOutput.mjs';
import writeToFile from './writeToFile.mjs';
import fs from 'fs';
import { writeToErrorFile } from './writeToErrorFile.mjs';
import { writeToSuccesFile } from './writeToSuccesFile.mjs';
import { githubPDF } from './github-pdf.mjs';

export default async function scrape(config, customScrape) {
    const browser = await puppeteer.launch();// for production
    // const browser = await puppeteer.launch({ headless: false });// for testing
    const page = await browser.newPage();
    // Set a custom user agent header
    await page.setUserAgent('KERISSE-Web-of-Trust-Scraper');
    // Iterate over each URL in the sitemap and create an array of entries for each URL
    const entries = [];
    let scraped = {};

    function getFileExtension(url) {
        try {
            const parsedUrl = new URL(url);

            // Split the pathname into segments and get the last segment
            const segments = parsedUrl.pathname.split('/');
            const lastSegment = segments[segments.length - 1];

            // Use a regular expression to extract the file extension
            const match = /\.([a-z0-9]+)$/i.exec(lastSegment);
            if (match) {
                return match[1]; // Return the file extension without the dot
            } else {
                // return null; // No file extension found
                return "Web page"; // No file extension found, so we'll assume it's a web page
            }

        } catch (err) {
            console.error(err.message);
            return null; // Invalid URL
        }
    }

    // const url = 'https://github.com/SmithSamuelM/Papers/blob/master/presentations/AI_Overview_20180208.pdf';
    // const fileExtension = getFileExtension(url);
    // console.log(fileExtension);  // Output: pdf


    if (config && config.sitemap && config.sitemap.urlset && Array.isArray(config.sitemap.urlset.url)) {
        // Iterate over each URL in the sitemap and create an array of entries for each URL
        // console.log('Indexing pages...');
        for (const url of config.sitemap.urlset.url) {// for production
            // for (const url of config.sitemap.urlset.url.slice(150, 163)) {// for testing
            const pageUrl = url.loc[0];
            const pageExtension = getFileExtension(pageUrl);
            const parsedUrl = new URL(pageUrl);
            console.log(`Indexing ${pageUrl}`);
            writeToSuccesFile(`Indexing ${pageUrl}`);

            try {
                // Navigate to the page URL and process the page content using the specified function
                await page.goto(pageUrl);

                // If the page is a PDF…
                if (pageUrl.toLowerCase().endsWith('.pdf')) {
                    // …and it's on github.com use the githubPDF function
                    if (parsedUrl.hostname.includes('github.com')) {
                        scraped = await githubPDF(page, pageUrl);
                    }
                } else {
                    scraped = await customScrape(page, config.domQueryForContent, pageUrl);//TODO: find out if pageUrl is needed
                }

                // if an entry is not passed, createOutput creates a default entry
                let output = createOutput({
                    siteName: config.siteName,
                    source: config.source,
                    author: config.author,
                    pageUrl: pageUrl,
                    mainContent: scraped.mainContent,
                    hierarchyLvl0: scraped.hierarchyLevel0,
                    hierarchyLvl1: scraped.hierarchyLevel1,
                    hierarchyLvl2: scraped.hierarchyLevel2,
                    hierarchyLvl3: scraped.hierarchyLevel3,
                    knowledgeLevel: scraped.knowledgeLevel,
                    type: scraped.type,
                    creationDate: scraped.creationDate,
                    pageTitle: scraped.pageTitle,
                    firstHeadingBeforeElements: scraped.firstHeadingBeforeElements,
                    mediaType: pageExtension
                });

                output.forEach((entry) => {
                    console.log('Output: ' + JSON.stringify(entry));
                    writeToSuccesFile('Output: ' + JSON.stringify(entry));
                    entries.push(entry);
                });

                // Log the page URL to a log file and to a markdown file
                fs.appendFileSync('search-index-typesense/logs/scraped.log', `Scraped: ${pageUrl}\n`);
                fs.appendFileSync(process.env.INDEX_OVERVIEW_FILE, `${pageUrl}\n\n`);

            } catch (err) {
                console.error(`Error processing page ${pageUrl}: ${err}`);
                writeToErrorFile(`Error processing page ${pageUrl}: ${err}`);
            }
        }
    } else {
        console.error('config.sitemap.urlset.url is not defined or not an array');
        writeToErrorFile('config.sitemap.urlset.url is not defined or not an array');
    }

    writeToFile(entries, config.destinationFile);

    // await new Promise(resolve => setTimeout(resolve, 1000000000)); // For testing: Delay the script termination

    await browser.close();
}
