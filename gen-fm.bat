#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
INPUT=Terms-transcription-Phils-demo-IIW.csv
sed -i.bak '1d' $INPUT    # remove the header from the file, create a backup file
SUBSRC='glossary' 
BASEDIR='_terms'

# Copy all the ToIP wiki glossary files to $SUBSRC/$trm.md, Jekyll will use this dir as a source
# ------------------------------------------

OLDIFS=$IFS               # $IFS is a special shell variable in Bash
IFS=';'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while read trm txt lnk vid lvl void1 void2 void3
do
    trm=$( echo $trm |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
    trm=$( echo $trm | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename

    filename="./$BASEDIR/$trm.md"
    txt=$( echo $txt | sed -e 's/\:/\;/g')   # replace ':' with ';' in front matter 

    echo "---" > $filename
	echo "Term: $trm" >> $filename
	echo "Text: $txt" >> $filename
	echo "Link: $lnk" >> $filename
	echo "Videostart: $vid" >> $filename
	echo "Level: $lvl" >> $filename
    echo "---" >> $filename
    echo "" >> $filename
    echo "{{ page.collection }} - {{ page.Term }}" >> $filename
    echo "" >> $filename
    echo "   {{ page.text }}" >> $filename
    echo "" >> $filename

    if [  -f "$BASEDIR/$SUBSRC/$trm.md" ]; then
        echo "{% include_relative $SUBSRC/$trm.md %}" >> $filename
    fi

    # the script adds the include_relative only if we have .md external sources in $SUBSRC/$trm.md available
    # Conditionally, because if there's no source file available, an 'include_relative' will fail during Jekyll build

done < $INPUT
IFS=$OLDIFS   # $IFS is a special shell variable in Bash, set it back to the old value