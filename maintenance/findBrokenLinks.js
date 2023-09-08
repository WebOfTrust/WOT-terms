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
const fileName = 'brokenLinks.html';

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

        // Initialize the HTML document with necessary headers
        let dataToWrite = "<!DOCTYPE html><html><head><title>Broken Links Report</title></head><body>";

        // Add a timestamp to indicate when the report was created
        dataToWrite += "<h1>Created: " + timestamp + "</h1>";

        // Display the total number of broken links found
        dataToWrite += `<h2>Total Broken Links Found: ${numberOfBrokenLinks}</h2>`;

        // Initialize an empty string to hold the HTML for the unordered list
        let brokenLinksHtml = "<ul>";

        // Loop through the array of broken links, making each URL clickable
        brokenLinksHtml += brokenLinks.map(linkInfo => {
            // Convert the broken link URL into a clickable HTML link
            let clickableBrokenLink = linkInfo.brokenLink.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');

            // Convert the found-on-page URL into a clickable HTML link
            let clickableFoundOnPage = linkInfo.foundOnPage.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');

            // Return the list item for each broken link, including the clickable URLs
            return `<li>Broken Link: ${clickableBrokenLink}, Found on Page: ${clickableFoundOnPage}</li>`;
        }).join('');

        // Close the unordered list tag
        brokenLinksHtml += "</ul>";

        // Append the unordered list to the main HTML content
        dataToWrite += brokenLinksHtml;

        // Close the HTML document
        dataToWrite += "</body></html>";

        // Now, dataToWrite is an HTML string where every URL is clickable and listed as an unordered list


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
                body: "Created: " + timestamp + "\n\n" + numberOfBrokenLinks + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.html'>See full list of broken links</a>.",
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
