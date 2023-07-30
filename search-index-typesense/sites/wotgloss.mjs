import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'querySelector',
        sourcePath: 'https://github.com/weboftrust/WOT-terms/wiki',
        queryString: '#wiki-pages-box a',
    }),
    siteName: 'WebofTrust glossary',
    source: 'WebofTrust glossary',
    author: 'Henk van Cann',
    destinationFile: 'search-index-typesense/search-index-entries/wotgloss.json',
    domQueryForContent: '.markdown-body p, .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6, .markdown-body li, .markdown-body img, .markdown-body pre, .markdown-body code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    // let pageTitle = await page.$eval('.repository-content h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '.repository-content h1');

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};