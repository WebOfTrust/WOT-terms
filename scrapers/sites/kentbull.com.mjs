import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-kentbull.com.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'scrapers/output/kentbull.com.json',
    domQueryForContent: 'article p, article h1, article h2, article h3, article h4, article h5, article h6, article li'
}


console.log("config.sitemap");
console.log(config.sitemap);

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.posttitle', (element) => {
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