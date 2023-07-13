/**
 * Takes div and tr that contain data-level and show/hide these via buttons
 *
 */

import config from '@generated/docusaurus.config';

// Main function
function commento() {
  document.querySelector('article').insertAdjacentHTML("beforeend", "<div id='commento'></div>");

}

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  commento();
}
// export function onRouteUpdate({ location, previousLocation }) {
//   // Don't execute if we are still on the same page; the lifecycle may be fired
//   // because the hash changes (e.g. when navigating between headings)
//   // if (location.pathname === previousLocation?.pathname) return;
//   setTimeout(() => {
//     commento();
//   }, 500);
// }
