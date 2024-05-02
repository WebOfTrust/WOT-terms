/**
 * @file This file adds html attributes with information to the <article>.
 * The info is fetched from a json file.
 * @example An article element could look like this:
 * <article data-level="3" class="level level3 3 type typeK K" data-type="K">…</article>
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @license MIT
 * @since 2023-04-01
 */

import overview from '@site/static/json/overview.json';

const addDataTypes = () => {
  //TODO: make generic function for column number finder

  // Find the column number of the column with the name 'Shortened version static copy'
  const termColumnName = 'Term';
  // loop through the first entry of the overview.json and find the column number of the column with the name 'Shortened version static copy'
  let termColumnNumber;
  for (let i = 0; i < overview.values[0].length; i++) {
    if (overview.values[0][i].trim() === termColumnName) {
      termColumnNumber = i;
    }
  }

  // Find the column number of the column with the name 'Shortened version static copy'
  const typeColumnName = 'Type';
  // loop through the first entry of the overview.json and find the column number of the column with the name 'Shortened version static copy'
  let typeColumnNumber;
  for (let i = 0; i < overview.values[0].length; i++) {
    if (overview.values[0][i].trim() === typeColumnName) {
      typeColumnNumber = i;
    }
  }

  // Find the column number of the column with the name 'Shortened version static copy'
  const levelColumnName = 'level';
  // loop through the first entry of the overview.json and find the column number of the column with the name 'Shortened version static copy'
  let levelColumnNumber;
  for (let i = 0; i < overview.values[0].length; i++) {
    if (overview.values[0][i].trim() === levelColumnName) {
      levelColumnNumber = i;
    }
  }

  if (document.querySelector('.markdown h1:first-child')) {
    const heading = document.querySelector('.markdown h1:first-child').innerText;

    // for every row in overview.json except the first one
    overview.values.forEach((row, index) => {
      if (index < 1) return;
      if (
        heading === row[termColumnNumber] &&
        // if the level is not empty
        row[levelColumnNumber] !== ''
      ) {

        // add row[levelColumnNumber] to data-set of body
        document.querySelector('article').dataset.level =
          row[levelColumnNumber];
        document.querySelector('article').classList.add('level');
        document
          .querySelector('article')
          .classList.add('level' + row[levelColumnNumber]);
        document.querySelector('article').classList.add(row[levelColumnNumber]);

      }

      if (
        heading === row[termColumnNumber] &&
        // if the type is not empty
        row[typeColumnNumber] !== ''
      ) {
        // add row[typeColumnNumber] to data-set of body
        document.querySelector('article').dataset.type = row[typeColumnNumber];
        document.querySelector('article').classList.add('type');
        document
          .querySelector('article')
          .classList.add('type' + row[typeColumnNumber]);
        document.querySelector('article').classList.add(row[typeColumnNumber]);
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  addDataTypes();
}
