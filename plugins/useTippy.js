/***************
 *
 *
 *
 * ONLY WORKS AFTER BUILD, WITH STATIC FILES.
 * ONLY THEN IS HTML CREATED AND HTML CAN BE LOADED VIA FETCH.
 *
 *
 *
 */

import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';

const useTippy = () => {
  let links = document.querySelectorAll('article .markdown a');

  links.forEach((item) => {
    let nextUrl = new URL(item.href, location).host;

    // if on same domain
    if (nextUrl === window.location.host) {
      fetch(item.href)
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          // Convert the HTML string into a document object
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');

          // Find the paragraph after heading with id="definition"
          let domEl = doc.querySelector('#definition');

          if (domEl !== null) {
            let nextSibling = domEl.nextElementSibling;
            tippy(item, {
              theme: 'light',
              allowHTML: true,
              content: nextSibling.innerText + ' Visit link to see more.',
            });
          }
        })
        .catch(function (err) {
          // There was an error
          console.warn('Something went wrong.', err);
        });
    }
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  useTippy();
  if (location.pathname === previousLocation?.pathname) return;
}
