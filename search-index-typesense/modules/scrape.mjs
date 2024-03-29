/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Scrape websites using puppeteer.
*/

import puppeteer from 'puppeteer';
import createOutput from './createOutput.mjs';
import appendToFile from './appendToFile.mjs';
import fs from 'fs';
import logger from './logger.mjs';
import { githubPDF } from './github-pdf.mjs';
import { processPDF as generalPDF } from './general-pdf.mjs';
import { getFileContent as githubContent } from './github-API.mjs';

export default async function scrape(config, customScrape) {
    const browser = await puppeteer.launch({ headless: "new" });// for production
    // const browser = await puppeteer.launch({ headless: false });// for testing
    const page = await browser.newPage();
    // Set a custom user agent header
    await page.setUserAgent('KERISSE-Web-of-Trust-Scraper');
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
                return "Web page"; // No file extension found, so we'll assume it's a web page
            }

        } catch (err) {
            logger.setLogFile('error.log');
            logger.log(err.message);

            return null; // Invalid URL
        }
    }

    function extractGithubParts(url) {
        // Check if the URL is a valid GitHub URL
        const githubRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/;
        const match = url.match(githubRegex);

        if (!match) {
            logger.setLogFile('error.log');
            logger.log('Invalid GitHub URL');

            throw new Error('Invalid GitHub URL');
        }

        return {
            owner: match[1],
            repo: match[2],
            branch: match[3],
            path: match[4]
        };
    }

    if (config && config.sitemap && config.sitemap.urlset && Array.isArray(config.sitemap.urlset.url)) {
        // Iterate over each URL in the sitemap and create an array of entries for each URL
        // console.log('Indexing pages...');
        for (const url of config.sitemap.urlset.url) {// for production
            // for (const url of config.sitemap.urlset.url.slice(150, 163)) {// for testing
            const pageUrl = url.loc[0];
            const pageExtension = getFileExtension(pageUrl);
            const parsedUrl = new URL(pageUrl);
            logger.setLogFile('success.log');
            logger.log(`Indexing ${pageUrl}`);

            try {
                // Navigate to the page URL and process the page content using the specified function

                // PDF:
                if (pageUrl.toLowerCase().endsWith('.pdf')) {
                    // PDF + github.com
                    if (parsedUrl.hostname.includes('github.com')) {
                        await page.goto(pageUrl);
                        scraped = await githubPDF(page, pageUrl);
                    }
                    // PDF + not github.com
                    else {
                        scraped = await generalPDF(pageUrl);
                    }

                }

                // Not PDF:
                else {
                    // Not PDF + github.com (not wiki)
                    if (parsedUrl.hostname.includes('github.com') && !parsedUrl.pathname.includes('/wiki/')) {
                        let mainContent = [];
                        const parts = extractGithubParts(url.loc[0]);

                        const content = await githubContent(parts.owner, parts.repo, parts.branch, parts.path)
                            .then(content => {
                                return content;
                            })
                            .catch(error => {
                                console.error(`Failed to fetch file content: ${error.message}`);
                            });

                        // return content;
                        mainContent.push({
                            content: content,
                            contentLength: content.length,
                            tag: 'textarea',
                        });
                        scraped.mainContent = mainContent;
                        scraped.pageTitle = parts.path;
                    }

                    // Not PDF + not github.com
                    else {
                        await page.goto(pageUrl);
                        scraped = await customScrape(page, config.domQueryForContent, pageUrl);//TODO: find out if pageUrl is needed
                    }
                }

                /* 
                  -if an entry is not passed, createOutput({…}) creates a default entry.
                  -everything that is assigned via scraped, like scraped,knowledgeLevel, can be added via customScrape. But mediaType for example cannot be assigned via the custom Scraper but get its data via a local var.
                */

                let strOutput = createOutput({
                    siteName: config.siteName,
                    source: config.source,
                    author: config.author,
                    category: config.category,
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


                appendToFile(strOutput, config.destinationFile);
                // Log the page URL to a log file and to a markdown file
                fs.appendFileSync('search-index-typesense/logs/scraped.log', `Scraped: ${pageUrl}\n`);
                fs.appendFileSync(process.env.INDEX_OVERVIEW_FILE, `${pageUrl}\n\n`);

            } catch (err) {
                logger.setLogFile('error.log');
                logger.log(`Error processing page ${pageUrl}: ${err}`);
            }
        }
    } else {
        logger.setLogFile('error.log');
        logger.log('config.sitemap.urlset.url is not defined or not an array');
    }

    // await new Promise(resolve => setTimeout(resolve, 1000000000)); // For testing: Delay the script termination

    await browser.close();
}
