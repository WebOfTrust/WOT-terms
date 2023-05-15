/***************
 *
 * ONLY WORKS AFTER BUILD, WITH STATIC FILES.
 * ONLY THEN IS HTML CREATED AND HTML CAN BE LOADED VIA FETCH.
 *
 * This plugin shows popups with definitions when hovering over links.
 *
 */

import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';

const showDefinitionsOnHover = () => {
  // The links that we want to add a popup to
  let links = document.querySelectorAll(
    'article .markdown a[href]:not([href^="#"])'
  );

  links.forEach((item) => {
    let linkHref = new URL(item.href, location).host;

    // Fetch the text from the target url if it's on same domain
    if (linkHref === window.location.host) {
      // Get the text from the target url
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

          // If there is text, add a popup to the button
          if (domEl !== null) {
            let content = domEl.nextElementSibling;
            // add an inline button after the link
            let button = document.createElement('button');
            button.innerHTML = '+';
            button.classList.add('definition-button');
            item.after(button);

            tippy(item, {
              triggerTarget: item.nextElementSibling, // button
              trigger: 'click',
              theme: 'light',
              allowHTML: true,
              content: content.innerText + ' Visit link to see more.',
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
  showDefinitionsOnHover();
  if (location.pathname === previousLocation?.pathname) return;
}
