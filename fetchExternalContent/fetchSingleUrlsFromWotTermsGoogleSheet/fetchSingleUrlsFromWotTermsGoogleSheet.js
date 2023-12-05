#!/usr/bin/env node

// This script should be run from the root of the project

// const json2md = require('json2md');
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

// CONFIG
const outputDirJSON = process.env.SEARCH_INDEX_DIR + "/singleUrlsFromWotTermsGoogleSheet";
const outputFileNameJSON = "singleUrlsFromWotTermsGoogleSheet.json";

// How to create JSON endpoint from Google Sheet: https://stackoverflow.com/a/68854199
const url = process.env.GENERIC_SCRAPER_JSON_ENDPOINT;

function writeJSONFile(content) {
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDirJSON)) {
        fs.mkdirSync(outputDirJSON, { recursive: true });
    }

    // Path to the output file
    const filePath = path.join(outputDirJSON, outputFileNameJSON);

    fs.writeFile(
        filePath,
        content,
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('JSON file has been written successfully.');
        }
    );
} // End writeJSONFile

https
    .get(url, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            writeJSONFile(data);
        });
    })
    .on('error', (err) => {
        console.log('Error: ' + err.message);
    });
