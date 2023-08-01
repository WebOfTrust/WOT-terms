#!/bin/bash

# Set the directory path in a variable
dir_path="search-index-typesense"

# Check if a directory named "log" exists inside the path
if [ -d "${dir_path}/logs" ]; then
  # If the directory exists, delete it and everything inside
  rm -rf "${dir_path}/logs"
fi

# Create a new directory named "logs"
mkdir "${dir_path}/logs"

# Go inside the new "log" directory
cd "${dir_path}/logs"

# Create files with the specified names
touch error.log import-into-search-index.log scraped.log success.log
