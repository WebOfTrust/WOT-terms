// keep

// let showLevelButtonsAdded = false;
const showLevelButtonClass = 'show-level';
const showLevelButtonActiveClass = 'button--active';

const showLevels = () => {
  const paragraphs = document.querySelectorAll('p'); //TODO: deduplicate
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
    window.history.pushState(
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
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => {
      if (p.dataset.level !== undefined) {
        p.style.display = 'none';
        if (p.dataset.level <= level) {
          p.style.display = 'block';
        }
      }
    });
  };

  const createShowLevelButtons = () => {
    // if (showLevelButtonsAdded === false) {
    if (window.location.href.indexOf('/docs/') > -1) {
      // create level selection
      let htmlString =
        '<div class="margin-bottom--lg"><span>Level </span><button data-level="1" class="show-level button button--secondary margin-right--sm margin-left--sm" href="?level=1">1</button> <button data-level="2" class="show-level button button--secondary margin-right--sm" href="?level=2">2</button> <button data-level="3" class="show-level button button--secondary margin-right--sm" href="?level=3">3</button></div>';

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
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  showLevels();
}
