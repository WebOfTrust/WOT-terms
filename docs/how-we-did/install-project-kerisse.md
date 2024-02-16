---
Status: final
---

What is this: [Github README](https://github.com/weboftrust/WOT-terms/README) describes the download, install, configuration and launch of this project.

For who: site maintainer

Result: | @kordwarshuis TBW |

## Run Scrapers

On your OS install (use a package manager e.g., apt, yum, brew, etc.):

* `jq` (https://stedolan.github.io/jq/)
* `curl` (https://curl.se/)
* `ImageMagick` (https://imagemagick.org)


Now you can refresh the **search index** if needed:
`$ sh search-index-typesense/main.sh`

This takes about half an hour.

Instructions on how to use createSitemap.js:
https://github.com/WebOfTrust/WOT-terms/blob/main/search-index-typesense/createSitemap.mjs
