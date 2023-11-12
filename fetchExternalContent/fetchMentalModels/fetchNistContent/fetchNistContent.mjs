import downloadFile from '../../../modules-js-node/downloadFile.mjs';
import unzipFile from '../../../modules-js-node/unzipFile.mjs';
import path from 'path';
import fs from 'fs';
import { config as configDotEnv } from 'dotenv';
configDotEnv();

// CONFIG
const url = 'https://csrc.nist.gov/csrc/media/glossary/glossary-export.zip';
const dir = './fetchExternalContent/fetchMentalModels/fetchNistContent/download'
const filename = 'glossary-export.zip';
const fullPath = path.join(dir, filename); // Use path.join for better compatibility
const overview = './static/json/overview.json';

const sourceJsonFullPath = dir + '/' + 'glossary-export.json'; ``
const filteredJsonFullPath = path.join(process.env.GENERATED_JSON_DIR, 'terms-definitions-nist.json');

// END CONFIG




function filterJson(overviewPath, sourceJsonPath, filteredJsonPath) {
    try {
        // Read and parse the overview JSON
        const overviewData = JSON.parse(fs.readFileSync(overviewPath, 'utf8'));
        const terms = overviewData.values.slice(1).map(row => row[5]);

        // Read and parse the source JSON, with additional error handling for BOM
        let sourceJsonRaw = fs.readFileSync(sourceJsonPath, 'utf8');
        if (sourceJsonRaw.charCodeAt(0) === 0xFEFF) {
            sourceJsonRaw = sourceJsonRaw.slice(1); // Remove BOM
        }
        const sourceJsonData = JSON.parse(sourceJsonRaw);

        // Filter the terms, assign the appropriate 'definition', add 'organisation', rename 'link' to 'url', and add 'anchor'
        const filteredTerms = sourceJsonData.parentTerms.filter(termObj => terms.includes(termObj.term)).map(termObj => {
            if (termObj.definitions && termObj.definitions.length > 0 && termObj.definitions[0].text) {
                termObj.definition = termObj.definitions[0].text;
            } else {
                termObj.definition = "Term found but the definition does not exist yet.";
            }
            termObj.organisation = "Nist";
            if (termObj.link) {
                termObj.url = termObj.link;
                delete termObj.link;
            }
            delete termObj.definitions;
            termObj.anchor = termObj.term.replace(/[\s-]+/g, ''); // Remove spaces and dashes from 'term' to create 'anchor'
            return termObj;
        });

        // Write only the filteredTerms array to the file
        fs.writeFileSync(filteredJsonPath, JSON.stringify(filteredTerms, null, 4));
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Main function to run the tasks sequentially
async function main() {
    try {
        await downloadFile(url, fullPath); // Wait for download to complete

        // The function unzipFile is not asynchronous.It doesn't return a Promise, 
        // and the AdmZip library's extractAllTo method works synchronously. 
        // That means the JavaScript engine will automatically wait for unzipFile 
        // to complete before moving on to the next operation.
        // Therefore, using await is not necessary in this specific instance.
        unzipFile(fullPath, dir); // Then unzip

        // Usage
        filterJson(overview, sourceJsonFullPath, filteredJsonFullPath);

        console.log('Download, unzip and processing completed');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
