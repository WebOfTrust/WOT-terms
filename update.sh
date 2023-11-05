#!/bin/bash

# Runs several scripts to update the content of the website


source ".env"

##############################
# Google sheet: WOT-terms, tab: Terms-WOT-manage
##############################

# Fetches data from WOT-terms (Google sheet) and generates an overview file that takes all the terms and their definitions and puts them into a single file. 
# Import Google Sheet “WOT-terms”, tab “Terms-WOT-manage” data into markdown file
node fetchExternalContent/fetchTermsWOTmanage/fetchTermsWOTmanage.mjs
##############################



##############################
# Google sheet: WOT-terms, tab: LabelContent
##############################

# Fetches and copies external websites based on the URLs in the Google sheet "WOT-terms", tab "LabelContent"  
# Steps:
# 1: Fetch information in JSON format that serves as source for import Google Sheet “WOT-terms”, tab “LabelContent” data into markdown files, meta data
# 2: Import Google Sheet “WOT-terms”, tab “LabelContent” data into markdown files
# 3: Add HTML structure to external content, like Accordeon code

sh  fetchExternalContent/fetchCarbonCopies/main.sh
##############################



##############################
# Google sheet: WOT-terms, tab: GenericScraper
##############################

node  fetchExternalContent/fetchGenericScraperSitesInfo/fetchGenericScraperSitesInfo.js
##############################



##############################
# Clones the wiki
##############################

# Step 1: Checkout wiki
git clone https://github.com/WebOfTrust/WOT-terms.wiki.git temp-wiki

# Step 2: Copy Wiki To Docusaurus Glossary directory
# Create the directory if it doesn't exist
mkdir -p docs/${OVERVIEW_DIR}

# Files that are already in the /docs/04_glossary/ directory will not be overwritten
# Synchronize wiki contents to /docs/04_glossary/
# Exclude multiple files: --exclude={'.gitignore','README.md'}
rsync -a --delete --exclude='.gitignore' temp-wiki/ docs/${OVERVIEW_DIR}


# Step 3: Cleanup
# The /temp-wiki directory is not needed anymore
rm -rf temp-wiki/
##############################



##############################
# Fix svg's created by OmniGraffle
##############################
# Fix svg's created by OmniGraffle
node maintenance/fixOmnigraffleSvgOutput.js
##############################


# # CURRENTLY MANUALLY RUN 
# ##############################
# # Find broken links and create a Github issue
# ##############################
# - name: Find broken links and create a Github issue
#   run: node maintenance/findBrokenLinks.js
# ##############################



