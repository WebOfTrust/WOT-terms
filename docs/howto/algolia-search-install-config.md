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

### Tutorial

#### Algolia.html

## Installed instantsearch.js

[Package instantsearch](https://www.npmjs.com/package/instantsearch.js)

## Github Actions for Algolia CI

Since our site is already in github, I chose Github Actions to leverage this action for me. I just have to create the following yaml in the `.github/workflows` folder of our repo:

### .github/workflows/jekyll-algolia.yml
