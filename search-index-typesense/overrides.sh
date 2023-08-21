#!/bin/bash
# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This Bash script is designed to manage the "overrides" of a specific collection in a Typesense server. An override in Typesense is a way to manually curate the ranking of search results. This script helps automate the process of updating and managing these overrides.

# Initially, the script reads configuration data from a JSON file, overrides.json, located in the overrides directory. Each entry in this JSON file corresponds to a specific override rule and contains the following fields:

# - name: The name of the override.
# - query: The query to which this override should apply.
# - id: The ID of the document to be promoted.
# - position: The position at which the document should appear in the search results.
# - match: The type of match for the query. Can be set to "exact" or "contains".

# The script first retrieves all existing overrides for the collection from the Typesense server. It then loops over each override and deletes them one by one.

# Following the deletion of existing overrides, the script reads the overrides.json file and loops over each entry, executing a curl command for each one. These curl commands use environment variables for the Typesense host, collection name, and admin API key, and send the override data as JSON in the body of the HTTP request.

# This script is useful for anyone wanting to manage a large number of override rules in Typesense, especially if the rules need to be updated frequently. By storing the configuration data in a JSON file, the rules can be easily managed and updated without needing to modify the script.

# The script uses the jq tool to parse the JSON data, a lightweight and flexible command-line JSON processor. This allows the script to handle complex JSON data and extract the necessary fields.

# It's worth noting that the script deletes all existing overrides for the collection at the start of its execution. This is a destructive operation and cannot be undone, so users should ensure they really intend to delete all overrides before running the script.




# Fetches IDs for URLs in a Typesense collection. So we can use it for overrides (overrides need a unique id).
# Input: JSON file with URLs
# Output: JSON file with IDs
#
# From:
#
# [
#     {
#         "name": "foo",
#         "query": "bar",
#         "url": "https://example.com/some/path/",
#         "position": 1,
#         "match": "exact"
#     },
# 	etc
#
# To:
# [
#     {
#         "name": "foo",
#         "query": "bar",
#         "id": "7347",
#         "position": 1,
#         "match": "exact"
#     },
# 	etc


source "$(pwd)/.env"
local_TYPESENSE_ADMIN_API_KEY="${TYPESENSE_ADMIN_API_KEY}"
local_TYPESENSE_HOST="${TYPESENSE_HOST}"
local_TYPESENSE_COLLECTION_NAME="${TYPESENSE_COLLECTION_NAME}"

# Set the input and output file paths
input_file_path="search-index-typesense/overrides/overrides.json"
output_file_path="search-index-typesense/overrides/overridesID.json"

# Create a temporary file
temp_file=$(mktemp)

# Read the JSON file and iterate over the objects
jq -c '.[]' "$input_file_path" | while read -r object; do
  # Extract the URL from the object
  url=$(echo "$object" | jq -r '.url')

  # Perform the request and store the response in a variable
  response=$(curl -s -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" \
    "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/documents/search?q=${url}&query_by=url")

  # Sanitize the JSON response by removing control characters
  sanitized_response=$(echo "$response" | tr -d '\000-\031')

  # Check if the sanitized response contains any error messages
  if echo "$sanitized_response" | jq -e '.error' > /dev/null; then
    error_message=$(echo "$sanitized_response" | jq -r '.error')
    echo "Error in response: $error_message" | tee -a search-index-typesense/logs/error.log
    exit 1
  fi

  # Extract the "id" entry from the sanitized response using jq
  id=$(echo "$sanitized_response" | jq -r '.hits[0].document.id')

  # Check if the ID is null and handle this case accordingly
  if [ "$id" = "null" ]; then
    echo "No ID found for the URL $url" | tee -a search-index-typesense/logs/error.log
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




### PART TWO 

### 1: Delete all existing overrides in the Typesense database, before we import new ones

# Get all overrides
OVERRIDES=$(curl -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}" "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/overrides")

# Extract just the names from the overrides
OVERRIDE_NAMES=$(echo $OVERRIDES | jq -r '.overrides[] | .id')

# Loop over each override name and delete it
for OVERRIDE_NAME in $OVERRIDE_NAMES
do
  curl "https://${local_TYPESENSE_HOST}.a1.typesense.net/collections/${local_TYPESENSE_COLLECTION_NAME}/overrides/$OVERRIDE_NAME" -X DELETE \
  -H "X-TYPESENSE-API-KEY: ${local_TYPESENSE_ADMIN_API_KEY}"
done


### 2: import new overrides

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

# Remove it after use
rm search-index-typesense/overrides/overridesID.json