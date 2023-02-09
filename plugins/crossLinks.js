import { crossLinks } from '../crossLinksIndex';
import config from '@generated/docusaurus.config';

const doCrossLinks = () => {
  // const domElements = document.querySelectorAll('p');
  const domElements = document.querySelectorAll('.markdown *:not(a)');

  // part 1: replace keywords with (almost) unique ID's
  if (domElements.length > 0) {
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;

        // Assign only once:
        textFragment.randomNumber === undefined
          ? (textFragment.randomNumber = Math.floor(
              Math.random() * 10000000000000000000
            ))
          : null;

        let innerTextNew = innerText.replace(
          textFragment.keyword,
          textFragment.randomNumber
        );
        element.innerHTML = innerTextNew;
      });
    });

    // part 2: replace (almost) unique ID's with link
    domElements.forEach((element) => {
      crossLinks.forEach((textFragment) => {
        let innerText = element.innerHTML;
        let innerTextNew = innerText.replace(
          textFragment.randomNumber,
          `<a href=${config.baseUrl}` +
            textFragment.url +
            '>' +
            textFragment.keyword +
            '</a>' +
            ' <strong>(Level: ' +
            textFragment.level +
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
