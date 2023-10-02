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
const path = require('path');

console.log('Initialization...');


const directory = path.join(__dirname, '../logs');  // Go up one level to get to the root, then into the logs directory
const fileName = 'brokenLinks.md';

// Configuration Section
const config = {
    // outputFilePath: '/logs/brokenLinks.txt',
    outputFilePath: path.join(directory, fileName),
    githubRepo: 'WebOfTrust/WOT-terms',
    githubToken: process.env.GITHUB_ISSUE_AUTH_TOKEN
};
console.log("config.outputFilePath: " + config.outputFilePath);
console.log('Configuration loaded.');

let brokenLinks = [];

console.log('Starting link checking...');

const siteChecker = new SiteChecker({}, {
    link: (result) => {
        // console.log(`Checking link: ${result.url.original} on ${result.base.original}`);
        try {
            // Create fully qualified URLs
            const baseURL = 'https://weboftrust.github.io';
            const urlObj = new URL(result.url.original, baseURL);
            const baseObj = new URL(result.base.original, baseURL);

            const isInternal = urlObj.hostname === baseObj.hostname;

            if (result.broken && isInternal) {
                const brokenInfo = {
                    brokenLink: urlObj.href,
                    foundOnPage: baseObj.href
                };
                brokenLinks.push(brokenInfo);
                console.log(`Broken internal link found: ${urlObj.href}, Found on page: ${baseObj.href}`);
            }
        } catch (e) {
            console.warn(`Skipping invalid URL: ${result.url.original}`);
        }
    },
    end: async () => {
        console.log('Checking done! Writing to file...');

        // Get ISO8601 timestamp
        const getISO8601Timestamp = () => {
            const now = new Date();
            return now.toISOString();
        };

        const timestamp = getISO8601Timestamp();

        const numberOfBrokenLinks = brokenLinks.length;

        // Initialize the Markdown content with a timestamp
        let dataToWrite = `# Broken Links Report\n\nCreated: ${timestamp}\n\n`;

        // Add the total number of broken links found
        dataToWrite += `## Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;

        // Initialize an empty string to hold the Markdown for the list
        let brokenLinksMarkdown = "";

        // Loop through the array of broken links, making each URL clickable in Markdown
        brokenLinksMarkdown += brokenLinks.map(linkInfo => {
            // Convert the broken link and found-on-page URLs into Markdown links
            let markdownBrokenLink = `[${linkInfo.brokenLink}](${linkInfo.brokenLink})`;
            let markdownFoundOnPage = `[${linkInfo.foundOnPage}](${linkInfo.foundOnPage})`;

            // Check if the foundOnPage URL contains the specific string and replace it if so
            let goToSource = '';
            if (linkInfo.foundOnPage.includes('https://weboftrust.github.io/WOT-terms/docs/glossary/')) {
                let markdownFoundOnPageReplaced = markdownFoundOnPage.replace('https://weboftrust.github.io/WOT-terms/docs/glossary/', 'https://github.com/WebOfTrust/WOT-terms/wiki/');
                goToSource = ` , Go to source: ${markdownFoundOnPageReplaced}`;
            }

            // Return the list item for each broken link, including the clickable URLs and the 'Go to source' if applicable
            return `- Broken Link: ${markdownBrokenLink}, Found on Page: ${markdownFoundOnPage}` + (goToSource ? `\n  - ${goToSource}` : '');
        }).join('\n');


        // Append the list to the main Markdown content
        dataToWrite += brokenLinksMarkdown;

        // Now, dataToWrite is a Markdown string where every URL is clickable


        // Check if directory exists, if not then create it
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        fs.writeFile(config.outputFilePath, dataToWrite, async (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Broken links and count written to ${config.outputFilePath}`);
            }

            console.log('Creating GitHub issue...');

            // TODO: Create GitHub should not be inside the file write callback
            // Create GitHub issue using Octokit
            const issueData = {
                title: 'Broken Links Report',
                body: "Created: " + timestamp + "\n\n" + "Number of broken internal links: " + numberOfBrokenLinks + "\n\n" + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.md'>See full list of broken internal links</a>, or see below:\n\n" + dataToWrite
            };

            const octokit = new Octokit({
                auth: config.githubToken
            });

            octokit.request('POST /repos/WebOfTrust/WOT-terms/issues', {
                owner: 'WebOfTrust',
                repo: 'WOT-terms',
                title: issueData.title,
                body: issueData.body,
                // labels: [
                //     'bug'
                // ],
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            console.log('GitHub issue created.');
        });
    }
});

siteChecker.enqueue('https://weboftrust.github.io/WOT-terms/');

console.log('Link checking enqueued.');


// // TEST

// // Check if directory exists, if not then create it
// if (!fs.existsSync(directory)) {
//     fs.mkdirSync(directory, { recursive: true });
// }

// fs.writeFile(config.outputFilePath, "test test test", async (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log(`Broken links and count written to ${config.outputFilePath}`);
//     }

// });