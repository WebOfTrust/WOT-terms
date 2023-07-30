import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-jolocom.xml',
    }),
    siteName: 'jolocom.io blog',
    source: 'Blogposts',
    author: 'Charles',
    destinationFile: 'scrapers/output/jolocom.json',
    domQueryForContent: '.blog-post-single p, .blog-post-single h1, .blog-post-single h2, .blog-post-single h3, .blog-post-single h4, .blog-post-single h5, .blog-post-single h6, .blog-post-single li, .blog-post-single img, '
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    // let pageTitle = await page.$eval('.blog-post-single h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '.blog-post-single h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    all.creationDate = 'Oct 15, 2020';// manually added
    return all;
}
export default async function () {
    scrape(config, customScrape);
};