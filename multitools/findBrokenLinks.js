const fs = require('fs');
const path = require('path');

// Define the directory and file name
const directory = path.join(__dirname, 'logs');
const fileName = 'brokenLinks.txt';

// Check if the directory exists, if not create it
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

// Define the text to write
const textToWrite = 'This is a test';

// Write to the file
fs.writeFile(path.join(directory, fileName), textToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Successfully wrote to ${fileName}`);
    }
});
