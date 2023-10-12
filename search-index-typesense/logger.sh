#!/bin/bash

# Script Name: logger.sh
###########################################################################
# Author: Kor Dwarshuis
# Created: 2023-09-13
# Updated: -
# Description: This script provides logging functionalities for Bash scripts.
# It defines two primary functions: `setLogFile` and `log`.
# - `setLogFile` allows users to set the filename for the log output.
# - `log` appends a log entry to the set log file, prefixed with a timestamp.
#
# Example Usage:
# To use these logging functions in another script, source this file at the 
# top of your script:
# source /path/to/logger.sh
#
# Then, you can use the `setLogFile` and `log` functions as shown below:
# setLogFile "success.log"
# log "This code ran successfully!"
###########################################################################

# Import variables from .env file
source .env


# Define log directory and default log file
logsDir="${SEARCH_INDEX_DIR}/logs"
currentLogFile="success.log"

# Function to set the log file
setLogFile() {
    currentLogFile="$1"
}

# Function to log messages
log() {
    local timestamp=$(date +"%H:%M:%S") # Get the current time without milliseconds
    local logMessage="[$timestamp] $1"
    
    echo "$logMessage" # Output to console

    # Write to the currently set log file
    echo "$logMessage" >> "${logsDir}/${currentLogFile}"
    
    # Check for write error
    if [ $? -ne 0 ]; then
        echo "Error writing to log file"
    fi
}

# # Example usage
# setLogFile "success.log"
# log "This code ran successfully!"

# # Uncomment the following block to catch errors
# # if some_command; then
# #     log "This code ran successfully!"
# # else
# #     setLogFile "error.log"
# #     log "An error occurred"
# # fi
