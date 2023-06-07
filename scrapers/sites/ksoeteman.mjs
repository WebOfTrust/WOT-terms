import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-ksoeteman.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'scrapers/output/ksoeteman.json',
    domQueryForContent: '.entry-content p, .entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5, .entry-content h6, .entry-content li'
}


console.log("config.sitemap");
console.log(config.sitemap);

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.entry-header h1', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};