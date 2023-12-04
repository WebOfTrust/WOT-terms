require('dotenv').config();
const fs = require('fs');

// load INDEX_OVERVIEW_FILE from .env
const indexOverviewFile = process.env.INDEX_OVERVIEW_FILE;
const indexOverviewFileContent = fs.readFileSync(indexOverviewFile, 'utf8');

// Clean up the file content

// Via regex replace %E2%80%90 with -
const regex = /%E2%80%90/gm;
const fixedIndexOverviewFileContent = indexOverviewFileContent.replace(regex, '-');

// Write the fixed content back to the file
fs.writeFileSync(indexOverviewFile, fixedIndexOverviewFileContent, 'utf8');
