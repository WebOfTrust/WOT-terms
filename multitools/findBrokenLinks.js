/*
  Author: Kor Dwarshuis
  Created: 2023-09-04
  Updated: -
  Description: This script checks all links on the WOT-terms site and reports broken links. It also creates a GitHub issue with the broken links.
  The script should be run from the root of the WOT-terms repository.
    Usage: node findBrokenLinks.js
*/

require('dotenv').config();
const { Octokit } = require('@octokit/core');
const fs = require('fs');
const { SiteChecker } = require('broken-link-checker');
const { URL } = require('url');

console.log('Initialization...');

// Configuration Section
const config = {
    outputFilePath: '/logs/brokenLinks.txt',
    githubRepo: 'WebOfTrust/WOT-terms',
    githubToken: process.env.GITHUB_ISSUE_AUTH_TOKEN
};

const dataToWrite = "test";

fs.writeFile(config.outputFilePath, dataToWrite, async (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Test written to ${config.outputFilePath}`);
    }

    console.log('Creating GitHub issue...');

    // TODO: Create GitHub should not be inside the file write callback
    // Create GitHub issue using Octokit
    const issueData = {
        title: 'Test',
        body: "Test",
    };

    const octokit = new Octokit({
        auth: config.githubToken
    });

    octokit.request('POST /repos/WebOfTrust/WOT-terms/issues', {
        owner: 'WebOfTrust',
        repo: 'WOT-terms',
        title: issueData.title,
        body: issueData.body,
        labels: [
            'bug'
        ],
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    console.log('GitHub issue created.');
});