/**
 * @file This module exports a function that scrapes data from a list of websites and saves it to a JSONL file.
 * @module scraper-generic
 */

import fs from 'fs';
import path from 'path';
import scrape from './scrape.mjs';
import extractMainContent from './extractMainContent.mjs';

/**
 * The directory where the JSON file containing the list of websites to scrape is located.
 * @type {string}
 */
const inputDirJSON = process.env.SEARCH_INDEX_DIR + "/generic-scraper-sites-info";

/**
 * The name of the JSON file containing the list of websites to scrape.
 * @type {string}
 */
const inputFileNameJSON = "generic-scraper-sites-info.json";

/**
 * The full path of the JSON file containing the list of websites to scrape.
 * @type {string}
 */
const filePathJSON = path.join(inputDirJSON, inputFileNameJSON);

/**
 * The contents of the JSON file containing the list of websites to scrape.
 * @type {string}
 */
const data = fs.readFileSync(filePathJSON, 'utf-8');

/**
 * The parsed JSON object containing the list of websites to scrape.
 * @type {Object}
 */
const dataObj = JSON.parse(data);

/**
 * The column names of the list of websites to scrape.
 * @type {Array<string>}
 */
const entriesIndex = dataObj.values[0];

/**
 * The entries of the list of websites to scrape.
 * @type {Array<Array<string>>}
 */
const entries = dataObj.values.slice(1); // removes the first item in the array

/**
 * Returns the position of a value in the entriesIndex array.
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */
function positionInArray(value) {
    for (let i = 0; i < entriesIndex.length; i++) {
        if (entriesIndex[i] === value) return i;
    }
    return -1;
}

/**
 * Scrapes data from all websites in the list and saves it to a JSONL file.
 * @async
 */
async function scrapeAll() {
    for (let i = 1; i < entries.length; i++) {
        const urlPosition = positionInArray('url');

        const sitemap = {
            "urlset": {
                "url": [{ "loc": [entries[i][urlPosition]] }]
            }
        }

        const config = {
            sitemap: sitemap,
            siteName: entries[i][positionInArray('siteName')],
            source: entries[i][positionInArray('source')],
            category: entries[i][positionInArray('category')],
            author: entries[i][positionInArray('author')],
            destinationFile: 'search-index-typesense/search-index-entries/site-' + i + '-' + entries[i][positionInArray('pageTitle')].replace(/\s+/g, '-') + '.jsonl',
            domQueryForContent: entries[i][positionInArray('querySelector')]
        }

        // Pass additional parameters to customScrape
        const type = entries[i][positionInArray('type')];
        const pageTitle = entries[i][positionInArray('pageTitle')];

        scrape(config, (page, domQueryForContent, pageUrl) => {
            return customScrape(page, domQueryForContent, pageUrl, type, pageTitle);
        });
    }
}

/**
 * Custom scraping function that extracts the main content of a webpage.
 * @async
 * @param {Object} page - The webpage to scrape.
 * @param {string} domQueryForContent - The DOM query selector for the main content of the webpage.
 * @param {string} pageUrl - The URL of the webpage.
 * @returns {Object} - An object containing the main content, type, and page title of the webpage.
 */
async function customScrape(page, domQueryForContent, pageUrl, type, pageTitle) {
    const mainContent = await extractMainContent(page, domQueryForContent);
    let all = {};
    all.mainContent = mainContent;
    all.type = type;
    all.pageTitle = pageTitle;
    return all;
}

/**
 * Exports a function that scrapes data from a list of websites and saves it to a JSONL file.
 * @async
 */
export default async function () {
    scrapeAll();
};