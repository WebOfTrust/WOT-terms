#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
# Include the usage function:
# .  /gen-usage.bat
# ------------------------------------------
USERNAME=$(id -un)
DATETIME=$(date)
SOURCE=Terms-WOT-manage.txt   # will stay in tact
INPUT=Terms-workfile.txt      # will be overridden
HEADER=Header-workfile.txt    # will be overridden
OUTYAMLFILE=wot_sidebar.yml          # resulting yml file

sed '1d' "${SOURCE}" > "${INPUT}"   # remove the header from the file by creating a work file
sed -n '1p' "${SOURCE}" > "${HEADER}"   # add the header from the file by creating a work file

string=$(cat "${HEADER}")
# echo "${string//$'\n'/\\n}"

length=${#string}

if [  ${length} -gt 0 ]; then  # non-empty header string
  IFS=';' read -r -a COLS <<< "${string}"  # Colums names in an array
fi    # if length > 0


# Some guidance of the output
BASEDIR='_data/sidebars'   # Jekyll theme needs the yaml data in this dir
NAMESTRLEN=20     # We need short menu item names

# ------------------------------------------
if [ $# -lt 1 ]; then
  MENUNAME="Overview"
  CATNAME="all"
fi   # lt 1

# Getopts handling or arguments handling

while [ ! -z "$1" ]; do
    case $1 in
        --name|-n)
            shift
            echo "You entered name as: $1"
            MENUNAME=$1
            ;;
        --column|-c)
            shift
            echo "You entered category as: $1"
            CATNAME=$1
            ;;
        *)
            show_usage
            ;;
    esac
if [ $# -gt 0 ]; then
  shift
fi
done    # while loop getopts

# Verifying the existence of CATNAME in COLS array and we need the index
if [[ ${CATNAME} == "all" ]]; then
  COLUMNINDEX=999  # This means "all categories relevant"
else    # looking for a matching column name
  found='false'
  for i in "${COLS[@]}"
    do
      if [ "$i" == "$CATNAME" ] ; then
      COLUMNINDEX=$i     # assigns the first exactly matching column, following ignored
      found='true'
      fi  # found i
    done  # for loop
  if [ "$found" == "false"]; then 
    echo "${CATNAME} not found in ${COLS[*]}"
    exit 1
  fi # found is false, CATNAME not in COLS
fi # CATNAME == all

OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
IFS=$';'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
FILENAME="./$BASEDIR/$OUTYAMLFILE"

# Start write to resulting yaml file
echo "# This script automatically generated this Terms menu YAML file , with arguments ${MENUNAME} and ${CATNAME}."  > $FILENAME 
echo "# The sidebar code loops through sections here and provides the appropriate formatting." >> $FILENAME
echo "# Generated running $(basename ${0}) located in $(dirname ${0}), by UID ${USERNAME} on ${DATETIME}." >> $FILENAME
echo "" >> $FILENAME
echo "entries:" >> $FILENAME
echo "- title: sidebar" >> $FILENAME
echo "  product: Glossary KERI/ACDC" >> $FILENAME
echo "  version: 0.2" >> $FILENAME
echo "  folders:" >> $FILENAME
echo ""  >> $FILENAME
echo "  - title:" >> $FILENAME
echo "    output: pdf" >> $FILENAME
echo "    type: frontmatter" >> $FILENAME
echo "    folderitems:" >> $FILENAME
echo "    - title:" >> $FILENAME
echo "      url: /titlepage.html" >> $FILENAME
echo "      output: pdf" >> $FILENAME
echo "      type: frontmatter" >> $FILENAME
echo "    - title:" >> $FILENAME
echo "      url: /tocpage.html" >> $FILENAME
echo "      output: pdf" >> $FILENAME
echo "      type: frontmatter" >> $FILENAME
echo "" >> $FILENAME
echo "  - title: $menuName" >> $FILENAME
echo "    output: web, pdf" >> $FILENAME
echo "    folderitems:" >> $FILENAME

while read Key ToIP_Fkey Philvid_Fkey Term text	link vidstart level Cat_PTEL Cat_IPEX Cat_OOBI Cat_CESR Cat_ACDC Cat_KERI Cat_SAID Cat_GLEIF
do
    Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
    Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename

    text=$( echo $text | sed -e 's/\:/\;/g')   # replace ':' with ';' because in front matter ':' has a meaning and can occur only once per line.

    if [ $Cat_KERI -gt 0 ]; then
      echo "" >> $FILENAME
        if [ ${#$Term} -gt $NAMESTRLEN ]; then
          nameTerm = ${$Term:0:$NAMESTRLEN}
          echo "    - title: $nameTerm" >> $FILENAME
          echo "      url: $link" >> $FILENAME
          echo "      output: web, pdf" >> FILENAME
        fi  
    fi
    echo "Key: $Key"                   # >> $FILENAME
    echo "ToIP-Fkey: $ToIP_Fkey"       # >> $FILENAME
	echo "Philvid-Fkey: $Philvid_Fkey" # >> $FILENAME
	echo "Term: $Term"       # >> $FILENAME
    echo "text: $text"       # >> $FILENAME
    echo "Link: $link"       # >> $FILENAME
	echo "Videostart: $vidstart" # >> $FILENAME
	echo "Level: $level"      # >> $FILENAME
    echo "Cat_PTEL: $Cat_PTEL" # >> $FILENAME
    echo "Cat_IPEX: $Cat_IPEX" # >> $FILENAME
    echo "Cat_OOBI: $Cat_OOBI" # >> $FILENAME
    echo "Cat_CESR: $Cat_CSER" # >> $FILENAME
    echo "Cat_ACDC: $Cat_ACDC" # >> $FILENAME
    echo "Cat_KERI: $Cat_KERI" # >> $FILENAME
    echo "Cat_SAID: $Cat_SAID" # >> $FILENAME
    echo "Cat_GLEIF: $Cat_GLEIF" # >> $FILENAME
  
done < $INPUT
IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value