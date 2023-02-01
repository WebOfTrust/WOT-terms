#!/bin/bash
# Purpose: Count presence per term of terms list matching a .md file
# Henk van Cann
# ------------------------------------------
# Includes the usage function:
# source ./gen-usage.sh
# ------------------------------------------
# echo "bash version: "  $(bash --version)

USERNAME="$(id -un)"
DATETIME="$(date)"
INPUT="Count-workfile.txt"            # will be overridden
AWKOUTCNT="AwkOutCount_workfile.txt"          # will be overridden
MINLENGTHACRONYM="5"  #to invoke searches of acronyms only between whitespace and/or delimiting characters
# Some guidance of the output
BASEDIR=''   # Jekyll site+theme needs the searched data somewhere in its tree
OUTCNTFILE="count.txt"          # resulting count file 
FUZZYTYPE="1"        # standard fuzziness of the search, initiating
numWords="0"         # initialization
## HERE RESERVE 2 (SEE BELOW2)

if [ $# -lt 1 ]; then
  CATNAME="all"
  #TERMSOURCE="Terms-WOT-manage.txt"   # will stay in tact
  TERMSOURCE="Terms-WOT-manage.txt" # Test file  
  #DOCNAME="draft-ssmith-keri.md" #  File to search through 
  DOCNAME="draft-ssmith-ietf-cesr.md" # Test file  
fi   # lt 1

# Getopts handling or arguments handling

while [ ! -z "$1" ]; do
    case "$1" in
        --terms|-t)
            shift       # echo "You entered termsfile as: $1"           
            TERMSOURCE="$1"
            ;;
        --fuzzy|-f)
            shift       # echo "You entered fuzziness as: $1"           
            FUZZYTYPE="$1"
            ;;    
        --docname|-d)
            shift       # echo "You entered name as: $1"           
            DOCNAME="$1"
            ;;
        --category|-c)
            shift       # echo "You entered category as: $1"
            CATNAME="$1"
            ;;
        *)
            show_usage
            ;;
    esac
if [ $# -gt 0 ]; then
  shift
fi
done    # while loop getopts


cat ${TERMSOURCE} | tr -cd '\11\12\40-\176' > "${INPUT}" # want to get rid of non-printable character Excel leaves in the text export
cat ${INPUT} | sed '1d' > "${INPUT}" # create a file with only the data (no header)

## HERE RESERVE 1 (SEE BELOW)

cat "${INPUT}" | awk 'BEGIN { FS=OFS=";" }  {if ($1 != "")  print $1,$4 }' > "${AWKOUTCNT}"

FILENAME="./${BASEDIR}${CATNAME}_${OUTCNTFILE}"

# -------------------------
function create_Pattern (){
# -------------------------
# Create a search pattern
# type 1 (default): Example "A B C D" will be searched as "A B C D", "B C D", "C D", and "D", but also "ABCD", "ABC D", "B-C D", etc
# but not as any other compound combination
# type 2: Example "A B C D" will be searched as type 1 + "A", "A B", "A B C"                             
# type 3:  Example "A B C D" will be searched as type 2 and as "A D", "B C", "A C" and "B D"; all combination are possible, but not in a changed order.
# ------------------------------------------

local count=0  # default value
local TEMPSAVEIFS="$IFS"               # $IFS is a special shell variable in Bash
local multiWord=0
IFS=' '                        # separator of words in argument-passed term

if  [ -z "$1" ]; then               # if empty
     exit 3 
else 
    local searchTerm="$1"             # searchTerm passed as an argument, 
fi     # no arguments passed 

if  [ -z "$2" ]; then               # if empty
    if [ -z "$FUZZYTYPE" ]; then
        local typeSearch=1        # default type of search
    fi  # no argument and no script argument passed     
    local typeSearch="$FUZZYTYPE"      # type of search called in script
else 
    local typeSearch="$2"             # searchTerm passed as an argument to function
fi     # no arguments passed 

if [ ${#searchTerm} -lt $MINLENGTHACRONYM ]; then
        pattern="[ .,;({]?${searchTerm}[ .,;)}]?"
else  #  term not too short
    multiWord=$(wc -w <<< "$searchTerm" | sed 's/^[ \t]*//' )  # cut leading blanks from the wc result
    if [[ $multiWord -gt 1 ]]; then # more than one word in a term
      local j=""
       local patrnLoc=""
         for j in $searchTerm; do       # no "" around $searchTerm, because we'd like to parse through the string.
            case "$typeSearch" in
            1|2)
            #     patrnLoc="$(sed -r 's/([ ])/\[\1-\]\?/g' <<< $searchTerm)"     
                patrnLoc=$patrnLoc"${j}[ -]?"
            ;;
            3)
            #     patrnLoc="$(sed -r 's/([A-Za-z0-9_])([ ])/\[\1\]\?\[\2-\]\?/g' <<< $searchTerm)"   
                patrnLoc=$patrnLoc"(${j})?[ -]?"
            ;;
            *)
                echo "An INVALID type encountered: $typeSearch"
                exit 2
            ;;
            esac  # type switch

        done   # looping j substring Term
        pattern="$patrnLoc"

    else # just the exact word in a term
        pattern="${searchTerm}"
    fi  #   more than one word in a term

fi # else if Term too short

if [ ${typeSearch}  -eq "3" ]; then
  let local i=1
  local origPattern="${pattern}"
  while [ $i -le "$multiWord" ]; do
    pattern=$(sed -r 's/(\))(\?)/\1\+/'$i'' <<<  "${origPattern}")  
    # we'd like to replace one ? for a + in the pattern
    # and this ? being replaced rotates through the pattern using the variable i
    add_count_Rows "${Key}" "${pattern}"
    let i+=1
  done

else
    add_count_Rows "${Key}" "${pattern}"
fi # FUZZYTYPE 3


IFS="$TEMPSAVEIFS" # $IFS is a special shell variable in Bash
} # end function create_Pattern

