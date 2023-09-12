---

---

# Install this project

This repo is a documentation website with a Typesense search engine and a scraper engine that collects documentation.

This website is built in Docusaurus ( https://docusaurus.io ). The Typesense search engine is integrated in Docusaurus. Also the scraper engine code is inside the Docusaurus code.

This repo has three parts:
* **Docusaurus documentation** site
* Typesense **search engine**
* Chatbot (under construction)

## Run website

What should you do to install this project:

* Run `git clone url`

* Run `npm install`

* Create `.env` based on `.env.example` and secret info

* Now you can run a local version of the **Docusaurus website**:
`$ npx docusaurus start`. The search engine also works now.


## Run Scrapers

On your OS install (use a package manager e.g., apt, yum, brew, etc.):

* `jq` (https://stedolan.github.io/jq/)
* `curl` (https://curl.se/)
* `ImageMagick` (https://imagemagick.org)


Now you can refresh the **search index** if needed:
`$ sh search-index-typesense/main.sh`

This takes about half an hour.

Instructions on how to use createSitemap.js:
https://github.com/WebOfTrust/WOT-terms/blob/main/search-index-typesense/createSitemap.js




