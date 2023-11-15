require('dotenv').config(); // If using a .env file
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const projectRoot = process.cwd();
const glossaryDir = process.env.GLOSSARY_DIR || 'default_directory';
const targetDir = path.join(projectRoot, 'docs', glossaryDir);
const outputDir = path.join(projectRoot, 'static', 'json');
const outputFile = path.join(outputDir, 'terms-definitions-wotterms.json');

let allContent = [];

fs.readdir(targetDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (file.endsWith('.md')) {
            fs.readFile(path.join(targetDir, file), 'utf8', (err, data) => {
                if (err) throw err;

                const term = file.replace('.md', '');
                const definition = md.render(data);
                const anchor = term.replace(/[\s-_]+/g, ''); // Remove spaces, dashes, and underscores

                allContent.push({
                    term: term,
                    definition: definition,
                    organisation: "WebOfTrust",
                    url: "https://github.com/WebOfTrust/WOT-terms/wiki",
                    anchor: anchor
                });

                // Write to the JSON file after processing all .md files
                if (allContent.length === files.filter(f => f.endsWith('.md')).length) {
                    fs.writeFile(outputFile, JSON.stringify(allContent), 'utf8', (err) => {
                        if (err) throw err;
                        console.log(`All Markdown content written to ${outputFile}`);
                    });
                }
            });
        }
    });
});
