import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';
import logger from '../modules/logger.mjs';


/**
 * ESSIFlabs
 * 
 * 
 */

const configESSIFlabs = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://essif-lab.github.io/framework/sitemap.xml',
    }),
    siteName: 'eSSIF-Lab',
    source: 'eSSIF-Lab',
    category: 'Blogs',
    author: '',
    destinationFile: 'search-index-typesense/search-index-entries/eSSIF-Lab.jsonl',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown h6, article .markdown li, article .markdown img, article .markdown pre, article .markdown code'
}

async function customScrapeESSIFlabs(page, domQueryForContent, pageUrl) {
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



/**
 * Gleif
 * 
 * 
 */

const configGleif = {
    // // 1: Use a local created sitemap
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
    category: 'Blogs',
    author: '',
    destinationFile: 'search-index-typesense/search-index-entries/gleif.jsonl',
    domQueryForContent: 'article .content p, article .content h1, article .content h2, article .content h3, article .content h4, article .content h5, article .content h6, article .content li, article .content img, article .content pre, article .content code'
}

async function customScrapeGleif(page, domQueryForContent, pageUrl) {
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



/**
 * gleifPDF
 * 
 * 
 */

const configGleifPDF = {
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

async function customScrapeGleifPDF(page, domQueryForContent, pageUrl) {
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



/**
 * ReadTheDocs Keripy
 * 
 * 
 */

const configReadTheDocsKeripy = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-keripy.readthedocs.io.xml',
    }),
    siteName: 'Python Implementation of the KERI Core Libraries',
    source: 'Python Implementation of the KERI Core Libraries',
    category: 'Blogs',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: 'search-index-typesense/search-index-entries/readthedocs.keripy.io.jsonl',
    domQueryForContent: '.document'
}

async function customScrapeReadTheDocsKeripy(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, 'section h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}



/**
 * ReadTheDocs Keria
 * 
 * 
 */

const configReadTheDocsKeria = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-keria.readthedocs.io.xml',
    }),
    siteName: 'Python Implementation of the KERI Core Libraries',
    source: 'Python Implementation of the KERI Core Libraries',
    category: 'Blogs',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: 'search-index-typesense/search-index-entries/readthedocs.keria.io.jsonl',
    domQueryForContent: '.document'
}

async function customScrapeReadTheDocsKeria(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, 'section h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}



/**
 * ReadTheDocs Signifypy
 * 
 * 
 */

const configReadTheDocsSignifypy = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-signifypy.readthedocs.io.xml',
    }),
    siteName: 'Python Implementation of the KERI Core Libraries',
    source: 'Python Implementation of the KERI Core Libraries',
    category: 'Blogs',
    author: 'Dr. Samuel Smith and contributors',
    destinationFile: 'search-index-typesense/search-index-entries/readthedocs.signifypy.io.jsonl',
    domQueryForContent: '.document'
}

async function customScrapeReadTheDocsSignifypy(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, 'section h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}



/**
 * WOTterms
 * 
 * 
 */

const configWOTterms = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://weboftrust.github.io/WOT-terms/sitemap.xml',
        excludeURLs: 'search-index-typesense/sitemaps-exlude-urls/WOT-terms-exclude-urls.json'
    }),
    siteName: 'KERISSE (this site)',
    source: 'KERISSE (this site)',
    category: 'KERISSE (this site)',
    author: 'Henk van Cann',
    destinationFile: 'search-index-typesense/search-index-entries/WOT-terms.jsonl',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown h6, article .markdown li, article .markdown img, article .markdown pre, article .markdown code'
}

async function customScrapeWOTterms(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    let type = await page.$eval('article', (element) => {
        switch (element.getAttribute('data-type')) {
            case 'G':
                return 'General';
            case 'S':
                return 'SSI';
            case 'K':
                return 'KERI/ACDC specific';
        }
    });

    // Find the breadcrumbs element and all its child <li> elements
    let hierarchyLevels = await page.$$eval('.breadcrumbs__link', (nodes) =>
        nodes.map((node) => node.textContent.trim())
    );

    // Get the value of the data-level attribute from the article element
    let knowledgeLevel = await page.$eval('article', (element) => {
        return element.getAttribute('data-level');
    });

    // let pageTitle = await page.$eval('article header h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, 'article h1:first-of-type');


    let all = {};
    all.mainContent = mainContent;
    all.type = type;
    all.hierarchyLevel0 = hierarchyLevels[0];
    all.hierarchyLevel1 = hierarchyLevels[1];
    all.hierarchyLevel2 = hierarchyLevels[2];
    all.hierarchyLevel3 = hierarchyLevels[3];
    all.knowledgeLevel = knowledgeLevel;
    all.pageTitle = pageTitle;
    return all;
}



// /**
//  * WOTgloss
//  * 
//  * 
//  */

// const configWOTgloss = {
//     sitemap: await createInput({
//         sourceType: 'querySelector',
//         sourcePath: 'https://github.com/weboftrust/WOT-terms/wiki',
//         queryString: '#wiki-pages-box a',
//     }),
//     siteName: 'WebofTrust glossary',
//     source: 'WebofTrust glossary',
//     category: 'Glossary',
//     author: 'Henk van Cann',
//     destinationFile: 'search-index-typesense/search-index-entries/wotgloss.jsonl',
//     domQueryForContent: '.markdown-body p, .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6, .markdown-body li, .markdown-body img, .markdown-body pre, .markdown-body code'
// }

// async function customScrapeWOTgloss(page, domQueryForContent, pageUrl) {
//     logger.setLogFile('success.log');
//     logger.log('pageUrl: ' + pageUrl);

//     const mainContent = await extractMainContent(page, domQueryForContent);

//     // let pageTitle = await page.$eval('.repository-content h1', (element) => {
//     //     return element.textContent.trim()
//     // });
//     const pageTitle = await getTextContent(page, '.repository-content h1');

//     let all = {};
//     all.mainContent = mainContent;
//     all.pageTitle = pageTitle;
//     return all;
// }



/**
 * Slack Keri Archive
 * 
 * 
 */

const configSlackKeriArchive = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/slack-keri-archive.xml',
    }),
    siteName: 'Slack Keri Archive',
    source: 'Slack Keri Archive',
    category: 'Slack Keri Archive',
    author: 'Slack Keri Members',
    destinationFile: 'search-index-typesense/search-index-entries/slack-keri-archive.jsonl',
    domQueryForContent: 'body'
}

async function customScrapeSlackKeriArchive(page, domQueryForContent, pageUrl) {
    logger.setLogFile('success.log');
    logger.log('pageUrl: ' + pageUrl);

    const mainContent = await extractMainContent(page, domQueryForContent);

    const pageTitle = await getTextContent(page, 'h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}






export default async function () {
    scrape(configESSIFlabs, customScrapeESSIFlabs);
    scrape(configGleif, customScrapeGleif);
    // scrape(configGleifPDF, customScrapeGleifPDF);
    scrape(configReadTheDocsKeripy, customScrapeReadTheDocsKeripy);
    scrape(configReadTheDocsKeria, customScrapeReadTheDocsKeria);
    scrape(configReadTheDocsSignifypy, customScrapeReadTheDocsSignifypy);
    scrape(configWOTterms, customScrapeWOTterms);
    // scrape(configWOTgloss, customScrapeWOTgloss);
    scrape(configSlackKeriArchive, customScrapeSlackKeriArchive);
};