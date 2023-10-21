#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script imports a JSONL file into a Typesense collection (typesense.org).

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
# URL of the endpoint to import documents
urlImport="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/import?action=create"

# log files
log_dir="$(pwd)/${SEARCH_INDEX_DIR}/logs"


############## IMPORT JSONL FILES ##############
# Iterate over each JSONL file in the directory

setLogFile "success.log"
log "Start importing files: $file"


# Execute the cURL command to import the document
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
      -X POST \
      -T "$(pwd)/${SEARCH_INDEX_DIR}/search-index-restore/restore.jsonl" \
      --http1.1 \
      "$urlImport" >> "$log_dir/import-into-search-index.log"

setLogFile "success.log"
log "\n\nImport completed for file: $file"
log "-------------------------"
