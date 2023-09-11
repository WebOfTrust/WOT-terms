/*
  Author: Kor Dwarshuis
  Created: 2023-09-11
  Updated: -
  Description:
   This JavaScript file attempts to add a click event listener to the first element with the class name "markdown."
   If such an element exists and an image within this element is clicked, the script toggles a predefined class to resize the image.
   
   Preconditions:
   - A CSS class defined by the variable `imageFullSizeClass` should exist for toggling the image size.
*/

const imageFullSize = () => {
  const imageFullSizeClass = 'full-page-image';

  // All images get a click event listener via event delegation
  const markdownElement = document.querySelector('.markdown');

  if (markdownElement) {
    markdownElement.addEventListener('click', (event) => {
      // If the clicked element is an image
      if (event.target.tagName === 'IMG') {
        console.log("clicked image");

        // Toggle the full size class
        event.target.classList.toggle(imageFullSizeClass);
      }
    });
  } else {
    console.log("Element with class '.markdown' not found.");
  }
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  imageFullSize();
}
// export function onRouteUpdate({ location, previousLocation }) {
//   // Don't execute if we are still on the same page; the lifecycle may be fired
//   // because the hash changes (e.g. when navigating between headings)
//   // if (location.pathname === previousLocation?.pathname) return;
//   showLevels('div, tr');
// }
