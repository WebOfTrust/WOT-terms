#!/usr/bin/env node

/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description:

    Markdown to Bootstrap Accordion Converter
    
    This script automates the conversion of Markdown files in the directoryPath directory into Bootstrap accordion format.
    It imports a JSON file named 'externalContentMetaData.json' to create a mapping of anchor tags to 'Level' attributes, which 
    are then used as data attributes in the generated Bootstrap accordions.
    
    Features:
    1. Reads all Markdown (.md) files in the specified directory.
    2. Imports 'Level' attributes from an external JSON file.
    3. Converts all headings in the Markdown files to H2.
    4. Wraps sections under H2 headings in Bootstrap accordion divs, utilizing the imported 'Level' as a data attribute.
    5. Writes the updated content back into each Markdown file.
    
    Dependencies: 
    - Node.js built-in modules: 'fs' for file system operations, 'path' for path manipulations.
    
    Logging:
    Outputs a log message for each successfully updated file.
 */




const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Directory path
const directoryPath = process.env.ANNOTATED_COPIES_OUTPUT_DIR;

// Import external JSON object TODO: fix the way the path is constructed
const externalContentMetaData = require(path.join(__dirname, '../.' + process.env.ANNOTATED_COPIES_INPUT_DIR));


// Create mapping from the imported JSON
let dataAttributeMap = {};
externalContentMetaData.values.slice(1).forEach(row => {
    let anchor = row[5];
    if (anchor) {
        // Remove everything before the last "#"
        anchor = anchor.split("#").pop().toLowerCase().replace(/\s/g, '-');
        dataAttributeMap[anchor] = row[11]; // using 'Level' as the data attribute
    }
});


fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Process all .md files
    files.filter(file => path.extname(file) === '.md').forEach(file => {
        const markdownFilePath = path.join(directoryPath, file);

        fs.readFile(markdownFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Failed to read file ${file}:`, err);
                return;
            }

            // Replace all headings with H2
            let updatedData = data.replace(/^(#{1,6}) (.*$)/gm, '## $2');

            // Wrap H2 sections in divs with data-attributes
            updatedData = updatedData.split(/\n(?=## )/g).map(section => {
                let match = section.match(/## (.*)$/m);
                let heading = match ? match[1] : null;
                let anchor = heading ? heading.toLowerCase() : Math.floor(Math.random() * 10000000000000).toString();
                anchor = anchor
                    .replace(/\s/g, '-')
                    .replace(/&/g, '-')
                    .replace(/\//g, '-')
                    .replace(/\\/g, '-')
                    .replace(/</g, '-')
                    .replace(/>/g, '-')
                    .replace(/\(/g, '-')
                    .replace(/\)/g, '-')
                    .replace(/'/g, '-')
                    .replace(/`/g, '-')
                    .replace(/,/g, '-')
                    .replace(/\./g, '-')
                    .replace(/;/g, '-')
                    .replace(/:/g, '-')
                    .replace(/\?/g, '-')
                    .replace(/\?/g, '-')
                    .replace(/!/g, '-')
                    .replace(/"/g, '-')
                    ;
                let dataAttribute = dataAttributeMap[anchor] || '1';

                // Creating Bootstrap Accordion
                // the “\n\n” must be added or the code will fail
                return `
                    \n\n<div className="accordion-item" data-level="${dataAttribute}">
                        \n\n<h2 className="accordion-header" id="header${anchor}">
                        \n\n<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-${anchor}" aria-expanded="false" aria-controls="accordeon-${anchor}">
                            ${anchor}, level ${dataAttribute}
                        \n\n</button>
                        \n\n</h2>
                        \n\n<div id="accordeon-${anchor}" className="accordion-collapse collapse">
                        \n\n<div className="accordion-body">
                            \n\n${section}
                        \n\n</div>
                        \n\n</div>
                    \n\n</div>
                `;
            }).join('\n');

            // Wrap all content in a div with the accordion className
            updatedData = `<div className="accordion accordion-flush" id="annotated-copies">` + updatedData + `</div>`;

            // Write to the file
            fs.writeFile(markdownFilePath, updatedData, (err) => {
                if (err) {
                    console.error(`Failed to write to file ${file}:`, err);
                    return;
                }

                console.log(`Successfully updated markdown file: ${file}`);
            });
        });
    });
});
