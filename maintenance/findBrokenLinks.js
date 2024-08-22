/**
 * @file This file checks all links on the WOT-terms site and reports broken links. It also creates a GitHub issue with the broken links.
 * The script should be run from the root of the WOT-terms repository.
 * Environment: NodeJS
 * Usage: 
 * $ node findBrokenLinks.js
 * @version 1.0.0
 * @since 2023-09-04
 * @see https://www.npmjs.com/package/broken-link-checker
 * @see https://github.com/stevenvachon/broken-link-checker
 */

require('dotenv').config(); // Load environment variables from a .env file into process.env
const { Octokit } = require('@octokit/core'); // GitHub API client for creating issues
const fs = require('fs'); // File system module for reading and writing files
const { SiteChecker } = require('broken-link-checker'); // Library for checking broken links on a website
const { URL } = require('url'); // URL module for parsing and manipulating URLs
const path = require('path'); // Path module for working with file and directory paths

/**********/
/* CONFIG */

const siteUrl = 'https://weboftrust.github.io/WOT-terms'; // The URL of the site to check for broken links
const baseUrl = 'https://weboftrust.github.io'; // Base URL for resolving relative links
const repoName = 'WOT-terms'; // Repository name where the GitHub issue will be created
const filterPath = '/WOT-terms'; // The path to limit link checks to

const outputDirectory = path.join(__dirname, '../logs'); // Directory where the report will be saved
const outputFileName = 'brokenLinks.md'; // Name of the output file for the broken links report
const githubToken = process.env.GITHUB_ISSUE_AUTH_TOKEN; // GitHub token for authentication, loaded from .env file

/* END CONFIG */
/**************/

const outputFilePath = path.join(outputDirectory, outputFileName); // Full path to the output file
let brokenLinks = {}; // Object to store broken links and the pages where they were found
let fileContent = ''; // Variable to store the content of the report file

console.log('Start Link checking...');

// Custom filter function to limit checks to the specific path defined in filterPath
function pathFilter(url) {
    // Ensure we are only checking URLs that match both the base domain and the specific path
    return url.href.startsWith(`${baseUrl}${filterPath}`);
}

const siteChecker = new SiteChecker({
    excludeExternalLinks: true, // Exclude external links (only check internal links)
    maxSocketsPerHost: 10, // Limit the number of concurrent requests to the same host
    filterLevel: 3,  // Use aggressive filtering to apply the custom filter
    filter: pathFilter // Use the custom filter function defined above
}, {
    link: (result) => {
        // Log every URL that is checked
        console.log(`Checking link: ${result.url.resolved}`);

        // If a link is broken, log it and add it to the brokenLinks object
        if (result.broken) {
            const urlObj = new URL(result.url.original, baseUrl); // Resolve the original URL
            const baseObj = new URL(result.base.original, baseUrl); // Resolve the base URL of the page where the link was found

            const href = urlObj.href; // Get the full URL of the broken link
            if (!brokenLinks[href]) {
                brokenLinks[href] = []; // Initialize the array for pages if not already present
            }
            if (!brokenLinks[href].includes(baseObj.href)) {
                brokenLinks[href].push(baseObj.href); // Add the page URL to the list of pages where the broken link was found
            }
            console.log(`Broken link found: ${result.url.resolved} (${result.brokenReason}). Found on page: ${baseObj.href}`);
        }

    },
    end: () => {
        console.log("Finished checking site.");
        console.log('Checking done! Writing to file...');

        const timestamp = new Date().toISOString(); // Get the current time in ISO 8601 format
        const numberOfBrokenLinks = Object.keys(brokenLinks).length; // Count the number of unique broken links
        console.log('numberOfBrokenLinks: ', numberOfBrokenLinks);

        // Start building the content of the Markdown report file
        fileContent = `# Broken Links Report\n\nCreated: ${timestamp}\n\n`;
        fileContent += `Total Broken Links Found: ${numberOfBrokenLinks}\n\n`;

        let counter = 1; // Initialize a counter for numbering the broken links

        // Iterate over the brokenLinks object to add each broken link and the pages where it was found to the report
        for (const [brokenLink, foundOnPages] of Object.entries(brokenLinks)) {
            let markdownBrokenLink = `[${brokenLink}](${brokenLink})`; // Format the broken link as a Markdown link
            let pagesMarkdown = foundOnPages.map(page => `- [${page}](${page})`).join('\n'); // List the pages where the broken link was found
            pagesMarkdown += '\n\n';
            fileContent += `## Broken Link #${counter}:\n${markdownBrokenLink}\n\nFound on Pages:\n\n${pagesMarkdown}\n`;
            counter++; // Increment the counter for the next broken link
        }

        // Ensure the output directory exists, create it if not
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory, { recursive: true });
        }

        // Write the report to a Markdown file
        fs.writeFile(outputFilePath, fileContent, async (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Broken links and count written to ${outputFilePath}`);
            }
        });

        console.log('Creating GitHub issue...');

        // Prepare the data for the GitHub issue
        const issueData = {
            title: 'Broken Links Report',
            body: "Created: " + timestamp + "\n\n" + "Number of broken internal links: " + numberOfBrokenLinks + "\n\n" + "<a href='https://github.com/WebOfTrust/WOT-terms/blob/main/logs/brokenLinks.md'>See full list of broken internal links</a>.",
        };

        const octokit = new Octokit({
            auth: githubToken // Authenticate using the GitHub token
        });

        // Create a new issue in the specified GitHub repository
        octokit.request('POST /repos/WebOfTrust/WOT-terms/issues', {
            owner: 'WebOfTrust',
            repo: repoName,
            title: issueData.title,
            body: issueData.body,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28' // Specify the GitHub API version to use
            }
        });

        console.log('GitHub issue created.');

    }
});

siteChecker.enqueue(siteUrl); // Start checking the site for broken links
