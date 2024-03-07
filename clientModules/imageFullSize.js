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
  const imageFullSizeClass = 'image-full-page';

  // All images get a click event listener via event delegation
  const markdownElement = document.querySelector('body');
  // const markdownElement = document.querySelector('.markdown');

  function removeContainer() {
    let container = document.querySelector('.image-container-full-page');
    if (container) {
      document.body.removeChild(container);
    }
  }

  if (markdownElement) {
    console.log("event listener added");
    markdownElement.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG' && event.target.closest('.markdown')) {

        // To be implemented: also account for SVG, path, circle, rect
        // if ((event.target.tagName === 'svg' || event.target.tagName === 'path' || event.target.tagName === 'circle' || event.target.tagName === 'rect') && event.target.closest('.markdown')) {

        let image = event.target;

        if (document.querySelector('.image-container-full-page') === null) {
          // Add container if it doesn't exist

          // Clone the image element
          const clonedImage = image.cloneNode(true);

          // Create a new div element with the class .full-page-image-container
          const container = document.createElement('div');
          container.classList.add('image-container');
          container.classList.add('image-container-full-page');

          // Add the cloned image to the new container div
          container.appendChild(clonedImage);

          // Append the new container div to the body
          document.body.appendChild(container);

          // Add event listener to the new container
          container.addEventListener('click', function containerClickEvent() {
            container.removeEventListener('click', containerClickEvent); // remove this click listener
            removeContainer();
          });

        }

        // Toggle the full size class on the original image
        image.classList.toggle(imageFullSizeClass);
      }
    });

    // Add keydown event listener to handle the ESC key
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape") {
        removeContainer();
      }
    });

  } else {
    console.log("Element with class '.markdown' not found.");
  }
};

if (typeof window !== 'undefined') {// should run on client only
  document.addEventListener('DOMContentLoaded', (event) => {
    imageFullSize();
  });
}