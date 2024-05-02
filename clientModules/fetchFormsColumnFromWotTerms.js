import overview from '@site/static/json/overview.json';

const fetchFormsColumnFromWotTerms = () => {
  // Code should only run in the documentation section
  const inDocSection =
    window.location.href.indexOf('/docs/glossary/') > -1 ? true : false;

  const entriesIndex = overview.values[0];

  function positionInArray(value) {
    for (let i = 0; i < entriesIndex.length; i++) {
      if (entriesIndex[i] === value) return i;
    }
    return -1;
  }

  const termColumn = positionInArray('Term');
  const formColumn = positionInArray('Form');

  function getNameFromAbbreviation(abbreviation) {
    const formValuesIndex = [
      { abbreviation: 'n', name: 'noun' },
      { abbreviation: 'v', name: 'verb' },
      { abbreviation: 'r', name: 'relation' },
      { abbreviation: 'a', name: 'adjective/adverb' }
    ];

    const matchingForm = formValuesIndex.find(form => form.abbreviation === abbreviation);
    return matchingForm ? matchingForm.name : null;
  }


  if (inDocSection) {
    const markdown = document.querySelector('.markdown');
    const heading = document.querySelector('.markdown h1:first-child');
    const headingText = heading.innerText;

    overview.values.forEach((term) => {
      if (term[termColumn] === headingText) {
        const text = getNameFromAbbreviation(term[formColumn]);
        heading.innerHTML += ` <sup class='ms-2 fs-5'>[ <em>${text}</em> ]</sup>`;
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  fetchFormsColumnFromWotTerms();
}
