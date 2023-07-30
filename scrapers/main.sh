#!/bin/bash

# Start the scraping process.
# IMPORTANT: This assumes that sitemaps are already generated. If not, create additional sitemaps first.
# Run this script from project root: bash scrapers/main.sh  

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Prepare logfile. This means start a new one.
node "$SCRIPT_DIR/prepareLogFiles.mjs"
echo "Preparing logfiles finished"

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
echo "Extracting data finished"

# Filenames to lowercase.
node "$SCRIPT_DIR/renameFilesToLowerCase.mjs" scrapers/sitemaps
echo "Renaming files to lowercase finished"

# Scrape the websites.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished"

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" docs/Overview/indexed-in-KERISSE.md
echo "Sorting and styling index file finished"

# Make collection in Typesense empty.
source "$SCRIPT_DIR/make-collection-empty.sh"
echo "Making collection empty finished"

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished"

# Import overrides into Typesense.
source "$SCRIPT_DIR/overrides.sh"
echo "Importing overrides finished"