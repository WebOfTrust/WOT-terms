import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'querySelector',
        sourcePath: 'https://github.com/trustoverip/acdc/wiki',
        queryString: '#wiki-pages-box a',
    }),
    siteName: 'Trust over IP glossary',
    destinationFile: 'output/acdc.json',
    domQueryForContent: '.markdown-body p, .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body li'
}

async function process(page, domQueryForContent) {
    const elements = await page.evaluate(
        (domQueryForContent) => {
            // Helper function to find the first heading element preceding the given element
            function findPreviousHeadingElement(element) {
                let previousElement = element.previousElementSibling;
                while (previousElement) {
                    if (isHeadingElement(previousElement)) {
                        return previousElement;
                    }
                    previousElement = previousElement.previousElementSibling;
                }
                return null;
            }

            // Helper function to check if an element is a heading element (h1, h2, h3, etc.)
            function isHeadingElement(element) {
                const tagName = element.tagName.toLowerCase();
                return (
                    tagName.startsWith("h") && tagName.length === 2 && !isNaN(tagName.charAt(1))
                );
            }

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);
                return {
                    text: el.textContent.trim(),
                    tag: el.tagName.toLowerCase(),
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                };
            });
        },
        domQueryForContent
    );

    let pageTitle;
    pageTitle = await page.$eval('.repository-content h1', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = elements;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};