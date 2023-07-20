#!/bin/bash

# File: make-collection-empty.sh
# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script empties a Typesense collection (typesense.org). 


# Find out if the script is running in GitHub Actions or locally
# Via Github actions is not working yet. 
if [[ -n "$GITHUB_ACTIONS" ]]; then
  # Running in GitHub Actions
  local_TYPESENSE_ADMIN_API_KEY="{{ secrets.TYPESENSE_ADMIN_API_KEY }}"
  local_TYPESENSE_HOST="{{ secrets.TYPESENSE_HOST }}"
  local_TYPESENSE_COLLECTION_NAME="{{ secrets.TYPESENSE_COLLECTION_NAME }}"
else
  # Running locally with .env file
  source "$(pwd)/.env"
  local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
  local_TYPESENSE_HOST="${TYPESENSE_HOST}"
  local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"
fi

# Use the `local_TYPESENSE_ADMIN_API_KEY`, `local_TYPESENSE_HOST`, and `local_TYPESENSE_COLLECTION_NAME` variables anywhere in the script as needed

echo "local_TYPESENSE_COLLECTION_NAME:"
echo $local_TYPESENSE_COLLECTION_NAME


############## CONFIGURATION ##############
# URL of the endpoint to empty the collection
# explanation: the filter_by parameter is used to delete all documents that have a content field that is not empty
urlDelete="https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents?filter_by=content:!=''"

############## MAKE COLLECTION EMPTY ##############
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" -X DELETE $urlDelete

