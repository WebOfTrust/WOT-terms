import puppeteer from 'puppeteer';
import createOutput from './createOutput.mjs';
import writeToFile from './writeToFile.mjs';

export default async function scrape(config, customScrape) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Set a custom user agent header
    await page.setUserAgent('KERISSE-Web-of-Trust-Scraper');
    // Iterate over each URL in the sitemap and create an array of entries for each URL
    const entries = [];

    // Iterate over each URL in the sitemap and create an array of entries for each URL
    // console.log('Indexing pages...');
    for (const url of config.sitemap.urlset.url) {// for production
        // for (const url of config.sitemap.urlset.url.slice(50, 63)) {// for testing
        const pageUrl = url.loc[0];
        // console.log(`Indexing ${pageUrl}`);

        try {
            // Navigate to the page URL and process the page content using the specified function
            await page.goto(pageUrl);
            const scraped = await customScrape(page, config.domQueryForContent, pageUrl);

            let output = createOutput({
                siteName: config.siteName,
                pageUrl: pageUrl,
                mainContent: scraped.mainContent,
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
            // console.log('output: ', output);

        } catch (err) {
            console.error(`Error processing page ${pageUrl}: ${err}`);
        }
    }
    writeToFile(entries, config.destinationFile);
    await browser.close();
}
