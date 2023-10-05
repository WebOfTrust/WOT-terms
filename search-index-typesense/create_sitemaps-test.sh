#!/bin/bash


# Author: Kor Dwarshuis
# Created: 2023
# Updated: -
# Description: This script starts sitemap creator scripts. Not every URL that is scraped needs a sitemap via this route: sometimes a sitemap is already available, for example in the root of a website (sitemap.xml). Or via an HTLM sitemap available via a URL.



# General websites
# node ${SEARCH_INDEX_DIR}/createSitemap.mjs --url https://keripy.readthedocs.io/en/latest/ --depth 5
# node ${SEARCH_INDEX_DIR}/createSitemap.mjs --url https://keria.readthedocs.io/en/latest/ --depth 5
# node ${SEARCH_INDEX_DIR}/createSitemap.mjs --url https://signifypy.readthedocs.io/en/latest/ --depth 5

# Github repos
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs SmithSamuelM Papers master ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cardano-backer main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cesride main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust cesrpy main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust gcp-ksm-shim main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust ietf-did-keri main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust kara main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust kassh main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keep main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keri main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keri-swift main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keria main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keride main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keriox main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust keripy main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust parside main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust saidide main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust schema main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust scir main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust shkr main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifi main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifide main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signify-ts main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust signifypy main ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust vlei dev ${SEARCH_INDEX_DIR}/sitemaps
# node ${SEARCH_INDEX_DIR}/createSitemapGithub.mjs WebOfTrust ward main ${SEARCH_INDEX_DIR}/sitemaps

