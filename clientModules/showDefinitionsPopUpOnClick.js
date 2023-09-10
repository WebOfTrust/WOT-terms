/***************
 *
 * ONLY WORKS AFTER BUILD, WITH STATIC FILES.
 * ONLY THEN IS HTML CREATED AND HTML CAN BE LOADED VIA FETCH.
 *
 * This plugin shows popups with definitions when hovering over links.
 *
 */

import tippy from 'tippy.js';
// import 'tippy.js/themes/light.css';
import 'tippy.js/themes/light-border.css';
// import 'tippy.js/themes/material.css';
// import 'tippy.js/themes/translucent.css';
import overview from '../static/json/overview.json';

var findTerm = (function () {
  let termsWOTmanage = overview.values;

  // Find the position of the column "Term" in the array, by looping through the first row
  let termArrayPosition = 0;
  let textArrayPosition = 0;

  // Loop through the first row and find the position of the column "Term"
  for (let i = 0; i < termsWOTmanage[0].length; i++) {
    if (termsWOTmanage[0][i].trim() === "Term") {
      termArrayPosition = i;
    }
    if (termsWOTmanage[0][i].trim() === "text") {
      textArrayPosition = i;
    }
  }

  function find(term) {
    for (let i = 0; i < termsWOTmanage.length; i++) {
      if (termsWOTmanage[i][termArrayPosition].trim() === term.trim()) {
        return termsWOTmanage[i][textArrayPosition];
      }
    }
    return "No definition found.";
  }

  return {
    find: find
  };
}());

const showDefinitionsPopUpOnClick = () => {
  // All links in the main text of the article that are not anchors
  let links = document.querySelectorAll(
    'article .markdown a[href]:not([href^="#"])'
  );

  /**
   * JS function that takes a string (a url, but it can be relative or full, we don't know) and:
   * if there is no “/” at the end:
   * finds everything after the last “/”
   * if there is a “/” at the end:
   * removes this “/” and then finds everything after the then last “/”
   */
  function extractLastPathComponent(url) {
    // Remove trailing slash if it exists
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }

    // Find everything after the last "/"
    const lastSlashIndex = url.lastIndexOf('/');
    const result = url.slice(lastSlashIndex + 1);

    return result;
  }

  const definitionButtonClassName = 'definition-button';

  links.forEach((item) => {
    // Get the host of the link
    let linkHref = new URL(item.href, location).host;

    // If the link is internal
    if (linkHref === window.location.host) {
      let term = extractLastPathComponent(item.href)
      let text = findTerm.find(term);

      // add an inline button after the link
      let button = document.createElement('button');
      button.innerHTML = '+';
      button.classList.add(definitionButtonClassName);
      item.after(button);

      tippy(item, {
        triggerTarget: item.nextElementSibling, // button
        trigger: 'click',
        arrow: true,
        // arrowType: 'round',
        theme: 'light-border',
        allowHTML: true,
        content:
          '<p>' +
          text +
          '</p><p>Visit link to see more.</p>',
      });
    }
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  showDefinitionsPopUpOnClick();
}
