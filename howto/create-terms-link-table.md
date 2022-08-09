# Create an online table to link terms to resources

## Input

- A resource (like footage, e.g. [Phil's IIW demo]() interview with Steven)
- Subtitle (.sbv) file
- [Glossary](https://www.makeuseof.com/how-to-create-edit-youtube-subtitles/)
- Excel or open source alternative
- Excel function to transform Youtube time format to URL format
- Mark down table creation tool
- Mark Down Editor
- Version control (git, Github or Gitlab)

## Steps

### Demand

A certain resource needs to be subtitled, explained further, etc. Be sure it has the added value you think it has. Ask around. Because there'll a hugh effort involved to:

-  transcribe the resource
- correct the subtitles by listening carefully what's been said by whom
- connect the resource to the glossary
- create new glossary items and amend existing ones (to avoid confusion when a term in a different context means something else)
- create an index of terms used in the resource into the video (timing) and into the glossary
- document the resource properly and take into production after testing.

An hour of footage can take days to decipher and document. Again, be sure it's worth it.

### Use Youtube to subtitle the resource

Upload the video to Youtube. Choose the right confidentiality and Youtube will start to create subtitles automatically. *Download* the subtitle-file to your local machine once it's ready: a `.sbv` file.

### Edit subtitles

As you edit, also have a an Excel sheet open with a few columns:

- term
- text
- level
- link
- vidstart

**Term**s are words used by the speakers in the resource, you can provide a **link** to more explanation, mainly to the [ACDC glossary](https://github.com/trustoverip/acdc/wiki/). The point in the video where a speaker *mentions the term for the first time* is called **vidstart**, you can copy this data from from the .sbv subtitle file downloaded from Youtube. the **level** of understanding at which this term might need explanation, and finally a *brief explanation* in field **text** of the term in the first column.

#### Tools and techniques

There are lots of tips and tools on the web you can find to edit your Youtube subtitles / captions. Just to link a few:

- <https://www.makeuseof.com/how-to-create-edit-youtube-subtitles/>
- <https://support.google.com/youtube/answer/2734705?hl=en>
- <https://www.makeuseof.com/how-to-create-edit-youtube-subtitles/>

#### Level

Since KERI and ACDC education start off at the level of SSI-expert, a *beginner* is not a layman, but somebody with a good common understanding of IT and digital identity.

- 1=beginner digital identity expert
- 3=advanced self-sovereign identity expert
- 7=SSI experts

#### Change the subtitles and fill the glossary and Excel sheet

Do this simultaneously.

### Use these functions in Excel to create the URL time format:
Mind you `F2` is the cell that contains the time in Youtube time format:  `0:00:00.000`

- Minutes: `=MID(TRIM(F2);3;2)` the example here has the Minutes in cell `G2`
- Seconds: `=MID(TRIM(F2);6;2)` the example here has the Seconds in cell `H2`

And glue it together into a clickable and working URL to the right spot/timing in the footage:

`=CONCATENATE("https://youtu.be/GqjsRuu0V5A?list=PLXVbQu7JH_LHVhs0rZ9Bb8ocyKlPljkaG&t=";G2;"m";H2;"s")`

### Export to CSV

The start of example Excel sheet would like this:

<img src="https://hackmd.io/_uploads/rkWsMskAc.png" width="800" align="right">

The Excel file can be saved as a Comma Separated file `.csv`

#### Usage of the Comma Separated file

The .CSV-file, an example [here](https://github.com/WebOfTrust/WOT-terms/blob/main/resources/Terms-transcription-Phils-demo-IIIW.csv) that is the basis for a descriptive page, could be used to be imported elsewhere, to filter on the level field, and/or provide links or brief explanation to students.

### Create a Mark Down table using a free web-tool

I've used [Tablesgenerator.com](https://www.tablesgenerator.com). Use the following settings:

- Markdown (menu - switch)
- Compact (toggle checkbox)

#### Upload `.csv` file

<img src="https://hackmd.io/_uploads/HJ3zejyCq.png" width="300">

<img src="https://hackmd.io/_uploads/S19Llo1C9.png" width="400" align="right">

<img src="https://hackmd.io/_uploads/Hk93ki1Aq.png" width="500">

#### Check the result
And then copy the result; use the clipboard

<img src="https://hackmd.io/_uploads/rkljgoyA9.png" width="200">


and paste into your editor. After pasting the column headers in compact form will show

<img src="https://hackmd.io/_uploads/BkwAmsJ09.png" width="500">

remove the column you don't need, by not referencing them (the data is still in the column, redundantly). In this example I removed 3 columns:

<img src="https://hackmd.io/_uploads/S1qt4sJ0q.png" width="400">


### Create the description file of the resource where the Links Table is included

I explain this to create three types: a HackMD file and a Github basic repo `.MD` page and pages created using a static site generator and/or Github Actions.

#### HackMD file

Use the following CSS styling and adjust the column width at will (be sure it's "100%" in total):

```
<!-- <link rel="stylesheet" href="../style.css" type="text/css"></link> -->

<!-- This should be placed in a CSS file and referenced with the command above in comments -->
<style>
table a {
    display: inline-block;
    width: 50px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
      
  table th:first-of-type {
      width: 20%;
  }
  table th:nth-of-type(2) {
      width: 50%;
  }
  table th:nth-of-type(3) {
      width: 10%;
  }
  table th:nth-of-type(4) {
      width: 10%;
  }
  table th:nth-of-type(5) {
      width: 10%;
  }
  </style>
```

#### Github Repo markdown file
Use git functionality to push the HackMD file to your destination repo and or use a local repository to sync the `.md` file with your remote production repo.

The `.md` file will show, however:
##### Scroll table to the right
To get to the links and other columns of the table you might need to scroll the table all the way to the right. 

The reason is that Github ignores all CSS input to normal repo .md files while rendering the output of `.MD` files in browsers. There are work-arounds but I don't advice those. Static pages generators can overcome this.

#### Static pages generator

You could also use the resulting Markdown file as input to a static site generator and or Github Actions to create more sophisticated version of the description file and / or glossary.

Any source that uses the css to adjust the column and cell width (to shrink the size of the clickable links). Additionally this should be placed in a CSS file and referenced with the command above in comments:

```
<link rel="stylesheet" href="../style.css" type="text/css"></link>
```

For example:

<img src="https://hackmd.io/_uploads/HyYs35JC9.png" width="500">

