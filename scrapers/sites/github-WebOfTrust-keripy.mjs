import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keripy.xml',
    }),
    siteName: 'WebOfTrust-keripy',
    source: 'WebOfTrust-keripy',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keripy.json',
    domQueryForContent: 'turbo-frame, article'
}


async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);
    console.log('mainContent: ', mainContent);
    // let pageTitle = await page.$eval('.repository-content h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '#breadcrumb');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};