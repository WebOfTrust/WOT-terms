#UPDATE: GOT IT WORKING in resz.sh end of Aug 2022 (copy below!)
#        NO GENERAL shell script created yet, this is a draft that explains the idea and objectives.

## This Sed command is the linking pin between 
# 1. Jekyll Documentation Theme (that has a specific organisation of Sidebar-linked resources)
# 2. ToIP glossary term resources in .md files, those have relative links that need to be prepended, while the absolute links need to stay in tact!
# 3. The WOT-terms-manage sheet, that generates Yaml files for use in Jekyll

#Wanted:
#Selective pre-pending of links in a file
#Needed in a bash 5.1x environment on a MacOS system


#So far I managed to create this:
sed -r 's/(\]\()(\.\/)?([a-zA-Z0-9])/\1\2term_\3/g' tsed.md | sed -r 's/term_(http:\/\/|https:\/\/)/\1/g'

#Explanation: 
#1. sed `-r` option to be able to use the extended BSD Regex
#2. because of 1. the grouping can become conditional and parathesis dont need to be escaped
#   We have 3 groups in the first sed command and one group in the piped sed command
#3. The second (piped) command un-does the pre-pending, 
#   only in the very specific case that a markdown link has a correct URL Start
#Working:
#4. find '](' (group1) and from that if there is possibly a leading `./` the relative URL
#5. at least one trailing character in domain `[a-zA-Z0-9]+` 

#Disclaimer:
#No full swing unit test has been done. The test is in the INPUT file provided, which produced the required OUTPUT
#file on a MacOS Monterey 12.4, bash 5.1x and with the standard BSD sed.
#- The script does not test the opening bracket `[` nor the closing parathesis `)`

# Selectively prepending a key word to the URL of a markdown link in a markdown file.

## What I haven't been able to do is: exclude selectively
# What needs to change is a relative path: "./<characters or numbers>" or "<characters or numbers>", 
#  "/<characters>" and external links "http(s)://" etc, should be ignored / left in tact.

## See the example files: 
# - tsed.md; this is the INPUT
# - tsed_target_result this is the wanted OUTPUT

## Research - studied these posts, but couldn't find a hook to a solution to the above-mentioned challenge: 
# https://stackoverflow.com/questions/54246008/selective-bash-completion-of-a-file-path
# https://stackoverflow.com/questions/12477913/bash-string-replacement-in-a-file

##############################
#Copy of Resz.sh - Sept 1 2022 
##############################

#!/bin/bash
# Status: operational draft
# Quick & Dirty script used for converting files purposes locally
# Later to be used in Github Actions to post process .md files from the ToIP Glosssary wiki
# Your working dir Needs to be set to _terms/glossary directory
#cd ..
#rm -rf _terms
#mkdir _terms
#cd _terms
#mkdir glossary
#cp ../../acdc.wiki/* ./glossary

# This sed command is the crucial linking pin between WOT-terms-manage, Jekyll Documentation Theme and ToIP glossary

#if [$( pwd )<>"/Users/hvc/apps/WOT-terms/_terms/glossary" ]; then
#exit 1
#fi

SOURCE_DIR=""

files=(
   "$SOURCE_DIR"*.md
)

#files=($( find ./ -type f -name "*.md" )) #Add () to convert output to array

total=0
for i in ${files[@]} ; do
  counter=0
  filelist=""
  echo Next: $i
#  find ./ -type f -name "$i"
#  filelist=($( find ./ -type f -name "$i" ))
#  for j in ${filelist[@]}; do
    sed -i '' -r 's/(\]\()(\.\/)?([a-zA-Z0-9])/\1\2term_\3/g' "$i" 
    sed -i '' -r 's/term_(http:\/\/|https:\/\/|term_)/\1/g' "$i"
    let counter=$counter+1
#  done
  echo "Number of Files in $i processed: $counter; total number processed: $total so far."
done


# cd ..
# source gen-fm.sh
# cd _terms