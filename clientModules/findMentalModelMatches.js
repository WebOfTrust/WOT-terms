import { toLowerCaseAndRemoveSpecialChars } from '../modules-js-universal/toLowerCaseAndRemoveSpecialChars.js';


import termsDefinitionsDigitalgovtnz from '@site/static/json/external-glosseries/glossaries/terms-definitions-digitalgovtnz.json';

import termsDefinitionsEssiflab from '@site/static/json/external-glosseries/glossaries/terms-definitions-essiflab.json';

import termsDefinitionsNist from '@site/static/json/external-glosseries/glossaries/terms-definitions-nist.json';

import termsDefinitionsToip from '@site/static/json/external-glosseries/glossaries/terms-definitions-toip.json';

import termsDefinitionsToipDidWebs from '@site/static/json/external-glosseries/glossaries/terms-definitions-toipdidwebs.json';

import termsDefinitionsW3cDid from '@site/static/json/external-glosseries/glossaries/terms-definitions-w3cdid.json';






/**
 *  This plugin adds a GTP generated summary to the top of the page.
 */

const allTermsDefinitions = [...termsDefinitionsToip, ...termsDefinitionsEssiflab, ...termsDefinitionsDigitalgovtnz, ...termsDefinitionsNist, ...termsDefinitionsW3cDid, ...termsDefinitionsToipDidWebs];


// Remove links from term.definition
const removeLinks = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const links = doc.querySelectorAll('a');
  links.forEach(link => {
    const text = doc.createTextNode(link.textContent);
    link.parentNode.replaceChild(text, link);
  });
  return doc.body.innerHTML;
};


const findMentalModelMatches = () => {
  // Code should only run in the documentation section
  const inDocSection =
    window.location.href.indexOf('/docs/glossary/') > -1 ? true : false;

  let headingAdded = false;

  if (inDocSection) {
    const markdown = document.querySelector('.markdown');
    const heading = document.querySelector('.markdown header h1');

    // This is not working, because the heading sometimes contains child elements:
    // const headingText = heading.innerText;

    // This works: (to avoid also selecting text in child elements, e.g. <sup>)
    const headingText = heading.firstChild && heading.firstChild.nodeType === Node.TEXT_NODE ? heading.firstChild.textContent : '';

    allTermsDefinitions.forEach((term) => {
      // Remove zero-width space and other non-printable characters
      term.term = term.term.normalize('NFD').replace(/[\u200B-\u200D\uFEFF]/g, '');

      const termToLowerCaseAndRemoveSpecialChars = toLowerCaseAndRemoveSpecialChars(term.term);

      if (termToLowerCaseAndRemoveSpecialChars === toLowerCaseAndRemoveSpecialChars(headingText)) {
        if (headingAdded === false) {
          // Create h2 element
          const h2 = document.createElement('h2');
          h2.textContent = 'Other glossaries (or mental models)';
          markdown.appendChild(h2);
          headingAdded = true;
        }

        // Create Bootstrap accordion container
        const accordionContainer = document.createElement('div');
        accordionContainer.classList.add('accordion');
        accordionContainer.classList.add('mb-3');

        // Create Bootstrap accordion item
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionItem.appendChild(accordionHeader);

        const accordionButton = document.createElement('button');
        accordionButton.classList.add('accordion-button', 'fs-4');
        accordionButton.setAttribute('type', 'button');
        accordionButton.setAttribute('data-bs-toggle', 'collapse');
        accordionButton.setAttribute('data-bs-target', `#collapse-${termToLowerCaseAndRemoveSpecialChars}`);
        accordionButton.innerHTML = `${term.organisation} definition`;
        accordionHeader.appendChild(accordionButton);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.setAttribute('id', `collapse-${termToLowerCaseAndRemoveSpecialChars}`);
        accordionItem.appendChild(accordionCollapse);

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.classList.add('fs-6');

        const definitionWithoutLinks = removeLinks(term.definition);
        accordionBody.innerHTML = "<h3>" + term.term + ": " + "</h3>" + definitionWithoutLinks + `(<a href="${term.url}" target="_blank" rel="noopener">source</a>)`;
        accordionCollapse.appendChild(accordionBody);

        // Insert accordion item as first child of accordion container
        accordionContainer.appendChild(accordionItem);

        markdown.appendChild(accordionContainer);
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  findMentalModelMatches();
}
