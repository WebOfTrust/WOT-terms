import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';
import logger from '../modules/logger.mjs';

import { config as configDotEnv } from 'dotenv';
configDotEnv();

const config = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://essif-lab.github.io/framework/sitemap.xml',
    }),
    siteName: 'eSSIF-Lab',
    source: 'eSSIF-Lab',
    category: 'Blogs',
    author: '',
    destinationFile: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_ENTRIES_DIR}/eSSIF-Lab.jsonl`,
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown h6, article .markdown li, article .markdown img, article .markdown pre, article .markdown code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    // let pageTitle;
    // pageTitle = await page.$eval('article header h1', (element) => {
    //     element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, 'article h1');

    // const hierarchyLevels = await page.$$eval('.breadcrumbs__link', (nodes) =>
    //   nodes.map((node) => node.textContent.trim())
    // );


    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};