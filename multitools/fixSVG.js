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
                    // Log error and exit if there's a problem reading the file
                    return console.log('Error reading file: ' + err);
                }

                let result = data;

                // Apply each of the replacement rules to the file content
                for (const rule of replacements) {
                    result = result.replace(rule.regex, rule.replaceWith);
                }

                // Load the file content into Cheerio (a library for parsing and manipulating HTML/XML)
                const $ = cheerio.load(result, { xmlMode: true });

                // Iterate over each <a> element in the SVG
                $('a').each(function () {
                    const a = $(this);

                    // Add config.baseUrl to every href that does not start with 'http' and does not already contain config.baseUrl
                    const href = a.attr('xlink:href');
                    if (href && !href.startsWith('http') && !href.includes(config.baseUrl)) {
                        a.attr('xlink:href', config.baseUrl + href);
                    }

                    // Find any <rect> elements within the <a> element
                    const rects = a.find('rect').toArray();

                    // If there are any <rect> elements, move them outside (before) the <a> element
                    if (rects.length > 0) {
                        rects.forEach(rect => {
                            a.before(rect);
                        });
                    }
                });

                // Convert the modified SVG back to a string
                result = $.html();

                // Write the modified SVG back to the file
                fs.writeFile(filePath, result, 'utf8', (err) => {
                    if (err) {
                        // Log error and exit if there's a problem writing the file
                        return console.log('Error writing file: ' + err);
                    }
                });
            });
        }
    });
});
