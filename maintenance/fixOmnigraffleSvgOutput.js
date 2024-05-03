/**
 * @file This file fixes Omnigraffle svg output. Without these fixes the Docusaurus page does not render.
 * Environment: NodeJS
 * Usage:
 * $ node maintenance/fixOmnigraffleSvgOutput.js
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-07-16
 */

/*
  Description:    
    The script will scan the '/static/img' directory for SVG files, and for each file it:

    -defines replacements to rectify common OmniGraffle SVG output issues, including the removal of SVG DOCTYPE declaration and XML version tag, and correction of the 'xl:' namespace and 'xl:href' attributes to 'xmlns:xlink' and 'xlink:href' respectively.

    -reads all files in the specified directory (../static/img), and for each '.svg' file, it performs the following:

    -applies the predefined replacement rules

    -checks for 'viewBox' attribute on the SVG element using the 'cheerio' library, and if found, removes the 'width' and 'height' attributes for responsive scaling

    -for each anchor ('a') element, it corrects relative URLs and rearranges rectangle ('rect') elements within the anchor for optimal rendering

    Modified SVG data is then saved back to the file. Error handling is implemented at several stages to address potential issues during directory scanning, file reading, and writing.
*/

console.log("");
console.log("");
console.log("Fixing SVG files...");

const fs = require('fs');
const path = require('path');
const config = require('../docusaurus.config.js');
const cheerio = require('cheerio');

const directoryPath = path.join(__dirname, "../static/img");

const replacements = [
    {
        regex: new RegExp('<\\?xml version="1.0" encoding="UTF-8" standalone="no"\\?>\\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', 'g'),
        replaceWith: ''
    },
    {
        regex: new RegExp('xmlns:xl=', 'g'),
        replaceWith: 'xmlns:xlink='
    },
    {
        regex: new RegExp('xl:href=', 'g'),
        replaceWith: 'xlink:href='
    },
];

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.svg') {
            const filePath = path.join(directoryPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log('Error reading file: ' + err);
                }

                let result = data;

                for (const rule of replacements) {
                    if (rule.regex.toString() !== '/width="\\d+(\\.\\d+)?" height="\\d+(\\.\\d+)?"/') {
                        result = result.replace(rule.regex, rule.replaceWith);
                    }
                }

                const $ = cheerio.load(result, { xmlMode: true });

                if ($('svg').attr('viewBox')) {
                    $('svg').removeAttr('width');
                    $('svg').removeAttr('height');
                }

                $('a').each(function () {
                    const href = $(this).attr('xlink:href');
                    if (href && !href.startsWith('http') && !href.includes(config.baseUrl)) {
                        $(this).attr('xlink:href', config.baseUrl + href);
                    }

                    const a = $(this);
                    const rects = a.find('rect');
                    if (rects.length > 0) {
                        rects.each(function () {
                            a.before($(this).clone()); // clone the rect before moving it
                        });
                        rects.remove(); // remove the original rect elements
                    }
                });

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

console.log("");
console.log("SVG files have been fixed.");
