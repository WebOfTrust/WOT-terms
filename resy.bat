# Be present in root directory
pwd

# check SOURCE file is present
ls Terms-WOT-manage.csv

# double check on removing old (intermediate) results
rm Terms-workfile.csv
touch Terms-workfile.csv
rm _data/sidebars/wot_sidebar.yml

# Run
source gen-yml.bat

# See
cd _data/sidebars
ls
