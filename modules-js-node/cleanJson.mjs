// File: cleanJson.mjs

import fs from 'fs/promises';

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
