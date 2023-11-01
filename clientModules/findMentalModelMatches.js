import overview from '@site/static/json/overview.json';
import termsDefinitionsToip from '@site/static/json/terms-definitions-toip.json';
import termsDefinitionsEssiflab from '@site/static/json/terms-definitions-essiflab.json';
/**
 *  This plugin adds a GTP generated summary to the top of the page.
 */


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
    const headingText = heading.innerText;
    console.log('heading: ', headingText);

    const allTermsDefinitions = [...termsDefinitionsToip, ...termsDefinitionsEssiflab];



    allTermsDefinitions.forEach((term) => {
      // Remove zero-width space and other non-printable characters
      term.term = term.term.normalize('NFD').replace(/[\u200B-\u200D\uFEFF]/g, '');

      // Case sensitive except for first letter
      if (term.term.toLowerCase() === headingText.toLowerCase() ||
        term.term.charAt(0).toLowerCase() + term.term.slice(1) === headingText.charAt(0).toLowerCase() + headingText.slice(1)) {

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
        accordionButton.classList.add('accordion-button');
        accordionButton.setAttribute('type', 'button');
        accordionButton.setAttribute('data-bs-toggle', 'collapse');
        accordionButton.setAttribute('data-bs-target', `#collapse-${term.term}`);
        accordionButton.innerHTML = `${term.organisation} definition`;
        accordionHeader.appendChild(accordionButton);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.setAttribute('id', `collapse-${term.term}`);
        accordionItem.appendChild(accordionCollapse);

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.classList.add('fs-6');

        const definitionWithoutLinks = removeLinks(term.definition);
        accordionBody.innerHTML = definitionWithoutLinks + `(<a href="${term.url}" target="_blank" rel="noopener">source</a>)`;
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
