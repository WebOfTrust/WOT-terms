/*
  Author: Kor Dwarshuis
  Created: 2023-08-12
  Updated: -
  Description: Scrape PDF's using ImageMagick and Tesseract.
*/

import { promisify } from 'util';
import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { convert as callbackConvert } from 'imagemagick';
// import tesseract from 'node-tesseract-ocr';
import Tesseract from 'tesseract.js';
import path from 'path';
import logger from './logger.mjs';
import { config as configDotEnv } from 'dotenv';
configDotEnv();


// Config
const directoryPath = `./${process.env.SEARCH_INDEX_DIR}/temp`;

async function resetDirectory(path) {
    try {
        // Check if directory exists
        await fs.access(path);

        // If it exists, remove it
        await fs.rmdir(path, { recursive: true });
        logger.setLogFile('success.log');
        logger.log('Directory removed');
    } catch (error) {
        // If the error is not because the directory doesn't exist, throw it
        if (error.code !== 'ENOENT') {
            logger.setLogFile('error.log');
            logger.log('Error in resetDirectory: ' + err);

            throw error;
        }
    }

    // Create the directory

    await fs.mkdir(path);
    logger.setLogFile('success.log');
    logger.log('Directory created');
}
async function deleteDirectory(path) {
    try {
        // Check if directory exists
        await fs.access(path);

        // If it exists, remove it
        await fs.rmdir(path, { recursive: true });
        console.log('Directory removed');
    } catch (error) {
        // If the error is not because the directory doesn't exist, throw it
        if (error.code !== 'ENOENT') {
            throw error;
        }
        logger.setLogFile('success.log');
        logger.log('Directory does not exist, no action needed');
    }
}


async function downloadPDF(url, destination) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    await fs.writeFile(destination + "/downloaded.pdf", buffer);
}

const convert = promisify(callbackConvert);

async function convertPDFtoImage(directoryPath) {
    try {
        await convert([
            '-density', '300',
            `${directoryPath}/downloaded.pdf`,
            '-quality', '90',
            `${directoryPath}/page.png`
        ]);
        logger.setLogFile('success.log');
        logger.log('PDF converted to images');

    } catch (err) {
        logger.setLogFile('error.log');
        logger.log('Error during conversion: ' + err);
    }
}


// // Via Tesseract OCR (needs installation of Tesseract OCR)
//
// const config = {
//     lang: "eng",
//     oem: 1,
//     psm: 3,
// }
//
// async function ocrAllImagesInDirectory(directory) {
//     let mainContent = [];
//     try {
//         // 1. Read all files in the directory
//         const files = await fs.readdir(directory);

//         // 2. Filter for PNG files
//         const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

//         // 3. Loop through PNG files and process them
//         const recognizedTexts = [];
//         for (let file of pngFiles) {
//             const imagePath = path.join(directory, file);
//             const text = await tesseract.recognize(imagePath, config);
//             mainContent.push({
//                 content: text,
//                 contentLength: text.length,
//                 tag: "pdf"
//             });
//             console.log(`Recognized text from ${file}:`, text);
//             recognizedTexts.push(text);
//         }

//         // 4. Return the recognized texts
//         return recognizedTexts;

//     } catch (error) {
//         console.error(error.message);
//         return [];
//     }
// }

// Via Tesseract.js (installation via npm install tesseract.js)
async function ocrAllImagesInDirectory(directory) {
    let mainContent = [];

    try {
        // 1. Read all files in the directory
        const files = await fs.readdir(directory);

        // 2. Filter for PNG files
        const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

        // 3. Use Promise.all to wait for all the OCR operations to complete
        const texts = await Promise.all(pngFiles.map(async file => {
            const imagePath = path.join(directory, file);

            try {
                // OCR the image using Tesseract.js
                const { data: { text } } = await Tesseract.recognize(
                    imagePath,
                    'eng',
                    {
                        logger: m => {
                            logger.setLogFile('success.log');
                            logger.log(m);
                        }
                    }
                );

                return {
                    content: text,
                    contentLength: text.length,
                    tag: "pdf"
                };
            } catch (err) {
                console.error('Error:', err);
                logger.setLogFile('error.log');
                logger.log('Error:' + err);

                return null; // return null for failed OCR operations
            }
        }));

        // 4. Filter out any null values and return the texts
        mainContent = texts.filter(text => text !== null);

    } catch (error) {
        console.error(error.message);
        logger.setLogFile('error.log');
        logger.log(error.message);
    }

    return mainContent;
}


export async function processPDF(url) {
    try {

        await resetDirectory(directoryPath);
        await downloadPDF(url, directoryPath);
        await convertPDFtoImage(directoryPath);
        const mainContent = await ocrAllImagesInDirectory(directoryPath);
        let all = {};
        all.mainContent = mainContent;
        deleteDirectory(directoryPath);
        return all;
    } catch (error) {
        logger.setLogFile('error.log');
        logger.log('Error in processing: ' + err);

        throw error;
    }
}
