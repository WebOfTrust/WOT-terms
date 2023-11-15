#!/bin/bash
# Fetches the WOT-terms.wiki repository and places it in the specified directory.

# Load environment variables
source "$(pwd)/.env"

# Clone the repository into the specified directory
if [ -z "$GLOSSARY_DIR" ]
then
    echo "GLOSSARY_DIR is not set. Please set it in your .env file."
    exit 1
else
    # Concatenate /docs/ with GLOSSARY_DIR
    TARGET_DIR="$(pwd)/docs/${GLOSSARY_DIR}"
    echo $TARGET_DIR
    
    # Delete all files inside TARGET_DIR
    rm -rf "$TARGET_DIR"/*
    rm -rf "$TARGET_DIR"/.??*

    echo "All files in $TARGET_DIR have been deleted."

    git clone https://github.com/WebOfTrust/WOT-terms.wiki.git $TARGET_DIR
    
    echo "WOT-terms.wiki has been cloned into $TARGET_DIR."
fi
