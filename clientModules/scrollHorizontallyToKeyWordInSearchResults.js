/*
  Author: Kor Dwarshuis
  Created: 2023-08
  Updated: -
  Description: This plugin scrolls every search results that shows code in a <pre> element horizontally to the first <mark> element in the <pre> element.
*/

function scrollToMarkElementInPre() {
  // Find all <pre> elements on the page
  const preElements = document.querySelectorAll('pre');

  // For each <pre> element
  preElements.forEach(pre => {
    // Find the first <mark> element
    const mark = pre.querySelector('mark');

    if (mark) {
      // Get the position of the <mark> relative to its parent <pre>
      const startPosition = mark.getBoundingClientRect().left;
      const parentStart = pre.getBoundingClientRect().left;

      // Calculate the offset
      const scrollOffset = startPosition - parentStart;

      // Scroll the parent <pre> horizontally
      pre.scrollLeft = scrollOffset;

      // Add a random arrow to the <mark> element. A little bit of fun. Check the css file for the arrow variants.
      const variant = Math.floor(Math.random() * 4) + 1;
      mark.className = '';
      mark.classList.add('arrow-variant' + variant);
    }

  });
}


const scrollHorizontallyToKeyWordInSearchResults = () => {
  // Select the node that you want to observe
  const targetNode = document.getElementById('hits'); // Works, presumable because it's harcoded in the html
  // const targetNode = document.querySelector('.ais-Hits-list');// Does not work

  // Create an observer instance with a callback function
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type == 'childList') {
        // console.log('Content of the target node has changed.');
        scrollToMarkElementInPre();
      }
    }
  });

  // Configuration of the observer:
  var config = {
    childList: true,  // observe direct children addition/removal
    attributes: false,  // don't observe attribute changes
    characterData: true,  // don't observe text changes
    subtree: true  // observe any descendant changes
  };

  // Start observing the target node with the configured parameters
  observer.observe(targetNode, config);

  // Later, you can stop observing
  // observer.disconnect();


};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  scrollHorizontallyToKeyWordInSearchResults();
}
