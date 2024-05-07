/**
 * @file This file cleans a JSON file by removing non-printable characters from string values.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-12-07
 */

import fs from 'fs/promises';

/**
 * @module cleanJsonFile
 * @description Cleans a JSON file by removing non-printable characters from string values.
 * @async
 * @param {string} inputFilePath - The path to the input JSON file.
 * @param {string} outputFilePath - The path to write the cleaned JSON data.
 * @returns {Promise<void>} A Promise that resolves when the JSON file is cleaned and written successfully.
 */
async function cleanJsonFile(inputFilePath, outputFilePath) {
    try {
        // Read the JSON file
        const rawData = await fs.readFile(inputFilePath, 'utf8');

        // Parse the JSON data
        let jsonData = JSON.parse(rawData);

        // Function to recursively clean strings in the JSON object
        function cleanStrings(obj) {
            for (const key in obj) {
                if (typeof obj[key] === 'string') {
                    // Replace non-printable characters with an empty string
                    obj[key] = obj[key].replace(/[^\x20-\x7E]/g, '');
                } else if (typeof obj[key] === 'object') {
                    cleanStrings(obj[key]);
                }
            }
        }

        // Clean the JSON data
        cleanStrings(jsonData);

        // Convert the cleaned JSON data back to a string
        const cleanedData = JSON.stringify(jsonData, null, 2);

        // Write the cleaned JSON data to a new file
        await fs.writeFile(outputFilePath, cleanedData, 'utf8');

        console.log(`Cleaned JSON written to ${outputFilePath}`);
    } catch (error) {
        console.error('Error processing JSON file:', error);
    }
}

export default cleanJsonFile;
