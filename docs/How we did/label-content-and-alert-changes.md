# Label Content and Alert Changes
We have:
- **data**: WOT-terms, tab LabelContent [link](https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit#gid=378513351)
- **checks**: Link checker in Google Apps script [link](https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit?usp=sharing)
- **functionality**: | TBW Kor |

## Data
In the tab `LabelContent` in WOT-terms [Google sheet](https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit#gid=378513351) we find instructions and tests on:
1. how to scrape sources
2. how to modify the sources
   - column `ourid` delivers the bidirectional link between the content and its labelling recipe in one row of the `WOT-terms` `LabelContent` tab
   - We create a Data attribute for this: `<div data-ourid=23612 ..`

3. where to put the resulting sources
4. how to present the sources in Docusaurus

## Input

- A resource file for the Docusaurus site
- WOT-terms Google sheet, tabblad 'LabelContent'
- Link checker function in Google Sheet 
- Script | TBW Kor? | 

### Attention
- List of Characters in the filename that cause trouble in Docusaurus

## Checks

**UrlOK	    AnchorOK**

### Google Sheet Apps Script Link-check function

#### function CHECKANCHOR(url)
##### Webapp
`https://script.google.com/macros/s/AKfycbzmcGVlaLfy0ZIQH9_afGrGYU-TgQp1YoxfGlfP3C9BQU2FeosxgCmHjUU-MMuA6d48eQ/exec`

#### function CHECKURL(url)
##### Webapp
`https://script.google.com/macros/s/AKfycbzLGQzbDHvr3wtjxDrArCQ8wNdhR3aWQADnaqN2eSOoDShoNyECdK0nifxjrV85Xca37Q/exec`

## Functionality

### Steps

1. Look for the `Source` that needs to be:
 - Put in the `Filesystem` (specified in column *Filesystem*)
 - Scrapped (is then in right place X in file system?) 
 - Converted
    - weird characters out if we can expect them
    - more meaningfull names and shorter names (column *MenuItemName*)
 - Labeled Content (based on management sheet)
 - Presenting (where some names could also come from the sheet again)

What is the [advantage of this](#advantage), who's going to benefit and what's the result?

## Management of the sheet and the data it references
1. Is a source and references (anchors) to its blocks of content already in the sheet? There is no check for duplicity, so the first entry that matches will be executed and the next entries for the same filename will fail.
2. If not already present: Add a row for a `source` that needs to be declared and labeled in the tab `LabelContent` in WOT-terms Google sheet. Put it in the 'Source' column. **Do add the path to the raw version** of the `source` filename. 
3. Fill out the desired filename in the 'MenuItemName' column. Now, **don't add the path** to the `MenuItemName` OR use an conversion function already available in the sheet.
4. Choose a corresponding Filesystem *directory* for the file.
5. the filename will be the filename of the source, the path will be the path in the Filesystem.
6. Add an `ourid` in the Column `ourid`. We raise the IDs per file by 100 and then number the blocks, that have a different labelling than the file as a total, from there on by 1,2,3 etc. This is not mandatory. The code has to be unique only and the sheet will report with a color if not.

<img src="./images/management-ourid.png" class="img-thumbnail" alt="caxe-logo"  width="250" />

### Postcondition

1.  `MenuItemName`s are practical and usable for Docusaurus
2. The sources are labeled client side on the fly conform value in the arrays
3. The links to anchors are checked on the fly in Google Sheet

## Usage
A Docusaurus site script collects the information in WOT-terms Google sheet, tabblad 'LabelContent' to perform the actions mentioned under [Steps](#steps) at will.

### Advantage
This has the advantage:
- You can always scrape
- you can always check links
- you can always adjust levels
- you don't have to label multiple times

### WHo benefits
- Curators
- Users of the site can filter on Level and Category

### Unique Result

