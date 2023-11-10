const axios = require('axios');
require('dotenv').config();

// Config
const url = 'https://www.digital.govt.nz/standards-and-guidance/identification-management/identification-terminology/';
const organisation = 'digital.govt.nz';

axios.get(url, organisation)
    .then(response => {
        const html = response.data;
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);
        const terms = [];

        $('h3').each((i, el) => {
            const term = $(el).text().trim();
            const anchor = $(el).attr('id');
            // const definition = $(el).nextUntil('h3').text().trim();
            const definition = $(el).nextUntil('h3').html();
            terms.push({ organisation, url, term, definition, anchor });
        });

        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.env.GENERATED_JSON_DIR, 'terms-definitions-essiflab.json');
        fs.writeFile(filePath, JSON.stringify(terms), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Essif Lab terms saved to terms-definitions-essiflab.json');
            }
        });
    })
    .catch(error => {
        console.log(error);
    });
