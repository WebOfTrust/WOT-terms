#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
SOURCE=Terms-WOT-manage.txt   # will stay in tact
INPUT=Terms-workfile.txt      # will be overridden
HEADER=Header-workfile.txt    # will be overridden

sed '1d' "${SOURCE}" > "${INPUT}"   # remove the header from the file by creating a work file
sed -n '1p' "${SOURCE}" > "${HEADER}"   # add the header from the file by creating a work file

string=$(cat "${HEADER}")
# echo "${string//$'\n'/\\n}"

SUBSRC='glossary' 
BASEDIR='_terms'
DESTPRE='term'   

# Copy all the ToIP wiki glossary files to $SUBSRC/$trm.md, Jekyll will use this dir as a source
# ------------------------------------------

OLDIFS=$IFS               # $IFS is a special shell variable in Bash
IFS=';'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while read Key	ToIP_Fkey	Philvid_Fkey	Term	 text	 link	Philvid_start	 level	Cat_PTEL	Cat_IPEX	Cat_OOBI	Cat_CESR	Cat_ACDC	Cat_KERI	Cat_SAID	Cat_GLEIF
do
    Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
    Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename

    filename="./$BASEDIR/${DESTPRE}_${Term}.md"
    text=$( echo $text | sed -e 's/\:/\;/g')   # replace ':' with ';' in front matter 

    echo "---" > $filename
	echo "Term: $Term" >> $filename
	echo "Text: $text" >> $filename
	echo "Link: $link" >> $filename
	echo "Videostart: $vidstart" >> $filename
	echo "Level: $level" >> $filename
    perma="/${DESTPRE}_${Term}.html"  
    echo "permalink: $perma" >> $filename
    echo "folder: "

   # echo "folder: terms" >> $filename
    echo "---" >> $filename
    echo "" >> $filename
    echo "{{ page.collection }} - {{ page.Term }}" >> $filename
    echo "" >> $filename
    echo "   {{ page.text }}" >> $filename
    echo "" >> $filename

    if [  -f "$BASEDIR/$SUBSRC/$Term.md" ]; then
    
        echo "{% include_relative $SUBSRC/$Term.md %}" >> $filename
    fi

    echo "" >> $filename
    echo " {% include links.html %} "

    # the script adds the include_relative only if we have .md external sources in $SUBSRC/$trm.md available
    # Conditionally, because if there's no source file available, an 'include_relative' will fail during Jekyll build

done < $INPUT
IFS=$OLDIFS   # $IFS is a special shell variable in Bash, set it back to the old value