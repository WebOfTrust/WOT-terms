/*
  Author: Kor Dwarshuis
  Created: 2023-10-04
  Updated: –
  Description: 

    This Node.js script is designed to read all .jsonl files in a specified directory,
    extract URLs from each entry, and then output them to a file. It offers the following functionalities:
    
    1. Reading JSONL Files: The script scans the given directory for .jsonl files and reads them line by line,
        parsing each line as a JSON object.
    
    2. Extracting URLs: The script looks for a "url" field in each JSON object and collects these URLs into an array.
    
    3. Removing Duplicates: It eliminates any duplicate URLs from the array.
    
    4. Outputting to File: The unique URLs are then written to a configurable output file, each on a new line.
    
    Usage:
    
    node <script_name> [input_directory] [output_file]
    
    - input_directory: Optional. Specifies the directory to read .jsonl files from. Defaults to './input'.
    - output_file: Optional. Specifies the name of the output file. Defaults to 'output.html'.
*/

import fs from 'fs';
import path from 'path';

// Function to read JSONL files in a directory
const readJSONLFiles = (dirPath) => {
  const allUrls = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (path.extname(file) === '.jsonl') {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const lines = content.split('\n');

      for (const line of lines) {
        try {
          const json = JSON.parse(line);
          if (json.url) {
            allUrls.push(json.url);
          }
        } catch (e) {
          // Ignore parsing errors for this example
        }
      }
    }
  }
  return allUrls;
};

// Function to remove duplicates
const removeDuplicates = (arr) => [...new Set(arr)];

// Function to create HTML from URLs
const createUrls = (urls) => {
  return urls.join('\n');
};


// Main function
const main = () => {
  const inputDir = process.argv[2] || './input'; // Default to './input' directory
  const outputFile = process.argv[3] || 'output.html'; // Default to 'output.html'

  const allUrls = readJSONLFiles(inputDir);
  const uniqueUrls = removeDuplicates(allUrls);
  const html = createUrls(uniqueUrls);

  fs.writeFileSync(outputFile, html);
  console.log(`HTML list written to ${outputFile}`);
};

main();
