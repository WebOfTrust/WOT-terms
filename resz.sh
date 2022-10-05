#!/bin/bash
# Status: operational draft
# Present in dir WOT-terms
# Quick & Dirty script used for converting files purposes locally
# Later to be used in Github Actions to post process .md files from the ToIP Glosssary wiki
# Your working dir Needs to be set to _terms/glossary directory
rm -rf _terms
mkdir _terms
cd _terms
mkdir glossary
cp ../../acdc.wiki/* ./glossary

# This sed command is the crucial linking pin between WOT-terms-manage, Jekyll Documentation Theme and ToIP glossary

if [ $( pwd ) <> "/Users/hvc/apps/WOT-terms/_terms/glossary" ]; then
exit 1
fi

SOURCE_DIR=""

files=(
   "$SOURCE_DIR"*.md
)

files=($( find ./ -type f -name "*.md" )) #Add () to convert output to array

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