# Source and Destination for Search
Designing an Improved Search and Indexing System for Docusaurus KERISSE. The objective is to create a process that is as automatic as possible. The topic is **External resources in any form**. Example: KERI for Muggles in Pdf format. The challenge is that this type of format is not very suitable to extract text from. On the other hand it is very well suited for end-users to pop up as a search result.

Meeting Date: August 1 2023

Attendees: Kor Dwarshuis, Henk van Cann

## Objective
The primary motivation for our design modifications is twofold: Firstly, our resources need to be effectively indexed to facilitate efficient searching. Secondly, these resources must be suitably referenced in the search results.

To streamline this process, we are considering two types of data inputs: direct and indirect. We aspire to integrate the `direct` input with git, while the `indirect` input would comprise various formats that external parties deliver (PPT, KEY, TXT, WORD, WP, whatever).

> The user-friendly output could be indirect input or an extract / modification of this. For example the indriect input of our KERI for Muggles example is a Google Doc `Slides` file on the web. The user-friendly output could be a `pdf` generated with Google Docs from the `Slides` file.

## Current Situation

<img src='https://hackmd.io/_uploads/HyUgpI8o2.png' alt="Tab Handmade of WOT-term Google sheet" />

Our existing system includes a 'WOT-Terms' sheet that contains a 'Handmade' tab. This tab features resources specified in a 'Source' column and their corresponding 'Destination' column.

The objective is to automatically extract information from this sheet, inclusive of metadata, and perform subsequent actions or provide functionalities based on it. We envisage these inputs being accessible via a URL for practicality.

Moreover, it is intended that the source data becomes searchable through the so-called 'document' in Typesense.

## Design Decision
After deliberating on the current situation, the following decisions were made:

- Firstly, we recognized that the manually created entry that forms a link between a search term and a 'Destination' URL is performing as expected and requires no changes.
- Second, the source data will need to be manually extracted from a designated collection directory outside the repository. We then manually convert (or export) this data into a readable format within the repository. This process allows us to generate a URL and include these sources within the purview of git version control.
- Third, we decided that the content population process doesn't always have to be manual. We could leverage Puppeteer to scrape the information by incorporating the source URLs from the 'Handmade' tab into a sitemap. This solution has the added advantage of nicely segmenting the data. However, a prerequisite for this is that the data must be in HTML format for Puppeteer to recognize and process it. Consequently, we need to **export the data as HTML** rather than plain text.
- Lastly, we will report the URL located in the 'Handmade' tab of the WOT sheet. This reporting will enable the URL to be processed automatically, thereby increasing the system's overall efficiency.

## Save to htm(l)
Example export to html:

<img src='https://hackmd.io/_uploads/r10McuLo3.png' alt="" />

Only use the content file `.html`

#### Acknowledgement
Thanks to [ChatGPT](https://www.openai.com/research/chatgpt) for enhancing this text.
