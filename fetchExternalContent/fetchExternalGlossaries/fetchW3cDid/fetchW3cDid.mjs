import axios from 'axios';
import cleanJsonFile from '../../../modules-js-node/cleanJson.mjs';
import dotenv from 'dotenv';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

dotenv.config();

console.log('W3C did: Fetching external content...');

// Config
const url = 'https://www.w3.org/TR/did-core';
const organisation = 'W3C (DID)';
const jsonFileName = 'terms-definitions-w3cdid.json';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const terms = [];

        // find the heading with class "termlist" and then find the first sibling that is a definition list
        const termsList = $('.termlist');
        termsList.find('dt').each((i, el) => {
            const term = $(el).text().trim();
            const anchor = term.replace(/[\s-]+/g, ''); // Remove spaces and dashes from 'term' to create 'anchor'
            const definition = $(el).next('dd').text().trim();
            terms.push({ organisation, url, term, definition, anchor });
        });

        const filePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, jsonFileName);
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.error(err);
            } else {
                // Clean the JSON file, remove non-printable characters
                cleanJsonFile(filePath, filePath);

                console.log(`Terms saved to ${jsonFileName}`);
            }
        });
    })
    .catch(error => {
        console.error(error);
    });
