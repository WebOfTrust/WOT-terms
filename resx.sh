
#!/bin/bash
# Purpose: TEXT selective link replacement with variables, on the basis of RULES, a LIST of terms 
# and a POPUP description file with terms.
# Author: Henk van Cann
# Arguments: 
## firstN = is number of free and raw terms in text to replace with popup and link. Free means no link yet.
## ModM = is number of visible terms to skip, replace every M'th visible word after N in the text.
# Make/Take LIST.txt: term, link, description, level, cat_*
## Filter lenght(term), level>lev, cat in cat_*

# Check internal consistency LIST.txt, make unique on terms
# Make/Take POPUP.yml: term, description
# Check internal consistency POPUP.yml, make unique on terms
# Optional - Check external consistency LIST.txt and POPUP.yml: popup contains at least all list terms
# Sort LIST on length term and then alphabeth
# Pull TEXT through localizer: and find replace links with "term_*"
# RULES:
## match reserved word list with TEXT and mark+markcount 
## linkurl * is href="*",  ](*), http://* , https://* 
## linktxt @ is >@</a> [@](
## text in linkurl -> mark, don't replace
## text in linktxt -> mark, don't replace, but markcount
## text in raw -> mark, replace, markcount
## replace firstN "free" occurrence of term
## replace ModM "free" occurrence of term

# Per LIST all terms
## Per term
## if searchterm not in POPUP.yml, skip term
## Check for existing marking 
## if mark >= current process then error
## start counting searchterm
## if mark contains searchterm in linktxt then 
### if linktxt == searchterm -> error 
## markcount++
## markreplace firstN, ModM
## replace

# Per TEXT after all terms in LIST processed
## remove all markers








linky="http://hier.komt.wat/nogiets.html"
tterm="self-certifying-identifier"

cp testRL.md temp1.txt

sed -r "s|(${tterm})+| <a href=\"${linky}\" data-toggle=\"tooltip\" data-original-title=\"{{ site.data.terms.\1 }}\">\1</a>|g"  temp1.txt > testRLOUT.md
# cp temp2.txt temp1.txt