# ------------------------------------------
function add_count_Rows (){
# ------------------------------------------
# Search words (or sub term) in a Term and add a row in a database for every hit > 0 with the same key, for later grouping and sum up
# ------------------------------------------
if  [ -z "$1" ]; then               # if empty
     exit 4
else 
    local searchTerm="$1"             # searchTerm needs to be passed as an argument
fi     # no arguments passed 

if  [ -z "$2" ]; then               # if empty
     exit 5 # local pattern needs to be filled with argument  
else 
    local pattern="$2"             # searchTerm passed as an argument, 
fi     # no arguments passed 

    local len=${#searchTerm}  # function could have been called with an empty search string
    if [  ${len} -ne 0 ]; then   # we're good
    
        let local count="$( egrep -ci "${pattern}" ${DOCNAME})"
        if [ ${count} -gt 0 ]; then
            echo "${Key};${Term};${count};${pattern}" >> $FILENAME
        fi  # only add non-zero counts in the database
    fi # len searchterm -ne 0

} # end function add_count_Rows




########################################
# 1 Key - 2 Term - 3 Count - 4 Pattern #
########################################

# Start write to resulting txt file
echo "# This script automatically counts Terms in a guest file , with arguments" > $FILENAME
echo "# DOCNAME: ${DOCNAME}" > $FILENAME
echo "# The code loops through the terms, searches the target text"  >> $FILENAME
echo "# and provides the appropriate counts per pattern in two extra columns." >> $FILENAME
echo "# Generated running $(basename ${0}) located in $(dirname ${0}), by UID ${USERNAME} on ${DATETIME}." >> $FILENAME

OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
IFS=';'

[ ! -f $AWKOUTCNT ] && { echo "$AWKOUTCNT file not found"; exit 99; }

while read Key Term
do
    Term="$( echo $Term |  sed -e 's/-/#/g' )"  # remove preceding and trailing -
    Term="$( echo $Term | sed -e 's/[^ #A-Za-z0-9_]//g')"  # remove unwanted chars in term before search, leave spaces in (among other chars)!

    if [ ${#Term} -eq 0 ]; then
        echo "${Key};;;" >> $FILENAME   # skip empty records, but leave the original record in tact
        continue    # next loop iteration, we're done with this one
    fi # empty record

    # When a Term is a compound of words, we let the longest composition prevail, but we count particles too
    arrayWords=( $(echo "$Term" | tr "#" ";") )
    numWords="$( echo "${#arrayWords[@]}" )"
    patrn=""
    
    case $FUZZYTYPE in
    1) # Compose type 1: Example "A B C D" will be searched as type 1 + "D", "C D", "B C D"
       let i=$numWords-1  # index of an array starts at 0, so -1 for total number to traverse correctly
        echo "words: ${arrayWords[@]} ; numWords: ${numWords}"
        while [ $i -ge 0 ]; do
            patrn="$(echo ${arrayWords[${i}]}) ${patrn}"
            #echo $patrn
            patrn=$(echo "$patrn" | sed 's/ $//' )  # remove trailing space
            create_Pattern "$patrn" "${FUZZYTYPE}"
            let i-=1
        done
        ;;
    2) # Compose type 2: Example "A B C D" will be searched as type 1 + "A", "A B", "A B C"                              
        let j=0
        let maxIndex=$numWords-1
        echo "words: ${arrayWords[@]} ; numWords: ${numWords}"
        while [ $j -le $maxIndex ]; do
            patrn="${patrn} $(echo ${arrayWords[${j}]})"
            trimPatrn=$(echo "$patrn" | sed 's/^ //' )  # remove leading space
            create_Pattern "$trimPatrn" "1"
            create_Pattern "$trimPatrn" "$FUZZYTYPE"
            let j+=1
        done      
        ;;
    3) # Compose type 3: Example "A B C D" will be searched as type 2 and as "A D", "B C", "A C" and "B D", "B", "C"; all combination are possible, but not in a changed order.
        patrn="$(echo "$Term" | tr "#" " ")"
        # add_count_Rows "$patrn" 1
        # add_count_Rows "$patrn" 2
        create_Pattern "$patrn" "$FUZZYTYPE"
        ;;
    *)
        echo "An INVALID type encountered: $typeSearch"
        exit 2
    ;;
    esac  # type switch

