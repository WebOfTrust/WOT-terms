import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const configKeripy = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keripy.xml',
    }),
    siteName: 'repo: WoT / keripy',
    source: 'repo: WoT / keripy',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keripy.json',
    domQueryForContent: 'turbo-frame'
}
const configKeri = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keri.xml',
    }),
    siteName: 'repo: WoT / keri',
    source: 'repo: WoT / keri',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-keri.json',
    domQueryForContent: 'turbo-frame'
}
const configCesride = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-cesride.xml',
    }),
    siteName: 'repo: WoT / cesride',
    source: 'repo: WoT / cesride',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-cesride.json',
    domQueryForContent: 'turbo-frame'
}
const configSignifyts = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-signify-ts.xml',
    }),
    siteName: 'repo: WoT / signify-ts',
    source: 'repo: WoT / signify-ts',
    author: '–',
    destinationFile: 'scrapers/output/WebOfTrust-signify-ts.json',
    domQueryForContent: 'turbo-frame'
}
const configKeria = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-github.com-WebOfTrust-keria.xml',
    }),
    siteName: 'repo: WoT / keria',
    source: 'repo: WoT / keria',
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