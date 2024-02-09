/*
  Author: Kor Dwarshuis
  Created: 2024-02-09
  Updated: -
  Description: 
  This module converts JSON files to markdown files.
  It is used to convert the glossary JSON files to markdown files. 
  The JSON files are located in the static/json/external-glosseries/glossaries
  directory. The markdown files are saved in the 
  static/json/external-glosseries/glossaries-to-markdown-from-json
  directory.

  Run this script from the root of the project:
  $ node modules-js-node/glossaryJsonToMarkdown.mjs
*/

import fs from 'fs';
import path from 'path';

// Function to ensure the target directory is emptied
const emptyTargetDirectory = (targetDir) => {
    if (fs.existsSync(targetDir)) {
        fs.readdirSync(targetDir).forEach(file => {
            const filePath = path.join(targetDir, file);
            fs.unlinkSync(filePath);
        });
    } else {
        fs.mkdirSync(targetDir, { recursive: true });
    }
};

// Resolve the parent directory
const currentDir = path.dirname(new URL(import.meta.url).pathname);
const sourceDir = path.join(currentDir, '../static/json/external-glosseries/glossaries');
const targetParentDir = path.join(currentDir, '../static/json/external-glosseries/glossaries-to-markdown-from-json');

// Get a list of JSON files in the source directory
const jsonFiles = fs.readdirSync(sourceDir)
    .filter(filename => filename.endsWith('.json'));

// Process each JSON file
jsonFiles.forEach(filename => {
    try {
        // Load the JSON file
        fs.promises.readFile(path.join(sourceDir, filename), 'utf-8')
            .then(jsonData => {
                const parsedData = JSON.parse(jsonData);

                // Determine the output directory
                const outputDirName = path.parse(filename).name;
                const outputDir = path.join(targetParentDir, outputDirName);

                // Ensure the output directory exists and is empty
                emptyTargetDirectory(outputDir);

                // Process each object in the JSON array
                parsedData.forEach((item, index) => {
                    // Create markdown content
                    const markdownContent = `### ${item.term}\n\n${item.definition}`;

                    // Write markdown content to file
                    const markdownFilename = `${item.term.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}.md`;
                    const markdownFilePath = path.join(outputDir, markdownFilename);

                    fs.writeFileSync(markdownFilePath, markdownContent, 'utf-8');

                    console.log(`Markdown file generated: ${markdownFilename} in ${outputDir}`);
                });

                console.log(`All markdown files have been generated for ${filename}`);
            })
            .catch(error => {
                console.error(`Error loading or processing file "${filename}":`, error);
            });
    } catch (error) {
        console.error(`Error processing file "${filename}":`, error);
    }
});
