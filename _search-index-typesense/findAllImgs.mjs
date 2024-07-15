/**
 * Author: Kor Dwarshuis
 * Date: 2024-03-12
 * Description:
 * 
 */

// const fs = require('fs');
// const path = require('pat);

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { URL } from 'url';
import { getImageMetaData } from './modules/getImageMetaData.mjs';

function processJSONLFiles(directory, outputFile) {
    // Object to store unique imgUrl and their count, along with domain mismatch count
    let imgUrlCount = {};
    let domainMismatchCount = {};

    // Read files in the directory
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter files ending with '.jsonl'
        const jsonlFiles = files.filter(file => file.endsWith('.jsonl'));

        // Loop through each JSONL file
        jsonlFiles.forEach(jsonlFile => {
            const filePath = path.join(directory, jsonlFile);

            // Create readline interface
            const rl = readline.createInterface({
                input: fs.createReadStream(filePath),
                crlfDelay: Infinity
            });

            rl.on('line', (line) => {
                try {
                    const jsonObj = JSON.parse(line);
                    if (jsonObj.imgUrl && jsonObj.imgUrl.trim() !== '') {
                        const imgUrl = jsonObj.imgUrl.trim();
                        const url = jsonObj.url.trim();

                        // Increment count for existing imgUrl or initialize count to 1
                        imgUrlCount[imgUrl] = (imgUrlCount[imgUrl] || 0) + 1;

                        // Parse URLs to extract domains
                        const imgUrlDomain = (new URL(imgUrl)).hostname;
                        const urlDomain = (new URL(url)).hostname;

                        // Increment domain mismatch count if domains are different
                        if (imgUrlDomain !== urlDomain) {
                            domainMismatchCount[imgUrl] = (domainMismatchCount[imgUrl] || 0) + 1;
                        }
                    }
                } catch (err) {
                    console.error('Error parsing JSON:', err);
                }
            });

            rl.on('close', () => {
                (async () => {
                    try {
                        const imgUrlArray = await Promise.all(Object.keys(imgUrlCount).map(async imgUrl => {
                            try {
                                const info = await getImageMetaData(imgUrl);
                                console.log(info); // You can remove this line if you don't need to log the info
                                return {
                                    imgUrl,
                                    count: imgUrlCount[imgUrl],
                                    domainMismatchCount: domainMismatchCount[imgUrl] || 0,
                                    meta: info
                                };
                            } catch (error) {
                                console.error(error);
                                return {
                                    imgUrl,
                                    count: imgUrlCount[imgUrl],
                                    domainMismatchCount: domainMismatchCount[imgUrl] || 0,
                                    meta: null
                                };
                            }
                        }));
                        const jsonContent = JSON.stringify(imgUrlArray, null, 4);
                        fs.writeFile(outputFile, jsonContent, (err) => {
                            if (err) {
                                console.error('Error writing file:', err);
                                return;
                            }
                            console.log('Unique imgUrl values with count and domain mismatch count written to file:', outputFile);
                        });
                    } catch (error) {
                        console.error(error);
                    }
                })();


            });
        });
    });
}





// Example usage:
const directory = './search-index-typesense/search-index-entries'; // Specify directory
const outputFile = './static/json/all-images/all-images.json'; // Specify output file

processJSONLFiles(directory, outputFile);

