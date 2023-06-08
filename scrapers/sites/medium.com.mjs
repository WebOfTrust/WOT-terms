import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-medium.com.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'scrapers/output/medium.com.json',
    domQueryForContent: '.ch p, .ch h1, .ch h2, .ch h3, .ch h4, .ch h5, .ch h6, .ch li'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    console.log('pageUrl: ', pageUrl);
    // console.log("XXXXXXXXX");
    // console.log(JSON.stringify(page, null, 2));

    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.ch h1', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};