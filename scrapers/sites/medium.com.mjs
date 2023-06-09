import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-medium.com.xml',
    }),
    siteName: 'Blogposts',
    source: 'Blogposts',
    destinationFile: 'scrapers/output/medium.com.json',
    // domQueryForContent: '.ch p, .ch h1, .ch h2, .ch h3, .ch h4, .ch h5, .ch h6, .ch li'

    domQueryForContent: '.ch > p, .ch > h1, .ch > h2, .ch > h3, .ch > h4, .ch > h5, .ch > h6, .ch > li'
    // domQueryForContent: '.ch *'
    // domQueryForContent: '.ch.bg.et.eu.ev.ew *'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    console.log('pageUrl: ', pageUrl);
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.ch h1', (element) => {
        return element.textContent.trim()
    });

    let creationDate = await page.$eval('.ab.ae > span', (element) => {
        return element.textContent.trim()
    });

    let all = {};

    // Blogpost specific

    /*
    Explanation of the switch statement below:
        switch (pageUrl) {
        case 'URL1':
            // Code block for URL1
            break;
        case 'URL2':
        case 'URL3':
            // Code block for URL2 and URL3 (fall-through behavior)
            break;
        case 'URL4':
            // Code block for URL4
            break;
        }
    */

    switch (pageUrl) {
        case 'https://medium.com/spherity/introducing-keri-8f50ed1d8ed7':
            config.siteName = "Carsten Stöcker's blog";
            config.author = 'Carsten Stöcker';
            break;
        case 'https://medium.com/finema/minimal-disclosure-of-identity-with-zero-knowledge-proof-and-cl-signature-517ed2a61307':
        case 'https://medium.com/finema/verifiable-credential-and-verifiable-presentation-for-decentralized-digital-identity-132d107c2d9f':
        case 'https://medium.com/finema/remote-identity-proofing-for-digital-identity-c9a285c1b774':
        case 'https://medium.com/finema/anonymous-credential-part-1-brief-overview-and-history-c6679034c914':
        case 'https://medium.com/finema/keri-jargon-in-a-nutshell-part-1-fb554d58f9d0':
            config.siteName = "Nuttawut Kongsuwan's blog";
            config.author = 'Nuttawut Kongsuwan';
            break;
        case 'https://medium.com/decentralized-identity/peer-dids-moving-to-difs-id-working-group-7f1664bcbf30':
            all.type = 'DID, DIF';
            config.siteName = "Daniel Hardman's blog";
            config.author = 'Daniel Hardman';
            break;
        case 'https://daniel-hardman.medium.com/big-desks-and-little-people-e1b1b9e92d79':
            all.type = 'DID, DIF';
            config.siteName = "Daniel Hardman's blog";
            config.author = 'Daniel Hardman';
            break;
    }


    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    all.creationDate = creationDate;

    return all;
}
export default async function () {
    scrape(config, customScrape);
};