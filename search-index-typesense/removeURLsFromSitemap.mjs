import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { writeToErrorFile } from './writeToErrorFile.mjs';
import { writeToSuccesFile } from './writeToSuccesFile.mjs';

async function removeFilesFromSitemap(sitemapDir, extensions, filenames) {
  const files = fs.readdirSync(sitemapDir).filter(file => file.endsWith('.xml'));


  for (const file of files) {
    const sitemapPath = path.join(sitemapDir, file);
    const xmlData = fs.readFileSync(sitemapPath);
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(xmlData);
    const urls = data.urlset.url;

    if (urls && urls.length > 0) {
      // Filter out URLs with certain extensions or filenames
      const filteredUrls = urls.filter(url => {
        const loc = url.loc[0];
        const ext = loc.substring(loc.lastIndexOf('.'));
        const filename = path.basename(loc).split('.')[0];
        return !extensions.includes(ext) && !filenames.includes(filename);
      });
      data.urlset.url = filteredUrls;

      const builder = new xml2js.Builder();
      const newXml = builder.buildObject(data);

      fs.writeFileSync(sitemapPath, newXml);
    }

  }
}

// Usage
const sitemapDir = 'search-index-typesense/sitemaps';

// Case sensitive
const extensionsToRemove = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.mp4', '.mov', '.avi', '.zip', '.pdf', '.gitignore', '.gitattributes', '.gitmodules', '.gitkeep', '.DS_Store', '.git', '.coveragerc', '.editorconfig', '.eslintrc', '.eslintignore', '.flowconfig', '.gitpod.yml', '.prettierrc', '.prettierignore', '.stylelintrc', '.stylelintignore', '.travis.yml', '.vscode', '.vscodeignore'];


// Case sensitive
const filenamesToRemove = ['LICENSE', 'README', 'node_modules', 'package', 'package-lock', '__pycache__', '__init__'];

removeFilesFromSitemap(sitemapDir, extensionsToRemove, filenamesToRemove)
  .then(() => console.log('Sitemap(s) updated successfully'))
  .catch(err => {
    console.error('Error while updating sitemap:', err);
    writeToErrorFile('Error while updating sitemap:', err);
  });
