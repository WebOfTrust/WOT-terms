// TODO: This is not a module, so it should be moved to somewhere else. (A module should have an export statement in our definition.)

/**
 * @file This file creates JSON files that serve as the source for the Spec-Up document generator. It takes markdown files as input.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2024-02-12
 */

import fs from 'fs';
import path from 'path';

// Function to remove all files and subdirectories in a directory
const emptyDirectory = (dirPath) => {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach(item => {
            const itemPath = path.join(dirPath, item);
            if (fs.lstatSync(itemPath).isDirectory()) {
                emptyDirectory(itemPath); // Recursively empty subdirectories
                fs.rmdirSync(itemPath); // Remove the subdirectory
            } else {
                fs.unlinkSync(itemPath); // Remove the file
            }
        });
    }
};

// Function to ensure the target directory exists and is emptied
const ensureTargetDirectory = (targetDir) => {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true }); // Create the target directory if it does not exist
    } else {
        emptyDirectory(targetDir); // Empty the target directory if it exists
    }
};


const currentDir = path.dirname(new URL(import.meta.url).pathname);
const sourceDir = path.join(currentDir, '../static/json/external-glosseries/glossaries-to-markdown-from-json');
// Resolve the parent directory
const targetParentDir = path.join(currentDir, '../static/json/external-glosseries/specUpJsonFiles');

const prependToJson = `{
  "specs": [
    {
      "title": "ToIP Template Specification",
      "spec_directory": "./spec",
      "output_path": "./docs",
      "markdown_paths": `;

const appendToJson = `,
      "logo": "https://raw.githubusercontent.com/trustoverip/logo-assets/master/logos/ToIP-Logo-Color-SolidDimensional-Horizontal-LightOnDark.svg",
      "logo_link": "https://github.com/trustoverip/specification-template",
      "katex": true,
      "source": {
        "host": "github",
        "account": "trustoverip",
        "repo": "specification-template"
      }
    }
  ]
}`;




// Ensure the target parent directory exists and is emptied
ensureTargetDirectory(targetParentDir);



// Get a list of directories in the source directory
const directories = fs.readdirSync(sourceDir)
    .filter(filename => fs.lstatSync(path.join(sourceDir, filename)).isDirectory());

console.log('directories: ', directories);

// for every directory in directories create an array with the file names of the markdown files, withouth the .md extension
// and then create a json file in the target directory. The json file will have the same name as the directory and will contain the array of file names
directories.forEach(directory => {
    const files = fs.readdirSync(path.join(sourceDir, directory))
        .filter(filename => filename.endsWith('.md'))
        .map(filename => path.parse(filename).name + ".md");
    // console.log('files: ', files);

    // // if path.join(targetParentDir, `${directory}`) does not exist, create it
    // if (!fs.existsSync(path.join(targetParentDir, `${directory}`))) {
    //     fs.mkdirSync(path.join(targetParentDir, `${directory}`), { recursive: true });
    // } else {
    //     // if it exists, empty it
    //     emptyTargetDirectory(path.join(targetParentDir, `${directory}`));
    // }

    fs.writeFileSync(path.join(targetParentDir, `${directory}.json`), prependToJson + JSON.stringify(files, null, 2) + appendToJson);
    // fs.writeFileSync(`${directory}.json`, JSON.stringify(files, null, 2));

});
