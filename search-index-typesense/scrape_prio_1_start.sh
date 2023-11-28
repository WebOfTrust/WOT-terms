# Import variables from .env file
source .env


# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh


#########################
# INITIALIZING
#########################

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"



#########################
# PREPARING
#########################

# Prepare file system.
source "$SCRIPT_DIR/prepare_file_system.sh"
setLogFile "success.log"
log "Preparing file system finished"

# Copy handmade stuff.
source "$SCRIPT_DIR/copy_manual_files.sh"
setLogFile "success.log"
log "Copying manual files finished"

# Create sitemaps.
source "$SCRIPT_DIR/config/config_create_sitemaps_prio_1.sh"
setLogFile "success.log"
log "Creating sitemaps finished"

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
setLogFile "success.log"
log "Extracting data finished"


# Filenames to lowercase.
node "${SCRIPT_DIR}/renameFilesToLowerCase.mjs" ${SEARCH_INDEX_DIR}/sitemaps
setLogFile "success.log"
log "Renaming files to lowercase finished"



#########################
# START SCRAPING
#########################

# Scrape the websites.
node "$SCRIPT_DIR/extractDataPrio1.mjs"
setLogFile "success.log"
log "Extracting data finished"

# Split the content.jsonl file into multiple files so the size is optimal for Typesense.
node "$SCRIPT_DIR/splitContentJSONL.mjs"
setLogFile "success.log"
log "Splitting content finished"

# Count the total number of lines in all .jsonl files and write it to log dir.
node "$SCRIPT_DIR/countLinesInJsonlFiles.mjs"
setLogFile "success.log"
log "Counting number of lines finished"

node "$SCRIPT_DIR/collectScrapedUrls.mjs" "${SEARCH_INDEX_DIR}/${SEARCH_INDEX_ENTRIES_DIR}" "${INDEX_OVERVIEW_FILE}"
setLogFile "success.log"
log "Collecting urls and writing to index file finished"

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
setLogFile "success.log"
log "Sorting and styling index file finished"



#########################
# BACKING UP
#########################

# Backup output (scrape results, handmade stuff, sitemaps, logs, webpage overview, typesense export).
source "$SCRIPT_DIR/backup.sh"
setLogFile "success.log"
log "Backup finished"



# #########################
# # IMPORTING INTO TYPESENSE CLOUD Open Source Search
# #########################

# # Make collection in Typesense empty.
# source "$SCRIPT_DIR/make_collection_empty.sh"
# setLogFile "success.log"
# log "Making collection empty finished"

# # Import the data into Typesense.
# source "$SCRIPT_DIR/import.sh"
# setLogFile "success.log"
# log "Importing data finished"

# # Import overrides into Typesense.
# source "$SCRIPT_DIR/overrides.sh"
# setLogFile "success.log"
# log "Importing overrides finished"

#########################
# END
#########################
