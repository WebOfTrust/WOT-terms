import fs from 'fs';
import { writeToErrorFile } from './modules/writeToErrorFile.mjs';
import { writeToSuccesFile } from './modules/writeToSuccesFile.mjs';

/**
 * Prepare log files for the next scraping process. 
 * Existing log files are deleted and new ones are created. Some files are also prepared with a header.
 */

fs.writeFile('search-index-typesense/logs/scraped.log', "", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
});
fs.writeFile('search-index-typesense/logs/error.log', "", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        writeToErrorFile('Error writing file:', err);
        return;
    }
});

// Prepare the file that will contain all the pages that are indexed in KERISSE
fs.writeFile('docs/Overview/indexed-in-KERISSE.md', "# All pages that are indexed in KERISSE\n\n", { flag: 'w' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        writeToErrorFile('Error writing file:', err);
        return;
    }
});
