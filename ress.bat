# Present in _terms directory
cd ..
rm -rf _terms
mkdir _terms
cd _terms
mkdir glossary
cp ../../acdc.wiki/* ./glossary
cd ..
source gen-fm.bat
cd _terms