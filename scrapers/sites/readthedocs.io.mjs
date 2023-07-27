import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-keripy.readthedocs.io.xml',
    }),
    siteName: 'Python Implementation of the KERI Core Libraries¶',
    source: 'Python Implementation of the KERI Core Libraries¶',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: 'scrapers/output/readthedocs.io.json',
    domQueryForContent: '.document'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, '#keri-db-api h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};