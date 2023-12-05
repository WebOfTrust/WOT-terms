const axios = require('axios');
require('dotenv').config();

console.log('W3C did: Fetching external content...');

// Config
const url = 'https://www.w3.org/TR/did-core';
const organisation = 'W3C (DID)';
const jsonFileName = 'terms-definitions-w3cdid.json';

axios.get(url, organisation, jsonFileName)
    .then(response => {
        const html = response.data;
        const cheerio = require('cheerio');
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


        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, jsonFileName);
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Terms saved to ${jsonFileName}`);
            }
        });
    })
    .catch(error => {
        console.log(error);
    });
