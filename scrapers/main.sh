#!/bin/bash

# Start the scraping process.
# IMPORTANT: This assumes that sitemaps are already generated. If not, create additional sitemaps first.

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Prepare logfile. This means start a new one.
node "$SCRIPT_DIR/prepareLogFiles.mjs"
echo "Preparing logfiles finished"

# Scrape the websites. This can take a lot of time.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished"

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished"