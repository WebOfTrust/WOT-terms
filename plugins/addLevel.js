import overview from '@site/static/json/overview.json';
/**
 *  This plugin adds the level of the current page to the body tag. The info comes
 */

const addLevel = () => {
  const heading = document.querySelector('header h1').innerText;

  // for every row in overview.json except the first one
  overview.values.forEach((row, index) => {
    if (index < 1) return;
    if (heading === row[4]) {
      // add row[8] to data-set of body
      document.querySelector('body').dataset.level = row[8];
    }
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  addLevel();
}
