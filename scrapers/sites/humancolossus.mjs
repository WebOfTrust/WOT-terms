import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-humancolossus.xml',
    }),
    siteName: 'Human Colossus Foundation blog',
    source: 'Blogposts',
    author: 'Robert Mitwicki',
    destinationFile: 'scrapers/output/humancolossus.json',
    domQueryForContent: '.blog-item-content p, .blog-item-content h1, .blog-item-content h2, .blog-item-content h3, .blog-item-content h4, .blog-item-content h5, .blog-item-content h6, .blog-item-content li, .blog-item-content img, .blog-item-content pre, .blog-item-content code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

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