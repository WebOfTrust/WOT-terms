import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';
import logger from '../modules/logger.mjs';

const config = {
    // 1: Use a local created sitemap
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-www.gleif.org-pdf.xml',
    }),

    // // 2: Use html sitemap on website
    // sitemap: await createInput({
    //     sourceType: 'querySelector',
    //     sourcePath: 'https://www.gleif.org/en/meta/sitemap',
    //     queryString: '.content ul li a',// must be an a element
    //     excludeURLs: 'search-index-typesense/sitemaps-exlude-urls/sitemap-www.gleif.org-exclude-urls.json'
    // }),
    siteName: 'Gleif website',
    source: 'Gleif website',
    category: 'Blogs',
    author: '',
    destinationFile: 'search-index-typesense/search-index-entries/gleifPDF.jsonl'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    const creationDate = await getTextContent(page, '.meta li');

    // let pageTitle;
    // pageTitle = await page.$eval('.content h1', (element) => {
    //     return element.textContent.trim()
    // });

    const pageTitle = await getTextContent(page, '.content h1');


    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    all.creationDate = creationDate;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};