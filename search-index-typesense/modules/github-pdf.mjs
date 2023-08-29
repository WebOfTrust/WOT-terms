/*
  Author: Kor Dwarshuis
  Created: 2023-08
  Updated: -
  Description: Scrape PDF's on Github using puppeteer and Tesseract.
*/

import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import puppeteer from 'puppeteer';
import logger from './modules/logger.mjs';
import { writeToErrorFile } from '../modules/writeToErrorFile.mjs';
import { writeToSuccesFile } from '../modules/writeToSuccesFile.mjs';

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
            console.error(err.message);
            writeToErrorFile(err.message);
            return null; // Invalid URL or not a GitHub URL
        }
    }

    // PDF on github are shown in an iframe. So we need to navigate to the iframe's source to scrape the PDF.  
    // There is only one iframe on the page, so we can use page.$eval to get the iframe's source
    // Extract the 'src' attribute from the iframe
    const iframeSrc = await page.$eval('iframe', frame => frame.src);
    let mainContent = [];

    // // Tesseract via Worker part 1 - create the worker
    // const worker = await createWorker({
    //     logger: m => console.log(m)
    // });


    // Now navigate to the iframe's source
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
    // Run at least once, since if there was nothing, we would not be here
    const clickMorePagesButton = async (page) => {
        if (morePagesToLoad) {
            const button = await page.$('#js-click-for-more');
            await button.click();
            console.log("More pages button clicked");
            await page.waitForTimeout(1000); // Wait for 1 second to allow pages to load. Adjust as necessary.
            morePagesToLoad = await areMorePagesAvailable(page);
        } else {
            return;
        }
    }

    while (morePagesToLoad) {
        await clickMorePagesButton(page);
    }

    // Now that the whole pdf is loaded (into several canvasses), we can scrape the PDF
    // Fetch all the canvas elements on the page
    const canvases = await page.$$('canvas');

    // TODO: remove after testing
    // for (const canvas of canvases) {
    //     const canvasImage = await canvas.screenshot();

    //     // OCR the captured canvas image using Tesseract.js
    //     Tesseract.recognize(
    //         canvasImage,
    //         'eng',
    //         {
    //             logger: m => {
    //                 console.log(m);
    //                 writeToSuccesFile(m);
    //             }
    //         }
    //     ).then(({ data: { text } }) => {
    //         mainContent.push({
    //             content: text,
    //             contentLength: text.length,
    //             tag: "pdf"
    //         });
    //     }).catch(err => {
    //         console.error('Error:', err);
    //         writeToErrorFile('Error:' + err);
    //     });

    //     // // Tesseract via Worker part 2 - load image
    //     // (async () => {
    //     //     await worker.loadLanguage('eng');
    //     //     await worker.initialize('eng');
    //     //     const { data: { text } } = await worker.recognize(canvasImage);
    //     //     // console.log(text);
    //     //     mainContent.push({
    //     //         content: text,
    //     //         contentLength: text.length,
    //     //         tag: "pdf"
    //     //     });
    //     // })();
    // }

    for (const canvas of canvases) {
        const canvasImage = await canvas.screenshot();

        try {
            // OCR the captured canvas image using Tesseract.js
            const { data: { text } } = await Tesseract.recognize(
                canvasImage,
                'eng',
                {
                    logger: m => {
                        console.log(m);
                        writeToSuccesFile(m);
                    }
                }
            );

            mainContent.push({
                content: text,
                contentLength: text.length,
                tag: "pdf"
            });

        } catch (err) {
            console.error('Error:', err);
            writeToErrorFile('Error:' + err);
        }
    }



    // // Tesseract via Worker part 3 - close the worker
    // await worker.terminate();

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = extractRepoNameFromGithubURL(pageUrl);
    return all;
}