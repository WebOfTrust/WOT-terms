#!/bin/bash

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# node ./sitemaps-create/createSitemap.js https://www.gleif.org --depth 3

node "$SCRIPT_DIR/prepareLogFiles.mjs"
node "$SCRIPT_DIR/extractData.mjs"

echo "------------"
echo "Extracted data"
echo "------------"


source "$SCRIPT_DIR/import.sh"

echo "------------"
echo "Imported data"
echo "------------"