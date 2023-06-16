#!/bin/bash

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create sitemaps. This can take a lot of time.
# node "$SCRIPT_DIR/createSitemap.js" https://www.gleif.org --depth 3

# Prepare logfile. This means start a new one.
node "$SCRIPT_DIR/prepareLogFiles.mjs"
echo "Preparing logfiles finished"

# Scrape the websites. This can take a lot of time.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished"

source "$SCRIPT_DIR/import.sh"
echo "Importing data finished"