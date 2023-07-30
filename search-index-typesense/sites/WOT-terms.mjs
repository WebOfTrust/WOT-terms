import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://weboftrust.github.io/WOT-terms/sitemap.xml',
        excludeURLs: 'scrapers/sitemaps/WOT-terms-exclude-urls.json'
    }),
    siteName: 'KERISSE (this site)',
    source: 'KERISSE (this site)',
    author: 'Henk van Cann',
    destinationFile: 'scrapers/output/WOT-terms.json',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown h6, article .markdown li, article .markdown img, article .markdown pre, article .markdown code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
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
    const pageTitle = await getTextContent(page, 'article header h1');


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
export default async function () {
    scrape(config, customScrape);
};