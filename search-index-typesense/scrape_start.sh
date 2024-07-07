# Import variables from .env file
source .env


# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh


#########################
# TEST IF REQUIRED LIBRARIES ARE INSTALLED
#########################
setLogFile "success.log"
log "Start testing libraries is finished"
node "$SCRIPT_DIR/isLibraryInstalled.mjs"
log "Testing libraries is finished (check outcome in success.log and error.log)"



#########################
# INITIALIZING
#########################

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"



#########################
# PREPARING
#########################

# Prepare file system.
setLogFile "success.log"
log "Start preparing file system"
source "$SCRIPT_DIR/prepare_file_system.sh"
log "Preparing file system finished"

# Copy handmade stuff.
setLogFile "success.log"
log "Start copying manual files"
source "$SCRIPT_DIR/copy_manual_files.sh"
log "Copying manual files finished"

# Create sitemaps.
setLogFile "success.log"
log "Start creating sitemaps"
source "$SCRIPT_DIR/config/config_sitemaps_create.sh"
log "Creating sitemaps finished"

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
setLogFile "success.log"
log "Start removing unwanted urls from sitemaps"
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
log "Removing unwanted urls from sitemaps finished"


# Filenames to lowercase.
setLogFile "success.log"
log "Start renaming files to lowercase"
node "${SCRIPT_DIR}/renameFilesToLowerCase.mjs" ${SEARCH_INDEX_DIR}/sitemaps
log "Renaming files to lowercase finished"

# Fetch external content.
setLogFile "success.log"
log "Start fetching external content"
node fetchExternalContent/fetchSingleUrlsFromWotTermsGoogleSheet/fetchSingleUrlsFromWotTermsGoogleSheet.js
log "Fetching external content finished"

#########################
# START SCRAPING
#########################

# Scrape the websites.
setLogFile "success.log"
log "Start extracting data"
node "$SCRIPT_DIR/extractData.mjs"
log "Extracting data finished"

# Split the content.jsonl file into multiple files so the size is optimal for Typesense.
setLogFile "success.log"
log "Start splitting content"
node "$SCRIPT_DIR/splitContentJSONL.mjs"
log "Splitting content finished"

# Count the total number of lines in all .jsonl files and write it to log dir.
setLogFile "success.log"
log "Start counting number of lines"
node "$SCRIPT_DIR/countLinesInJsonlFiles.mjs"
log "Counting number of lines finished"

setLogFile "success.log"
log "Start collecting urls and writing to index file"
node "$SCRIPT_DIR/collectScrapedUrls.mjs" "${SEARCH_INDEX_DIR}/${SEARCH_INDEX_ENTRIES_DIR}" "${INDEX_OVERVIEW_FILE}"
log "Collecting urls and writing to index file finished"

# Sort and style the index file.
setLogFile "success.log"
log "Start sorting and styling index file"
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
log "Sorting and styling index file finished"



#########################
# BACKING UP
#########################

# Backup output (scrape results, handmade stuff, sitemaps, logs, webpage overview, typesense export).
setLogFile "success.log"
log "Start creating backup"
source "$SCRIPT_DIR/backup.sh"
log "Creating backup finished"