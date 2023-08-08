---
sidebar: HowWeDidSidebar
---
import Scraping from '/img/scraping.svg';

# Create a search index

## Software used

We use tools such as Puppeteer and Cheerio to achieve our goal. The added value of Puppeteer is that it can also index dynamically generated content. 


## Generating a search index: three steps

The creation of a search index for a website involves three steps:

1. Obtaining a sitemap.xml
2. Scraping all the URLs in the sitemap
3. Importing the content into the search index

<Scraping />

### 1: Obtaining a sitemap.xml

A sitemap is a list of url's. The most common format is XML.

You cannot be sent out to fetch something if they don't tell you where to go. That is what a sitemap is for.

There are three forms of a sitemap.xml:

1. The sitemap.xml can be **remote**, that means, it is located at the domain that you will scrape, usually in the root, named “sitemap.xml”. It is also a source for search engines like Google and Bing.
2. The sitemap can be an **HTML sitemap**. This means it is a page on a website with an index.
3. The sitemap can be a local sitemap. Meaning: this sitemap is **created by you**, using a script or manually.

You don't need to create a sitemap.xml every time you want to start a new scrape session. If you think that there are no new pages but the content of the existing pages is updated, you could use the sitemap.xml that was used last time you.

### 2: Scraping all the URLs in the sitemap

The scraper goes through all the URLs and indexes all paragraphs, lists, tables, code fragments, and saves it in JSON format.

### 3: Importing the content into the search index

When all the URLs of a website (or multiple websites) have been scraped and captured in JSON, this JSON is imported into the search engine. The search engine we use is called **Typesense**, and the data is imported into their cloud solution.

In **Typesense** a “document” is what a “record” is in a database.

More info on the Typesense website: https://typesense.org/docs/0.24.1/api/documents.html#index-multiple-documents

The documents we want to import have to follow a scheme. The current scheme we use is:

```
{
    "created_at": ------,
    "default_sorting_field": "",
    "enable_nested_fields": false,
    "fields": [
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "content",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "hierarchy.lvl0",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "hierarchy.lvl1",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "hierarchy.lvl2",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "hierarchy.lvl3",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "knowledgeLevel",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "siteName",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "tag",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "type",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "pageTitle",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "firstHeadingBeforeElement",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "source",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "author",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "creationDate",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "imgMeta",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": false,
        "infix": false,
        "locale": "",
        "name": "timestamp",
        "optional": true,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "contentLength",
        "optional": false,
        "sort": true,
        "type": "int32"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "url",
        "optional": false,
        "sort": false,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "imgMetaLength",
        "optional": false,
        "sort": true,
        "type": "int32"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "imgUrl",
        "optional": true,
        "sort": true,
        "type": "string"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "imgWidth",
        "optional": true,
        "sort": true,
        "type": "int32"
        },
        {
        "facet": false,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "imgHeight",
        "optional": true,
        "sort": true,
        "type": "int32"
        },
        {
        "facet": true,
        "index": true,
        "infix": false,
        "locale": "",
        "name": "mediaType",
        "optional": false,
        "sort": false,
        "type": "string"
        }
    ],
    "name": "xxx",
    "num_documents": xxx,
    "symbols_to_index": [],
    "token_separators": []
}
```

You can create a scheme yourself. For example: the ```imgMeta``` entry is something we chose to create and it contains text around an image. Later on in your client code, you can retrieve this information.