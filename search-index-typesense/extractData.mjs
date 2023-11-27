/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: 
*/

import scraperGithub from './config/scraper-github.mjs';
import scraperGenericSingleUrls from './config/scraper-generic-single-urls.mjs';
import scraperGenericSitemap from './config/scraper-generic-sitemaps.mjs';

scraperGithub();
scraperGenericSingleUrls();
scraperGenericSitemap();