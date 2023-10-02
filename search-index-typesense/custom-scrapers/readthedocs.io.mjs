import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-keripy.readthedocs.io.xml',
    }),
    siteName: 'Python Implementation of the KERI Core Libraries',
    source: 'Python Implementation of the KERI Core Libraries',
    category: 'Blogs',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: 'search-index-typesense/search-index-entries/readthedocs.io.jsonl',
    domQueryForContent: '.document'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, 'section h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};