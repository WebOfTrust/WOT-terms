#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: Copy manually created files to the output directories of the automated scripts so they will be included in the final output directories

# Import variables from .env file
source .env


############## COPY SCRAPED CONTENT (JSON) FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade content entries
search_index_entries_manual_dir="$(pwd)/${SEARCH_INDEX_DIR}/config/config-search-index-entries-manual"

# Automated entries
search_index_entries_dir="$(pwd)/${SEARCH_INDEX_DIR}/search-index-entries"

# Copy all .json files from the handmade directory to the output directory
for file in "$search_index_entries_manual_dir"/*.{json,jsonl}; do
    if [[ -f "$file" ]]; then  # this check ensures it's a file, in case no .json or .jsonl files are found
        cp "$file" "$search_index_entries_dir"
    fi
done



############## COPY SITEMAP.XML FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade sitemaps
sitemaps_manual_dir="$(pwd)/${SEARCH_INDEX_DIR}/config/config-sitemaps-manual"

# Automated entries
sitemaps_dir="$(pwd)/${SEARCH_INDEX_DIR}/sitemaps"


# Copy manually created sitemap files to the output directory
for file in "$sitemaps_manual_dir"/*.xml; do
    cp "$file" "$sitemaps_dir"
done
