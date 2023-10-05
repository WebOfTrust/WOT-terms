import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import { config as configDotEnv } from 'dotenv';
configDotEnv();

// List of sitemap files
const sitemapFiles = [
    'sitemap-keria.readthedocs.io.xml',
    'sitemap-keripy.readthedocs.io.xml',
    'sitemap-signifypy.readthedocs.io.xml',
    'sitemap.githubcom.trustoverip.acdc-main.xml',
    'sitemap.githubcom.trustoverip.keri-main.xml',
    'sitemap.githubcom.trustoverip.tss0033-technology-stack-acdc-main.xml',
    'sitemap.githubcom.trustoverip.tswg-acdc-specification-archived-main.xml',
    'sitemap.githubcom.trustoverip.tswg-acdc-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-cesr-proof-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-cesr-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-did-method-webs-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-ipex-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-keri-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-oobi-specification-main.xml',
    'sitemap.githubcom.trustoverip.tswg-ptel-specification-main.xml',
    'sitemap.githubcom.smithsamuelm.papers-master.xml',
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

    // This way we can distinguish between whitepapers and code
    const category = filename.includes('sitemap.githubcom.smithsamuelm.papers-master.xml') ? 'Whitepapers' : 'Code';

    return {
        sitemap: await createInput({
            sourceType: 'localXMLsitemap',
            sourcePath: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_SITEMAPS_DIR}/${filename}`,
        }),
        siteName: `${repositoryOwner} / ${repositoryName}`,
        source: `${repositoryOwner} / ${repositoryName}`,
        category: category,
        author: `${repositoryOwner}`,
        destinationFile: `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_ENTRIES_DIR}/${repositoryOwner}-${repositoryName}.jsonl`,
        branch: branchName
    };
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// No customScrape function needed, since it will not be called in scrape.mjs


export default async function () {
    for (const filename of sitemapFiles) {
        const config = await createConfig(filename);
        await scrape(config);// no customScrape as second argument needed, since it will not be called in scrape.mjs
    }
};