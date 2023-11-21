## Welcome to the WebofTrust terms wiki!

The wiki also serves the glossary terms for the underlying and related techniques to ACDC, like KERI, CESR and OOBI.

There are a few [practical rules](https://wiki.trustoverip.org/display/HOME/Terms+Wikis) from the originator ToIP to get these wiki terms through their equivalent [github actions script](https://github.com/WebOfTrust/WOT-terms/actions/workflows/content-fetch-and-deploy-update-glossary.yml), please:
1. beware all new wiki items you **create**, lead to new .md files. We'd like to know
2. introduce lowercase names with spaces (they will convert into lower case names with dashes between the words)
3. start with ## Definition header; [example](https://github.com/WebOfTrust/WOT-terms/wiki/composable-event-streaming-representation)
4. start with uppercase abbreviations with only the "## See" header; [example](https://github.com/WebOfTrust/WOT-terms/wiki/CESR)
5. don't **delete** items (i.e. .md files) but make clear they are depreciated and / or link to the new concept / term
6. don't change or **update** the name of an item single handed, for it might change the concept / meaning for other people and create dead links for those who **read** - or link to the term. Please open an issue or a PR to discuss first. 
7. any other immediate updates and amendments welcome, the revisions are available for us to be able to (partially) revert if something unwanted or unexpected happens.

### KERISSE reads this wiki

The _weboftrust_ wiki glossary is currently our input tool for our KERI Suite glossary. However, we regularly scrape the wiki into [KERISSE](kerisse.org), we add features and metadata, we connect relevant matching terms from related glossaries and finally we index it for the KERI Suite Search Engine (KERISSE).

_Have fun CRU-ing!_  
'* CRU=Create Read Update