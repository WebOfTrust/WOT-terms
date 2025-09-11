---
Status: final
---
Result: | @kordwarshuis TBW |

# Install this repo

What is this: [Github README](https://github.com/weboftrust/WOT-terms/README) describes the download, install, configuration and launch of this project.

For who: site maintainer

- Clone this repository
- Run `npm install`
- Install four extra libraries manually (for the scrapers functionality):
  - `jq` (<https://stedolan.github.io/jq/>)
  - `curl` (<https://curl.se/>)
  - `ImageMagick` (<https://imagemagick.org>)
  - `sitemap-generator-cli` (<https://github.com/lgraubner/sitemap-generator-cli>)

To install `jq`, `curl`, `ImageMagick`, use a package manager e.g., apt, yum, brew, etc.

To install `sitemap-generator-cli` look here: <https://github.com/lgraubner/sitemap-generator-cli?tab=readme-ov-file#install>

Now you can refresh the **search index** if needed:
`$ sh search-index-typesense/main.sh`

This takes about half an hour.

Instructions on how to use createSitemap.js:
<https://github.com/WebOfTrust/WOT-terms/blob/main/search-index-typesense/createSitemap.mjs>
