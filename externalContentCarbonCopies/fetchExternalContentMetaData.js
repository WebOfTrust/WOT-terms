#!/usr/bin/env node

// This script should be run from the root of the project

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