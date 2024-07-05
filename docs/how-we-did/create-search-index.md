---
Status:
---
import Scraping from '/img/scraping.svg';

# Create a search index

For who is this *how-we-did*: Maintainers of the KERISSE site

Why should you stick to this step by step: | @kordwarshuis ?? |

## Software used

The following tools are used for scraping:

- Cheerio
- Puppeteer

“[Cheerio can parse nearly any HTML or XML document. Cheerio works in both browser and server environments.](https://cheerio.js.org/)”

“[Puppeteer is a Node.js library which provides a high-level API to control Chrome or Firefox over the DevTools Protocol or WebDriver BiDi. Puppeteer runs in the headless (no visible UI) by default but can be configured to run in a visible ("headful") browser.](https://pptr.dev/)”

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

The documents we want to import have to follow a schema ([Example schema on the Typesense website](https://typesense.org/docs/26.0/api/collections.html#with-pre-defined-schema)). We created our own schema for Kerisse.

More info on the [Typesense website](https://typesense.org/docs/).
