import axios from 'axios';
import cleanJsonFile from '../../../modules-js-node/cleanJson.mjs';
import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import { config as configDotEnv } from 'dotenv';
configDotEnv();

const url = 'https://essif-lab.github.io/framework/docs/essifLab-glossary';

console.log('essifLab: Fetching external content...');

axios.get(url)
    .then(response => {
        console.log('External content fetched successfully.');
        const html = response.data;
        const $ = cheerio.load(html);
        const terms = [];

        $('h3').each((i, el) => {
            const organisation = 'Essif-Lab';
            const term = $(el).text().trim();
            const anchor = $(el).attr('id');
            // const definition = $(el).nextUntil('h3').text().trim();
            const definition = $(el).nextUntil('h3').html();
            terms.push({ organisation, url, term, definition, anchor });
        });

        // Loop through all definitions and remove the string '/framework/docs/terms/'
        // from the 'url' property
        terms.forEach(term => {
            // if the link is relative, replace it with the absolute link
            term.definition = term.definition.replace(/href=\"\/framework\/docs\/terms\//g, 'href=\"https://essif-lab.github.io/framework/docs/terms/');


        });

        console.log('Writing terms to file...');

        const filePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, 'terms-definitions-essiflab.json');
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.log(err);
            } else {
                // Clean the JSON file, remove non-printable characters
                cleanJsonFile(filePath, filePath);
                console.log('Essiflab Terms saved');
            }
        });
    })
    .catch(error => {
        console.log('Error fetching external content:', error);
    });
