# Be present in root directory
pwd

# check SOURCE file is present
ls Terms-WOT-manage.txt

# double check on removing old (intermediate) results
rm Terms-workfile.txt
touch Terms-workfile.txt

# Run
source gen-yml.sh -l 1 --name OOBI -c Cat_OOBI 

# See
cd _data/sidebars
ls