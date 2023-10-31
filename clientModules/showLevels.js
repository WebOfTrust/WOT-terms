/**
 * Takes div and tr that contain data-level and show/hide these via buttons
 *
 */

// import the config file
import config from '@generated/docusaurus.config';

const levelButtonsAndInfoClassNames = 'show-level-buttons-info-container';

// define the message to be shown for each level
const infoMessage = {
  level1: `<img src="${config.baseUrl}img/skill-level-basic-svgrepo-com.svg" alt="Level 1, a bar diagram with one bar active">Level 1`,
  level2: `<img src="${config.baseUrl}img/skill-level-intermediate-svgrepo-com.svg" alt="Level 2, a bar diagram with two bars active">Level 2`,
  level3: `<img src="${config.baseUrl}img/skill-level-advanced-svgrepo-com.svg" alt="Level 3, a bar diagram with three bars active">Level 3`,
};

// define the css class names for the show level button and the active button
const showLevelButtonClass = 'show-level';
const showLevelButtonActiveClass = 'button--active';

// main function to show different levels
const showLevels = (targetElements) => {
  // Code should only run in the documentation section
  //TODO: should this not be: only in the glossary section?
  const inDocSection =
    window.location.href.indexOf('/docs/') > -1 ? true : false;

  // get the query parameters from the current URL
  let strAllQueryParameters = window.location.search;
  let allQueryParameters = new URLSearchParams(strAllQueryParameters);

  // get the 'level' parameter from the URL
  let urlLevel = allQueryParameters.get('level');

  // check if the 'level' parameter from the URL is valid (1, 2, or 3)
  let urlContainsValidLevel = false;
  if (urlLevel === '1' || urlLevel === '2' || urlLevel === '3') {
    urlContainsValidLevel = true;
  }

  // check if the 'level' parameter from the localStorage is valid (1, 2, or 3)
  let localStorageContainsValidLevel = false;
  if (
    localStorage.getItem('level') === '1' ||
    localStorage.getItem('level') === '2' ||
    localStorage.getItem('level') === '3'
  ) {
    localStorageContainsValidLevel = true;
  }

  // function to remove the active class from all show level buttons
  const resetShowLevelButton = () => {
    const showLevelButtons = document.querySelectorAll(
      '.' + showLevelButtonClass
    );
    showLevelButtons.forEach((button) => {
      button.classList.remove(showLevelButtonActiveClass);
    });
  };

  // function to update the URL with the current parameters
  const setURL = () => {
    window.history.replaceState(
      '',
      '',
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?' +
      allQueryParameters.toString()
    );
  };

  // function to show or hide paragraphs depending on the given level
  const setParagraphs = (level) => {
    const textBlocks = document.querySelectorAll(targetElements);
    textBlocks.forEach((p) => {
      if (p.dataset.level !== undefined) {
        // hide all items
        p.querySelector('.accordion-collapse').classList.remove('show');
        if (p.dataset.level <= level) {
          // show items with level equal or lower than level
          //TODO: it works, but there must be a better way to do this
          p.querySelector('button').click();
        }
      }
    });
  };

  // function to create buttons for showing different levels
  const createShowLevelButtons = () => {
    if (
      inDocSection &&
      document.querySelector('.show-level-buttons-info') === null
    ) {
      // insert level selection buttons into the HTML
      let htmlString =
        `
        <div class="${levelButtonsAndInfoClassNames} container text-center pt-3 pb-3 mb-4" style="background: white;">
          <div class="row">
            <div class="col">
              <div class="show-level-buttons-info d-inline">
                Choose your knowledge level.
              </div>
            </div>
            <div class="col">
            <span>Level </span>
            
            <button data-level="1" class="show-level button button--secondary margin-right--sm margin-left--sm" href="?level=1">1</button>
            <button data-level="2" class="show-level button button--secondary margin-right--sm" href="?level=2">2</button>
            <button data-level="3" class="show-level button button--secondary margin-right--sm" href="?level=3">3</button>
            </div>
          </div>
        </div>
        `;

      let mainArticle = document.querySelector('main article');
      if (mainArticle) {
        mainArticle.insertAdjacentHTML('afterbegin', htmlString);
      }

      // add event listener to each button
      document.querySelectorAll('.show-level').forEach((button) => {
        button.addEventListener('click', handleShowLevelButton.bind(button));
      });

      // showLevelButtonsAdded = true;
    }

    // Buttons should only be visible if there are elements with data-level
    function checkDataLevelAttribute(targetElements, levelButtonsAndInfoClassNames) {

      if (document.querySelector('main article') === null) return;

      // Query all elements matching the target selector
      const elements = document.querySelector('main article').querySelectorAll(targetElements);

      // Flag to track if any element has the "data-level" attribute
      let hasDataLevelAttribute = false;

      // Loop through each element
      elements.forEach((element) => {
        // Check if the element has the "data-level" attribute
        if (element.hasAttribute('data-level')) {
          // Set the flag to true if an element has the attribute
          hasDataLevelAttribute = true;
          return; // Exit the loop early if attribute is found
        }
      });

      // If no element has the "data-level" attribute
      if (!hasDataLevelAttribute) {
        // Get all elements with the specified class name(s)
        const elementsWithClass = document.querySelectorAll("." + levelButtonsAndInfoClassNames);

        // Loop through the elements with the class
        for (let i = 0; i < elementsWithClass.length; i++) {
          // Add the "hidden" class to each element
          elementsWithClass[i].classList.add('hidden');
        }
      }
    }

    checkDataLevelAttribute(targetElements, levelButtonsAndInfoClassNames);

  };

  // function to handle the click event on a show level button
  const handleShowLevelButton = (button) => {
    // show or hide paragraphs based on the clicked button
    setParagraphs(button.target.dataset.level);

    // update the URL with the new level
    allQueryParameters.set('level', button.target.dataset.level);
    setURL();

    // save the new level to the localStorage
    localStorage.setItem('level', button.target.dataset.level);

    // make the clicked button active
    resetShowLevelButton();
    button.target.classList.add(showLevelButtonActiveClass);
    document.querySelector('.show-level-buttons-info').innerHTML =
      infoMessage['level' + button.target.dataset.level];
  };

  // create the buttons when the page loads
  createShowLevelButtons();

  // handle the case when the URL doesn't contain a valid level but the localStorage does
  if (
    urlContainsValidLevel === false &&
    localStorageContainsValidLevel === true
  ) {
    // update the URL with the level from the localStorage
    allQueryParameters.set('level', localStorage.getItem('level'));
    setURL();
    setParagraphs(localStorage.getItem('level'));

    // make the corresponding button active
    if (
      document.querySelector(
        '.show-level[data-level="' + localStorage.getItem('level') + '"]'
      )
    ) {
      document
        .querySelector(
          '.show-level[data-level="' + localStorage.getItem('level') + '"]'
        )
        .classList.add(showLevelButtonActiveClass);
    }
  }

  // handle the case when the URL contains a valid level
  if (urlContainsValidLevel) {
    // show or hide paragraphs based on the level from the URL
    setParagraphs(urlLevel);

    // save the level from the URL to the localStorage
    localStorage.setItem('level', urlLevel);

    // make the corresponding button active
    if (
      document.querySelector(
        '.show-level[data-level="' + localStorage.getItem('level') + '"]'
      )
    ) {
      document
        .querySelector(
          '.show-level[data-level="' + localStorage.getItem('level') + '"]'
        )
        .classList.add(showLevelButtonActiveClass);
    }

    // update the information message based on the level from the URL
    if (document.querySelector('.show-level-buttons-info')) {
      document.querySelector('.show-level-buttons-info').innerHTML =
        infoMessage['level' + localStorage.getItem('level')];
    }
  }
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  showLevels('div, tr');
}
// export function onRouteUpdate({ location, previousLocation }) {
//   // Don't execute if we are still on the same page; the lifecycle may be fired
//   // because the hash changes (e.g. when navigating between headings)
//   // if (location.pathname === previousLocation?.pathname) return;
//   showLevels('div, tr');
// }
