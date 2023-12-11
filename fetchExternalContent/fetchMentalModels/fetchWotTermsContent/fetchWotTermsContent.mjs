import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { config } from 'dotenv';
config();

const inputDirJSON = 'docs/' + process.env.GLOSSARY_DIR;
const outputFilePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, 'terms-definitions-wotterms.json');

let termsMap = [];

fs.readdir(inputDirJSON, (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
        return;
    }
    console.log('files.length: ', files.length);
    files.forEach(file => {
        if (path.extname(file) === '.md') {
            let term = file.replace('.md', '');
            term = term.replace(/-/g, ' ');
            term = term.replace(/\u2010/g, '-');

            const anchor = term.replace(/ /g, '-');

            const filePath = path.join(inputDirJSON, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');

            // transform fileContent to html via marked
            const html = marked(fileContent);

            let jsonData = JSON.stringify(html);

            termsMap.push({
                organisation: 'WebOfTrust',
                term: term,
                url: "https://kerisse.org",
                anchor: anchor,
                definition: jsonData
            });
        }
    });

    const finalArray = Object.values(termsMap);
    // console.log('finalArray: ', finalArray);

    // Sort the finalArray alphabetically based on 'term'
    finalArray.sort((a, b) => {
        if (a.term < b.term) {
            return -1;
        }
        if (a.term > b.term) {
            return 1;
        }
        return 0;
    });

    // Write the finalArray to a JSON file
    fs.writeFile(outputFilePath, JSON.stringify(finalArray), err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`WotTerms terms saved to ${outputFilePath}`);
        }
    });
});