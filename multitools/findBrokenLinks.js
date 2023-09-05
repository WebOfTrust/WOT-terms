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

console.log('Configuration loaded.');

let brokenLinks = [];
let linkCount = 0;  // New variable to keep track of links checked
const maxLinks = 10;  // New variable to set maximum number of links for testing

console.log('Starting link checking...');

const siteChecker = new SiteChecker({}, {
    link: (result) => {
        if (linkCount >= maxLinks) {
            console.log(`Reached test limit of ${maxLinks} links. Stopping.`);
            siteChecker.pause();  // Pauses the link checking
            return;
        }

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

        linkCount++;  // Increment the count of links checked
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
        let dataToWrite = "Created: " + timestamp + "\n\n";
        dataToWrite += `Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;
        let totalBrokenLinks = `Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;
        dataToWrite += brokenLinks.map(linkInfo => {
            return `Broken Link: ${linkInfo.brokenLink}, Found on Page: ${linkInfo.foundOnPage}`;
        }).join('\n');

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
                body: "Created: " + timestamp + "\n\n" + totalBrokenLinks + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.txt'>See full list of broken links</a>.",
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
    }
});

siteChecker.enqueue('https://weboftrust.github.io/WOT-terms/');

console.log('Link checking enqueued.');
