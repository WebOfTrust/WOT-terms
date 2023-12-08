/**
 * Author: Kor Dwarshuis
 * Created: 2023-12-04
 * Updated: -

 * This script replaces the hyphen character in file names with the minus sign character.
 * When copying files from the wiki, the hyphen character causes issues with the file names.
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

// const directoryPath = path.join(__dirname, `../docs/${process.env.GLOSSARY_DIR}`);
const directoryPath = `docs/${process.env.GLOSSARY_DIR}`;
console.log('directoryPath: ', directoryPath);

// Function to replace the hyphen character in file names
function replaceHyphenInFileNames(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file.includes('\u2010')) {
                const newFileName = file.replace(/\u2010/g, '-');
                fs.renameSync(`${directory}/${file}`, `${directory}/${newFileName}`, err => {
                    if (err) {
                        console.error('Error renaming file:', err);
                    } else {
                        console.log(`Renamed ${file} to ${newFileName}`);
                    }
                });
            }
        });
    });
}

// Replace hyphens in the specified directory
replaceHyphenInFileNames(directoryPath);