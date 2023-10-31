const axios = require('axios');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const { JSDOM } = require('jsdom');
require('dotenv').config();

// CONFIG
const dir = 'fetchExternalContent/fetchToIPContent/download'
const filename = 'toip-html-download.zip';
const fullPath = path.join(dir, filename); // Use path.join for better compatibility

// You have to figure out the URL to the download via the network panel.
// Find it by going to File - Download in the Google Docs menu: 
// https://docs.google.com/document/d/1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM/edit
const toipDownloadHtmlUrl = 'https://docs.google.com/document/export?format=zip&id=1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM&includes_info_params=true&cros_files=false&inspectorResult=%7B%22pc%22%3A83%2C%22lplc%22%3A6%7D&showMarkups=true';
const unzippedFilename = 'ToIPGlossaryWorkspace_PublicVersion_.html';
const generatedJSONfilename = 'terms-definitions-toip.json';
// END CONFIG

async function downloadFile() {
    const response = await axios({
        method: 'GET',
        url: toipDownloadHtmlUrl,
        responseType: 'stream',
    });

    const writer = fs.createWriteStream(fullPath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

function unzipFile(zipFilePath, extractToDir) {
    let zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractToDir, true);
}

async function createJSONfromHTML(extractToDir) {
    // Assuming we have just one HTML file in the directory
    const htmlFilePath = path.join(extractToDir, unzippedFilename);

    // Read the HTML file
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    // Initialize a JSDOM object
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // Initialize an array to hold our terms and definitions
    const termsDefinitions = [];

    // Find all h1 elements
    const h1Elements = document.querySelectorAll('h1');

    // Loop through each h1 element and collect the term and definition
    h1Elements.forEach((h1, index) => {
        let organisation = 'ToIP';
        let term = h1.textContent;
        let definition = '';

        let node = h1.nextSibling;

        // Collect sibling nodes until we reach the next h1 or end of the document
        while (node && (node.nodeName.toLowerCase() !== 'h1')) {
            if (node.outerHTML) {
                // Remove all links from the node
                const links = node.querySelectorAll('a');
                links.forEach(link => {
                    link.parentNode.replaceChild(dom.window.document.createTextNode(link.textContent), link);
                });
                // End: Remove all links from the node
                definition += node.outerHTML;
            }
            node = node.nextSibling;
        }

        termsDefinitions.push({
            organisation: organisation,
            url: 'https://docs.google.com/document/d/1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM/edit',
            term: term,
            definition: definition
        });
    });

    // Convert the array to JSON
    const jsonContent = JSON.stringify(termsDefinitions, null, 2);

    // Write the JSON to a file
    const jsonFilePath = path.join(process.env.GENERATED_JSON_DIR, generatedJSONfilename);
    fs.writeFileSync(jsonFilePath, jsonContent);

    console.log('Terms and definitions have been saved to terms-definitions.json');
}



// Main function to run the tasks sequentially
async function main() {
    try {
        await downloadFile(); // Wait for download to complete

        // The function unzipFile is not asynchronous.It doesn't return a Promise, 
        // and the AdmZip library's extractAllTo method works synchronously. 
        // That means the JavaScript engine will automatically wait for unzipFile 
        // to complete before moving on to the next operation.
        // Therefore, using await is not necessary in this specific instance.
        unzipFile(fullPath, dir); // Then unzip
        createJSONfromHTML(dir);
        console.log('Download and unzip completed');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
