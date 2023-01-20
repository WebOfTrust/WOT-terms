---
layout: default
Title: HowTo
tags: [KERI,ACDC]
permalink: /hwt_pull-in-markdown-documents.html
sidebar: all_lvl3_wot_sidebar
folder: 
---
# Pull in markdown documents

Ietf draft are standardized write-ups for experts. Although these drafts contains loads of valuable information and learning resources, the layout and accessibility is cumbersome for training and education purposes.
Therefore we pull in the original documents in markdown format in our Jekyll site and semi-automatically reorganize the data using our Terms and Glossaries.

## How to find a document
Search the [WebofTrust Github repos](https://github.com/WebOfTrust/ietf-keri/blob/main) for an interesting resource.

<img src="https://hackmd.io/_uploads/ByvtKgBls.png)" width="600">
    
## Save the doc as a 'raw' .md file

### Where?
In your local copy of the repository WebofTrust [WOT-terms](https://github.com/WebOfTrust/WOT-terms) It MUST be in:
- the root directory of the Jekyll site. 
- In the `gh-pages` branch

## Next?
We are going to process this document with shell scripts and Jekyll to produce a copy of the documents in a static Jekyll website that has sidebars, filter options, automatic links in text to the glossary etc.

