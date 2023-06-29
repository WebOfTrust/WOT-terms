import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const configKeripy = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keripy.xml',
    }),
    siteName: 'WebOfTrust-keripy',
    source: 'WebOfTrust-keripy',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keripy.json',
    domQueryForContent: 'turbo-frame'
}
const configKeri = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keri.xml',
    }),
    siteName: 'WebOfTrust-keri',
    source: 'WebOfTrust-keri',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keri.json',
    domQueryForContent: 'turbo-frame'
}
const configCesride = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-cesride.xml',
    }),
    siteName: 'WebOfTrust-cesride',
    source: 'WebOfTrust-cesride',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-cesride.json',
    domQueryForContent: 'turbo-frame'
}
const configSignifyts = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-signify-ts.xml',
    }),
    siteName: 'WebOfTrust-signify-ts',
    source: 'WebOfTrust-signify-ts',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-signify-ts.json',
    domQueryForContent: 'turbo-frame'
}
const configKeria = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keria.xml',
    }),
    siteName: 'WebOfTrust-keria',
    source: 'WebOfTrust-keria',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keria.json',
    domQueryForContent: 'turbo-frame'
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
    scrape(configKeripy, customScrape);
    scrape(configKeri, customScrape);
    scrape(configCesride, customScrape);
    scrape(configSignifyts, customScrape);
    scrape(configKeria, customScrape);
};