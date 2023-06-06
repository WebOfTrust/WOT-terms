#!/bin/bash

# node ./sitemaps-create/createSitemap.js https://www.gleif.org --depth 3

node ./extractData.mjs

echo "------------"
echo "Extracted data"
echo "------------"


source ./import.sh

echo "------------"
echo "Imported data"
echo "------------"