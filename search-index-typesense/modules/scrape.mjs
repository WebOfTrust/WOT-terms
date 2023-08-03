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

export default async function scrape(config, customScrape) {
    const browser = await puppeteer.launch();// for production
    // const browser = await puppeteer.launch({ headless: false });// for testing
    const page = await browser.newPage();
    // Set a custom user agent header
    await page.setUserAgent('KERISSE-Web-of-Trust-Scraper');
    // Iterate over each URL in the sitemap and create an array of entries for each URL
    const entries = [];


    if (config && config.sitemap && config.sitemap.urlset && Array.isArray(config.sitemap.urlset.url)) {
        // Iterate over each URL in the sitemap and create an array of entries for each URL
        // console.log('Indexing pages...');
        for (const url of config.sitemap.urlset.url) {// for production
            // for (const url of config.sitemap.urlset.url.slice(150, 163)) {// for testing
            const pageUrl = url.loc[0];
            console.log(`Indexing ${pageUrl}`);
            writeToSuccesFile(`Indexing ${pageUrl}`);

            try {
                // Navigate to the page URL and process the page content using the specified function
                await page.goto(pageUrl);
                const scraped = await customScrape(page, config.domQueryForContent, pageUrl);

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
                    firstHeadingBeforeElements: scraped.firstHeadingBeforeElements
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
