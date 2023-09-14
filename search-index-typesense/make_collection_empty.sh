#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script empties a Typesense collection (typesense.org). 

# Logger generates a log file with a timestamp and from which file the message comes from.
source ./search-index-typesense/logger.sh

source "$(pwd)/.env"
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

############## MAKE COLLECTION EMPTY ##############
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" -X DELETE $urlDelete

