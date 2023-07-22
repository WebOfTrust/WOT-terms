/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description:
  Usage: 
    $ node sortFile.js <fileName>
    Example:
    $ node scrapers / sortFile.mjs docs / Overview / indexed -in -KERISSE.md
*/


import fs from 'fs';

const urlRegex = /(https?:\/\/[^\s]+)/g;

function sortLinesInFile(fileName) {
  // Read the file
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Remove empty lines
    const nonEmptyLines = data.split('\n').filter(line => line.trim() !== '');

    // Sort the non-empty lines alphabetically
    const sortedLines = nonEmptyLines.sort();

    // Wrap and convert URL lines to clickable links
    const wrappedLines = sortedLines.map(line => {
      const isURL = line.match(urlRegex);
      if (isURL) {
        const url = isURL[0];
        const wrappedURL = `<a href="${url}" target="_blank">${url}</a>`;
        return `<li>${wrappedURL}</li>`;
      }
      return `<li>${line}</li>`;
    });

    // Join the wrapped lines into a single string
    const wrappedContent = wrappedLines.join('\n');

    // Wrap the content in <ul> and </ul>
    const finalContent = `<ul>\n${wrappedContent}\n</ul>`;

    // Write the final content back to the file
    fs.writeFile(fileName, finalContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('File sorted and wrapped in HTML successfully!');
    });
  });
}

// Usage: node sortFile.js <fileName>
const fileName = process.argv[2];
if (!fileName) {
  console.error('Please provide a file name as an argument.');
  process.exit(1);
}

sortLinesInFile(fileName);
