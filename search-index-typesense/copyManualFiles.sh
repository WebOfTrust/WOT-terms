#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: Copy manually created files to the output directories of the automated scripts so they will be included in the final output directories


############## COPY SCRAPED CONTENT (JSON) FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade content entries
search_index_entries_manual_dir="$(pwd)/search-index-typesense/search-index-entries-manual"

# Automated entries
search_index_entries_dir="$(pwd)/search-index-typesense/search-index-entries"

# Copy all .json files from the handmade directory to the output directory
for file in "$search_index_entries_manual_dir"/*.json; do
    cp "$file" "$search_index_entries_dir"
done


############## COPY SITEMAP.XML FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade sitemaps
sitemaps_manual_dir="$(pwd)/search-index-typesense/sitemaps-manual"

# Automated entries
sitemaps_dir="$(pwd)/search-index-typesense/sitemaps"


# Copy manually created sitemap files to the output directory
for file in "$sitemaps_manual_dir"/*.xml; do
    cp "$file" "$sitemaps_dir"
done
