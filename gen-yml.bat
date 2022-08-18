#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
SOURCE=Terms-WOT-manage.csv   # will stay in tact
INPUT=Terms-workfile.csv      # will be overriden
Yf=wot_sidebar.yml            # resulting yml file

sed '1d' "${SOURCE}" > "${INPUT}"   # remove the header from the file by creating a work file
BASEDIR='_data/sidebars'

# ------------------------------------------

OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
IFS=$';'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
filename="./$BASEDIR/$Yf"

# Start write to resulting yaml file
echo "# This is your automatically generated TOC using gen-yml.bat. The sidebar code loops through sections here and provides the appropriate formatting." > $filename
echo "" >> $filename
echo "entries:" >> $filename
echo "- title: sidebar" >> $filename
echo "  product: Glossary KERI/ACDC" >> $filename
echo "  version: 0.2" >> $filename
echo "  folders:" >> $filename
echo ""  >> $filename
echo "  - title:" >> $filename
echo "    output: pdf" >> $filename
echo "    type: frontmatter" >> $filename
echo "    folderitems:" >> $filename
# echo "  - title:" >> $filename

while read Key ToIP_Fkey Philvid_Fkey Term text	link vidstart level Cat_PTEL Cat_IPEX Cat_OOBI Cat_CESR Cat_ACDC Cat_KERI Cat_SAID Cat_GLEIF
do
    Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
    Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename

    text=$( echo $text | sed -e 's/\:/\;/g')   # replace ':' with ';' in front matter 

	echo "Key: $Key"   >> $filename
    echo "Key: $Key"                   # >> $filename
    echo "ToIP-Fkey: $ToIP_Fkey"       # >> $filename
	echo "Philvid-Fkey: $Philvid_Fkey" # >> $filename
	echo "Term: $Term"       # >> $filename
    echo "text: $text"       # >> $filename
    echo "Link: $link"       # >> $filename
	echo "Videostart: $vidstart" # >> $filename
	echo "Level: $level"      # >> $filename
    echo "Cat_PTEL: $Cat_PTEL" # >> $filename
    echo "Cat_IPEX: $Cat_IPEX" # >> $filename
    echo "Cat_OOBI: $Cat_OOBI" # >> $filename
    echo "Cat_CESR: $Cat_CSER" # >> $filename
    echo "Cat_ACDC: $Cat_ACDC" # >> $filename
    echo "Cat_KERI: $Cat_KERI" # >> $filename
    echo "Cat_SAID: $Cat_SAID" # >> $filename
    echo "Cat_GLEIF: $Cat_GLEIF" # >> $filename
  
done < $INPUT
IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value