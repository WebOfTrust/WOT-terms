/*
  Author: Kor Dwarshuis
  Created: 2023-08-12
  Updated: -
  Description: Get the content of a file from a GitHub repository via the GitHub API.
  Example usage

  getFileContent('WebOfTrust', 'keripy', 'development', 'src/keri/app/connecting.py')
     .then(content => {
         console.log(content);
     })
     .catch(error => {
         console.error(`Failed to fetch file content: ${error.message}`);
     });
*/


import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

export async function getFileContent(owner, repo, branch, path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    const headers = {
        'Authorization': `token ${GITHUB_AUTH_TOKEN}`,
        'Accept': 'application/vnd.github.v3.raw'
    };

    const response = await fetch(url, { headers });

    if (response.status !== 200) {
        throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    return await response.text();
}

