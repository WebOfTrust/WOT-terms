#!/usr/bin/env node

/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description:
  
    This script creates the data for the fetchExternalContent.js script.

    This Node.js script performs the following tasks:
    1. Sends an HTTP GET request to a Google Sheets API endpoint (“WOT-terms” Google Sheet, tab “LabelContent”) to fetch JSON-formatted data (see https://sheets.googleapis.com/v4/spreadsheets/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/values/LabelContent?alt=json&key=AIzaSyCA4sOfLTriHKjaQftREYWMnQNokDHf_tM).
       - The URL of the Google Sheet API endpoint is hardcoded within the script.
    2. Receives and accumulates the JSON data in chunks as it is streamed from the Google Sheet API.
    3. Once all data is received, it writes the JSON data to a file named 'externalContentMetaData.json' in the './static/json/' directory.
    
    Configuration:
    - `outputDirJSON`: Directory where the output JSON file will be stored.
    - `outputFileNameJSON`: Name of the output JSON file.
    
    Note: 
    - The script should be run from the root of the project.
    - For information on how to create a JSON endpoint from a Google Sheet, refer to https://stackoverflow.com/a68854199
    
    The code uses the Node.js 'fs', 'path', and 'https' modules to manage directories, write files, and perform HTTPS   GET requests.

*/

const fs = require('fs');
const path = require('path');
const https = require('https');

// Config
const outputDirJSON = './static/json/'; //TODO: find a better place for this file
const outputFileNameJSON = 'externalContentMetaData.json';
// End Config


// How to create JSON endpoint from Google Sheet: https://stackoverflow.com/a/68854199
// const url =
//   'https://sheets.googleapis.com/v4/spreadsheets/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/values/LabelContentTempCopy?alt=json&key=AIzaSyCA4sOfLTriHKjaQftREYWMnQNokDHf_tM';
const url =
  'https://sheets.googleapis.com/v4/spreadsheets/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/values/LabelContent?alt=json&key=AIzaSyCA4sOfLTriHKjaQftREYWMnQNokDHf_tM';

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