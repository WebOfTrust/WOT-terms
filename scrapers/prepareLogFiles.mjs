import fs from 'fs';

/**
 * Prepare log files for scraping process.
 */

fs.writeFile('scrapers/logs/scraped.log', "", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
});
fs.writeFile('scrapers/logs/error.log', "", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
});

fs.writeFile('docs/overview/Indexed in KERISSE.md', "## All pages that are indexed in KERISSE\n\n", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
});
