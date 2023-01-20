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

[[jekyll-algolia community site]](https://community.algolia.com/jekyll-algolia/)


[getting started](https://community.algolia.com/jekyll-algolia/getting-started.html#front-end)

### Tutorial

[tutorial in blog](https://community.algolia.com/jekyll-algolia/blog.html)

#### Algolia.html

In this file the [template code](https://community.algolia.com/jekyll-algolia/blog.html#templating) should replace `search.addWidget`.

### Bend the tutorial to Jekyll Documentation Theme

`Index.md` must have the `home.hml` code, however **exclusive** the `\{\% include algolia.html \%\}` call.

`\{\% include algolia.html \%\}` gets a spot under the `</body>` tag in de `default.html` file in the `_layout` directory of Jekyll.

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/include-algolia-guide.png" alt="config Algolia search use in Jekyll theme" width="300">

Every Jekyll Documentation Theme layout includes `default.html` via front matter in the head of all those layout files.

## Installed instantsearch.js

[Package instantsearch](https://www.npmjs.com/package/instantsearch.js)

Be sure to exclude the `node_module` directory in `_config.yml` because its READMEs and CHANGELOGs create Jekyll warnings:

```
exclude:
  - node_modules
```

## Github Actions for Algolia CI

Since our site is already in github, I chose Github Actions to leverage this action for me. I just have to create the following yaml in the `.github/workflows` folder of our repo:

### .github/workflows/jekyll-algolia.yml

```
on: [push]

jobs:
  build:
    name: Algolia push records

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Set up Ruby 2.6
        uses: actions/setup-ruby@v1
        with:
          ruby-version: 2.6.x
      - name: Install dependencies and push records
        run: |
          gem install bundler
          bundle install --jobs 4 --retry 3
          bundle exec jekyll algolia
        env:
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
```

As you can see it this will install the dependencies and launch the command to push the data to Algolia. Please note that the `ALGOLIA_API_KEY` needs to be defined in the **github secrets** (to be found in the left sidebar after clicking `Settings` of the Github Repo).\
[Source](https://cristianpb.github.io/blog/jekyll-algolia)