const axios = require('axios');
require('dotenv').config();

// Config
const url = 'https://www.digital.govt.nz/standards-and-guidance/identification-management/identification-terminology/';
const organisation = 'digital.govt.nz';
const jsonFileName = 'terms-definitions-digitalgovtnz.json';

axios.get(url, organisation, jsonFileName)
    .then(response => {
        const html = response.data;
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);
        const terms = [];

        $('tr').each((i, el) => {
            const term = $(el).find('td').first().text().trim();
            const definition = $(el).find('td').last().text().trim();
            terms.push({ organisation, url, term, definition });
        });

        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.env.GENERATED_JSON_DIR, jsonFileName);
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Digital Govt Nz terms saved to ${jsonFileName}`);
            }
        });
    })
    .catch(error => {
        console.log(error);
    });
