#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This Bash script automates the management of "overrides" for a specific collection in a Typesense server.
#              Overrides in Typesense allow manual curation of search ranking results. This script assists in updating and managing such overrides.

# STEP 1: Convert URLs to IDs
# Purpose: This step converts URLs present in the input JSON to their corresponding document IDs in the Typesense collection.
# Input: A JSON file containing URLs
# Output: A JSON file containing corresponding document IDs

# Sample Input:
# [
#     {
#         "name": "foo",
#         "query": "bar",
#         "url": "https://example.com/some/path/",
#         "position": 1,
#         "match": "exact"
#     },
#     ...
# ]

# Sample Output:
# [
#     {
#         "name": "foo",
#         "query": "bar",
#         "id": "7347",
#         "position": 1,
#         "match": "exact"
#     },
#     ...
# ]

# STEP 2: Apply Overrides
# Purpose: This step first clears all existing overrides from the Typesense server and then uploads new ones from the prepared JSON.
# The overrides JSON includes fields such as:
# - name: Name of the override.
# - query: Query to which the override applies.
# - id: Document ID to be promoted.
# - position: Desired position in search results.
# - match: Match type for the query (either "exact" or "contains").

# Note: This script deletes all existing overrides at its start. This operation is irreversible. Always ensure the intent before executing.

# External Dependencies:
# - jq: Lightweight and flexible command-line JSON processor.

# Logger generates a log file with a timestamp and from which file the message comes from.
source ./search-index-typesense/logger.sh

### CONFIGURATION
source "$(pwd)/.env"
local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
local_TYPESENSE_HOST="${TYPESENSE_HOST}"
local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"
input_file_path="search-index-typesense/overrides/overrides.json"
output_file_path="search-index-typesense/overrides/overridesID.json"

### STEP 1: Convert URLs to IDs
temp_file=$(mktemp)
jq -c '.[]' "$input_file_path" | while read -r object; do
  # Extract the URL from the object
  url=$(echo "$object" | jq -r '.url')

  # Perform the request and store the response in a variable
  response=$(curl -s -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
    "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/search?q=${url}&query_by=url")



  # SANITIZE RESPONSE
  # This is trial and error and only working for the current response.

  # Replace backslash-escaped double quotes with single quotes
  sanitized_string=$(echo "$response" | sed 's/\\"/'\''/g')

  # Sanitize the JSON response by removing all backslashes.
  # Reason is this output: "content":"1 ) } \ .@ccoun;mg ;@eclger2) 4p ’7:3) ? /4) 420Rotated public keys",
  sanitized_response=$(echo "$sanitized_string" | sed 's/\\//g')
  
  # Sanitize the JSON response by removing control characters
  sanitized_response=$(echo "$sanitized_response" | tr -d '\000-\031')
  
    # Check if the sanitized response contains any error messages
  if echo "$sanitized_response" | jq -e '.error' > /dev/null; then
    error_message=$(echo "$sanitized_response" | jq -r '.error')
    setLogFile "error.log"
    log "Error in response: $error_message"

    exit 1
  fi

  # Extract the "id" entry from the sanitized response using jq
  id=$(echo "$sanitized_response" | jq -r '.hits[0].document.id')

  # Check if the ID is null and handle this case accordingly
  if [ "$id" = "null" ]; then
    setLogFile "error.log"
    log "No ID found for the URL $url"

  else
    # Remove the "url" entry and add the "id" entry in the object
    new_object=$(echo "$object" | jq --arg id "$id" 'del(.url) | .id = $id')

    # Write the new object to the temporary file
    echo "$new_object" >> "$temp_file"
  fi
done

# Convert the temporary file to a JSON array and write it to the output file
jq -s '.' "$temp_file" > "$output_file_path"

# Remove the temporary file
rm "$temp_file"

### STEP 2: Clear Existing Overrides
OVERRIDES=$(curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/overrides")
OVERRIDE_NAMES=$(echo $OVERRIDES | jq -r '.overrides[] | .id')
for OVERRIDE_NAME in $OVERRIDE_NAMES; do
  curl "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/overrides/$OVERRIDE_NAME" -X DELETE \
  -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}"
done

### Import New Overrides
process_json_data() {
  local JSON_DATA=$1
  local LENGTH=$(echo "$JSON_DATA" | jq '. | length')

  for ((i=0; i<$LENGTH; i++)); do
    # Extract the name, query, id, position, and match from each object
    local NAME=$(echo "$JSON_DATA" | jq -r --argjson index $i '.[$index] | .name')
    local QUERY=$(echo "$JSON_DATA" | jq -r --argjson index $i '.[$index] | .query')
    local ID=$(echo "$JSON_DATA" | jq -r --argjson index $i '.[$index] | .id')
    local POSITION=$(echo "$JSON_DATA" | jq -r --argjson index $i '.[$index] | .position')
    local MATCH=$(echo "$JSON_DATA" | jq -r --argjson index $i '.[$index] | .match')

    # Insert variables into the curl command
    curl "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/overrides/$NAME" -X PUT \
    -H "Content-Type: application/json" \
    -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" -d '{
      "rule": {
        "query": "'"$QUERY"'",
        "match": "'"$MATCH"'"
      },
      "includes": [
        {
          "id": "'"$ID"'",
          "position": '"$POSITION"'
        }
      ]
    }'
  done
}
JSON_DATA1=$(<"search-index-typesense/overrides/overridesID.json")
process_json_data "$JSON_DATA1"

# # Cleanup if desired
# rm search-index-typesense/overrides/overridesID.json
