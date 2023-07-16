// Import required modules
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const config = require('../docusaurus.config.js'); // Import the Docusaurus configuration file

// Define the directory where the SVG files are located
const directoryPath = path.join(__dirname, "../static/img");

// Define an array of search and replace rules
const replacements = [
    // Remove XML and DOCTYPE declarations
    {
        regex: new RegExp('<\\?xml version="1.0" encoding="UTF-8" standalone="no"\\?>\\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', 'g'),
        replaceWith: ''
    },
    // Replace xmlns:xl= with xmlns:xlink=
    {
        regex: new RegExp('xmlns:xl=', 'g'),
        replaceWith: 'xmlns:xlink='
    },
    // Remove width and height attributes, only of the svg element itself
    {
        regex: new RegExp('width="\\d+(\\.\\d+)?" height="\\d+(\\.\\d+)?"'),
        replaceWith: ''
    },
    // Replace xl:href= with xlink:href=
    {
        regex: new RegExp('xl:href=', 'g'),
        replaceWith: 'xlink:href='
    },
];

// Read the directory containing the SVG files
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        // Log error and exit if there's a problem reading the directory
        return console.log('Unable to scan directory: ' + err);
    }

    // Iterate over each file in the directory
    files.forEach((file) => {
        // Process only SVG files
        if (path.extname(file) === '.svg') {
            const filePath = path.join(directoryPath, file);

            // Read the content of the SVG file

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log('Error reading file: ' + err);
                }

                let result = data;

                for (const rule of replacements) {
                    // For all rules other than 'width' and 'height', apply them unconditionally
                    if (rule.regex.toString() !== '/width="\\d+(\\.\\d+)?" height="\\d+(\\.\\d+)?"/') {
                        result = result.replace(rule.regex, rule.replaceWith);
                    }
                }

                // Load the SVG XML structure into Cheerio
                const $ = cheerio.load(result, { xmlMode: true });

                // Remove 'width' and 'height' attributes from the root SVG element
                if ($('svg').attr('viewBox')) {
                    $('svg').removeAttr('width');
                    $('svg').removeAttr('height');
                }

                // (Rest of your code for modifying <a> and <rect> elements here)

                result = $.html();

                fs.writeFile(filePath, result, 'utf8', (err) => {
                    if (err) {
                        return console.log('Error writing file: ' + err);
                    }
                });
            });

        }
    });
});
