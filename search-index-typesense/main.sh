#!/bin/bash

export INDEX_OVERVIEW_FILE="docs/Overview/indexed-in-KERISSE.md"


# Function to handle the user's choice
function handle_choice() {
    if [[ "$choice" == "Y" || "$choice" == "y" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  The script will now start."
        echo "  ************************************"
        echo " "
        echo " "
        printf "."
        sleep 0.2
        printf  "."
        sleep 0.2
        printf "."
        sleep 0.2
        printf  "."
        sleep 0.2
        printf  "."
        sleep 0.2


        do_main
    else
        echo " "
        echo " "
        echo "  ************************************"
        echo "  Goodbye! You chose to exit."
        echo "  ************************************"
        echo " "
        echo " "
    fi
}

# Function to display the introduction text
function display_intro() {
    clear
    echo " "
    echo " "
    echo "  ************************************"
    echo " "
    echo "  ╦╔═╔═╗╦═╗╦╔═╗╔═╗╔═╗ ┌─┐┬─┐┌─┐"
    echo "  ╠╩╗║╣ ╠╦╝║╚═╗╚═╗║╣  │ │├┬┘│ ┬"
    echo "  ╩ ╩╚═╝╩╚═╩╚═╝╚═╝╚═╝o└─┘┴└─└─┘ "
    echo " "
    echo " "
    echo "  This script collects content from various sites"
    echo "  and imports it into Typesense search engine."
    echo "  The whole process takes about 30 minutes (rough estimation)."
    echo "  Press 'Y' to continue or 'N' to exit."
    echo " "
    echo "  ************************************"
    echo " "
    echo " "

}

# Function to prompt the user for input
function prompt_input() {
    read -n 1 -r -p "  Do you want to continue (Y/N)? " choice
    echo  # Empty line below the prompt
    echo  # Empty line below the prompt
}

function do_main() {
    # Get the directory where the main.sh script is located
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    # Prepare file system.
    source "$SCRIPT_DIR/prepare_file_system.sh"
    echo "Preparing file system finished" | tee -a search-index-typesense/logs/succes.log

    # Copy handmade stuff.
    source "$SCRIPT_DIR/copy_manual_files.sh"
    echo "Copying manual files finished" | tee -a search-index-typesense/logs/succes.log

    # Create sitemaps.
    source "$SCRIPT_DIR/create_sitemaps.sh"
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

    # Split the content.jsonl file into multiple files so the size is optimal for Typesense.
    node "$SCRIPT_DIR/splitContentJSONL.mjs"
    echo "Splitting content finished" | tee -a search-index-typesense/logs/succes.log

    # Sort and style the index file.
    node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
    echo "Sorting and styling index file finished" | tee -a search-index-typesense/logs/succes.log

    # Export the data from Typesense to the downloads dir.
    source "$SCRIPT_DIR/export.sh"
    echo "Exporting data finished" | tee -a search-index-typesense/logs/succes.log

    # Backup output (scrape results, handmade stuff, sitemaps etc).
    source "$SCRIPT_DIR/backup.sh"
    echo "Backup finished" | tee -a search-index-typesense/logs/succes.log

    # Make collection in Typesense empty.
    source "$SCRIPT_DIR/make_collection_empty.sh"
    echo "Making collection empty finished" | tee -a search-index-typesense/logs/succes.log

    # Import the data into Typesense.
    source "$SCRIPT_DIR/import.sh"
    echo "Importing data finished" | tee -a search-index-typesense/logs/succes.log

    # Import overrides into Typesense.
    source "$SCRIPT_DIR/overrides.sh"
    echo "Importing overrides finished" | tee -a search-index-typesense/logs/succes.log
}

# Main script starts here
display_intro
prompt_input
handle_choice

# End of script
