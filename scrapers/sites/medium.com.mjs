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

    let all = {};

    // Blogpost specific

    if (pageUrl === 'https://medium.com/spherity/introducing-keri-8f50ed1d8ed7') {
        config.siteName = 'Carsten Stöcker‘s blog';
    }
    if (pageUrl === 'https://medium.com/finema/minimal-disclosure-of-identity-with-zero-knowledge-proof-and-cl-signature-517ed2a61307') {
        config.siteName = 'Nuttawut Kongsuwan‘s blog';
    }
    if (pageUrl === 'https://medium.com/finema/verifiable-credential-and-verifiable-presentation-for-decentralized-digital-identity-132d107c2d9f') {
        config.siteName = 'Nuttawut Kongsuwan‘s blog';
    }
    if (pageUrl === 'https://medium.com/finema/remote-identity-proofing-for-digital-identity-c9a285c1b774') {
        config.siteName = 'Nuttawut Kongsuwan‘s blog';
    }
    if (pageUrl === 'https://medium.com/finema/anonymous-credential-part-1-brief-overview-and-history-c6679034c914') {
        config.siteName = 'Nuttawut Kongsuwan‘s blog';
    }
    if (pageUrl === 'https://medium.com/finema/keri-jargon-in-a-nutshell-part-1-fb554d58f9d0') {
        config.siteName = 'Nuttawut Kongsuwan‘s blog';
    }
    if (pageUrl === 'https://medium.com/decentralized-identity/peer-dids-moving-to-difs-id-working-group-7f1664bcbf30') {
        all.type = 'DID, DIF';
        config.siteName = 'Daniel Hardman‘s blog';
    }

    all.mainContent = mainContent;
    all.pageTitle = pageTitle;

    return all;
}
export default async function () {
    scrape(config, customScrape);
};