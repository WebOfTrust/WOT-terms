import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import { config as configDotEnv } from 'dotenv';
configDotEnv();

// List of GITHUB sitemap files
const sitemapFiles = [
    'sitemap.githubcom.weboftrust.keri-main.xml'
    // 'sitemap.githubcom.weboftrust.keri-swift-main.xml',
    // 'sitemap.githubcom.weboftrust.keripy-main.xml'
];

// Function to create configuration
const createConfig = async (filename) => {
    const parts = filename.split('.');
    const repositoryOwner = parts[2];
    const repositoryName = parts[3];
    const branchName = parts[4];

    // This way we can distinguish between whitepapers and code
    const category = filename.includes('sitemap.githubcom.smithsamuelm.papers-master.xml') ? 'Whitepapers' : 'Code';

    console.log("destinationFile:");
    console.log(`${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_ENTRIES_DIR}/${repositoryOwner}-${repositoryName}.jsonl`);

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