export default function createOutput(input) {
  let entries = [];
  for (const element of input.elements) {
    // if an entry is not passed, create a default entry
    const entry = {
      siteName: input.siteName || 'No site name specified',
      url: input.pageUrl || 'No url specified',
      content: element.text || '–',
      tag: element.tag || '–',
      firstHeadingBeforeElement: element.firstHeadingBeforeElement || '–',
      timestamp: new Date().toISOString() || '–',
      'hierarchy.lvl0': input.hierarchyLvl0 || '–',
      'hierarchy.lvl1': input.hierarchyLvl1 || '–',
      'hierarchy.lvl2': input.hierarchyLvl2 || '–',
      'hierarchy.lvl3': input.hierarchyLvl3 || '–',
      knowledgeLevel: input.knowledgeLevel || '–',
      type: input.type || '–',
      pageTitle: input.pageTitle || '–',
    };
    entries.push(entry);
  }
  return entries;
}