/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Create input for the scraper, from xml sitemaps or a list of URLs on a page to JavaScript objects.
*/

import puppeteer from 'puppeteer';
import xml2js from 'xml2js';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import logger from './modules/logger.mjs';
import { writeToErrorFile } from './writeToErrorFile.mjs';
import { writeToSuccesFile } from './writeToSuccesFile.mjs';


function removeUrlsFromSitemap(sitemap, excludeURLs) {
  if (excludeURLs !== undefined) {
    // Fetch the URLs to remove from the sitemap
    const strUrlsToRemove = fs.readFileSync(excludeURLs, 'utf8');
    const objUrlsToRemove = JSON.parse(strUrlsToRemove);

    // Substring matching: if the URL contains any of the substrings in the objUrlsToRemove array, remove it from the sitemap
    const updatedSitemap = sitemap.urlset.url.filter((url) => {
      const loc = url.loc[0];
      return !objUrlsToRemove.some(substring => loc.includes(substring));
    });

    sitemap.urlset.url = updatedSitemap;
  }
  // if condition is not met, do nothing and return the sitemap unchanged
  return sitemap;
}

export default async function createInput(input) {
  // If there is a remote sitemap.xml file, fetch it and parse it
  if (input.sourceType === 'remoteXMLsitemap') {
    // Fetch and parse the sitemap.xml file
    console.log('Fetching sitemap...');
    writeToSuccesFile('Fetching sitemap...');
    const sitemapUrl = input.sourcePath;
    const sitemapResponse = await fetch(sitemapUrl);
    const sitemapXml = await sitemapResponse.text();
    const sitemap = await xml2js.parseStringPromise(sitemapXml, { explicitArray: true });

    removeUrlsFromSitemap(sitemap, input.excludeURLs);

    if (sitemap.urlset && sitemap.urlset.url) {
      console.log(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
      writeToSuccesFile(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
    } else {
      console.log('No URLs found in sitemap');
      writeToSuccesFile('No URLs found in sitemap');
    }

    return sitemap;
  }

  // If there is a local sitemap.xml file, parse it
  if (input.sourceType === 'localXMLsitemap') {
    const sitemapXml = fs.readFileSync(path.resolve(input.sourcePath), 'utf-8');
    const sitemap = await xml2js.parseStringPromise(sitemapXml, { explicitArray: true });
    removeUrlsFromSitemap(sitemap, input.excludeURLs);

    if (sitemap.urlset && sitemap.urlset.url) {
      console.log(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
      writeToSuccesFile(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
    } else {
      console.log('No URLs found in sitemap');
      writeToSuccesFile('No URLs found in sitemap');
    }

    return sitemap;
  }

  // If there is a list of URLs on a page, parse it
  if (input.sourceType === 'querySelector') {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Get all page URLs
    await page.goto(input.sourcePath);
    const urls = await page.$$eval(input.queryString, (links) =>
      links.map((link) => link.href)
    );
    console.log('urls: ', urls);
    writeToSuccesFile('urls: ', urls);

    const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urls
      .map((url) => `<url><loc>${url}</loc></url>`)
      .join('\n  ')}</urlset>`;

    const sitemap = await xml2js.parseStringPromise(sitemapXml);
    await browser.close();

    removeUrlsFromSitemap(sitemap, input.excludeURLs);

    if (urls.length > 0) {
      console.log(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
      writeToSuccesFile(`Found ${sitemap.urlset.url.length} URLs in sitemap`);
    } else {
      console.log('No URLs found in sitemap');
      writeToSuccesFile('No URLs found in sitemap');
    }

    return sitemap;
  }

}
