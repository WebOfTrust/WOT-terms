const axios = require('axios');
const url = 'https://essif-lab.github.io/framework/docs/essifLab-glossary';
require('dotenv').config();

axios.get(url)
    .then(response => {
        const html = response.data;
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);
        const terms = [];

        $('h3').each((i, el) => {
            const organisation = 'Essif-Lab';
            const url = 'https://essif-lab.github.io/framework/docs/essifLab-glossary';
            const term = $(el).text().trim();
            console.log('term: ', term);
            const definition = $(el).nextUntil('h3').text().trim();
            terms.push({ organisation, url, term, definition });
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
