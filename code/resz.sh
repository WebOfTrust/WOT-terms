#!/bin/bash
# Status: operational draft
# This script take raw glossary data from ToIP in md as an input and converts them IN PLACE with sed.
# Because outr Jekyll template generates all source files plain in the _site directory we need to add
# "term_" to all the links IN the files and also to the filesnames (this is done within gen-fm.sh)
# This script resz.sh is later to be used in Github Actions to post process .md files from the ToIP Glosssary wiki
# Your working dir Needs to be set to _terms, in the script itself we'll descend to _terms/glossary directory

rm -rf _terms
mkdir _terms
cd _terms
mkdir glossary
cp ../../acdc.wiki/* ./glossary
cd glossary

# This sed command is the crucial linking pin between WOT-terms-manage, Jekyll Documentation Theme and ToIP glossary

if [ $( pwd ) <> "/Users/hvc/apps/WOT-terms/_terms/glossary" ]; then
exit 1
fi

SOURCE_DIR=""

files=(
   "$SOURCE_DIR"*.md
)

total=0
for i in ${files[@]} ; do
  filelist=""
  echo Next: $i
  sed -i '' -r 's/(\]\()(\.\/)?([a-zA-Z0-9])/\1\2term_\3/g' "$i" 
  sed -i '' -r 's/term_(http:\/\/|https:\/\/|term_)/\1/g' "$i"
  let total=$total+1
#  done
  echo "Number of Files in $i processed: $counter; total number processed: $total so far."
done

#go back to the root of the repo
cd ../..
