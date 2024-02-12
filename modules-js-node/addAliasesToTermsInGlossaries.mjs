/*
  Author: Kor Dwarshuis
  Created: 2024-02-09
  Updated: -
  Description: 
*/

import fs from 'fs';
import path from 'path';

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const sourceDir = path.join(currentDir, '../static/json/external-glosseries/glossaries');

function createAliases(item) {
    const aliases = [];
    let alias;

    // To lower case and replace spaces with dashes
    alias = item.term.toLowerCase().replace(/\s/g, '-');
    aliases.push(alias);

    // Replace spaces with dashes
    alias = item.term.replace(/\s/g, '-');
    aliases.push(alias);

    // Replace dashes with spaces
    alias = item.term.replace(/-/g, ' ');
    aliases.push(alias);

    // Replace spaces with underscores
    alias = item.term.replace(/\s/g, '_');
    aliases.push(alias);

    // Make every first letter of a word uppercase
    alias = item.term.replace(/\b\w/g, l => l.toUpperCase());
    aliases.push(alias);

    // Make every first letter of a word uppercase and replace spaces with dashes
    alias = item.term.replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '-');
    aliases.push(alias);

    // Make the first letter of the first word uppercase and replace spaces with dashes
    alias = item.term.replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '-');
    aliases.push(alias);

    // Make the first letter of the first word uppercase
    alias = item.term.replace(/\b\w/g, l => l.toUpperCase());

    // Remove duplicate items in the array
    let uniqueAliases = [...new Set(aliases)];

    // If item is in the array, remove it
    if (uniqueAliases.includes(item.term)) {
        const index = uniqueAliases.indexOf(item.term);
        uniqueAliases.splice(index, 1);
    }

    return uniqueAliases;
}

// Get a list of directories in the source directory
const files = fs.readdirSync(sourceDir)
    .filter(filename => fs.lstatSync(path.join(sourceDir, filename)).isFile());

// Process each JSON file
files.forEach(filename => {
    try {
        // Load the JSON file
        fs
            .promises
            .readFile(path.join(sourceDir, filename), 'utf-8')
            .then(jsonData => {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData: ', parsedData.length);
                parsedData.forEach((item, index) => {
                    item.aliases = createAliases(item);
                    // console.log('item: ', item);
                    fs.writeFileSync(path
                        .join(sourceDir, filename), JSON.stringify(parsedData, null, 2));

                });
            });
    } catch (err) {
        console.error(`Error processing file: ${filename}`, err);
    }
}
);




