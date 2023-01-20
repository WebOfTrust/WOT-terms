#!/bin/bash
# Purpose: Write frontmatter to the top of resources like whitepapers
# By: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
#SOURCE="Terms-WOT-manage.txt"   # will stay in tact
INPUT="Resources-workfile.txt"      # will be overridden
#HEADER="Header-workfile.txt"    # will be overridden

#sed -n '1p' "${SOURCE}" > "${HEADER}"   # add the header from the file by creating a work file

#string=$(cat "${HEADER}")
# echo "${string//$'\n'/\\n}"
SUBSRC='mdfiles' 
BASEDIR='_resources'
DESTDIR='resources'  # not used yet
DESTPRE='resrc'  
let TEXTSTRLEN=200
# All files found in _resources/mdfiles will be processed and get this destination pre-position DESTPRE
echo "$( ls ./${BASEDIR}/${SUBSRC})"  > "${INPUT}"   # remove the header from the file by creating a work file

#function create_tagstring (){

#CATLIST=(9 10 11 12 13 14 15 16) # Order numbers of the columns in the WOT-terms-manage sheet: all categories 
#COLS=("PTEL" "IPEX" "OOBI" "CESR" "ACDC" "KERI" "SAID" "GLEIF")  # Column names WOT-terms-manage sheet
#TAGSTRING=""
#for i in "${!COLS[@]}"; do
  # echo "Cat_"${COLS[$i]}
#  testVar=$(echo "Cat_"${COLS[$i]})
#  testVaL=$(echo ${!testVar})
#    if [[ ${testVaL} -gt 0 ]]; then
#        TAGSTRING=${TAGSTRING}",${COLS[$i]}"
#    fi  # a term is mentioned in this category
#done  # for loop
#TAGSTRING=$( echo "$TAGSTRING" | sed 's/^,//'  ) # Remove the leading comma
#echo "${TAGSTRING}"
#}
  
# Copy all the ToIP wiki glossary files to $SUBSRC/$trm.md, Jekyll will use this dir as a source
# ------------------------------------------

OLDIFS=$IFS               # $IFS is a special shell variable in Bash
IFS=';'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while read mdFile
do
#    create_tagstring  # after this the variable TAGSTRING contains the tags / category for this term

topic=$( echo $mdFile |  sed -e 's/.md//' )  # remove  trailing file-ext
filename="./$BASEDIR/${DESTPRE}_${mdFile}" # Write an altered file one level up the tree
let lineNrs=20 # precautiously take enough lines after you've found 'Abstract'

# The first grep regex needs to find headings in md files '# ' to \'######'any depth and also '- ' to '---' before the word Abstract. 
text="$(grep -A ${lineNrs} -E '\-{1,3}[[:blank:]]{1,}[aA]bstract|\#{1,6}[[:blank:]]{1,}[aA]bstract' $BASEDIR/$SUBSRC/$mdFile)"

text="$(echo $text | sed '1,/--- middle/!d' | sed '1,/#[#]* /!d')" # delete everything after '--- middle' or a new markdown header

text=$(echo $text | awk '/^[[:blank:]]{1,}--- [aA]bstract/{next} /^[[:blank:]]{1,}--- middle/{next} /^#[#]* /{next} {print}' | cat)  # leave out records out that we don't need

text=$(echo $text |tr -d '\n' | sed 's/:/_/g' | sed 's/---/_/g' | sed 's/---/_/g' | sed 's/[{}]/%/g') 
# strip newlines,: and front matter block code (to underscore), and change value mapping delimiters {{ and }} (not allowed in frontmatter) to %

text=$(echo $text | cut -c 1-$TEXTSTRLEN ) 

# the abstract block needs to be ended with '--- middle' or a new header

    echo "---" > $filename
    echo "layout: default" >> $filename
    echo "title: Resource - $topic" >> $filename
 #   if [[ ! -z $TAGSTRING ]]; then
 #     echo "tags: ["$TAGSTRING"]" >> $filename
 #   fi 
	echo "summary: $text" >> $filename

#	echo "Link: $link" >> $filename
#	echo "Level: $level" >> $filename
    perma="/${DESTPRE}_${topic}.html"  
    echo "permalink: $perma" >> $filename
    echo "sidebar: all_lvl3_wot_sidebar" >> $filename   # beware : hard coded!
    echo "folder: ${DESTDIR}" >> $filename # not used yet
    echo "---" >> $filename
    echo "" >> $filename
    echo "{{ page.title }}" >> $filename
    echo "" >> $filename
    echo "{{ page.collection }} - {{ page.Resource }}" >> $filename
    echo "" >> $filename
    echo "   {{ page.summary }}" >> $filename
    echo "" >> $filename

    if [  -f "$BASEDIR/$SUBSRC/$mdFile" ]; then

        echo "{% include_relative $SUBSRC/$mdFile %}" >> $filename
    fi

    echo "" >> $filename
    echo " {% include links.html %} " >> $filename

done < $INPUT
IFS=$OLDIFS   # $IFS is a special shell variable in Bash, set it back to the old value

say -v Ellen "Hi Henk, de taak zit erop."