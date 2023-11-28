/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: 
*/

import scraperGithub from './config/configScraperGithub.mjs';
import scraperGenericSingleUrls from './config/configScraperGenericSingleUrls.mjs';
import scraperGenericSitemap from './config/configScraperGenericSitemaps.mjs';

scraperGithub();
scraperGenericSingleUrls();
scraperGenericSitemap();