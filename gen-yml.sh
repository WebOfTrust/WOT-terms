#!/bin/bash
# Purpose: Read Semicolon Separated File
# Henk van Cann
# It generates two types of sidebar yml files for the Jekyll Documentation Theme
# One is a 2-level harmonica and the second type is a 1-level harmonica
# 2-level: all categories | 1-level: selected Category
# argument to the script: 'all' (2-level) or 'Cat_XXXX' where XXXX is one Cat
# ------------------------------------------
# Includes the usage function:
# source ./gen-usage.sh
# ------------------------------------------
# echo "bash version: "  $(bash --version)

USERNAME="$(id -un)"
DATETIME="$(date)"
SOURCE="Terms-WOT-manage.txt"   # will stay in tact
INPUT="Terms-workfile.txt"            # will be overridden
AWKOUT="AwkOut-workfile.txt"          # will be overridden
AWKOUTMENU="AwkOutMenu-workfile.txt"  # will be overridden
HEADER="Header-workfile.txt"          # will be overridden
# Some guidance of the output
BASEDIR='_data/sidebars'   # Jekyll theme needs the yaml data in this dir
NAMESTRLEN=30              # We need short menu item names
OUTYAMLFILE="wot_sidebar.yml"          # resulting yml file trailer *wot_sidebar.yml
DESTPRE="term"  # Jekyll Documentation Theme convention: a pre-text to recognize the origin of the output files
CATLIST=(9 10 11 12 13 14 15 16) # Order numbers of the columns in the WOT-terms-manage sheet: all categories 
INDEXARRAY=(1 4 6 8) # Order numbers of the content columns in the WOT-terms-manage sheet
MENUDONE=0  # The yaml file has certain heights of menu, height "0"is the entrance level for writing the yaml file

cat ${SOURCE} | tr -cd '\11\12\40-\176' > "${INPUT}" # want to get rid of non-printable character Excel leaves in the text export
cat ${INPUT} | sed -n '1p' > "${HEADER}" # create a file with the columns headers
cat ${INPUT} | sed '1d' > "${INPUT}" # create a file with only the data (no header)

string="$(cat ${HEADER})" # pull the header file into a string for testing presence of a header row
length=${#string}
if [  ${length} -eq 0 ]; then  # empty header string; construct unit tested
exit 1
fi    # if length = 0

declare -a COLS  # pull the file into an indexed array
#COLS=("$(cat ${HEADER} | tr ';' '\n')")  # New way of getting the column headers in an array: replace separator ; with \n and feed array
OIFS="$IFS"; IFS=';'; COLS=($(<${HEADER})); IFS="$OIFS"
# The -a option of read caused a lot of hassle: it was allowed in Vicual Studio Code, but not in bash 5.1.x on MAcOS
# IFS=';' read -ra COLS <<< "${string}"  # Column names in an array - OLD WAY
#for i in "${COLS[@]}"; do echo $i; done

# ------------------------------------------
if [ $# -lt 1 ]; then
  MENUNAME="Overview"
  CATNAME="all"
  LEVELNR="1"  # level of the user, "1" is all terms will be shown in a certain categorie
fi   # lt 1

# Getopts handling or arguments handling

while [ ! -z "${1}" ]; do
    case $1 in
        --name|-n)
            shift       # echo "You entered name as: $1"           
            MENUNAME=${1}
            ;;
        --column|-c)
            shift       # echo "You entered category as: $1"
            CATNAME=${1}
            ;;
        --level|-l)
            shift       # echo "You entered level as: $1"
            LEVELNR=${1}
            ;;
        *)
            show_usage
            ;;
    esac
if [ $# -gt 0 ]; then
  shift
fi
done    # while loop getopts

# Test whether LEVEL has an appropriate value
case $LEVELNR in 
  1|3|7)
    echo "a valid level has been assigned: $LEVELNR" # construct is unit tested
    ;;
  *)
    echo "an invalid level number (${LEVELNR} ) has been assigned"
    exit 3
    ;;
esac

# Verifying the existence of CATNAME in COLS array and we need the 
if [[ ${CATNAME} == "all" ]]; then
  COLUMNINDEX=999  # This means "all categories relevant"
