#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# ------------------------------------------
INPUT=Terms-transcription-Phils-demo-IIIW.csv
OLDIFS=$IFS
IFS=';'
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read trm txt lnk vid lvl void1 void2 void3
do
    trm=$(echo $trm | sed -e 's/[^A-Za-z0-9._-]/_/g')
    filename="./_terms/$trm.md"
    echo "---" > $filename
	echo "Term: $trm" >> $filename
	echo "Text: $txt" >> $filename
	echo "Link: $lnk" >> $filename
	echo "Videostart: $vid" >> $filename
	echo "Level: $lvl" >> $filename
    echo "---" >> $filename
    echo "" >> $filename
    echo "{% include_relative gloss/$trm.md %}" >> $filename
done < $INPUT
IFS=$OLDIFS