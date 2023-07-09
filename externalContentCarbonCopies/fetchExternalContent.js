/**
 * This script is used to fetch external content from various sources and copy it to the local repo. The script will also clean up the content. This is done to ensure that the content is ready for the build process. The script will also create a JSON file that contains the URLs of the content that was copied to the local repo. This JSON file is used by the build process to create the search index. The script is run as part of the build process. See the "scripts" section in package.json for more details. The script is also run manually when needed. See the "scripts" section in package.json for more details. The script is also run manually when needed. See the "scripts" section in package.json for more details.
 * 
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Config
const inputFileLocation = './static/json/';
const inputFileName = 'externalContentMetaData.json'; // Contains the urls that should be copied to local
const outputFileLocation = './docs/CarbonCopies/'; // Where to copy the files to
// End Config

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputFileLocation)) {
    fs.mkdirSync(outputFileLocation, { recursive: true });
}


// const inputDirPath = path.join(__dirname, '..', inputFileLocation);
// const inputFilePath = path.join(inputDirPath, inputFileName);

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

        const transformedString = inputString.replace(/\//g, "-");
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

readFileAsync(inputFileLocation + inputFileName)
    .then((input) => {
        process(input);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });

