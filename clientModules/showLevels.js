/**
 * Takes div and tr that contain data-level and show/hide these via buttons
 *
 */

import config from '@generated/docusaurus.config';

const infoMessage = {
  level1: `<img src="${config.baseUrl}img/skill-level-basic-svgrepo-com.svg" alt="Level 1, a bar diagram with one bar active">Level 1`,
  level2: `<img src="${config.baseUrl}img/skill-level-intermediate-svgrepo-com.svg" alt="Level 2, a bar diagram with two bars active">Level 2`,
  level3: `<img src="${config.baseUrl}img/skill-level-advanced-svgrepo-com.svg" alt="Level 3, a bar diagram with three bars active">Level 3`,
};

const showLevelButtonClass = 'show-level';
const showLevelButtonActiveClass = 'button--active';

// Main function
const showLevels = (targetElements) => {
  // for testing is we are in de document's section, code should only run there
  const inDocSection =
    window.location.href.indexOf('/docs/') > -1 ? true : false;
  const paragraphs = document.querySelectorAll('p'); //TODO: remove this line?
  let strAllQueryParameters = window.location.search;
  let allQueryParameters = new URLSearchParams(strAllQueryParameters);
  let urlLevel = allQueryParameters.get('level');

  let urlContainsValidLevel = false;
  if (urlLevel === '1' || urlLevel === '2' || urlLevel === '3') {
    urlContainsValidLevel = true;
  }

  let localStorageContainsValidLevel = false;
  if (
    localStorage.getItem('level') === '1' ||
    localStorage.getItem('level') === '2' ||
    localStorage.getItem('level') === '3'
  ) {
    localStorageContainsValidLevel = true;
  }

  const resetShowLevelButton = () => {
    const showLevelButtons = document.querySelectorAll(
      '.' + showLevelButtonClass
    );
    showLevelButtons.forEach((button) => {
      button.classList.remove(showLevelButtonActiveClass);
    });
  };

  // push url string to browser address bar
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

  const createShowLevelButtons = () => {
    if (
      inDocSection &&
      document.querySelector('.show-level-buttons-info') === null
    ) {
      // create level selection
      let htmlString =
        `
        <div class="container text-center sticky-top pt-3 pb-3 mb-4" style="background: white; position: sticky !important; z-index: 1020 !important;">
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

      document.querySelectorAll('.show-level').forEach((button) => {
        button.addEventListener('click', handleShowLevelButton.bind(button));
      });

      // showLevelButtonsAdded = true;
    }
  };

  const handleShowLevelButton = (button) => {
    // set paragraphs
    setParagraphs(button.target.dataset.level);

    // set URL
    allQueryParameters.set('level', button.target.dataset.level);
    setURL();

    // set localStorage
    localStorage.setItem('level', button.target.dataset.level);

    // set button = active
    resetShowLevelButton();
    button.target.classList.add(showLevelButtonActiveClass);
    document.querySelector('.show-level-buttons-info').innerHTML =
      infoMessage['level' + button.target.dataset.level];
  };

  createShowLevelButtons();

  // if url contains no valid level and localStorage contains valid level
  if (
    urlContainsValidLevel === false &&
    localStorageContainsValidLevel === true
  ) {
    allQueryParameters.set('level', localStorage.getItem('level'));
    setURL();
    setParagraphs(localStorage.getItem('level'));

    // set showLevel Button active
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

  if (urlContainsValidLevel) {
    setParagraphs(urlLevel);
    localStorage.setItem('level', urlLevel);

    // set showLevel Button active
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
    if (document.querySelector('.show-level-buttons-info')) {
      document.querySelector('.show-level-buttons-info').innerHTML =
        infoMessage['level' + localStorage.getItem('level')];
    }
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  showLevels('div, tr');
}
export function onRouteUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  showLevels('div, tr');
}
