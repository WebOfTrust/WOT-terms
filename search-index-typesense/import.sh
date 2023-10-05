#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script imports JSONL files into a Typesense collection (typesense.org).
# Instructions: In order to run this script, you need to have a .env file in the root of the project with the following variables:
#   TYPESENSE_ADMIN_API_KEY
#   TYPESENSE_HOST
#   TYPESENSE_COLLECTION_NAME
# External libraries: jq (https://stedolan.github.io/jq/) and curl (https://curl.se/) are required to run this script.

# Import variables from .env file
source .env

# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh

local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
local_TYPESENSE_HOST="${TYPESENSE_HOST}"
local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"


# Use the `local_TYPESENSE_ADMIN_API_KEY`, `local_TYPESENSE_HOST`, and `local_TYPESENSE_COLLECTION_NAME` variables anywhere in the script as needed

setLogFile "success.log"
log "local_TYPESENSE_COLLECTION_NAME:"
log $local_TYPESENSE_COLLECTION_NAME



############## CONFIGURATION ##############
# URL of the endpoint to empty the collection
# explanation: the filter_by parameter is used to delete all documents that have a content field that is not empty
urlDelete="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents?filter_by=content:!=''"

# URL of the endpoint to import documents
urlImport="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/import?action=create"

# Handmade entries
input_handmade_dir="$(pwd)/${SEARCH_INDEX_DIR}/search-index-entries-manual"
output_handmade_dir="$(pwd)/${SEARCH_INDEX_DIR}/search-index-entries-manual"

# Automated entries
input_dir="$(pwd)/${SEARCH_INDEX_DIR}/${SEARCH_INDEX_ENTRIES_DIR}"
output_dir="$(pwd)/${SEARCH_INDEX_DIR}/${SEARCH_INDEX_ENTRIES_DIR}"

# log files
log_dir="$(pwd)/${SEARCH_INDEX_DIR}/logs"




# ############## COPY FROM HANDMADE DIR TO (MAIN) OUTPUT DIR ##############
# # Copy all .json files from the output-handmade directory to the output directory, so they will be converted to jsonl as well together with the automated entries
# for file in "$output_handmade_dir"/*.json; do
#     cp "$file" "$output_dir"
# done




############## CONVERT JSON TO JSONL ##############

convert_json_to_jsonl() {
  convert_input_dir="$1"
  convert_output_dir="$2"

  # Create the output directory if it doesn't exist
  mkdir -p "$convert_output_dir"

  # Loop through all .json files that should be converted to .jsonl
  for file in "$convert_input_dir"/*.json; do
    # Get the file name without extension
    filename=$(basename "$file" .json)
    # Convert the file to .jsonl format using jq
    jq -c '.[]' "$file" > "$convert_output_dir/$filename.jsonl"
  done
}

convert_json_to_jsonl $input_dir $output_dir


############## IMPORT JSONL FILES ##############
# Iterate over each JSONL file in the directory

setLogFile "success.log"
log "Start importing files: $file"


import_jsonl_files_to_search_index() {
  import_output_dir="$1"
  import_log_dir="$2"

  # Loop through all .jsonl files in the output directory
  for file in "$import_output_dir"/*.jsonl; do
    # Check if the file exists and is a regular file
    if [[ -f "$file" ]]; then
      setLogFile "success.log"
      log "\n\nImporting file: $file"

      # Extract the filename without extension
      filename=$(basename "$file" .jsonl)

      # Execute the cURL command to import the document
      curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
           -X POST \
           -T "$file" \
           --http1.1 \
           "$urlImport" >> "$import_log_dir/import-into-search-index.log"

      setLogFile "success.log"
      log "\n\nImport completed for file: $file"
      log "-------------------------"


    fi
  done
}

# Start importing the files
import_jsonl_files_to_search_index $output_dir $log_dir