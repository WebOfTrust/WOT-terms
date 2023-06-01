#!/bin/bash
# https://www.lostsaloon.com/technology/how-to-create-an-xml-sitemap-using-wget-and-shell-script/

sitedomain=https://www.gleif.org/en/

wget --spider --recursive --level=inf --no-verbose --output-file=../output/gleif-linklist.txt $sitedomain

# wget --spider --recursive --level=1 --no-verbose --output-file=../output/gleif-linklist.txt $sitedomain

echo "Linklist created"

grep -i URL ../output/gleif-linklist.txt | awk -F 'URL:' '{print $2}' | awk '{$1=$1};1' | awk '{print $1}' | sort -u | sed '/^$/d' > ../output/gleif-sortedurls.txt

echo "Sortedurls created"

header='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">' 
echo $header > ../output/gleif-sitemap.xml
while read p; do
  case "$p" in 
  */ | *.html | *.htm)
    echo '<url><loc>'$p'</loc></url>' >> ../output/gleif-sitemap.xml
    ;;  
  *)
    ;;
 esac
# while read p; do
#   case "$p" in 
#   */ | *[!/] | *.html | *.htm)
#     case "$p" in
#       *.css | *.js | *.pdf | *.png | *.jpg | *.jpeg | *.gif | *.svg | *.doc | *.docx | *.xls | *.xlsx | *.zip | *.xsd | *.xslt | *.json | *.webmanifest | *.woff | *.woff2 | *.eot)
#         ;;
#       *)
#         echo '<url><loc>'$p'</loc></url>' >> sitemap.xml
#         ;;
#     esac
#     ;;  
#   *)
#     ;;
#  esac
done < ../output/gleif-sortedurls.txt
echo "</urlset>" >> ../output/gleif-sitemap.xml

echo "Sitemap created"