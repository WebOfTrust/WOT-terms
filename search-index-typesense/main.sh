#!/bin/bash

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
    echo "  This script collects content from various sites"
    echo "  and imports it into Typesense search engine."
    echo " "
    echo " "
    echo "  Please choose one of the following options:"
    echo " "
    echo "   [1] Scrape all sites (default)"
    echo "   [2] Scrape priority sites only"
    echo "   [3] Scrape test sites only"
    echo "   [Q] Exit the script"
    echo " "
    echo " "

}

# Function to prompt the user for input
function prompt_input() {
    read -n 1 -r -p "  What is your choice (1/2/3/Q)? " choice
    echo  # Empty line below the prompt
    echo  # Empty line below the prompt
}

function do_scrape_all() {
    # Get the directory where the main.sh script is located
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    # Start scraping all sites.
    source "$SCRIPT_DIR/scrape_start.sh"
}

function do_scrape_prio_1() {
    # Get the directory where the main.sh script is located
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    # Start scraping priority sites only.
    source "$SCRIPT_DIR/scrape_prio_1_start.sh"
}

function do_scrape_test() {
    # Get the directory where the main.sh script is located
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    # Start scraping priority sites only.
    source "$SCRIPT_DIR/scrape_start_test.sh"
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

