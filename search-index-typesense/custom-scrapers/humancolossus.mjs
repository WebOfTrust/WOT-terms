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
        sourcePath: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_SITEMAPS_DIR}/sitemap-humancolossus.xml`,
    }),
    siteName: 'Human Colossus Foundation blog',
    source: 'Blogposts',
    category: 'Blogs',
    author: 'Robert Mitwicki',
    destinationFile: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_ENTRIES_DIR}/humancolossus.jsonl`,
    domQueryForContent: '.blog-item-content p, .blog-item-content h1, .blog-item-content h2, .blog-item-content h3, .blog-item-content h4, .blog-item-content h5, .blog-item-content h6, .blog-item-content li, .blog-item-content img, .blog-item-content pre, .blog-item-content code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);


    // let pageTitle = await page.$eval('.blog-item-title h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '.blog-item-title h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};