import config from '@generated/docusaurus.config';

const infoMessage = {
  level1: `<img src="${config.baseUrl}img/child-girl-kid-svgrepo-com.svg" alt="A child">Level 1`,
  level2: `<img src="${config.baseUrl}img/graduate-svgrepo-com.svg" alt="A graduate">Level 2`,
  level3: `<img src="${config.baseUrl}img/professor-svgrepo-com.svg" alt="Person that resembles Einstein">Level 3`,
};

const showLevelButtonClass = 'show-level';
const showLevelButtonActiveClass = 'button--active';

const showLevels = () => {
  // for testing is we are in de document's section, code should only run there
  const inDocSection =
    window.location.href.indexOf('/docs/') > -1 ? true : false;
  const paragraphs = document.querySelectorAll('p'); //TODO: deduplicate
  let strAllQueryParameters = window.location.search;
  let allQueryParameters = new URLSearchParams(strAllQueryParameters);
  let urlLevel = allQueryParameters.get('level');

  let urlContainsValidLevel = false;
  // console.log('rege');
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
    const textBlocks = document.querySelectorAll('div');
    textBlocks.forEach((p) => {
      if (p.dataset.level !== undefined) {
        p.style.display = 'none';
        if (p.dataset.level <= level) {
          p.style.display = 'block';
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
        '<div class="show-level-buttons-info margin-bottom--lg alert alert--info" role="alert">Choose your knowledge level.</div><div class="margin-bottom--lg"><span>Level </span><button data-level="1" class="show-level button button--secondary margin-right--sm margin-left--sm" href="?level=1">1</button> <button data-level="2" class="show-level button button--secondary margin-right--sm" href="?level=2">2</button> <button data-level="3" class="show-level button button--secondary margin-right--sm" href="?level=3">3</button></div>';

      document
        .querySelector('main article')
        .insertAdjacentHTML('afterbegin', htmlString);

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
    // console.log('button: ', button);
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
  showLevels();
}
