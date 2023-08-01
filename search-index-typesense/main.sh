#!/bin/bash

# Function to handle the user's choice
function handle_choice() {
    if [[ "$choice" == "Y" || "$choice" == "y" ]]; then
        echo " "
        echo " "
        echo "************************************"
        echo "The script will now start."
        echo "************************************"
        echo " "
        echo " "
        printf "."
        sleep 1  # Pause for 3 seconds
        printf  "."
        sleep 1  # Pause for 3 seconds
        printf "."
        sleep 1  # Pause for 3 seconds
        printf  "."
        sleep 1  # Pause for 3 seconds
        printf  "."
        sleep 1  # Pause for 3 seconds


        do_main
    else
        echo " "
        echo " "
        echo "************************************"
        echo "Goodbye! You chose to exit."
        echo "************************************"
        echo " "
        echo " "
    fi
}

# Function to display the introduction text
function display_intro() {
    echo " "
    echo " "
    echo "************************************"
    echo " "
    echo "This script collects content from various sites and imports it into Typesense search engine."
    echo "The whole process takes about 30 minutes (rough estimation)."
    echo "Press 'Y' to continue or 'N' to exit."
    echo " "
    echo "************************************"
    echo " "
    echo " "

}

# Function to prompt the user for input
function prompt_input() {
    read -n 1 -r -p "Do you want to continue (Y/N)? " choice
    echo
}

# Function to perform "deurdonderen"
function do_main() {
    # Start the scraping process.
# IMPORTANT: This assumes that sitemaps are already generated. If not, create additional sitemaps first.
# Run this script from project root: bash search-index-typesense/main.sh  

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Prepare file system.
source "$SCRIPT_DIR/prepareFileSystem.sh"
echo "Preparing file system finished" | tee -a search-index-typesense/logs/succes.log

# Create sitemaps.
source "$SCRIPT_DIR/createSitemaps.sh"
echo "Creating sitemaps finished" | tee -a search-index-typesense/logs/succes.log

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# Filenames to lowercase.
node "$SCRIPT_DIR/renameFilesToLowerCase.mjs" search-index-typesense/sitemaps
echo "Renaming files to lowercase finished" | tee -a search-index-typesense/logs/succes.log

# Scrape the websites.
node "$SCRIPT_DIR/extractData.mjs"
echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" docs/Overview/indexed-in-KERISSE.md
echo "Sorting and styling index file finished" | tee -a search-index-typesense/logs/succes.log

# Export the data into Typesense.
source "$SCRIPT_DIR/export.sh"
echo "Exporting data finished" | tee -a search-index-typesense/logs/succes.log

# Make collection in Typesense empty.
source "$SCRIPT_DIR/make-collection-empty.sh"
echo "Making collection empty finished" | tee -a search-index-typesense/logs/succes.log

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished" | tee -a search-index-typesense/logs/succes.log

# Finding ids to urls.
source "$SCRIPT_DIR/urlToID.sh"
echo "Finding ids to urls finished" | tee -a search-index-typesense/logs/succes.log

# Import overrides into Typesense.
source "$SCRIPT_DIR/overrides.sh"
echo "Importing overrides finished" | tee -a search-index-typesense/logs/succes.log
}

# Main script starts here
display_intro
prompt_input
handle_choice

# End of script
