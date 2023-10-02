#!/bin/bash

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

    # Start scraping.
    source "$SCRIPT_DIR/scrape-start.sh"
}

# Main script starts here
display_intro
prompt_input
handle_choice

# End of script
