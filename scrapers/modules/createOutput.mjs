/*
  File: createOutput.mjs
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Create output, ready to be written to a file, and be imported into Typesense.
*/


export default function createOutput(input) {
  let entries = [];
  for (const element of input.mainContent) {
    // if an entry is not passed, create a default entry
    const entry = {
      siteName: input.siteName || 'No site name specified',
      source: input.source || 'No source specified',
      author: input.author || '–',
      creationDate: input.creationDate || '–',
      url: input.pageUrl || 'No url specified',
      content: element.text || '–',
      tag: element.tag || '–',
      imgUrl: element.imgUrl || '–',
      imgMeta: element.imgMeta || '–',
      timestamp: new Date().toISOString() || '–',
      'hierarchy.lvl0': input.hierarchyLvl0 || '–',// same for all element from input.mainContent
      'hierarchy.lvl1': input.hierarchyLvl1 || '–',// same for all element from input.mainContent
      'hierarchy.lvl2': input.hierarchyLvl2 || '–',// same for all element from input.mainContent
      'hierarchy.lvl3': input.hierarchyLvl3 || '–',// same for all element from input.mainContent
      knowledgeLevel: input.knowledgeLevel || '–',// same for all element from input.mainContent
      type: input.type || '–',// same for all element from input.mainContent
      pageTitle: input.pageTitle || '–',// same for all element from input.mainContent
      firstHeadingBeforeElement: element.firstHeadingBeforeElement || '–',
    };
    entries.push(entry);
  }
  return entries;
}