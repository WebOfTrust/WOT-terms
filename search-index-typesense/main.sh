#!/bin/bash

# Start the scraping process.
# IMPORTANT: This assumes that sitemaps are already generated. If not, create additional sitemaps first.
# Run this script from project root: bash search-index-typesense/main.sh  

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Prepare logfile. This means start a new one.
node "$SCRIPT_DIR/prepareLogFiles.mjs"
echo "Preparing logfiles finished" | tee -a search-index-typesense/logs/succes.log

# Create sitemaps.
source "$SCRIPT_DIR/createSitemaps.sh"
echo "Creating sitemaps finished" | tee -a search-index-typesense/logs/succes.log

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# Filenames to lowercase.
node "$SCRIPT_DIR/renameFilesToLowerCase.mjs" search-index-typesense/sitemaps
echo "Renaming files to lowercase finished" | tee -a search-index-typesense/logs/succes.log

# Scrape the websites.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" docs/Overview/indexed-in-KERISSE.md
echo "Sorting and styling index file finished" | tee -a search-index-typesense/logs/succes.log

# Make collection in Typesense empty.
source "$SCRIPT_DIR/make-collection-empty.sh"
echo "Making collection empty finished" | tee -a search-index-typesense/logs/succes.log

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished" | tee -a search-index-typesense/logs/succes.log

# Finding ids to urls.
source "$SCRIPT_DIR/urlToID.sh"
echo "Finding ids to urls finished" | tee -a search-index-typesense/logs/succes.log

# Import overrides into Typesense.
source "$SCRIPT_DIR/overrides.sh"
echo "Importing overrides finished" | tee -a search-index-typesense/logs/succes.log