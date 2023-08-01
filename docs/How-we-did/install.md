---
sidebar: HowWeDidSidebar
---

# Install this project

This repo has three parts:
* **Docusaurus documentation** site
* Typesense **search engine**
* Chatbot (under construction)

What should you do to install this project:

* Run `git clone url`

* Run `npm install`

* Now you can run a local version of the **Docusaurus website**:
`$ npx docusaurus start`

* Install `jq` (https://stedolan.github.io/jq/)
Use a package manager (e.g., apt, yum, brew, etc.).

* Install `curl` (https://curl.se/)
Use a package manager (e.g., apt, yum, brew, etc.).

* Create `.env` based on `.env.example` and secret info

* Now you can refresh the **search index** if needed:
`$ sh search-index-typesense/main.sh`


