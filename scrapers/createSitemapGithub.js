/*
  File: createSitemapGithub.js
  Author: Kor Dwarshuis
  Created: 2023-06-26
  Updated: -
  Description: This script generates a sitemap for a GitHub repository. The sitemap includes all files in the repository. The sitemap is saved in a file named after the repository with the .xml extension. The script requires the repository owner, repository name, and the directory where the sitemap should be saved as arguments. The script uses the GitHub API to fetch the repository tree.

  It then filters the tree to include only the blob-type items (files) and constructs the corresponding URLs. The resulting URLs are used to generate the sitemap.xml file.

  Run it using the following command:

  $ node createSitemapGithub.js your-username your-repo-name sitemap-directory

  Make sure to replace 'your-username', 'your-repo-name', and 'sitemap-directory' with the desired values. The sitemap directory can be either an absolute path or a relative path to the current directory.
	
  The script will generate the sitemap.xml file in the specified sitemap directory.
*/

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const repositoryOwner = args[0];
const repositoryName = args[1];
const sitemapDirectory = args[2];

async function getRepositoryTree() {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/git/trees/main?recursive=1`);
        return response.data.tree;
    } catch (error) {
        console.error('Failed to fetch repository tree');
        console.error(error);
        return [];
    }
}

async function generateSitemap() {
    const repositoryTree = await getRepositoryTree();

    const fileUrls = repositoryTree
        .filter((item) => item.type === 'blob')
        .map((item) => `https://github.com/${repositoryOwner}/${repositoryName}/blob/main/${item.path}`);

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${fileUrls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
    </urlset>
  `;

    const sitemapFilePath = path.join(sitemapDirectory, `sitemap-github.com-${repositoryOwner}-${repositoryName}.xml`);
    fs.writeFileSync(sitemapFilePath, sitemapXml);
    console.log(`Sitemap generated successfully at ${sitemapFilePath}`);
}

generateSitemap();
