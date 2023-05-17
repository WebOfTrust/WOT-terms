import overview from '@site/static/json/overview.json';
/**
 *  Add level to body, info from overview.json, which is generated from Google Sheet
 */

const addLevel = () => {
  if (document.querySelector('header h1')) {
    const heading = document.querySelector('header h1').innerText;

    // for every row in overview.json except the first one
    overview.values.forEach((row, index) => {
      if (index < 1) return;
      if (
        heading === row[4] &&
        // if the level is not empty
        row[8] !== ''
      ) {
        // add row[8] to data-set of body
        document.querySelector('article').dataset.level = row[8];
        document.querySelector('article').classList.add('level');
        document.querySelector('article').classList.add('level' + row[8]);
        document.querySelector('article').classList.add(row[8]);

        // to make it work with the Algolia DocSearch
        let knowledgelevel = document.createElement('span');
        knowledgelevel.classList.add('knowledgelevel');
        knowledgelevel.classList.add('visuallyhidden');
        knowledgelevel.innerHTML = row[8];
        document.querySelector('article').prepend(knowledgelevel);
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  addLevel();
}
