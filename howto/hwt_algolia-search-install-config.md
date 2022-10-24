---
layout: default
Title: HowTo
tags: [KERI,ACDC]
permalink: /hwt_algolia-search-install-config.html
sidebar: all_lvl3_wot_sidebar
folder: 
---
# Algolia search install and configuration

@henkvancann: These are the instructions I followed and implemented in the site. Oct 2022.

## Subscription Algolia free account

[Subsribe here](https://www.algolia.com/)

## Install Algolia in Jekyll

[jekyll-algolia install](https://github.com/algolia/jekyll-algolia)

## Install & config help programs

[3-sending-your-search-index-to-algolia](https://forestry.io/blog/search-with-algolia-in-jekyll/#3-sending-your-search-index-to-algolia)

But I stopped at this point: 3. NPM things

[3-sending-your-search-index-to-algolia](https://forestry.io/blog/search-with-algolia-in-jekyll/#3-sending-your-search-index-to-algolia)

below this point I did not implement. Reason: I missed the front-end items.

So I Googled more and found ->

## Help and front-end code

https://community.algolia.com/jekyll-algolia/

https://community.algolia.com/jekyll-algolia/getting-started.html#front-end

### Tutorial

https://community.algolia.com/jekyll-algolia/blog.html

#### Algolia.html

In this file the [template code](https://community.algolia.com/jekyll-algolia/blog.html#templating) should replace `search.addWidget`.

### Bend the tutorial to Jekyll Documentation Theme

`Index.md` must have the `home.hml` code, however **exclusive** the `{% include algolia.html %}` call.

`{% include algolia.html %}` gets a spot under the `</body>` tag in de `default.html` file in the `_layout` directory of Jekyll.

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/include-algolia-guide.png" alt="config Algolia search use in Jekyll theme" width="300">

Every Jekyll Documentation Theme layout includes `default.html` via front matter in the head of all those layout files.

## Installed instantsearch.js

https://www.npmjs.com/package/instantsearch.js

Be sure to exclude the `node_module` directory in `_config.yml` because its READMEs and CHANGELOGs create Jekyll warnings:

```
exclude:
  - node_modules
```