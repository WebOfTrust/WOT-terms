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

const fs = require('fs');
const path = require('path');

// Configurable input and output paths
const inputDir = './search-index-typesense/search-index-entries'; // Directory containing .jsonl files
const outputDir = './search-index-typesense/logs'; // Directory where the output file will be saved
const outputFilename = 'entry_counts.txt'; // Output filename

// Initialize grand total of lines
let grandTotal = 0;

// Initialize output string
let outputString = '';

// Function to count lines in a single file
const countLinesInFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split(/\r?\n/).length - 1;
    return lines;
};

// Read the directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Could not read the directory. Error:', err);
        return;
    }

    // Filter .jsonl files
    const jsonlFiles = files.filter(file => path.extname(file) === '.jsonl');

    // Loop through each .jsonl file and count lines
    jsonlFiles.forEach((file) => {
        const filePath = path.join(inputDir, file);
        const lineCount = countLinesInFile(filePath);

        // Update the grand total
        grandTotal += lineCount;

        // Update the output string
        outputString += `The file ${file} has ${lineCount} lines.\n`;
    });

    // Append the grand total to the output string
    outputString += `The grand total of lines across all .jsonl files is ${grandTotal}.\n`;

    // Write the output string to a file
    const outputPath = path.join(outputDir, outputFilename);
    fs.writeFile(outputPath, outputString, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            console.log(`Results written to ${outputPath}`);
        }
    });
});
