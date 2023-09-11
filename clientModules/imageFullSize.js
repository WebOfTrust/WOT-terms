/**
 * Takes div and tr that contain data-level and show/hide these via buttons
 *
 */


const imageFullSize = () => {
  // const allImages = document.querySelectorAll('.markdown img');

  const imageFullSizeClass = 'full-page-image';

  // All images get a click event listener via event delegation
  document.querySelector('.markdown').addEventListener('click', (event) => {
    // If the clicked element is an image
    if (event.target.tagName === 'IMG') {
      console.log("clicked image");

      // Toggle the full size class
      event.target.classList.toggle(imageFullSizeClass);
    }
  });




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
