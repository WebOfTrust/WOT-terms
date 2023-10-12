/*
  Author: Kor Dwarshuis
  Created: 2023-08-11
  Updated: -
  Description: This script can be used to edit an XML sitemap file. It can be used to remove all URLs that do not end with .pdf, or to remove all URLs that contain a specific string. The script will create a backup of the original file before editing it. The script is written for Node.js and can be run from the command line using the following command: node XMLsitemapEditor.js
  
  ==> Make sure to update the configuration below first.
*/

const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// Configuration
const mode = 2;  // 1 for .pdf check, 2 for specific string removal
const specificString = "/regulatory-use-of-the-lei/";  // Replace 'example' with the string you want to check for and remove
const inputFilePath = '../search-index-typesense/sitemaps-manual/sitemap-www.gleif.org-pdf.xml';

// Backup original file
const backupFilePath = `${inputFilePath}.backup`;

fs.copyFile(path.resolve(__dirname, inputFilePath), path.resolve(__dirname, backupFilePath), (copyErr) => {
    if (copyErr) throw copyErr;

    console.log(`Backup created at: ${backupFilePath}`);

    // Read the sitemap file
    fs.readFile(path.resolve(__dirname, inputFilePath), (err, data) => {
        if (err) throw err;

        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr) throw parseErr;

            if (result.urlset && result.urlset.url) {
                if (mode === 1) {
                    // Retain only URLs ending with .pdf
                    result.urlset.url = result.urlset.url.filter(urlEntry => {
                        return urlEntry.loc && urlEntry.loc[0].endsWith('.pdf');
                    });
                } else if (mode === 2) {
                    // Remove URLs containing the specific string
                    result.urlset.url = result.urlset.url.filter(urlEntry => {
                        return !(urlEntry.loc && urlEntry.loc[0].includes(specificString));
                    });
                }
            }

            // Convert back to XML
            const builder = new xml2js.Builder();
            const updatedXml = builder.buildObject(result);

            // Save the updated XML back under the original name
            fs.writeFile(path.resolve(__dirname, inputFilePath), updatedXml, writeErr => {
                if (writeErr) throw writeErr;
                console.log(`Updated sitemap saved back to original file: ${inputFilePath}`);
            });
        });
    });
});
