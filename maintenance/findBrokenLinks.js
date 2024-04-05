/*
  Author: Kor Dwarshuis
  Created: 2024-03-26
  Updated: -
  Description: This script checks all links on the WOT-terms site and reports broken links. It also creates a GitHub issue with the broken links.

  Source: https://www.npmjs.com/package/broken-link-checker and https://github.com/stevenvachon/broken-link-checker
  The script should be run from the root of the WOT-terms repository.
    Usage: node findBrokenLinks.js
*/

require('dotenv').config();
const { Octokit } = require('@octokit/core');
const fs = require('fs');
const { SiteChecker } = require('broken-link-checker');
const { URL } = require('url');
const path = require('path');

/**********/
/* CONFIG */

const siteUrl = 'https://weboftrust.github.io/WOT-terms';
const baseUrl = 'https://weboftrust.github.io';

const outputDirectory = path.join(__dirname, '../logs');
const outputFileName = 'brokenLinks.md';
// const excludedSubdirectories = ['/WOT-terms/slack/'];
const githubToken = process.env.GITHUB_ISSUE_AUTH_TOKEN;

/* END CONFIG */
/**************/

const outputFilePath = path.join(outputDirectory, outputFileName);
let brokenLinks = {};
let fileContent = '';

console.log('Start Link checking...');

const siteChecker = new SiteChecker({
    excludeExternalLinks: true,
    maxSocketsPerHost: 10
}, {
    link: (result) => {
        // Log every URL that is checked
        console.log(`Checking link: ${result.url.resolved}`);

        // Additionally, log if a link is broken
        if (result.broken) {

            // brokenLinks.push({
            //     url: result.url.resolved,
            //     brokenReason: result.brokenReason
            // });

            const urlObj = new URL(result.url.original, baseUrl);
            const baseObj = new URL(result.base.original, baseUrl);

            const href = urlObj.href;
            if (!brokenLinks[href]) {
                brokenLinks[href] = [];
            }
            if (!brokenLinks[href].includes(baseObj.href)) {
                brokenLinks[href].push(baseObj.href);
            }
            console.log(`Broken link found: ${result.url.resolved} (${result.brokenReason}). Found on page: ${baseObj.href}`);
        }

    },
    end: () => {
        console.log("Finished checking site.");
        console.log('Checking done! Writing to file...');

        // Get ISO8601 timestamp
        const getISO8601Timestamp = () => {
            const now = new Date();
            return now.toISOString();
        };

        const timestamp = getISO8601Timestamp();
        const numberOfBrokenLinks = Object.keys(brokenLinks).length;
        console.log('numberOfBrokenLinks: ', numberOfBrokenLinks);

        // Format the output for the Markdown file
        fileContent = `# Broken Links Report\n\nCreated: ${timestamp}\n\n`;
        fileContent += `Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;

        let counter = 1; // Initialize counter variable outside the loop

        for (const [brokenLink, foundOnPages] of Object.entries(brokenLinks)) {
            let markdownBrokenLink = `[${brokenLink}](${brokenLink})`;
            let pagesMarkdown = foundOnPages.map(page => `- [${page}](${page})`).join('\n');
            pagesMarkdown += '\n\n';
            fileContent += `## Broken Link #${counter}:\n${markdownBrokenLink}\n\nFound on Pages:\n\n${pagesMarkdown}\n`;
            counter++; // Increment counter for the next broken link
        }

        // Check if directory exists, if not then create it
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory, { recursive: true });
        }

        fs.writeFile(outputFilePath, fileContent, async (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Broken links and count written to ${outputFilePath}`);
            }

            // console.log('Creating GitHub issue...');

            // // TODO: Create GitHub should not be inside the file write callback
            // // Create GitHub issue using Octokit
            // const issueData = {
            //     title: 'Broken Links Report',
            //     body: "Created: " + timestamp + "\n\n" + "Number of broken internal links: " + numberOfBrokenLinks + "\n\n" + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.md'>See full list of broken internal links</a>.",
            // };

            // const octokit = new Octokit({
            //     auth: githubToken
            // });

            // octokit.request('POST /repos/WebOfTrust/WOT-terms/issues', {
            //     owner: 'WebOfTrust',
            //     repo: 'WOT-terms',
            //     title: issueData.title,
            //     body: issueData.body,
            //     // labels: [
            //     //     'bug'
            //     // ],
            //     headers: {
            //         'X-GitHub-Api-Version': '2022-11-28'
            //     }
            // });

            // console.log('GitHub issue created.');
        });
    }
});

siteChecker.enqueue(siteUrl);
