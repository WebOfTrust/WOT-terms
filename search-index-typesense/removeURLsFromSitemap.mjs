/**
 * Author: Kor Dwarshuis
 * Created: 2023
 * Updated: -
 * 
 * Description: This JavaScript code is designed to remove unwanted URLs 
 * from sitemap.xml files. It uses the Node.js fs module to interact with 
 * the file system, the path module to handle file paths, xml2js to parse 
 * XML data, and a custom logger module for logging.
 *
 * The script defines several arrays to specify the types of URLs to remove:
 *
 * - unwantedExtensions: URLs with these file extensions will be removed.
 * - unwantedHiddenFiles: URLs of these hidden files will be removed.
 * - unwantedFileNames: URLs of these specific files will be removed.
 * - unwantedPatterns: URLs matching these regex patterns will be removed.
 *
 * The removeFilesFromSitemap function is the main function of the script. 
 * It takes a directory and the arrays of unwanted URLs as arguments. 
 * It first finds all XML files in the given directory and its subdirectories. 
 * For each XML file, it reads the file, parses the XML data, and filters out 
 * unwanted URLs based on the given criteria. It then writes the filtered 
 * data back to the XML file.
 *
 * The script logs every URL it removes to a success.log file using the 
 * logger module. If the script encounters any errors, it logs them to an 
 * error.log file.
 *
 * Finally, the script calls removeFilesFromSitemap with the sitemapDir 
 * directory and the arrays of unwanted URLs. It logs a success message 
 * if the function completes successfully, or an error message if it 
 * encounters an error.
 */


import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import logger from './modules/logger.mjs';

// Sitemap directory
const sitemapDir = 'search-index-typesense/sitemaps';

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
  function findXmlFiles(dir, xmlFiles = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        findXmlFiles(fullPath, xmlFiles);
      } else if (file.endsWith('.xml')) {
        xmlFiles.push(fullPath);
      }
    }
    return xmlFiles;
  }

  const xmlFiles = findXmlFiles(dir);

  for (const file of xmlFiles) {
    const xmlData = fs.readFileSync(file);
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

      fs.writeFileSync(file, newXml);
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