else    # looking for a matching column name
  found='false'
  for i in "${!COLS[@]}"
    do
      if [[ "${COLS[$i]}" == "$CATNAME" ]] ; then
      let COLUMNINDEX=$i+1     # assigns the index number to use in AWK command of the first exactly matching column, following ignored
      found='true'
      CATLIST=($COLUMNINDEX)   # overwrite the CATLIST for we have found and matched a single selected Category
      fi  # found i
    done  # for loop
  if [[ "$found" == "false" ]]; then 
    echo "${CATNAME} not found in ${COLS[*]}"
    exit 1
  fi # found is false, CATNAME not in COLS
fi # CATNAME == all

# Filter the relevant terms (lines in the INPUT)
#####################################
# IMPORTANT In these AWK command, I haven't been able to make the column number variable :
#           Therefore Level column is fixed $8 
#           Therefore the Cat_XXXXX columns are fixed too: $9-$16
# We strip the number of records (rows) and field (columns) according to the arguments passed
# The Workfile INPUT will be overriden in the consequetive steps

if [ $COLUMNINDEX = "999" ]; then  # all categories
  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
else  # one specific category selected
  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
fi   # all cats or just one
# The fields array is initialized with the content record of the WOT-terms-sheet plus Category columns
for i in ${INDEXARRAY[@]}; do
    fields="$fields,\$$i"
done
fields=$( echo "$fields" | sed 's/^,//' ) # Remove the leading comma

# Below select the relevant records (terms) for the sheet and sort on second column of the output
# We want no empty keys: $4 represents the keyfield for this bashscript: it's the term used in the ToIP glossary
cat "${INPUT}" | awk -v levelNr=$LEVELNR 'BEGIN { FS=OFS=";" }  {if (($4 != "") && ($8 >= levelNr)) print }' | sort -t ';' -b -k2.1,2.10 --ignore-case -o "${AWKOUT}"
# 'Sort' explanation -> -t : the column delimiter in the pipe, -k2 : column 2 resulting from the pipe, on char 1-10, -b : ignore leading blanks in a field, -o : output file

####     ####     ####     ####     ####     ####     ####     ####     
function split-files (){
# Since we'd like to construct UI menus from a large database file, we need a way to provide. 
# Global variables: AWKOUTMENU : filename, NUMMENUITEMS : integer
# balanced proportions. By splitting files into handy pieces we create overseeable menu-structures in several layers
####     ####     ####     ####     ####     ####     ####     ####      

IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value

  local num_files=$1
  if  [ -z $1 ]; then
    local num_files=7          # set default value from the number of (sub) menuitems per menu (item)   
  else 
    if [[ $1 -gt 10 ]]; then   # menus bigger than this number of items are not permitted
    exit 7
    fi        # maximum number of split-menu files generated, default 7  
  fi     # no arguments passed 
  
  if [ -z $2 ]; then
    exit 8
  fi   # any non-empty string as input is accepted as a second argument

 local baseoutname=$2  # The output files as a result of the split will be recognizable and processable in order
 
  # Calculate the number lines (records) per file from the number of files
  echo $num_files
  echo ${NUMMENUITEMS}
  let x=${NUMMENUITEMS}+${num_files}
  let y=${num_files}
  let lines_per_file=$x/$y
  
  # Split the actual file, maintaining all lines (records)
  split -l ${lines_per_file} "${AWKOUTMENU}" "${baseoutname}"
  # Debug information echo "Total lines     = ${NUMMENUITEMS}"; echo "Lines  per file = ${lines_per_file}"; wc -l ${baseoutname}*
} # end function split-files

####     ####     ####     ####     ####     ####     ####     ####     ####     ####     
function group_menu_items (){

if  [ -z $1 ]; then
    local menulvl=2              # set default value if no value passed
  else 
    if [[ $1 -gt 3 ]] || [[ $1 -lt 1 ]]; then
      exit 5
    else
      local menulvl=$1
    fi   # check maximum depth of the menus in the Jekyll Documentation Theme
fi # $1 check

if  [ -z $2 ]; then
      echo "No category provided, second argument of the function call is: $2."    # no category provided, so split of all categories at this level
  else 
    case $2 in
        9)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($9 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        10)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($10 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        11)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($11 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        12)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($12 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        13)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($13 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        14)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($14 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        15)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($15 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        16)
            CATNR=$2; echo "You entered Category: $2"
            cat "${AWKOUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($16 >= "1") print '$fields' }' > "${AWKOUTMENU}"
            ;;
        *)
            echo "You entered no valid Category: $2; top level menu items will be generated in the yaml file"
            
            ;;
    esac   # Category switch
