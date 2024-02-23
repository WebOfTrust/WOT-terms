import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import { config } from 'dotenv';
config();

const inputDirJSON = 'docs/' + (process.env.GLOSSARY_DIR || 'default_glossary_dir');
const outputFilePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR || 'default_output_dir', 'terms-definitions-wotterms.json');

async function processFiles() {
    try {
        const files = await fs.readdir(inputDirJSON);

        const termsMap = await Promise.all(files.map(async (file) => {
            if (path.extname(file) === '.md') {
                let term = file.replace('.md', '').replace(/-/g, ' ').replace(/\u2010/g, '-');
                const anchor = term.replace(/ /g, '-');

                const filePath = path.join(inputDirJSON, file);
                const fileContent = await fs.readFile(filePath, 'utf8');

                // transform fileContent to html via marked, also remove all newlines and transform h2, h3, h4 to h4, h5, h6
                const html = marked(fileContent)
                    .replace(/\n/g, '')
                    .replace(/<h4>/g, '<h6>').replace(/<\/h4>/g, '</h6>')
                    .replace(/<h3>/g, '<h5>').replace(/<\/h3>/g, '</h5>')
                    .replace(/<h2>/g, '<h4>').replace(/<\/h2>/g, '</h4>');

                return {
                    organisation: 'WebOfTrust',
                    term: term,
                    url: "https://kerisse.org",
                    anchor: anchor,
                    definition: html
                };
            }
        }));

        // Remove undefined entries (for files that are not '.md')
        const filteredTermsMap = termsMap.filter(Boolean);

        // Sort the termsMap alphabetically based on 'term'
        filteredTermsMap.sort((a, b) => a.term.localeCompare(b.term));

        await fs.writeFile(outputFilePath, JSON.stringify(filteredTermsMap, null, 2));
        console.log(`WotTerms terms saved to ${outputFilePath}`);
    } catch (err) {
        console.error('Error processing files:', err);
    }
}

processFiles();
