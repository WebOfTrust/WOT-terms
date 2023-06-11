# Change source filename if unusable or unpractical

## Input

- A resource file for the Docusaurus site
- List of Characters in the filename that cause trouble in Docusaurus
- WOT-terms Google sheet, tabblad 'ChangeFileName'

## Steps

1. Look for the filename from a `source` that needs to change in the tab `ChangeFileName` in WOT-terms Google sheet. Is it already in the sheet? There is no check for duplicity, so the first entry that mateches will be executed and the next entries for the same filename will fail.
2. If not already present: Add a row for the filename from a `source` that needs to change in the tab `ChangeFileName` in WOT-terms Google sheet. Put it in the 'Source' column. **Don't add the path** to the source filename. 
3. Fill out the desired filename in the 'Destination' column. Again, **don't add the path** to the destination filename OR use an conversion function already available in the sheet, column Destination in another row.

### Postcondition

Destination Filenames are practical and usable for Docusaurus.

## Usage
Either the Docusaurus site or a batch script will collect the information in WOT-terms Google sheet, tabblad 'ChangeFileName' to change the filenames in the Docusaurus tree.
