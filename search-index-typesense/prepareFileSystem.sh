#!/bin/bash
# Create dirs and files if necessary

### LOG FILES ###
# Set the directory path in a variable
dir_path="search-index-typesense"

# Check if a directory named "log" exists inside the path
if [ -d "${dir_path}/logs" ]; then
  # If the directory exists, delete it and everything inside
  rm -rf "${dir_path}/logs"
fi

# Create a new directory named "logs"
mkdir "${dir_path}/logs"

# Create files with the specified names
touch "${dir_path}/logs/error.log" "${dir_path}/logs/import-into-search-index.log" "${dir_path}/logs/scraped.log" "${dir_path}/logs/succes.log"



### SEARCH-INDEX-ENTRIES ###
# Create search-index-entries if it doesn't exist

# Check if a directory named "search-index-entries" does not exist inside the path
if [ ! -d "${dir_path}/search-index-entries" ]; then
  # If the directory does not exist, create it
  mkdir "${dir_path}/search-index-entries"
fi



### INDEXED-IN-KERISSE.MD ###
# Remove and recreate the indexed-in-KERISSE.md file
dir_path="docs/Overview"
rm -rf "${dir_path}/indexed-in-KERISSE.md"
touch "${dir_path}/indexed-in-KERISSE.md"

