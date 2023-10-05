import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';
import logger from '../modules/logger.mjs';

import { config as configDotEnv } from 'dotenv';
configDotEnv();

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_SITEMAPS_DIR}/sitemap-keripy.readthedocs.io.xml`,
    }),
    siteName: 'Python Implementation of the KERI Core Libraries',
    source: 'Python Implementation of the KERI Core Libraries',
    category: 'Blogs',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_ENTRIES_DIR}/readthedocs.io.jsonl`,
    domQueryForContent: '.document'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

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