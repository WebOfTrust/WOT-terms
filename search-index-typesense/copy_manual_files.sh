#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: Copy manually created files to the output directories of the automated scripts so they will be included in the final output directories

#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: Improved script for copying files

# Check if .env file exists and source it
if [[ -f .env ]]; then
    source .env
else
    echo "Error: .env file not found."
    exit 1
fi

# Function to copy files from one directory to another
copy_files() {
    local src_dir="$1"
    local dest_dir="$2"
    local file_ext="$3"
    
    if [[ ! -d "$src_dir" ]]; then
        echo "Warning: Source directory '$src_dir' does not exist."
        return
    fi
    
    if [[ ! -d "$dest_dir" ]]; then
        echo "Warning: Destination directory '$dest_dir' does not exist."
        return
    fi
    
    for file in "$src_dir"/*.$file_ext; do
        if [[ -f "$file" ]]; then
            cp "$file" "$dest_dir" || {
                echo "Error: Failed to copy '$file' to '$dest_dir'."
            }
        fi
    done
}

# Copy JSON and JSONL files
search_index_entries_manual_dir="$(pwd)/${SEARCH_INDEX_DIR}/search-index-entries-manual"
search_index_entries_dir="$(pwd)/${SEARCH_INDEX_DIR}/search-index-entries"

copy_files "$search_index_entries_manual_dir" "$search_index_entries_dir" "json"
copy_files "$search_index_entries_manual_dir" "$search_index_entries_dir" "jsonl"

# Copy XML files
sitemaps_manual_dir="$(pwd)/${SEARCH_INDEX_DIR}/sitemaps-manual"
sitemaps_dir="$(pwd)/${SEARCH_INDEX_DIR}/${SEARCH_INDEX_SITEMAPS_DIR}"

copy_files "$sitemaps_manual_dir" "$sitemaps_dir" "xml"
