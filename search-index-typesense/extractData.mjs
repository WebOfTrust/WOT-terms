/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: 
*/

import scraperGithub from './prepareScraperGithub.mjs';
import scraperGenericSingleUrls from './config/prepareScraperSingleUrlsFromWotTermsGoogleSheet.mjs';
import scraperGenericSitemap from './config/configScraperGenericSitemaps.mjs';

scraperGithub();
scraperGenericSingleUrls();
scraperGenericSitemap();