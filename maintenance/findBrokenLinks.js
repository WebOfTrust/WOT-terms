/*
  Author: Kor Dwarshuis
  Created: 2023-09-04
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

// Define excluded subdirectories
const excludedSubdirectories = ['/WOT-terms/slack/'];

console.log("config.outputFilePath: " + config.outputFilePath);
console.log('Configuration loaded.');

let brokenLinks = {};

console.log('Starting link checking...');

const siteChecker = new SiteChecker({
    maxSocketsPerHost: 10, // Increase the number of concurrent checks per host
    // Add other configuration options as needed
}, {
    link: (result) => {
        try {
            // Scenario 1: only internal links
            const baseURL = 'https://weboftrust.github.io';
            const urlObj = new URL(result.url.original, baseURL);
            const baseObj = new URL(result.base.original, baseURL);
            const isInternal = urlObj.hostname === baseObj.hostname;

            // Check if the URL falls within the excluded subdirectories
            const isExcluded = excludedSubdirectories.some(subdir =>
                urlObj.pathname.startsWith(subdir) || baseObj.pathname.startsWith(subdir)
            );

            if (result.broken && isInternal && !isExcluded) {
                const href = urlObj.href;
                if (!brokenLinks[href]) {
                    brokenLinks[href] = [];
                }
                if (!brokenLinks[href].includes(baseObj.href)) {
                    brokenLinks[href].push(baseObj.href);
                }
                console.log(`Broken internal link found: ${urlObj.href}, Found on page: ${baseObj.href}`);
            }

            // // Scenario 2: internal and external links
            // if (result.broken) {
            //     const brokenLink = result.url.original;
            //     const foundOnPage = result.base.original;

            //     // Check if the URL falls within the excluded subdirectories
            //     const isExcluded = excludedSubdirectories.some(subdir =>
            //         new URL(brokenLink).pathname.startsWith(subdir) ||
            //         new URL(foundOnPage).pathname.startsWith(subdir)
            //     );

            //     if (result.broken && !isExcluded) {
            //         if (!brokenLinks[brokenLink]) {
            //             brokenLinks[brokenLink] = [];
            //         }
            //         if (!brokenLinks[brokenLink].includes(foundOnPage)) {
            //             brokenLinks[brokenLink].push(foundOnPage);
            //         }

            //         console.log(`Broken link found: ${brokenLink}, Found on page: ${foundOnPage}`);
            //     }
            // }
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

        const numberOfBrokenLinks = Object.keys(brokenLinks).length;

        // Format the output for the Markdown file
        let dataToWrite = `# Broken Links Report\n\nCreated: ${new Date().toISOString()}\n\n`;
        dataToWrite += `Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;

        let counter = 1; // Initialize counter variable outside the loop

        for (const [brokenLink, foundOnPages] of Object.entries(brokenLinks)) {
            let markdownBrokenLink = `[${brokenLink}](${brokenLink})`;
            let pagesMarkdown = foundOnPages.map(page => `[${page}](${page})`).join('\n');
            pagesMarkdown += '\n\n';
            dataToWrite += `## Broken Link #${counter}:\n${markdownBrokenLink}\n\nFound on Pages:\n${pagesMarkdown}\n`;
            counter++; // Increment counter for the next broken link
        }

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
                body: "Created: " + timestamp + "\n\n" + "Number of broken internal links: " + numberOfBrokenLinks + "\n\n" + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.md'>See full list of broken internal links</a>.",
            };

            // const octokit = new Octokit({
            //     auth: config.githubToken
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