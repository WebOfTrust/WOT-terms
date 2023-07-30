#!/bin/bash

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
input_file_path="scrapers/overrides/overrides.json"
output_file_path="scrapers/overrides/overridesID.json"

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
    echo "Error in response: $error_message"
    exit 1
  fi

  # Extract the "id" entry from the sanitized response using jq
  id=$(echo "$sanitized_response" | jq -r '.hits[0].document.id')

  # Check if the ID is null and handle this case accordingly
  if [ "$id" = "null" ]; then
    echo "No ID found for the URL $url"
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
