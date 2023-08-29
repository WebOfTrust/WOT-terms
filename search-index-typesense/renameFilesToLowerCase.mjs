/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description: This script renames all files in a directory to lowercase. It requires the directory path as an argument. The script uses the Node.js fs module to read the directory and rename the files.
*/

import fs from 'fs';
import path from 'path';
import logger from './modules/logger.mjs';
import { writeToErrorFile } from './modules/writeToErrorFile.mjs';
import { writeToSuccesFile } from './modules/writeToSuccesFile.mjs';

function renameFilesToLowerCase(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      writeToErrorFile(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const oldFilePath = path.join(directoryPath, file);
      const newFilePath = path.join(directoryPath, file.toLowerCase());

      fs.rename(oldFilePath, newFilePath, (renameErr) => {
        if (renameErr) {
          console.error(`Error renaming file to lower case: ${renameErr}`);
          writeToErrorFile(`Error renaming file to lower case: ${renameErr}`);
        } else {
          console.log(`${file} has been renamed to lower case to ${file.toLowerCase()}`);
          writeToSuccesFile(`${file} has been renamed to to lower case ${file.toLowerCase()}`);
        }
      });
    });
  });
}

// Usage: Provide the directory path as an argument when running the script
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide the directory path as an argument.');
  writeToErrorFile('Please provide the directory path as an argument.');
} else {
  renameFilesToLowerCase(directoryPath);
}
