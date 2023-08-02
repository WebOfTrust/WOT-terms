#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description:


############## COPY JSON FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade entries
search_index_entries_manual_dir="$(pwd)/search-index-typesense/search-index-entries-manual"

# Automated entries
search_index_entries_dir="$(pwd)/search-index-typesense/search-index-entries"

# Copy all .json files from the handmade directory to the directory where the automatically created files go, so they will be converted to jsonl as well together with the automated entries
for file in "$search_index_entries_manual_dir"/*.json; do
    cp "$file" "$search_index_entries_dir"
done


############## COPY XML FROM HANDMADE DIR TO AUTOMATED DIR ##############
# Handmade entries
sitemaps_manual_dir="$(pwd)/search-index-typesense/sitemaps-manual"

# Automated entries
sitemaps_dir="$(pwd)/search-index-typesense/sitemaps"


# Copy manually created sitemap files to the directory where the automatically created files go
for file in "$sitemaps_manual_dir"/*.json; do
    cp "$file" "$sitemaps_dir"
done
