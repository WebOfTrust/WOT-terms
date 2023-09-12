---
sidebar: HowWeDidSidebar
---
import Filesystem from '/img/file-system.svg';

# File system

See the [Docusaurus documentation](https://docusaurus.io) for a general explanation of the file system.

Here follows a brief description of the specific directories and files of KERISSE:

<Filesystem />

## Short description per file / directory in `/search-index-typesense`

Here you'll find a short description for every file, or directory. Not every file is included.

```
.
├── backup.sh                   Backups three directories from the search-index-typesense directory
├── copy_manual_files.sh        Copies manually created files to the output directories of the automated scripts
├── createSitemap.mjs           Starts sitemap creator scripts
├── createSitemapGithub.mjs     To Be Written
├── create_sitemaps.sh          To Be Written
├── custom-scrapers             To Be Written
│   ├── WOT-terms.mjs           …
│   ├── eSSIF-Lab.mjs
│   ├── github.mjs
│   ├── gleif.mjs
│   ├── …
├── export.sh
├── extractData-test.mjs
├── extractData.mjs
├── import.sh
├── logs
│   ├── broken_links.txt
│   ├── broken_links_status.txt
│   ├── error.log
│   ├── import-into-search-index.log
│   ├── my_broken_links copy.txt
│   ├── scraped.log
│   ├── succes.log
│   └── success.log
├── main.sh
├── make_collection_empty.sh
├── modules
│   ├── appendToFile.mjs
│   ├── createInput.mjs
│   ├── createOutput.mjs
│   ├── extractMainContent.mjs
│   ├── general-pdf.mjs
│   ├── getTextContent.mjs
│   ├── github-API.mjs
│   ├── github-pdf.mjs
│   ├── logger.mjs
│   ├── scrape.mjs
│   ├── writeToErrorFile.mjs
│   ├── writeToFile.mjs
│   └── writeToSuccesFile.mjs
├── overrides
│   ├── overrides.json
│   └── overridesID.json
├── overrides.sh
├── prepare_file_system.sh
├── removeURLsFromSitemap.mjs
├── renameFilesToLowerCase.mjs
├── scrape-start-test.sh
├── scrape-start.sh
├── search-index-entries
│   ├── WOT-terms.jsonl
│   ├── WOT-terms.jsonl.not-split
│   ├── eSSIF-Lab.jsonl
│   ├── eSSIF-Lab.jsonl.not-split
│   ├── …
├── search-index-entries-manual
│   ├── gleifPDF.jsonl
│   └── handmade.json
├── sitemaps
│   └── sitemap-www.gleif.org-pdf.xml
├── sitemaps-exlude-urls
│   ├── sitemap-medium.com-exclude-urls.json
│   ├── sitemap-www.gleif.org-exclude-urls.json
│   └── wot-terms-exclude-urls.json
├── sitemaps-manual
│   ├── sitemap-humancolossus.xml
│   ├── sitemap-jolocom.xml
│   ├── sitemap-kentbull.com.xml
│   ├── sitemap-ksoeteman.xml
│   ├── sitemap-medium.com.xml
│   └── sitemap-www.gleif.org-pdf.xml
├── sortAndStyleScrapedIndex.mjs
└── splitContentJSONL.mjs

```
