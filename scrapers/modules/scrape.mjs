import puppeteer from 'puppeteer';
import createOutput from './createOutput.mjs';
import writeToFile from './writeToFile.mjs';
import fs from 'fs';

export default async function scrape(o, processFunction) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Iterate over each URL in the sitemap and create an array of entries for each URL
    const entries = [];

    // Iterate over each URL in the sitemap and create an array of entries for each URL
    // console.log('Indexing pages...');
    for (const url of o.sitemap.urlset.url) {// for production
        // for (const url of o.sitemap.urlset.url.slice(50, 63)) {// for testing
        const pageUrl = url.loc[0];
        // console.log(`Indexing ${pageUrl}`);

        try {
            // Navigate to the page URL and process the page content using the specified function
            await page.goto(pageUrl);
            const scraped = await processFunction(page, o.domQueryForContent, o.destinationFile);

            let output = createOutput({
                siteName: o.siteName,
                pageUrl: pageUrl,
                elements: scraped.elements,
                hierarchyLvl0: scraped.hierarchyLevel0,
                hierarchyLvl1: scraped.hierarchyLevel1,
                hierarchyLvl2: scraped.hierarchyLevel2,
                hierarchyLvl3: scraped.hierarchyLevel3,
                knowledgeLevel: scraped.knowledgeLevel,
                type: scraped.type,
                pageTitle: scraped.pageTitle,
                firstHeadingBeforeElements: scraped.firstHeadingBeforeElements
            });

            output.forEach((entry) => {
                entries.push(entry);
            });
            console.log('output: ', output);
            fs.appendFileSync('scrapers/logs/scraped.log', `Scraped: ${pageUrl}\n`);

        } catch (err) {
            console.error(`Error processing page ${pageUrl}: ${err}`);
            fs.appendFileSync('scrapers/logs/error.log', `Error processing page ${pageUrl}: ${err}\n`);
        }
    }
    writeToFile(entries, o.destinationFile);
    await browser.close();
}
