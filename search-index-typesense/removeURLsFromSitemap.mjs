import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

async function removeFilesFromSitemap(sitemapDir, extensions) {
  // Get all XML files in the directory
  const files = fs.readdirSync(sitemapDir).filter(file => file.endsWith('.xml'));

  for (const file of files) {
    const sitemapPath = path.join(sitemapDir, file);

    // Read XML file
    const xmlData = fs.readFileSync(sitemapPath);

    // Parse XML to JS Obj
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(xmlData);
    const urls = data.urlset.url;

    // Filter out URLs with certain extensions
    const filteredUrls = urls.filter(url => {
      const loc = url.loc[0];
      const ext = loc.substring(loc.lastIndexOf('.'));
      return !extensions.includes(ext);
    });

    // Rebuild the XML with filtered URLs
    data.urlset.url = filteredUrls;

    const builder = new xml2js.Builder();
    const newXml = builder.buildObject(data);

    // Write back to file
    fs.writeFileSync(sitemapPath, newXml);
  }
}

// Usage
const sitemapDir = 'search-index-typesense/sitemaps';
const extensionsToRemove = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.mp4', '.mov', '.avi', '.zip', '.pdf', '.gitignore', '.gitattributes', '.gitmodules', '.gitkeep', '.DS_Store', '.git', '.coveragerc', '.editorconfig', '.eslintrc', '.eslintignore', '.flowconfig', '.gitpod.yml', '.prettierrc', '.prettierignore', '.stylelintrc', '.stylelintignore', '.travis.yml', '.vscode', '.vscodeignore', ''];

removeFilesFromSitemap(sitemapDir, extensionsToRemove)
  .then(() => console.log('Sitemap(s) updated successfully'))
  .catch(err => console.error('Error while updating sitemap:', err));
