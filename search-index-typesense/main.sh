#!/bin/bash

source ".env"

# Sets the variable SCRIPT_DIR to the directory where the script itself is located.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"


# Function to handle the user's choice
function handle_choice() {
    if [[ "$choice" == "1" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  The script will now start scraping all sites."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_scrape_all
    elif [[ "$choice" == "2" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  The script will now start scraping priority sites."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_scrape_prio_1
    elif [[ "$choice" == "3" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  The script will now start a test scrape."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_scrape_test
    elif [[ "$choice" == "4" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  The script will now make a backup."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_backup
    elif [[ "$choice" == "5" ]]; then
        read -n 1 -r -p "  Are you sure you want to import into Typesense? (y/N) " confirm
        echo  # Empty line below the prompt
        if [[ "$confirm" == [yY] ]]; then
            echo " "
            echo " "
            echo "  ************************************"
            echo "  The script will now import into Typesense."
            echo "  ************************************"
            echo " "
            echo " "
            show_progress
            do_import
        else
            echo "Import operation cancelled."
        fi
    elif [[ "$choice" == "6" ]]; then
        read -n 1 -r -p "  Are you sure you want to restore into Typesense? (y/N) " confirm
            echo  # Empty line below the prompt
            if [[ "$confirm" == [yY] ]]; then
                echo " "
                echo " "
                echo "  ************************************"
                echo "  The script will now restore into Typesense."
                echo "  ************************************"
                echo " "
                echo " "
                show_progress
                do_restore
            else
                echo "Restore operation cancelled."
            fi
    else
        clear
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
    echo "  Various scripts related to scraping and indexing in Typesense."
    echo " "
    echo " "
    echo "  Please choose one of the following options:"
    echo " "
    echo "   [1] Scrape all sites (scrape + backup) *)"
    echo " "
    echo "   [2] Scrape priority sites (scrape + backup) *)"
    echo " "
    echo "   [3] Scrape test"
    echo " "
    echo "   [4] Backup"
    echo " "
    echo "   [5] Import"
    echo " "
    echo "   [6] Restore (import jsonl file into Typesense)"
    echo " "
    echo "   [Q] Quit"
    echo " "
    echo " "
    echo "  *) The backup is always made after the scraping is finished"
    echo "     and is a copy of this latest scrape session."
    echo " "
    echo " "

}

# Function to prompt the user for input
function prompt_input() {
    read -n 1 -r -p "  Enter your choice (1/2/3/4/5/6/Q)? " choice
    echo  # Empty line below the prompt
    echo  # Empty line below the prompt
}

function do_scrape_all() {
    # Start scraping all sites.
    source "$SCRIPT_DIR/scrape_start.sh"
}

function do_scrape_prio_1() {
    # Start scraping priority sites only.
    source "$SCRIPT_DIR/scrape_prio_1_start.sh"
}

function do_scrape_test() {
    # Start scraping test.
    source "$SCRIPT_DIR/scrape_start_test.sh"
}

function do_backup() {
    # Start backing up.
    source "$SCRIPT_DIR/backup.sh"
}

function do_import() {
    #########################
    # IMPORTING INTO TYPESENSE CLOUD Open Source Search
    #########################

    # Make collection in Typesense empty.
    source "$SCRIPT_DIR/make_collection_empty.sh"
    setLogFile "success.log"
    log "Making collection empty finished"

    # Import the data into Typesense.
    source "$SCRIPT_DIR/import.sh"
    setLogFile "success.log"
    log "Importing data finished"

    # Import overrides into Typesense.
    source "$SCRIPT_DIR/overrides.sh"
    setLogFile "success.log"
    log "Importing overrides finished"
}

function do_restore() {
    # Make collection in Typesense empty.
    source "$SCRIPT_DIR/make_collection_empty.sh"
    setLogFile "success.log"
    log "Making collection empty finished"

    # Start backing up.
    source "$SCRIPT_DIR/restore.sh"
}

# Function to show the progress of the scraping process
function show_progress() {
    for i in {1..5}
    do
      printf "."
      sleep 0.2
    done
}

# Main script starts here
display_intro
prompt_input
handle_choice

# End of script

