/*
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
      author: input.author || 'No author specified',
      creationDate: input.creationDate || 'No creation date specified',
      url: input.pageUrl || 'No url specified',
      content: element.content || '',
      contentLength: element.contentLength || 0,
      tag: element.tag || '',
      imgUrl: element.imgUrl || '',
      imgMeta: element.imgMeta || '',
      imgMetaLength: element.imgMetaLength || 0,
      imgWidth: element.imgWidth || 0,
      imgHeight: element.imgHeight || 0,
      timestamp: new Date().toISOString() || '',
      'hierarchy.lvl0': input.hierarchyLvl0 || '',// same for all element from input.mainContent
      'hierarchy.lvl1': input.hierarchyLvl1 || '',// same for all element from input.mainContent
      'hierarchy.lvl2': input.hierarchyLvl2 || '',// same for all element from input.mainContent
      'hierarchy.lvl3': input.hierarchyLvl3 || '',// same for all element from input.mainContent
      knowledgeLevel: input.knowledgeLevel || 'No level specified',// same for all element from input.mainContent
      type: input.type || 'No type specified',// same for all element from input.mainContent
      pageTitle: input.pageTitle || 'No title specified',// same for all element from input.mainContent
      firstHeadingBeforeElement: element.firstHeadingBeforeElement || '',
    };
    entries.push(entry);
  }
  return entries;
}