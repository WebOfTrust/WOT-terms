import axios from 'axios';
import cleanJsonFile from '../../../modules-js-node/cleanJson.mjs';
import dotenv from 'dotenv';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

dotenv.config();

console.log('ToIP did:webs: Fetching external content...');

// Config
const url = 'https://trustoverip.github.io/tswg-acdc-specification/index.html';
const organisation = 'TSWG (ACDC)';
const jsonFileName = 'terms-definitions-tswg-acdc.json';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const terms = [];

        // 1: Find #terminology section, then 2: the next sibling that is <dl>, then 3: each loop through <dt>
        // const termsList = $('#terms-and-definitions').next('dl');
        const termsList = $('#terms-and-definitions').nextAll('dl').first();
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
