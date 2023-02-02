import { crossLinks } from './../crossLinks';

const doCrossLinks = () => {
  const domElements = document.querySelectorAll('p');

  // part 1: replace keywords with (almost) unique ID's
  if (domElements.length > 0) {
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;

        // Assign only once:
        textFragment[3] === undefined
          ? (textFragment[3] = Math.floor(Math.random() * 10000000000000000000))
          : null;

        let innerTextNew = innerText.replace(textFragment[0], textFragment[3]);
        element.innerHTML = innerTextNew;
      });
    });

    // part 2: replace (almost) unique ID's with link
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;
        let innerTextNew = innerText.replace(
          textFragment[3],
          "<a href='" +
            textFragment[1] +
            "'>" +
            textFragment[0] +
            '</a>' +
            ' <strong>(Level: ' +
            textFragment[2] +
            ')</strong>'
        );

        element.innerHTML = innerTextNew;
      });
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  doCrossLinks();
}
