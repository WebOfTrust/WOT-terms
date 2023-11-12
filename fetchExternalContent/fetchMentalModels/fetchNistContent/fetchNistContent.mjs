import downloadFile from '../../../modules-js-node/downloadFile.mjs';
import unzipFile from '../../../modules-js-node/unzipFile.mjs';

// use require to get downloadFile
// const downloadFile = require('../../../modules-js-universal/downloadFile.mjs');
console.log('downloadFile: ', downloadFile);



// import { unzipFile } from './unzipFile.mjs';



// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');
import path from 'path';
// const { JSDOM } = require('jsdom');
// require('dotenv').config();

// CONFIG
const url = 'https://csrc.nist.gov/csrc/media/glossary/glossary-export.zip';
const dir = 'fetchExternalContent/fetchMentalModels/fetchNistContent/download'
const filename = 'glossary-export.zip';
const fullPath = path.join(dir, filename); // Use path.join for better compatibility

// You have to figure out the URL to the download via the network panel.
// Find it by going to File - Download in the Google Docs menu: 
// https://docs.google.com/document/d/1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM/edit
const unzippedFilename = 'glossary-export.json';
const generatedJSONfilename = 'terms-definitions-toip.json';
// END CONFIG





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
        console.log('Download and unzip completed');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
