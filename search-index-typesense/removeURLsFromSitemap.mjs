/**
 * Author: Kor Dwarshuis
 * Created: 2023
 * Updated: -
 * 
 * This script is designed to filter and remove unwanted URLs from XML sitemaps.
 * It performs several types of filtering based on:
 * - File extensions
 * - Specific file names
 * - Hidden files
 * - Custom regex patterns
 *
 * Required Modules:
 * - fs (File System): To read and write files.
 * - path: To handle and transform file paths.
 * - xml2js: To convert XML data to JavaScript objects and vice versa.
 * - logger: A custom logging module for success and error logs.
 *
 * Global Constants:
 * - sitemapDir: Directory where XML sitemap files are stored.
 * - unwantedExtensions: Array of file extensions to filter out.
 * - unwantedHiddenFiles: Array of hidden files to filter out.
 * - unwantedFileNames: Array of specific file names to filter out.
 * - unwantedPatterns: Array of regex patterns to filter out.
 *
 * Functions:
 * - removeFilesFromSitemap(dir, extensions, fileNames, hiddenFiles, patterns): 
 *   An asynchronous function that reads XML sitemap files, filters unwanted URLs,
 *   and writes the cleaned data back to the sitemap files.
 *
 * Output:
 * - Updates the XML sitemap files by removing URLs that match the unwanted criteria.
 * - Logs success and errors into different log files using the custom logger module.
 */


import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import logger from './modules/logger.mjs';
import { config as configDotEnv } from 'dotenv';
configDotEnv();


// Sitemap directory
const sitemapDir = `${process.env.SEARCH_INDEX_DIR}/${process.env.SEARCH_INDEX_SITEMAPS_DIR}`;

// Array of extensions to filter out
const unwantedExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.bmp',
  '.webm',
  '.mp4',
  '.mov',
  '.avi',
  '.zip',
  '.gitignore',
  '.gitattributes',
  '.gitmodules',
  '.gitkeep',
  '.DS_Store',
  '.git',
  '.editorconfig',
  '.eslintrc',
  '.eslintignore',
  '.flowconfig',
  '.gitpod.yml',
  '.prettierrc',
  '.prettierignore',
  '.stylelintrc',
  '.stylelintignore',
  '.travis.yml',
  '.vscode',
  '.vscodeignore',
  '.history',
  '.idea',
  '.docusaurus',
  '.icns',
  '.otf',
  '.ttf'
];

// Add an array for unwanted hidden files
const unwantedHiddenFiles = [
  '.gitignore',
  '.gitattributes',
  '.gitmodules',
  '.gitkeep',
  '.DS_Store',
  '.coveragerc'
  // ... [Any other hidden files you want to exclude]
];


// Array of specific file names to filter out, examples: 'README.md', 'README'
// README.md will remove all files named README.md but not README
//TODO: test if README will remove all files named README and README.md
const unwantedFileNames = [
  'LICENSE',
  'README.md',
  'node_modules',
  'package.json',
  'package-lock.json',
  '__pycache__',
  'pycache',
  '__init__.py',
  'init.py',
  'README.md',
  'setup.py',
  'requirements.txt',
  'publish.sh',
  'make.bat',
  'Makefile',
  'swagger.yaml',
  'swagger.json',
  'contents.xcworkspacedata',
  'build',
  'project.pbxproj',
  'yarn.lock',
  'target',
  'Cargo.toml',
  'conf.py',
  'index.rst'
];

// Regex pattern to filter out hidden files and certain filenames
// const unwantedPatterns = [/^\./, /\.env\..*/]; 
const unwantedPatterns = [/\.env\..*/];

async function removeFilesFromSitemap(dir, extensions, fileNames, hiddenFiles, patterns) {
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.xml'));

  for (const file of files) {
    const sitemapPath = path.join(dir, file);
    const xmlData = fs.readFileSync(sitemapPath);
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(xmlData);
    const urls = data.urlset.url;

    if (urls && urls.length > 0) {
      // Filter out URLs with certain extensions or filenames
      const filteredUrls = urls.filter(url => {
        let urlString = url.loc[0];
        const parsedUrl = new URL(urlString);
        const parsedPath = path.parse(parsedUrl.pathname);

        // Filter out unwanted extensions
        if (extensions.includes(parsedPath.ext)) {
          logger.setLogFile('success.log');
          logger.log('Url removed from sitemap: ', parsedUrl.href);

          return false;
        }

        // Filter out unwanted hidden files
        if (hiddenFiles.includes(parsedPath.base)) {
          logger.setLogFile('success.log');
          logger.log('Hidden file URL removed from sitemap: ', parsedUrl.href);

          return false;
        }

        // Filter out unwanted filenames
        if (fileNames.includes(parsedPath.base)) {
          logger.setLogFile('success.log');
          logger.log('Url removed from sitemap: ', parsedUrl.href);

          return false;
        }

        // Filter out unwanted patterns
        for (let pattern of patterns) {
          if (pattern.test(parsedPath.base)) {
            logger.setLogFile('success.log');
            logger.log('Url removed from sitemap: ', parsedUrl.href);

            return false;
          }
        }

        // If URL passes all the filters, include it in the result
        return true;
      });
      data.urlset.url = filteredUrls;

      const builder = new xml2js.Builder();
      const newXml = builder.buildObject(data);

      fs.writeFileSync(sitemapPath, newXml);
    }
  }
}

removeFilesFromSitemap(sitemapDir, unwantedExtensions, unwantedFileNames, unwantedHiddenFiles, unwantedPatterns)
  .then(() => {
    logger.setLogFile('success.log');
    logger.log('Removed urls from sitemaps successfully');

  })
  .catch(err => {
    logger.setLogFile('error.log');
    logger.log('Error while removing urls from sitemaps:' + err);
  });
