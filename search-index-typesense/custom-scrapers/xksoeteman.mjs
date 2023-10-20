import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'search-index-typesense/sitemaps/sitemap-ksoeteman.xml',
    }),
    siteName: 'ksoeteman.nl blog',
    source: 'Blogposts',
    category: 'Blogs',
    author: 'Krijn Soeteman',
    destinationFile: 'search-index-typesense/search-index-entries/ksoeteman.jsonl',
    domQueryForContent: '.entry-content p, .entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5, .entry-content h6, .entry-content li, .entry-content img, .entry-content pre, .entry-content code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    // let pageTitle = await page.$eval('.entry-header h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '.entry-header h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    all.creationDate = 'augustus 19, 2022';// manually added
    return all;
}
export default async function () {
    scrape(config, customScrape);
};