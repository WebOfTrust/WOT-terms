# Logger generates a log file with a timestamp and from which file the message comes from.
source ./search-index-typesense/logger.sh


#########################
# INITIALIZING
#########################

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"



#########################
# PREPARING
#########################

# Update content (always safe to run). Fetches all the content from the remote sources, more than strictly necessary for scraping.
source "$SCRIPT_DIR/../update.sh"

# Prepare file system.
source "$SCRIPT_DIR/prepare_file_system.sh"
setLogFile "success.log"
log "Preparing file system finished"

# Copy handmade stuff.
source "$SCRIPT_DIR/copy_manual_files.sh"
setLogFile "success.log"
log "Copying manual files finished"

# Create sitemaps.
source "$SCRIPT_DIR/create_sitemaps.sh"
setLogFile "success.log"
log "Creating sitemaps finished"

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
setLogFile "success.log"
log "Extracting data finished"

# Filenames to lowercase.
node "$SCRIPT_DIR/renameFilesToLowerCase.mjs" search-index-typesense/sitemaps
setLogFile "success.log"
log "Renaming files to lowercase finished"



#########################
# START SCRAPING
#########################

# Scrape the websites.
node "$SCRIPT_DIR/extractData.mjs"
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

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
setLogFile "success.log"
log "Sorting and styling index file finished"



#########################
# BACKING UP
#########################

# Export the data from Typesense to the downloads dir.
source "$SCRIPT_DIR/export.sh"
setLogFile "success.log"
log "Exporting data finished"

# Backup output (scrape results, handmade stuff, sitemaps etc).
source "$SCRIPT_DIR/backup.sh"
setLogFile "success.log"
log "Backup finished"