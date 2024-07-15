#!/bin/bash


# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script starts sitemap creator scripts. Not every URL that is scraped needs a sitemap via this route: sometimes a sitemap is already available, for example in the root of a website (sitemap.xml). Or via an HTLM sitemap available via a URL.

# Import variables from .env file
source .env


########################################
# General websites
########################################

# `sitemap-generator-cli` should be installed globally via `npm install -g sitemap-generator-cli` to run the `sitemap-generator` command.
sitemap-generator https://keria.readthedocs.io --verbose -f ./search-index-typesense/sitemaps/sitemap-keria.readthedocs.io.xml

sitemap-generator https://keripy.readthedocs.io --verbose -f ./search-index-typesense/sitemaps/sitemap-keripy.readthedocs.io.xml

sitemap-generator https://signifypy.readthedocs.io --verbose -f ./search-index-typesense/sitemaps/sitemap-signifypy.readthedocs.io.xml




########################################
# Github repos - createSitemapGithub.mjs
########################################

# How to use:
# $ node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs <repository-owner> <repository-name> <branch-name> <category>

# Github owner: Trust over IP
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-acdc-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-did-method-webs-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-cesr-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-cesr-proof-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-oobi-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-ipex-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-acdc-specification-archived main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip acdc main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip TSS0033-technology-stack-acdc main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-keri-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip tswg-ptel-specification main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs trustoverip keri main Code

# Github owner: Sam Smith
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs SmithSamuelM Papers master Whitepapers

# Github owner: WebOfTrust
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cardano-backer main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cesride main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cesrpy main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust gcp-ksm-shim main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust ietf-did-keri main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust kara main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust kassh main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keep main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keri main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keri-swift main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keria main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keride main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keriox main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keripy main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust parside main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust saidide main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust schema main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust scir main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust shkr main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifi main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifide main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signify-ts main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifypy main Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust vlei dev Code
node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust ward main Code