fi  # $2 check 

if [  ${menulvl} -eq 1 ] && [  ${menulvl} -gt ${MENUDONE} ]; then 
  # Start write to resulting yaml file
  echo "# This script automatically generated this Terms menu YAML file , with arguments" > $FILENAME
  echo "# menuname: ${MENUNAME}, catname: ${CATNAME} and level: ${LEVELNR}."  >> $FILENAME 
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
  # one selected category OR "Overview" in level 1 menu
  echo "  - title: $MENUNAME" >> $FILENAME
  echo "    output: web, pdf" >> $FILENAME
  echo "    folderitems:" >> $FILENAME
  echo "    - title:" >> $FILENAME
  echo "      url: /tocpage.html" >> $FILENAME
  echo "      output: web, pdf" >> $FILENAME
  echo "      type: frontmatter" >> $FILENAME
  MENUDONE=1  # we confirm that all height "1" data has been writen to the file 

else # we want recursive menu creation calls
  if [ ${menulvl} -ge 2 ] && [  ${menulvl} -gt ${MENUDONE} ]; then
    local splitwfbase="Split_"
    [ ! -f $AWKOUTMENU ] && { echo "$AWKOUTMENU file not found"; exit 99; }

    NUMMENUITEMS=$(wc -l < "$AWKOUTMENU" | xargs )  # xargs: we want to strip the leading and trailing blanks off the variable

    local numSplitFiles="1"  # Default is we keep just one file

    if [[ "${NUMMENUITEMS}" -gt "100" ]]; then
      echo $NUMMENUITEMS
      let numSplitFiles=${NUMMENUITEMS}/20

      # group terms drastically
      echo $NUMMENUITEMS
    else 
      if [[ "${NUMMENUITEMS}" -gt "14" ]]; then
      # echo $NUMMENUITEMS
      let numSplitFiles=${NUMMENUITEMS}/7
      # group terms
      fi # > 10 items
    fi # > 100 items

    let numSplitFiles=$(echo $numSplitFiles | awk '{print int($1+0.5)}') ## round the number
    split-files $numSplitFiles "${splitwfbase}"  # This takes $AWKOUTMENU as a source

    for f in ${splitwfbase}*; do echo "Processing $f file..."
      local fromRec="$(head -n1 $f)"
      local toRec="$(tail -n1 $f)"
      # We'd like to use substr: substr(s, i [, n]) It return the at most n-character 
      # substring of s starting at i. If n is omitted, use the rest of s
      from=$( echo "$fromRec" | awk 'BEGIN { FS=OFS=";" } { print substr($2, index(0,3))} ')
      to=$( echo "$toRec" | awk 'BEGIN { FS=OFS=";" } { print substr($2, index(0,3))}') 
      local menuName="${from} - ${to}" # We create a menu item name that holds the Alphabetic range of the items under it.
      
      # Create the yaml output for the menu per menulvl
      local indentSpaces="  " # 2 spaces
      echo "" >> $FILENAME
      echo "${indentSpaces}- title: $menuName" >> $FILENAME
      echo "${indentSpaces}  output: web, pdf" >> $FILENAME
      echo "${indentSpaces}  folderitems:" >> $FILENAME
      if [ ${menulvl} -eq 3 ]; then
        echo "M3nulevel: ${menulvl}"
        indentSpaces="      "  # 6 spaces
      else
        if  [ ${menulvl} -eq 2 ]; then
          echo "Menul3vel: ${menulvl}"
          indentSpaces="    "  # 4 spaces
        else #menulvl 1
              echo "Menulev3l: ${menulvl}"
        fi # menulvl 2 call switch
      fi # menulvl 3 call switch

      ################################################# 
      # 1 Key - 4 Term - 6 link - 8 level - YY Cat_XXXX
      #################################################
      [ ! -f $AWKOUTMENU ] && { echo "$AWKOUTMENU file not found"; exit 99; }
      OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
      IFS=';'
      while read Key Term link level $CATNAME
      do
        Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
        Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename
        # Multifunctional splitting base and filename - got it from here: https://www.oncrashreboot.com/use-sed-to-split-path-into-filename-extension-and-directory
        # echo "/User/talha/content/images/README.example.md" | sed 's/\(.*\)\/\(.*\)\.\(.*\)$/\1\n\2\n\3/'
      
        link="/${DESTPRE}_${Term}.html"  
      
        if [ ${#Term} -gt $NAMESTRLEN ]; then
          Term=$( echo $Term | cut -c 1-$NAMESTRLEN )  # shorten the Term to an acceptable menu item name
        fi  # Term too long for being menu item name
      
        echo "" >> $FILENAME
        echo "${indentSpaces}- title: $Term" >> $FILENAME
        echo "${indentSpaces}  url: $link" >> $FILENAME
        echo "${indentSpaces}  output: web, pdf" >> $FILENAME
        #echo "${indentSpaces}  folderitems:" >> $FILENAME

      # 1 Key - 4 Term - 6 link - 8 level - YY Cat_XXXX  
      done < $f # for all records in Splitfile

      IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value

    done # for all splitfiles

  else # ${menulvl} -eq 3!
    MENUDONE=3  # we confirm that all height "3" data has been writen to the file
  fi # menu level ge 2
  MENUDONE=2  # we confirm that all height "2" data has been writen to the file
fi # ${menulvl} -eq 1

if [  $COLUMNINDEX = "999" ]; then 
  # Now we'd like to go through all categories
  for i in ${CATLIST[@]}; do
   # MENUNAME=$(echo ${COLS[$i]} | sed 's/Cat_//') # we set the menu level 1 to the Cat name found in the header of the sheet
    echo "  - title: Cat_${i}" >> $FILENAME
    echo "    output: web, pdf" >> $FILENAME
    echo "    folderitems:" >> $FILENAME
    echo "    - title:" >> $FILENAME
    echo "      url: /Cat${i}_tocpage.html" >> $FILENAME
    echo "      output: web, pdf" >> $FILENAME
    echo "      type: frontmatter" >> $FILENAME
    group_menu_items 3 "$i"
  done # columns in category list

else  # we have just one category selected
  if [  $MENUDONE -le "1" ]; then 
    group_menu_items 2 "$COLUMNINDEX"
  fi # $MENUDONE = "0"

fi # all categories

} # end function group_menu_items

[ ! -f $AWKOUT ] && { echo "$AWKOUT file not found"; exit 99; }

FILENAME="./$BASEDIR/${CATNAME}_lvl${LEVELNR}_${OUTYAMLFILE}"
# echo $FILENAME

if [  $MENUDONE = "0" ]; then 
  group_menu_items 1 "Void"
fi # $MENUDONE = "0"


# 1 Key - 4 Term - 6 link - 8 level - YY Cat_XXXX  
#while read Key Term link level $CATNAME
#do

 #   Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
 #   Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename
    # Multifunctional splitting base and filename - got it from here: https://www.oncrashreboot.com/use-sed-to-split-path-into-filename-extension-and-directory
    # echo "/User/talha/content/images/README.example.md" | sed 's/\(.*\)\/\(.*\)\.\(.*\)$/\1\n\2\n\3/'
   
 #   link="/${DESTPRE}_${Term}.html"  
  
 #   if [ ${#Term} -gt $NAMESTRLEN ]; then
 #     Term=$( echo $Term | cut -c 1-$NAMESTRLEN )  # shorten the Term to an acceptable menu item name
#  fi  # Term too long for being menu item name
  
#    echo "" >> $FILENAME
#    echo "    - title: $Term" >> $FILENAME
#    echo "      url: $link" >> $FILENAME
#    echo "      output: web, pdf" >> $FILENAME

 #   echo "" >> $FILENAME
 #   echo "      subfolders:" >> $FILENAME
 #   echo "      - title: Tag archive pages" >> $FILENAME
#  echo "        output: web" >> $FILENAME
#   echo "        subfolderitems:" >> $FILENAME
#    echo "" >> $FILENAME
#    echo "         - title: Formatting pages" >> $FILENAME
#    echo "           url: /tag_formatting.html" >> $FILENAME
#    echo "           output: web" >> $FILENAME
#done < $AWKOUT

# takes argument being the level of deepness in the menu-structure we can afford to create
# Global variable: AWKOUT, AWKOUTMENU : filenames, NUMMENUITEMS : integer
####     ####     ####     ####     ####     ####     ####     ####     ####     ####     