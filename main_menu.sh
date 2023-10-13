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
        echo "  The script will now start the content-updating process."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_update
    elif [[ "$choice" == "2" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  Fix SVG files."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_fix_svg
    elif [[ "$choice" == "3" ]]; then
        echo " "
        echo " "
        echo "  ************************************"
        echo "  Going to the scraping section menu."
        echo "  ************************************"
        echo " "
        echo " "
        show_progress
        do_scrape_menu
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
    echo "  MAIN MENU"
    echo " "
    echo " "
    echo "  Please choose one of the following options:"
    echo " "
    echo "   [1] Update content (always safe to run)"
    echo "       (fetch from the Wiki, and Google sheets)"
    echo "   [2] Fix SVG output (always safe to run)"
    echo "   [3] Go to the scraping section"
    echo "       (various scraping options)"
    echo "   [Q] Exit"
    echo " "
    echo " "
}

# Function to prompt the user for input
function prompt_input() {
    read -n 1 -r -p "  Enter your choice (1/2/Q)? " choice
    echo  # Empty line below the prompt
    echo  # Empty line below the prompt
}

function do_update() {
    # Start scraping all sites.
    source "$SCRIPT_DIR/update.sh"
}

function do_scrape_menu() {
    # Start scraping priority sites only.
    source "${SCRIPT_DIR}/${SEARCH_INDEX_DIR}/main.sh"
}

function do_fix_svg() {
    # Fix Omnigraffle SVG output
    ##############################
    # Fix svg's created by OmniGraffle
    ##############################
    # Fix svg's created by OmniGraffle
    node maintenance/fixOmnigraffleSvgOutput.js
    ##############################
}

# Function to show the progress of the scraping process
function show_progress() {
    for i in {1..10}
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

