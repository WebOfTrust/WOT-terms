# Present in _terms directory
cd ..
mkdir _terms_safe 
cp _terms/* _terms_safe
rm -rf _terms
mkdir _terms
cd _terms
mkdir glossary
cp ../../acdc.wiki/* ./glossary
cd ..
source gen-fm.sh
cd _terms