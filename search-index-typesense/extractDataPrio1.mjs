/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: 
*/

import scrapeWOTterms from './custom-scrapers/WOT-terms.mjs';
import scrapeWotgloss from './custom-scrapers/wotgloss.mjs';
import scrapeESSIFLab from './custom-scrapers/eSSIF-Lab.mjs';
import scrapeGithubPrio1 from './custom-scrapers/githubPrio1.mjs';

scrapeWOTterms();
scrapeWotgloss();
scrapeESSIFLab();
scrapeGithubPrio1();
