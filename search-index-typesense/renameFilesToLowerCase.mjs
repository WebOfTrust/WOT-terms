/*
  Author: Kor Dwarshuis
  Created: 2023
  Updated: -
  Description: This script renames all files in a directory to lowercase. It requires the directory path as an argument. The script uses the Node.js fs module to read the directory and rename the files.
*/

import fs from 'fs';
import path from 'path';
import logger from './modules/logger.mjs';

function renameFilesToLowerCase(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      logger.setLogFile('error.log');
      logger.log(`Error reading directory: ${err}`);

      return;
    }

    files.forEach((file) => {
      const oldFilePath = path.join(directoryPath, file);
      const newFilePath = path.join(directoryPath, file.toLowerCase());

      fs.rename(oldFilePath, newFilePath, (renameErr) => {
        if (renameErr) {
          logger.setLogFile('error.log');
          logger.log(`Error renaming file to lower case: ${renameErr}`);
        } else {
          logger.setLogFile('success.log');
          logger.log(`${file} has been renamed to lower case`);
        }
      });
    });
  });
}

// Usage: Provide the directory path as an argument when running the script
const directoryPath = process.argv[2];

if (!directoryPath) {
  logger.setLogFile('success.log');
  logger.log('Please provide the directory path as an argument.');

} else {
  renameFilesToLowerCase(directoryPath);
}
