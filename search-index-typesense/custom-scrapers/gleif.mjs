import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';
import { writeToErrorFile } from '../modules/writeToErrorFile.mjs';
import { writeToSuccesFile } from '../modules/writeToSuccesFile.mjs';

const config = {
    // 1: Use a local created sitemap
    // sitemap: await createInput({
    //     sourceType: 'localXMLsitemap',
    //     sourcePath: 'search-index-typesense/sitemaps/sitemap-www.gleif.org.xml',
    // }),

    // 2: Use html sitemap on website
    sitemap: await createInput({
        sourceType: 'querySelector',
        sourcePath: 'https://www.gleif.org/en/meta/sitemap',
        queryString: '.content ul li a',// must be an a element
        excludeURLs: 'search-index-typesense/sitemaps-exlude-urls/sitemap-www.gleif.org-exclude-urls.json'
    }),
    siteName: 'Gleif website',
    source: 'Gleif website',
    author: '',
    destinationFile: 'search-index-typesense/search-index-entries/gleif.json',
    domQueryForContent: 'article .content p, article .content h1, article .content h2, article .content h3, article .content h4, article .content h5, article .content h6, article .content li, article .content img, article .content pre, article .content code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    console.log('pageUrl: ', pageUrl);
    writeToSuccesFile('pageUrl: ' + pageUrl);
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
    all.mediaType = "Web page";
    return all;
}
export default async function () {
    scrape(config, customScrape);
};