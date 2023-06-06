import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://essif-lab.github.io/framework/sitemap.xml',
    }),
    siteName: 'eSSIF-Lab',
    destinationFile: 'scrapers/output/eSSIF-Lab.json',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown li'
}

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    const articleExists = await page.$('article');
    let pageTitle;
    if (articleExists) {
        pageTitle = await page.$eval('article header h1', (element) => {
            element.textContent.trim()
        });
    } else {
        console.log('No article element found.');
    }


    // const hierarchyLevels = await page.$$eval('.breadcrumbs__link', (nodes) =>
    //   nodes.map((node) => node.textContent.trim())
    // );


    let all = {};
    all.elements = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};