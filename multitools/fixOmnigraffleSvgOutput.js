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
