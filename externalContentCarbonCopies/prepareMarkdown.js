const fs = require('fs');
const path = require('path');

// Directory path
const directoryPath = './docs/CarbonCopies/';

// Import external JSON object
const externalContentMetaData = require('../static/json/externalContentMetaData.json');

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
                let anchor = heading ? heading.toLowerCase().replace(/\s/g, '-') : Math.floor(Math.random() * 10000000000000).toString();
                anchor = anchor
                    .replace(/&/g, '-')
                    .replace(/\//g, '-')
                    .replace(/\\/g, '-')
                    .replace(/</g, '-')
                    .replace(/>/g, '-')
                    .replace(/'/g, '-')
                    .replace(/"/g, '-');
                console.log('dataAttributeMap[anchor]: ', dataAttributeMap[anchor]);
                let dataAttribute = dataAttributeMap[anchor] || '1';

                // Creating Bootstrap Accordion
                // the “\n\n” must be added or the code will fail
                return `               
                \n\n<div className="accordion-item accordion-item-${anchor}" data-level="${dataAttribute}">
                    \n\n<h2 className="accordion-header" id="header${anchor}">
                        \n\n<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-${anchor}" aria-expanded="true" aria-controls="accordeon-${anchor}">
                            ${anchor}, level ${dataAttribute}
                        \n\n</button>
                    \n\n</h2>

                    \n\n<div id="accordeon-${anchor}" className="accordion-collapse collapse" aria-labelledby="header${anchor}" >
                        \n\n<div className="accordion-body">
                            \n\n${section}
                        \n\n</div>
                    \n\n</div>
                \n\n</div>
                `;
            }).join('\n');

            // Wrap all content in a div with the accordion class
            updatedData = `<div className="accordion">` + updatedData + `</div>`;

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
