#!/usr/bin/env node

/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description: 

    This Node.js script performs the following tasks:
    1. Sends an HTTP GET request to a Google Sheets API endpoint to fetch JSON-formatted data.
       - The URL of the Google Sheet API endpoint is hardcoded within the script.
    2. Receives and accumulates the JSON data in chunks as it is streamed from the Google Sheet API.
    3. Writes the received JSON data to a file named 'overview.json' in the './static/json/' directory.
    4. Also processes the received JSON data to generate Markdown (MDX) content for an "Overview and Context" page.
       - The Markdown content includes a table with various columns populated by the Google Sheet data.
       - Output is saved to 'overview-and-context.mdx' in the './docs/02_overview/' directory.
   
    Configuration:
    - `outputPathMarkDown`: Name of the MDX output file and directory where the MDX output file will be stored.
    - `outputDirJSON`: Directory where the JSON output file will be stored.
    - `outputFileNameJSON`: Name of the JSON output file.
    
    Note: 
    - The script should be run from the root of the project.
    - For information on how to create a JSON endpoint from a Google Sheet, refer to https://stackoverflow.com/a/68854199
   
    The code uses Node.js built-in 'fs', 'path', and 'https' modules for file management, directory paths, and HTTPS GET   equests.
    The generated Markdown includes HTML elements and is formatted as an MDX file.
*/


// This script should be run from the root of the project

// const json2md = require('json2md');
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

// CONFIG
const outputPathMarkDown = process.env.TERMS_WOT_MANAGE_MARKDOWN;
const outputDirJSON = process.env.TERMS_WOT_MANAGE_JSON_DIR_NAME;
const outputFileNameJSON = process.env.TERMS_WOT_MANAGE_JSON_FILE_NAME;

// How to create JSON endpoint from Google Sheet: https://stackoverflow.com/a/68854199
const url = process.env.TERMS_WOT_MANAGE_JSON_ENDPOINT;

/**
 * Returns the position of a value in the entriesIndex array.
 * @param {Array<string>} content - The content to search in.
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */
function positionInArray(content, value) {
  const entriesIndex = content.values[0];
  for (let i = 0; i < entriesIndex.length; i++) {
    if (entriesIndex[i] === value) return i;
  }
  return -1;
}


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
      let oContent = JSON.parse(data);
      createMarkDownFiles(oContent);
    });
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });

function createMarkDownFiles(content) {
  if (content !== undefined) {

    /**
     * The column names of the list of websites to scrape.
     * @type {Array<string>}
     */
    const entriesIndex = content.values[0];


    // Create separate files
    // content.values.forEach((item, index) => {
    //   // Skip first one, https://stackoverflow.com/a/41283243
    //   if (index < 1) return;
    //   //   item[4] = item[4] || '-';

    //   let finalString = '';
    //   item.forEach((item, index) => {
    //     item = item.trim();

    //     item[index] = item[index] || '-';
    //     finalString += `## ${content.values[0][index]}\n\n${item}\n\n`;
    //   });

    //   fs.writeFile(
    //     // Where to write:
    //     outputDir + item[3] + '.mdx',

    //     // What to write:
    //     // 1: Frontmatter slug and title:
    //     `---\nslug: "${item[3]}"\ntitle: "${item[3]}"\n---\n` +
    //       // 2: Content:
    //       //   '## Key\n\n' +
    //       //   item[0] +
    //       //   '\n\n## Type\n\n' +
    //       //   item[1] +
    //       //   '\n\n## Definition\n\n' +
    //       //   item[4]
    //       finalString,

    //     // When it goes wrong:
    //     function (err) {
    //       if (err) {
    //         return console.log(err);
    //       }
    //     }
    //   );
    // });

    // Everything in one file, in a table:


    let finalStringAll = '';

    // Create title for page
    finalStringAll += `<h1>Overview and context</h1>`;

    // Create table container
    finalStringAll += `<div id='table-container'>`;

    // Create buttons and input
    finalStringAll += `<input className="search margin-vert--md margin-horiz--none padding--sm" placeholder="Search" autoFocus />
    <button className="sort button button--secondary margin--md" data-sort="column0">Sort by Key</button>
    <button className="sort button button--secondary margin--md" data-sort="column1">Sort by Type</button>
    <button className="sort button button--secondary margin--md" data-sort="column8">Sort by Level</button>
    <button className="sort button button--secondary margin--md" data-sort="column12">Sort by Cat_CESR</button>`;
    // End buttons and inputs

    // Create table
    finalStringAll += `<table className='googlesheet'>`;

    // Create table header
    finalStringAll += `<thead>`;
    finalStringAll += `<tr>`;

    content.values[0].forEach((element, index) => {
      finalStringAll += `<th data-columnnr='${index}'>${element}</th>`;
    });

    finalStringAll += `</tr>`;
    finalStringAll += `</thead>`;
    // End table header

    // Create table body
    finalStringAll += `<tbody className='list'>`;

    // Create table rows
    content.values.forEach((item, indexTableRow) => {
      // Skip first one, https://stackoverflow.com/a/41283243
      if (indexTableRow < 1) return;
      //   if (index < 1 || index > 12) return;

      finalStringAll += `<tr data-row='row${indexTableRow}' data-rownr='${indexTableRow}'>`;

      // TODO: table looks wrong:
      // finalStringAll += `<tr data-level='${level}'>`;

      // Create table cells
      item.forEach((item, indexTableCell) => {
        if (indexTableCell > entriesIndex.length) return;
        item = item || '';

        finalStringAll += `<td className='column${indexTableCell}' data-row='row${indexTableRow}' data-rownr='${indexTableRow}' data-column='column${indexTableCell}' data-columnnr='${indexTableCell}'>`;
        if (indexTableCell === positionInArray(content, 'link') || indexTableCell === positionInArray(content, 'Philvid_start')) {
          finalStringAll += `<a target='_blank' rel='noopener' href='${item}'>Link</a>`;
        } else {
          finalStringAll += `${item}`;
        }

        finalStringAll += `</td>`;
      });
      // End table cells

      finalStringAll += `</tr>`;
    });
    // End table rows

    // End table body
    finalStringAll += `</tbody>`;

    // End table
    finalStringAll += `</table>`;

    // End table container
    finalStringAll += `</div>`;

    fs.writeFile(
      outputPathMarkDown,
      finalStringAll,
      // When it goes wrong:
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  }
}

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
