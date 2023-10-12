/**
 * Author: Kor Dwarshuis
 * Date: 2023-09-14
 * Description:
 * This Node.js script reads all .jsonl files in a specified directory, counts the
 * number of lines in each file, and calculates the grand total of lines across all files.
 * 
 * Input: Directory path containing .jsonl files (inputDir)
 * Output: Writes the number of lines for each .jsonl file and a grand total to a file (outputFile)
 * 
 * Usage: run the script from the root of the project
 * 
 */

import fs from 'fs/promises';
import path from 'path';

// Configurable input and output paths
const inputDir = './search-index-typesense/search-index-entries'; // Directory containing .jsonl files
const outputDir = './search-index-typesense/logs'; // Directory where the output file will be saved
const outputFilename = 'entry_counts.txt'; // Output filename

// Initialize grand total of lines
let grandTotal = 0;

// Initialize output string
let outputString = '';

// Function to count lines in a single file
const countLinesInFile = async (filePath) => {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split(/\r?\n/).length - 1;
    return lines;
};

// Main function to orchestrate the whole process
const main = async () => {
    try {
        const files = await fs.readdir(inputDir);
        const jsonlFiles = files.filter(file => path.extname(file) === '.jsonl');

        for (const file of jsonlFiles) {
            const filePath = path.join(inputDir, file);
            const lineCount = await countLinesInFile(filePath);

            grandTotal += lineCount;
            outputString += `The file ${file} has ${lineCount} lines.\n`;
        }

        outputString += `The grand total of lines across all .jsonl files is ${grandTotal}.\n`;

        const outputPath = path.join(outputDir, outputFilename);
        await fs.writeFile(outputPath, outputString);

        console.log(`Results written to ${outputPath}`);
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

main();
