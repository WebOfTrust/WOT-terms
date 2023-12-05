const axios = require('axios');
const url = 'https://essif-lab.github.io/framework/docs/essifLab-glossary';
require('dotenv').config();

console.log('essifLab: Fetching external content...');

axios.get(url)
    .then(response => {
        console.log('External content fetched successfully.');
        const html = response.data;
        const cheerio = require('cheerio');
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
            term.definition = term.definition.replace('/framework/docs/', 'https://essif-lab.github.io/framework/docs/');
        });

        console.log('Writing terms to file...');

        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, 'terms-definitions-essiflab.json');
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Terms saved');
            }
        });
    })
    .catch(error => {
        console.log('Error fetching external content:', error);
    });
