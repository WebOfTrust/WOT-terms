#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023


node search-index-typesense/createSitemap.mjs --url https://keripy.readthedocs.io/en/latest/ --depth 5

# Github repos
node search-index-typesense/createSitemapGithub.mjs SmithSamuelM Papers master search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust cardano-backer main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust cesride main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust cesrpy main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust gcp-ksm-shim main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust ietf-did-keri main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust kara main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust kassh main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keep main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keri main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keri-swift main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keria main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keride main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keriox main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust keripy main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust parside main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust saidide main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust schema main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust scir main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust shkr main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust signifi main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust signifide main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust signify-ts main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust signifypy main search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust vlei dev search-index-typesense/sitemaps
node search-index-typesense/createSitemapGithub.mjs WebOfTrust ward main search-index-typesense/sitemaps

