/**
 * Sitemap Generator Script
 *
 * This script generates a sitemap of a given domain by following the links/URLs.
 * The script crawls the web pages up to a specified depth and creates a sitemap in XML format.
 * The generated sitemap includes URLs that are on the same domain and excludes URLs with specific file extensions.
 *
 * Usage: node createSitemap.js --url <startUrl> [--depth <maxDepth>]
 *   - startUrl: The starting URL from which to generate the sitemap.
 *   - maxDepth (optional): The depth of the search for URLs (default: 2).
 *
 * The sitemap is saved in a file named after the domain with the .xml extension.
 *
 * Required Dependencies: axios, cheerio, url, command-line-args, xmlbuilder2
 *   Install dependencies: npm install axios cheerio url command-line-args xmlbuilder2
 *
 * Note: Make sure to adjust the excludedExtensions array to exclude specific file extensions as needed.
 *
 * Author: Kor Dwarshuis
 * Date: 2023-06-05
 */

import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import url from 'url';
import commandLineArgs from 'command-line-args';
import { create } from 'xmlbuilder2';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration
// const outputDirectory = path.resolve(__dirname, './sitemaps');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDirectory = path.resolve(__dirname, './sitemaps');


async function createSitemap(startUrl, maxDepth) {
    const visited = new Set();
    const sitemap = {};

    const excludedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.mp4', '.mov', '.avi', '.zip', '.pdf']; // Add more extensions if needed

    async function crawl(urlString, depth) {
        console.log('working ', Math.floor(Date.now() / 1000));
        if (depth > maxDepth) {
            return;
        }

        const parsedUrl = new URL(urlString);
        const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}`;

        if (visited.has(urlString)) {
            return;
        }
        visited.add(urlString);

        try {
            const response = await axios.get(urlString);
            const $ = cheerio.load(response.data);
            const links = $('a');

            const urls = new Set();
            links.each((index, element) => {
                const href = $(element).attr('href');
                if (href && href.startsWith('http')) {
                    const parsedLink = new URL(href);
                    if (parsedLink.host === parsedUrl.host && !excludedExtensions.some(ext => parsedLink.pathname.endsWith(ext))) {
                        urls.add(href);
                    }
                } else if (href && href.startsWith('/')) {
                    const absoluteLink = url.resolve(baseUrl, href);
                    if (!excludedExtensions.some(ext => absoluteLink.endsWith(ext))) {
                        urls.add(absoluteLink);
                    }
                }
            });

            sitemap[urlString] = Array.from(urls);

            for (const nextUrl of urls) {
                await crawl(nextUrl, depth + 1);
            }
        } catch (error) {
            console.error(`Failed to fetch URL: ${urlString}`);
        }
    }

    await crawl(startUrl, 1);
    return sitemap;
}

function generateSitemapXml(url, links) {
    const root = create({ version: '1.0' }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

    for (const link of links) {
        root.ele('url').ele('loc').txt(link).up();
    }

    return root.end({ prettyPrint: true });
}

async function main() {
    const optionDefinitions = [
        { name: 'url', type: String, defaultOption: true, description: 'The starting URL' },
        { name: 'depth', type: Number, defaultValue: 2, description: 'The depth of the search (default: 2)' },
    ];
    const options = commandLineArgs(optionDefinitions);

    const sitemap = await createSitemap(options.url, options.depth);

    const domainName = new URL(options.url).hostname;
    const sitemapXml = generateSitemapXml(options.url, Array.from(new Set(Object.values(sitemap).flat())));

    const fileName = `sitemap-${domainName}.xml`;
    // const filePath = `${outputDirectory}/${fileName}`; // Create the complete file path
    const filePath = path.join(outputDirectory, fileName);// Create the complete file path
    fs.writeFileSync(filePath, sitemapXml); // Write the sitemap XML to the specified file path

    console.log(`Sitemap generated and saved to ${filePath}`);
}

main().catch(console.error);
