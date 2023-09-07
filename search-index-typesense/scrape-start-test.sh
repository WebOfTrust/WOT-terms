# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Prepare file system.
source "$SCRIPT_DIR/prepare_file_system.sh"
echo "Preparing file system finished" | tee -a search-index-typesense/logs/succes.log

# Copy handmade stuff.
source "$SCRIPT_DIR/copy_manual_files.sh"
echo "Copying manual files finished" | tee -a search-index-typesense/logs/succes.log

# # Create sitemaps.
# source "$SCRIPT_DIR/create_sitemaps.sh"
# echo "Creating sitemaps finished" | tee -a search-index-typesense/logs/succes.log

# # Remove unwanted urls from the sitemaps (new sitemaps generated or not)
# node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
# echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# # Filenames to lowercase.
# node "$SCRIPT_DIR/renameFilesToLowerCase.mjs" search-index-typesense/sitemaps
# echo "Renaming files to lowercase finished" | tee -a search-index-typesense/logs/succes.log

# Scrape the websites.
node "$SCRIPT_DIR/extractData-test.mjs"
echo "Extracting data finished" | tee -a search-index-typesense/logs/succes.log

# Split the content.jsonl file into multiple files so the size is optimal for Typesense.
node "$SCRIPT_DIR/splitContentJSONL.mjs"
echo "Splitting content finished" | tee -a search-index-typesense/logs/succes.log

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
echo "Sorting and styling index file finished" | tee -a search-index-typesense/logs/succes.log

# # Export the data from Typesense to the downloads dir.
# source "$SCRIPT_DIR/export.sh"
# echo "Exporting data finished" | tee -a search-index-typesense/logs/succes.log

# # Backup output (scrape results, handmade stuff, sitemaps etc).
# source "$SCRIPT_DIR/backup.sh"
# echo "Backup finished" | tee -a search-index-typesense/logs/succes.log

# Make collection in Typesense empty.
source "$SCRIPT_DIR/make_collection_empty.sh"
echo "Making collection empty finished" | tee -a search-index-typesense/logs/succes.log

# Import the data into Typesense.
source "$SCRIPT_DIR/import.sh"
echo "Importing data finished" | tee -a search-index-typesense/logs/succes.log

# Import overrides into Typesense.
source "$SCRIPT_DIR/overrides.sh"
echo "Importing overrides finished" | tee -a search-index-typesense/logs/succes.log
