import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const directoryPathInput = process.env.GENERATED_JSON_GLOSSARIES_DIR;
const directoryPathOutput = process.env.GENERATED_JSON_GLOSSARIES_COMBINED_DIR;
const outputFilename = 'all-glossaries.json';

let termsMap = {};

fs.readdir(directoryPathInput, (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(directoryPathInput, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            let jsonData = JSON.parse(fileContent);

            if (!Array.isArray(jsonData)) {
                console.error(`File ${file} does not contain a top-level array. Skipping.`);
                return;
            }

            jsonData.forEach(entry => {
                // Skip the entry if the 'term' is an empty string
                if (entry.term === "") {
                    return;
                }

                if (!termsMap[entry.term]) {
                    termsMap[entry.term] = {
                        term: entry.term,
                        anchor: entry.anchor,
                        definitions: []
                    };
                }
                termsMap[entry.term].definitions.push({
                    organisation: entry.organisation,
                    definition: entry.definition,
                    url: entry.url,
                    anchor: entry.anchor
                });
            });

        }
    });

    const finalArray = Object.values(termsMap);

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

    if (!fs.existsSync(directoryPathOutput)) {
        fs.mkdirSync(directoryPathOutput, { recursive: true });
    }

    fs.writeFileSync(path.join(directoryPathOutput, outputFilename), JSON.stringify(finalArray, null, 2));
    console.log(`Combined glossary file created at ${path.join(directoryPathOutput, outputFilename)}`);
});

export { };
