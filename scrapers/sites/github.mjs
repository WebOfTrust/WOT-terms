import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

// List of sitemap files
const sitemapFiles = [
    'sitemap.githubcom.WebOfTrust.cesride.xml',
    'sitemap.githubcom.WebOfTrust.keri.xml',
    'sitemap.githubcom.WebOfTrust.keria.xml',
    'sitemap.githubcom.WebOfTrust.keripy.xml',
    'sitemap.githubcom.WebOfTrust.signify-ts.xml',
    'sitemap.githubcom.webOfTrust.cardano-backer-main.xml',
    'sitemap.githubcom.webOfTrust.cesrpy-main.xml',
    'sitemap.githubcom.webOfTrust.gcp-ksm-shim-main.xml',
    'sitemap.githubcom.webOfTrust.ietf-did-keri-main.xml',
    'sitemap.githubcom.webOfTrust.kara-main.xml',
    'sitemap.githubcom.webOfTrust.kassh-main.xml',
    'sitemap.githubcom.webOfTrust.keep-main.xml',
    'sitemap.githubcom.webOfTrust.keri-swift-main.xml',
    'sitemap.githubcom.webOfTrust.keride-main.xml',
    'sitemap.githubcom.webOfTrust.keriox-main.xml',
    'sitemap.githubcom.webOfTrust.parside-main.xml',
    'sitemap.githubcom.webOfTrust.saidide-main.xml',
    'sitemap.githubcom.webOfTrust.schema-main.xml',
    'sitemap.githubcom.webOfTrust.scir-main.xml',
    'sitemap.githubcom.webOfTrust.shkr-main.xml',
    'sitemap.githubcom.webOfTrust.signifi-main.xml',
    'sitemap.githubcom.webOfTrust.signifide-main.xml',
    'sitemap.githubcom.webOfTrust.signifypy-main.xml',
    'sitemap.githubcom.webOfTrust.vlei-dev.xml',
    'sitemap.githubcom.webOfTrust.ward-main.xml'
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
        siteName: `repo: ${repositoryOwner} / ${repositoryName}`,
        source: `repo: ${repositoryOwner} / ${repositoryName}`,
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