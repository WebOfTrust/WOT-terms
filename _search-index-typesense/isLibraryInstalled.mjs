/**
 * @file This file checks if the required libraries are installed.
 * If not, it logs an error message to the console and to a log file.
 * The libraries that are checked are ImageMagick, jq, and curl.
 * This script uses the child_process module to execute shell commands and the util module to promisify the exec function.
 * The logger module is used to log messages to the console and to a log file.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2024-05-21
 */

import { exec } from 'child_process';
import util from 'util';
import logger from './modules/logger.mjs';

const execPromisified = util.promisify(exec);

async function isLibraryInstalled(libraryName, command = libraryName, expectedOutput = libraryName) {
  console.log("Testing if " + libraryName + " is installed");
  try {
    const { stdout } = await execPromisified(`${command} --version`);
    return stdout.includes(expectedOutput);
  } catch (error) {
    return false;
  }
}

async function isNpmPackageInstalled(packageName) {
  try {
    const { stdout } = await execPromisified(`npm list -g ${packageName}`);
    return !stdout.includes('empty');
  } catch (error) {
    return false;
  }
}

const messages = {
  error: ' is not installed',
  success: ' is installed'
};

// Usage:
if (!await isLibraryInstalled('ImageMagick', 'convert', 'ImageMagick')) {
  console.log('ImageMagick' + messages.error);
  logger.setLogFile('error.log');
  logger.log('ImageMagick' + messages.error);

} else {
  console.log('ImageMagick' + messages.success);
  logger.setLogFile('success.log');
  logger.log('ImageMagick' + messages.success);
}

if (!await isLibraryInstalled('jq')) {
  console.log('jq' + messages.error);
  logger.setLogFile('error.log');
  logger.log('jq' + messages.error);

} else {
  console.log('jq' + messages.success);
  logger.setLogFile('success.log');
  logger.log('jq' + messages.success);
}

if (!await isLibraryInstalled('curl')) {
  console.log('curl' + messages.error);
  logger.setLogFile('error.log');
  logger.log('curl' + messages.error);
} else {
  console.log('curl' + messages.success);
  logger.setLogFile('success.log');
  logger.log('curl' + messages.success);
}

if (!await isNpmPackageInstalled('sitemap-generator-cli')) {
  console.log('sitemap-generator-cli' + messages.error);
  logger.setLogFile('error.log');
  logger.log('sitemap-generator-cli' + messages.error);
} else {
  console.log('sitemap-generator-cli' + messages.success);
  logger.setLogFile('success.log');
  logger.log('sitemap-generator-cli' + messages.success);
}