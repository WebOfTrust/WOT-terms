/*
  Author: Kor Dwarshuis
  Created: 2023-08
  Updated: -
  Description: 
    This script performs PDF scraping from a given GitHub repository using Puppeteer and OCR (Optical Character Recognition) via Tesseract.js.
    
    Functions and Procedures:
    
    1. `githubPDF(page, pageUrl)`:
        - Main function that initiates the scraping process.
        - Takes a puppeteer page object and the URL of the GitHub page where the PDF is located.
        
    2. `extractRepoNameFromGithubURL(url)`:
        - Extracts and returns the repository name from a GitHub URL.
        
    3. `areMorePagesAvailable(page)`:
        - Checks whether more PDF pages are available for scraping on the GitHub page.
        
    4. `clickMorePagesButton(page)`:
        - Clicks the "More pages" button on the GitHub page to load additional PDF pages.
        
    Flow of Execution:
    
    - The script navigates to the GitHub page containing the PDF.
    - It waits for an iframe to load that contains the PDF.
    - Clicks the "More Pages" button until all PDF pages are visible.
    - Takes a screenshot of each PDF page (rendered in a canvas element).
    - Performs OCR on each screenshot using Tesseract.js to convert images to text.
    - Returns the OCR text and the repository name.
    
    Logging:
    
    - Any errors encountered are logged into 'error.log'.
    - OCR progress and other information are logged into 'success.log'.
*/


import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import puppeteer from 'puppeteer';
import logger from './logger.mjs';

export async function githubPDF(page, pageUrl) {
    function extractRepoNameFromGithubURL(url) {
        try {
            const parsedUrl = new URL(url);

            // Validate that the URL is from GitHub
            if (parsedUrl.hostname !== 'github.com') {
                throw new Error('URL is not from github.com');
            }

            // Split the pathname into segments and return the second one
            const segments = parsedUrl.pathname.split('/');
            return segments[2]; // This will be the repo name

        } catch (err) {
            logger.setLogFile('error.log');
            logger.log(err.message);

            return null; // Invalid URL or not a GitHub URL
        }
    }



    // Wait for iframe to be loaded
    await page.waitForSelector('iframe');

    // Extract the 'src' attribute from the iframe
    const iframeSrc = await page.$eval('iframe', frame => frame.src);
    let mainContent = [];

    // Navigate to the iframe's source
    await page.goto(iframeSrc, {
        waitUntil: 'networkidle2'
    });

    // To get the whole pdf, we need to click the "More pages" button until all pages are loaded
    // In Github if the loading class is added to the More Pages button means that there are no more pages to load
    async function areMorePagesAvailable(page) {
        const selector = '#js-click-for-more';
        const className = 'loading';
        return !(await page.$eval(selector, (el, className) => el.classList.contains(className), className));
    }







    // Repeatedly click the "More pages" button until all pages are loaded
    let morePagesToLoad = await areMorePagesAvailable(page);

    // Function to check for the "More pages" button and click it
    const clickMorePagesButton = async (page) => {
        if (morePagesToLoad) {
            // Wait for the "More pages" button to be visible
            try {
                await page.waitForSelector('#js-click-for-more', { visible: true, timeout: 60000 });
            } catch (err) {
                logger.setLogFile('error.log');
                logger.log('Could not find #js-click-for-more: ' + err.message);
                // Exit or continue based on your logic
            }

            const button = await page.$('#js-click-for-more');
            if (button) {
                await button.click();
                console.log("More pages button clicked");
                await page.waitForTimeout(1000);
                morePagesToLoad = await areMorePagesAvailable(page);
            } else {
                console.log("'More pages' button not found");
            }
        }
    };

    while (morePagesToLoad) {
        await clickMorePagesButton(page);
    }

    // Now that the whole pdf is loaded (into several canvasses), we can scrape the PDF
    // Fetch all the canvas elements on the page
    const canvases = await page.$$('canvas');


    for (const canvas of canvases) {
        const canvasImage = await canvas.screenshot();

        try {
            // OCR the captured canvas image using Tesseract.js
            const { data: { text } } = await Tesseract.recognize(
                canvasImage,
                'eng',
                {
                    logger: m => {
                        logger.setLogFile('success.log');
                        logger.log(m);
                    }
                }
            );

            mainContent.push({
                content: text,
                contentLength: text.length,
                tag: "pdf"
            });

        } catch (err) {
            logger.setLogFile('error.log');
            logger.log('Error:' + err);
        }
    }


    // // Tesseract via Worker part 3 - close the worker
    // await worker.terminate();

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = extractRepoNameFromGithubURL(pageUrl);
    return all;
}