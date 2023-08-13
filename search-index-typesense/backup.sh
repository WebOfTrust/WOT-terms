#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023-08-11 
# Updated: -
# Description: This script backups three directories from the search-index-typesense directory to a timestamped directory in the KERISSE_BACKUPS_DIR directory. It also empties the original directories. The name of the directory containing the backups is the timestamp of the backup.


# Load environment variables from .env file
source .env

# Check if KERISSE_BACKUPS_DIR is set
if [ -z "$KERISSE_BACKUPS_DIR" ]; then
    echo "KERISSE_BACKUPS_DIR is not set in the .env file."
    exit 1
fi

# Create a human-readable timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# Define the destination backup directory with timestamp
BACKUP_DIR="${KERISSE_BACKUPS_DIR}${TIMESTAMP}"

# Check and create the backup directory
mkdir -p "$BACKUP_DIR"

# List of directories to backup
declare -a dirsToBackup=("logs" "search-index-entries" "sitemaps")

# Base directory
BASE_DIR="search-index-typesense"

for dir in "${dirsToBackup[@]}"; do
    SOURCE_DIR="${BASE_DIR}/${dir}"
    if [ -d "$SOURCE_DIR" ]; then
        # Copy directory to backup location
        cp -r "$SOURCE_DIR" "$BACKUP_DIR"
        
        # Empty the original directory
        rm -r "${SOURCE_DIR:?}"/*   # Using :? to ensure variable is set and not empty to prevent accidental deletion
        
    else
        echo "Warning: Directory $SOURCE_DIR does not exist."
    fi
done

echo "Backup completed to $BACKUP_DIR"
