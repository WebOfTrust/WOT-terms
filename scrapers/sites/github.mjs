import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

// List of sitemap files
const sitemapFiles = [
    'sitemap.githubcom.WebOfTrust.cardano-backer-main.xml',
    'sitemap.githubcom.WebOfTrust.cesride-main.xml',
    'sitemap.githubcom.WebOfTrust.cesrpy-main.xml',
    'sitemap.githubcom.WebOfTrust.gcp-ksm-shim-main.xml',
    'sitemap.githubcom.WebOfTrust.ietf-did-keri-main.xml',
    'sitemap.githubcom.WebOfTrust.kara-main.xml',
    'sitemap.githubcom.WebOfTrust.kassh-main.xml',
    'sitemap.githubcom.WebOfTrust.keep-main.xml',
    'sitemap.githubcom.WebOfTrust.keri-main.xml',
    'sitemap.githubcom.WebOfTrust.keri-swift-main.xml',
    'sitemap.githubcom.WebOfTrust.keria-main.xml',
    'sitemap.githubcom.WebOfTrust.keride-main.xml',
    'sitemap.githubcom.WebOfTrust.keriox-main.xml',
    'sitemap.githubcom.WebOfTrust.keripy-development.xml',
    'sitemap.githubcom.WebOfTrust.parside-main.xml',
    'sitemap.githubcom.WebOfTrust.saidide-main.xml',
    'sitemap.githubcom.WebOfTrust.schema-main.xml',
    'sitemap.githubcom.WebOfTrust.scir-main.xml',
    'sitemap.githubcom.WebOfTrust.shkr-main.xml',
    'sitemap.githubcom.WebOfTrust.signifi-main.xml',
    'sitemap.githubcom.WebOfTrust.signifide-main.xml',
    'sitemap.githubcom.WebOfTrust.signify-ts-main.xml',
    'sitemap.githubcom.WebOfTrust.signifypy-main.xml',
    'sitemap.githubcom.WebOfTrust.vlei-dev.xml',
    'sitemap.githubcom.WebOfTrust.ward-main.xml'
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
            sourcePath: `scrapers/sitemaps/${filename}`,
        }),
        siteName: `${repositoryOwner} / ${repositoryName}`,
        source: `${repositoryOwner} / ${repositoryName}`,
        author: '',
        destinationFile: `scrapers/output/${repositoryOwner}-${repositoryName}.json`,
        domQueryForContent: 'turbo-frame',
        branch: branchName
    };
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);
    console.log('mainContent: ', mainContent);
    // let pageTitle = await page.$eval('.repository-content h1', (element) => {
    //     return element.textContent.trim()
    // });
    const pageTitle = await getTextContent(page, '#breadcrumb');

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