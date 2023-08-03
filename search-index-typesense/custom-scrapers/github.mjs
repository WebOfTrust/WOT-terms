import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

// List of sitemap files
const sitemapFiles = [
    'sitemap.githubcom.weboftrust.cardano-backer-main.xml',
    'sitemap.githubcom.weboftrust.cesride-main.xml',
    'sitemap.githubcom.weboftrust.cesrpy-main.xml',
    'sitemap.githubcom.weboftrust.gcp-ksm-shim-main.xml',
    'sitemap.githubcom.weboftrust.ietf-did-keri-main.xml',
    'sitemap.githubcom.weboftrust.kara-main.xml',
    'sitemap.githubcom.weboftrust.kassh-main.xml',
    'sitemap.githubcom.weboftrust.keep-main.xml',
    'sitemap.githubcom.weboftrust.keri-main.xml',
    'sitemap.githubcom.weboftrust.keri-swift-main.xml',
    'sitemap.githubcom.weboftrust.keria-main.xml',
    'sitemap.githubcom.weboftrust.keride-main.xml',
    'sitemap.githubcom.weboftrust.keriox-main.xml',
    'sitemap.githubcom.weboftrust.keripy-main.xml',
    'sitemap.githubcom.weboftrust.parside-main.xml',
    'sitemap.githubcom.weboftrust.saidide-main.xml',
    'sitemap.githubcom.weboftrust.schema-main.xml',
    'sitemap.githubcom.weboftrust.scir-main.xml',
    'sitemap.githubcom.weboftrust.shkr-main.xml',
    'sitemap.githubcom.weboftrust.signifi-main.xml',
    'sitemap.githubcom.weboftrust.signifide-main.xml',
    'sitemap.githubcom.weboftrust.signify-ts-main.xml',
    'sitemap.githubcom.weboftrust.signifypy-main.xml',
    'sitemap.githubcom.weboftrust.vlei-dev.xml',
    'sitemap.githubcom.weboftrust.ward-main.xml'
];

// Function to create configuration
const createConfig = async (filename) => {
    const parts = filename.split('.');
    const repositoryOwner = parts[2];
    const repositoryName = parts[3];
    const branchName = parts[4];

    return {
        sitemap: await createInput({
            sourceType: 'localXMLsitemap',
            sourcePath: `search-index-typesense/sitemaps/${filename}`,
        }),
        siteName: `${repositoryOwner} / ${repositoryName}`,
        source: `${repositoryOwner} / ${repositoryName}`,
        author: '',
        destinationFile: `search-index-typesense/search-index-entries/${repositoryOwner}-${repositoryName}.json`,
        domQueryForContent: 'turbo-frame',
        branch: branchName
    };
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function customScrape(page, domQueryForContent) {
    // // Pause the script (in miliseconds), could be useful so you don't get blocked
    // console.log('Pausing...');
    // await sleep(3000);
    // console.log('Resuming...'); 

    const mainContent = await extractMainContent(page, domQueryForContent);

    // let pageTitle = await page.$eval('.repository-content h1', (element) => {
    //     return element.textContent.trim()
    // });
    // const pageTitle = await getTextContent(page, '#breadcrumb');
    const pageTitle = await getTextContent(page, '[itemprop="name"]');


    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}


export default async function () {
    for (const filename of sitemapFiles) {
        const config = await createConfig(filename);
        await scrape(config, customScrape);
    }
};