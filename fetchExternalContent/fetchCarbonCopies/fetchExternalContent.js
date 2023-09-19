/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description: 

    This script consumes the data produced by the 'fetchExternalContentMetaData.js' script.
    
    This script performs the following tasks:
    1. Reads the 'externalContentMetaData.json' file located in the './static/json/' directory to obtain a list of URLs.
    2. Downloads Markdown files (.md) from the URLs and stores them in the './docs/CarbonCopies/' directory.
    3. Cleans up the downloaded Markdown files by:
       - Replacing Markdown links without URLs.
       - Removing the first line if it contains "---".
       Configuration:
    - `inputFileLocation`: Directory and filename where the JSON file containing URLs is located.
    - `outputFileLocation`: Directory where the downloaded files will be stored.
       The code utilizes Node.js and its 'fs', 'path', and 'https' modules to read files, manage directories, and download content.
    Promises are used for asynchronous operations.

*/


const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

// Config
const inputFileLocation = process.env.CARBON_COPIES_INPUT_DIR;
const outputFileLocation = process.env.CARBON_COPIES_OUTPUT_DIR; // Where to copy the files to
// End Config

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputFileLocation)) {
    fs.mkdirSync(outputFileLocation, { recursive: true });
}

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                const inputData = JSON.parse(data);
                resolve(inputData);
            } catch (err) {
                reject(err);
            }
        });
    });
}

function process(json) {
    // Used for naming the downloaded file: Remove the protocol from the URL, this is done to ensure that the file name is valid (no colons, slashes, etc.)
    function removeProtocol(inputString) {
        if (inputString.startsWith("https://")) {
            inputString = inputString.substring(8);
        } else if (inputString.startsWith("http://")) {
            inputString = inputString.substring(7);
        }
        let transformedString = inputString.replace('raw.githubusercontent.com/', '');
        transformedString = transformedString.replace(/\//g, "-");
        return transformedString;
    }

    json.values.forEach((item, index) => {
        if (item[1] === 'Source') return;// First row is the header
        if (item[1] === '') return;// Skip rows when there is no URL
        if (item[1] === undefined) return; // Skip rows when there is no URL
        const transformedUrl = removeProtocol(item[1]);

        // only copy markdown files
        if (!item[1].endsWith(".md")) { return; }
        downloadFile(item[1], outputFileLocation + transformedUrl);
    });
}

function downloadFile(url, destination) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destination);

        https.get(url, response => {
            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve();
                cleanUpFile(destination);
            });
        }).on('error', error => {
            fs.unlink(destination, () => {
                reject(error);
            });
        });
    });
}

function cleanUpFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        let updatedContent = data;

        // Check and replace Markdown links without URLs
        const regex = /\[([^\]]+)\]\(\)/g;
        updatedContent = updatedContent.replace(regex, '$1');

        // Check and remove first line if it's "---"
        const lines = updatedContent.split('\n');
        if (lines[0] === '---') {
            lines.shift(); // Remove the first line
            updatedContent = lines.join('\n');
        }

        if (data !== updatedContent) {
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
                if (err) {
                    console.error('Error saving file:', err);
                } else {
                    console.log('File updated successfully.');
                }
            });
        } else {
            console.log('No changes required. File remains unchanged.');
        }
    });

}

readFileAsync(inputFileLocation)
    .then((input) => {
        process(input);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });

