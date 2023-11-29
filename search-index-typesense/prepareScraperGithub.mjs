import createInput from './modules/createInput.mjs';
import scrape from './modules/scrape.mjs';
import { config as dotenvConfig } from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';

dotenvConfig();

// Function to create configuration
const createConfig = async (filename) => {
    const parts = filename.split('.');
    const repositoryOwner = parts[2];
    const repositoryName = parts[3];
    const branchName = parts[4];
    const category = parts[5];

    return {
        sitemap: await createInput({
            sourceType: 'localXMLsitemap',
            sourcePath: `${process.env.SEARCH_INDEX_DIR}/sitemaps/${filename}`,
        }),
        siteName: `${repositoryOwner} / ${repositoryName}`,
        source: `${repositoryOwner} / ${repositoryName}`,
        category: category,
        author: `${repositoryOwner}`,
        destinationFile: `${process.env.SEARCH_INDEX_DIR}/search-index-entries/${repositoryOwner}-${repositoryName}.jsonl`,
        branch: branchName
    };
}

export default async function () {
    const sitemapDir = path.join(process.env.SEARCH_INDEX_DIR, '/sitemaps/github');
    try {
        const files = await fs.readdir(sitemapDir);
        for (const filename of files) {
            if (filename.endsWith('.xml')) { // Filter XML files
                const config = await createConfig(filename);
                await scrape(config);
            }
        }
    } catch (err) {
        console.error(`Error reading sitemap directory: ${err.message}`);
    }
};
