/**
 * @file This file makes tables filterable and sortable.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @license MIT
 * @since 2023-03-13
 */

import { List } from './libs/list.js';

const dynamicTables = () => {
  let options = {
    valueNames: [],
  };

  // th's in first row contain classnames that are needed for list.js config…
  let tdClass = document.querySelectorAll('table tr:first-child td');
  // … so we can add them to the options
  tdClass.forEach((item) => {
    options.valueNames.push(item.getAttribute('class'));
  });

  let list = new List('table-container', options);
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  dynamicTables();
}
