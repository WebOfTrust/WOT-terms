#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023-08-11 
# Updated: -
# Description: This script backups directories related to scraping and indexing in Typesense to a timestamped directory in the KERISSE_BACKUPS_DIR directory. The name of the directory containing the backups is the timestamp of the backup.

# Load environment variables from .env file
source .env

# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh

# Check if KERISSE_BACKUPS_DIR is set
if [ -z "$KERISSE_BACKUPS_DIR" ]; then
    setLogFile "error.log"
    log "KERISSE_BACKUPS_DIR is not set in the .env file."
    exit 1
fi

# Create a human-readable timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# Define the destination backup directory with timestamp
BACKUP_DIR="${KERISSE_BACKUPS_DIR}${TIMESTAMP}"

# Check and create the backup directory
mkdir -p "$BACKUP_DIR"

####################
# BACKUP LOCAL FILES
####################

# List of directories to backup
declare -a dirsToBackup=("${SEARCH_INDEX_DIR}/logs" "${SEARCH_INDEX_DIR}/search-index-entries" "${SEARCH_INDEX_DIR}/sitemaps" "docs/${OVERVIEW_DIR}")

for dir in "${dirsToBackup[@]}"; do
    SOURCE_DIR="${dir}"
    if [ -d "$SOURCE_DIR" ]; then
        # Copy directory to backup location
        cp -r "$SOURCE_DIR" "$BACKUP_DIR"
        
        
    else
        setLogFile "error.log"
        log "Warning: Directory $SOURCE_DIR does not exist."
    fi
done

setLogFile "success.log"
log "Backup completed to $BACKUP_DIR"


####################
# BACKUP TYPESENSE COLLECTION
####################

setLogFile "success.log"
log "Backup completed to $BACKUP_DIR"


# Credentials and settings for Typesense export
local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
local_TYPESENSE_HOST="${TYPESENSE_HOST}"
local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"

# Create directory for Typesense export
mkdir "${BACKUP_DIR}/typesense-export"

# Export Typesense data to JSONL file in the backup directory with timestamp in the filename 
curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
     "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/export" > "${BACKUP_DIR}/typesense-export/${TIMESTAMP}-typesense-export.jsonl"

setLogFile "success.log"
log "Typesense export completed to $BACKUP_DIR"