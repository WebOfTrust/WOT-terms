/**
 * @file This module fetches the "Form" column from the WOT terms overview JSON file and displays it in the documentation section of the glossary page. 
 * @module fetchFormsColumnFromWotTerms
 * @requires @site/static/json/overview.json
 */

/**
 * Fetches the "Form" column from the WOT terms overview JSON file and displays it in the documentation section of the glossary page.
 * @function
 * @name fetchFormsColumnFromWotTerms
 * @returns {void}
 */

/**
 * Returns the position of a value in the entriesIndex array.
 * @function
 * @name positionInArray
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */

/**
 * Gets the name of a form from its abbreviation.
 * @function
 * @name getNameFromAbbreviation
 * @param {string} abbreviation - The abbreviation of the form.
 * @returns {string|null} - The name of the form, or null if the abbreviation is not found.
 */

/**
 * Called when the route is updated. Fetches the "Form" column from the WOT terms overview JSON file and displays it in the documentation section of the glossary page.
 * @function
 * @name onRouteDidUpdate
 * @param {Object} location - The current location object.
 * @param {Object} previousLocation - The previous location object.
 * @returns {void}
 */


import overview from '@site/static/json/overview.json';

const fetchFormsColumnFromWotTerms = () => {
  // Code should only run in the documentation section
  const inDocSection =
    window.location.href.indexOf('/docs/glossary/') > -1 ? true : false;

  /**
 * The column names
 * @type {Array<string>}
 */
  const entriesIndex = overview.values[0];

  /**
   * Returns the position of a value in the entriesIndex array.
   * @param {string} value - The value to search for in the entriesIndex array.
   * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
   */
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
    const heading = document.querySelector('.markdown header h1');
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
