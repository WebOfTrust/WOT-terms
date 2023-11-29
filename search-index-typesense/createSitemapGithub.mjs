/*
  Author: Kor Dwarshuis
  Created: 2023-06-26
  Updated: -
  Description: This script generates a sitemap for a GitHub repository. The sitemap includes all files in the repository. The sitemap is saved in a file named after the repository with the .xml extension. The script requires the repository owner, repository name, and the directory where the sitemap should be saved as arguments. The script uses the GitHub API to fetch the repository tree.

  It then filters the tree to include only the blob-type items (files) and constructs the corresponding URLs. The resulting URLs are used to generate the sitemap.xml file.

  Run it fromt the project-root using the following command:
  node search-index-typesense/createSitemapGithub.mjs <repository-owner> <repository-name> <branch-name> <sitemap-directory>
  
  Example:
  $ node search-index-typesense/createSitemapGithub.mjs WebOfTrust keripy main search-index-typesense/sitemaps

  Example writing to root of project file system:
  $ node search-index-typesense/createSitemapGithub.js WebOfTrust keripy main .
 
  The script will generate the sitemap.xml file in the specified sitemap directory.
*/

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import logger from './modules/logger.mjs';
import { config } from 'dotenv';
config();

const args = process.argv.slice(2);
const repositoryOwner = args[0];
const repositoryName = args[1];
const branchName = args[2];
const sitemapDirectory = process.env.SEARCH_INDEX_DIR + '/sitemaps/gihub';

async function getRepositoryTree() {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/git/trees/${branchName}?recursive=1`, {
      headers: { 'Authorization': `${process.env.GITHUB_AUTH_TOKEN}` }
    })
      ;
    return response.data.tree;
  } catch (error) {
    logger.setLogFile('error.log');
    logger.log('Failed to fetch repository tree' + error);
    return [];
  }
}

async function generateSitemap() {
  const repositoryTree = await getRepositoryTree();

  const fileUrls = repositoryTree
    .filter((item) => item.type === 'blob')
    .map((item) => `https://github.com/${repositoryOwner}/${repositoryName}/blob/${branchName}/${item.path}`);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${fileUrls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
    </urlset>
  `;

  const sitemapFilePath = path.join(sitemapDirectory, `sitemap.githubcom.${repositoryOwner}.${repositoryName}-${branchName}.xml`);
  fs.writeFileSync(sitemapFilePath, sitemapXml);

  logger.setLogFile('success.log');
  logger.log(`${sitemapFilePath} sitemap generated successfully`);

}

generateSitemap();
