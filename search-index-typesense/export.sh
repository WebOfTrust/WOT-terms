#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script exports JSONL files from a Typesense collection (typesense.org) and copies them to the downloads dir specified.
# Instructions:
# In order to run this script, you need to have a .env file in the root of the project with the following variables:
#   TYPESENSE_ADMIN_API_KEY
#   TYPESENSE_HOST
#   TYPESENSE_COLLECTION_NAME
#   DOWNLOADS_DIR

# Running locally with .env file
source "$(pwd)/.env"
local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
local_TYPESENSE_HOST="${TYPESENSE_HOST}"
local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"
local_DOWNLOADS_DIR="${DOWNLOADS_DIR}"

download_path=${local_DOWNLOADS_DIR}
timestamp=$(date +%Y-%m-%d_%H-%M-%S)

############## CHECK IF DOWNLOAD DIR EXISTS ##############
if [ ! -d "$download_path" ]; then
  echo "Warning: The download directory does not exist. Cannot export Typesense data."

#   echo "Warning: The download directory does not exist. Creating it now."
#   mkdir -p "$download_path"
fi

############## EXPORT JSONL FILES ##############
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
     "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/export" > "${download_path}${timestamp}-KERISSE-export.jsonl"