done <${AWKOUTCNT}  # for all records

SUMFILENAME="./${BASEDIR}${CATNAME}_sum_${OUTCNTFILE}"

cat ${FILENAME}  | awk -F ";" '
  NR == 1 { print; next }
  { a[$1] += $3; b[$1]=$2 }
  END {
    for (i in a) {
      printf "%-15s\t%.0f\t%s\n", i, a[i], b[i] | "sort -nk1";   } }' > ${SUMFILENAME}


IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value

say -v Ellen "Hi Henk, de taak zit erop."

#--- Start Below 1 ---
#cat ${INPUT} | sed -n '1p' > "${HEADER}" # create a file with the columns headers
#string="$(cat ${HEADER})" # pull the header file into a string for testing presence of a header row
#length=${#string}
#if [  ${length} -eq 0 ]; then  # empty header string; construct unit tested
#exit 1
#fi    # if length = 0

#declare -a COLS  # pull the file into an indexed array
#COLS=("$(cat ${HEADER} | tr ';' '\n')")  # New way of getting the column headers in an array: replace separator ; with \n and feed array
#OIFS="$IFS"; IFS=' '; COLS=($(<${HEADER})); IFS="$OIFS"
# The -a option of read caused a lot of hassle: it was allowed in Vicual Studio Code, but not in bash 5.1.x on MAcOS
# IFS=';' read -ra COLS <<< "${string}"  # Column names in an array - OLD WAY
#for i in "${COLS[@]}"; do echo $i; done


# Verifying the existence of CATNAME in COLS array and we need the 
#if [[ ${CATNAME} == "all" ]]; then
#  COLUMNINDEX=999  # This means "all categories relevant"
#else    # looking for a matching column name
#  found='false'
#  for i in "${!COLS[@]}"
#    do
#      if [[ "${COLS[$i]}" == "$CATNAME" ]] ; then
#      let COLUMNINDEX=$i+1     # assigns the index number to use in AWK command of the first exactly matching column, following ignored
#      found='true'
#      CATLIST=($COLUMNINDEX)   # overwrite the CATLIST for we have found and matched a single selected Category
#      fi  # found i
#    done  # for loop
#  if [[ "$found" == "false" ]]; then 
#    echo "${CATNAME} not found in ${COLS[*]}"
#    exit 1
#  fi # found is false, CATNAME not in COLS
#fi # CATNAME == all

# Filter the relevant terms (lines in the INPUT)
#####################################
# IMPORTANT In these AWK command, I haven't been able to make the column number variable :
#           Therefore Level column is fixed $8 
#           Therefore the Cat_XXXXX columns are fixed too: $9-$16
# We strip the number of records (rows) and field (columns) according to the arguments passed
# The Workfile INPUT will be overriden in the consequetive steps

#if [ $COLUMNINDEX = "999" ]; then  # all categories
#  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
#else  # one specific category selected
#  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
#fi   # all cats or just one
# The fields array is initialized with the content record of the WOT-terms-sheet plus Category columns
#for i in ${INDEXARRAY[@]}; do
#    fields="$fields,\$$i"
#done
#fields=$( echo "$fields" | sed 's/^,//' ) # Remove the leading comma

# Below select the relevant records (terms) for the sheet and sort on second column of the output
# We want no empty keys: $4 represents the keyfield for this bashscript: it's the term used in the ToIP glossary
#--- End Below 1 ---
#--- Start Below 2 ---
#HEADER="Header-Count-workfile.txt"            # will be overridden
#CATLIST=(9 10 11 12 13 14 15 16) # Order numbers of the columns in the WOT-terms-manage sheet: all categories 
#INDEXARRAY=(1 2 4 6 8) # Order numbers of the content columns in the WOT-terms-manage sheet
#--- End Below 2 ---