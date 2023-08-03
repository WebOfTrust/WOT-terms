import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { writeToErrorFile } from './modules/writeToErrorFile.mjs';
import { writeToSuccesFile } from './modules/writeToSuccesFile.mjs';


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
  '.pdf',
  '.gitignore',
  '.gitattributes',
  '.gitmodules',
  '.gitkeep',
  '.DS_Store',
  '.git',
  '.coveragerc',
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
  '.docusaurus'
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
  '__init__.py',
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

async function removeFilesFromSitemap(dir, extensions, fileNames, patterns) {
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
          console.log('Url removed from sitemap: ', parsedUrl.href);
          writeToSuccesFile('Url removed from sitemap: ' + parsedUrl.href);
          return false;
        }

        // Filter out unwanted filenames
        if (fileNames.includes(parsedPath.base)) {
          console.log('Url removed from sitemap: ', parsedUrl.href);
          writeToSuccesFile('Url removed from sitemap: ' + parsedUrl.href);
          return false;
        }

        // Filter out unwanted patterns
        for (let pattern of patterns) {
          if (pattern.test(parsedPath.base)) {
            console.log('Url removed from sitemap: ', parsedUrl.href);
            writeToSuccesFile('Url removed from sitemap: ' + parsedUrl.href);
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

removeFilesFromSitemap(sitemapDir, unwantedExtensions, unwantedFileNames, unwantedPatterns)
  .then(() => {
    console.log('Removed urls from sitemaps successfully');
    writeToSuccesFile('Removed urls from sitemaps successfully');
  })
  .catch(err => {
    console.error('Error while removing urls from sitemaps:', err);
    writeToErrorFile('Error while removing urls from sitemaps:' + err);
  });
