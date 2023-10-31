import overview from '@site/static/json/overview.json';
import toipTermsDefinitions from '@site/static/json/toip-terms-definitions.json';
/**
 *  This plugin adds a GTP generated summary to the top of the page.
 */

const findMentalModelMatches = () => {


  // Code should only run in the documentation section
  const inDocSection =
    window.location.href.indexOf('/docs/glossary/') > -1 ? true : false;

  if (inDocSection) {
    const heading = document.querySelector('.markdown header h1');
    const headingText = heading.innerText;
    console.log('heading: ', headingText);



    toipTermsDefinitions.forEach((term) => {
      if (term.term === headingText) {
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
        accordionButton.setAttribute('data-bs-target', '#collapseOne');
        accordionButton.textContent = 'Other mental models‘ definitions';
        accordionHeader.appendChild(accordionButton);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.setAttribute('id', 'collapseOne');
        accordionItem.appendChild(accordionCollapse);

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.classList.add('fs-6');
        accordionBody.innerHTML = term.definition;
        accordionCollapse.appendChild(accordionBody);

        // Insert accordion item as first child of heading
        heading.append(accordionItem);

        // heading.insertAdjacentHTML("afterend", accordionItem);
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
