/*
  File: typesenseHandleSearchModal.js
  Author: Kor Dwarshuis
  Created: 2023-06-21
  Updated: 2023-06-23
  Description: This plugin makes the state of the search modal (open or closed) persistent in the url.
*/

import paths from "../docusaurus.paths";

// The search Modal is a modal that opens when the user clicks on the search icon in the top right corner of the screen.
let searchModalStatus = '';

// Some things need to be done only once, when the app is initialized
let appInitialized = false;


/**
  Get the value of a search parameter:
  const paramValue = myRouter.getParam('paramName');
  console.log(paramValue);
 
  Set the value of a search parameter:
  myRouter.setParam('paramName', 'paramValue');
 */
function router() {
  function getParam(key) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key);
  }

  // Function to set the value of a search parameter
  function setParam(key, value) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);

    // Update the URL with the modified search parameters
    const newUrl = window.location.pathname + '?' + searchParams.toString();
    window.history.replaceState(null, '', newUrl);
  }

  return {
    getParam,
    setParam
  };
}

// Create an instance of the router
const myRouter = router();

function hideModal() {
  document.querySelector('.search-modal-backdrop').classList.add('hidden');
  document.querySelector('#search').classList.add('hidden');
  searchModalStatus = 'closed';
}

function showModal() {
  document.querySelector('.search-modal-backdrop').classList.remove('hidden');
  document.querySelector('#search').classList.remove('hidden');
  document.querySelector('.ais-SearchBox-input').focus();
}

// Runs on onRouteDidUpdate
const typesenseHandleSearchModal = () => {
  // Only first time when app loads
  if (appInitialized === false) {
    document.addEventListener('eventSearchModalCloses', function () {
      hideModal();

      // Add to url that the modal is closed
      myRouter.setParam('searchModalStatus', 'closed');
    }, false);


    document.addEventListener('eventSearchModalOpens', function () {
      showModal();

      searchModalStatus = 'open';

      // Add to url that the modal is open
      myRouter.setParam('searchModalStatus', 'open');

      // Hide the search results on the home page
      if (window.location.pathname === paths.baseUrl) {
        document.querySelector('.search-results-container').classList.add('d-none');
        document.querySelector('.to-search-results').classList.add('d-none');
      } else {
        document.querySelector('.search-results-container').classList.remove('d-none');
        document.querySelector('.to-search-results').classList.remove('d-none');
      }
    }, false);

  }

  // on new page load, check if the search modal should be open or closed
  if (myRouter.getParam('searchModalStatus') === 'open') {
    showModal();
    searchModalStatus = 'open';
  } else {
    hideModal();
    searchModalStatus = 'closed';
  }

  // // on new page load, if search box is empty, hide results. There seems to be no out of the box solution for this
  // if (document.querySelector('.ais-SearchBox-input').value === '') {
  //   document.querySelector('#hits').classList.add('hidden');
  //   document.querySelector('#pagination').classList.add('hidden');
  //   document.querySelector('.ais-SearchBox-input').addEventListener('input', function () {
  //     document.querySelector('#hits').classList.remove('hidden');
  //     document.querySelector('#pagination').classList.remove('hidden');
  //   })
  // }

  function setSearchModalStatusInUrl() {
    setTimeout(() => {
      myRouter.setParam('searchModalStatus', searchModalStatus);
    }, 1000);//TODO: typesense removes all query params so we need to wait for that to happen and the re-add the searchModalStatus param. Find out how typesense can be configured to not remove all query params
  }

  function toggleSearchResultsVisibility() {
    if (document.querySelector('.ais-SearchBox-input').value === '') {
      document.querySelector('.search-results-container').classList.add('d-none');
      document.querySelector('.to-search-results').classList.add('d-none');
    } else {
      document.querySelector('.search-results-container').classList.remove('d-none');
      document.querySelector('.to-search-results').classList.remove('d-none');
    }
  }

  document.querySelector('.ais-SearchBox-input').addEventListener('input', function (e) {// Should be “input”, not “change”
    setSearchModalStatusInUrl();
    toggleSearchResultsVisibility();
  }, false);

  // event delegation, for the filters
  const on = (selector, eventType, childSelector, eventHandler) => {
    const elements = document.querySelectorAll(selector);
    for (let element of elements) {
      element.addEventListener(eventType, eventOnElement => {
        if (eventOnElement.target.matches(childSelector)) {
          eventHandler(eventOnElement);
        }
      }, true);
    }
  };

  // When a filter is clicked
  on('#filters-section', 'click', '.ais-RefinementList-checkbox', event => {
    setSearchModalStatusInUrl();
  });


  // create event for opening and closing the search modal
  var eventSearchModalOpens = new Event('eventSearchModalOpens');
  var eventSearchModalCloses = new Event('eventSearchModalCloses');

  function handleSearchModalCloseClick(e) {
    document.dispatchEvent(eventSearchModalCloses);

  }
  function handleSearchModalOpenClick(e) {
    document.dispatchEvent(eventSearchModalOpens);

  }

  // Dispatch the event.
  // Only first time when app loads, since the Modal DOM structure is apparently preserved between pages
  if (appInitialized === false) {
    document.querySelector('#search-close').addEventListener('click', handleSearchModalCloseClick);
  }

  // Dispatch the event.
  // This DOM element is not preserved between pages, so we need to add the event listener every time the page loads
  document.querySelector('#search-start').addEventListener('click', handleSearchModalOpenClick);

  if (window.location.pathname === paths.baseUrl) {
    handleSearchModalOpenClick();
  }

  // Close the search modal when the escape key is pressed
  document.addEventListener('keyup', (event) => {
    switch (event.key) {
      // escape
      case 'Escape':
        document.dispatchEvent(eventSearchModalCloses);
        break;
    }
  });

  appInitialized = true;
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  typesenseHandleSearchModal();
}

// export function onRouteUpdate({ location, previousLocation }) {
//   // Only first time when app loads
//   if (previousLocation === null) {
//     console.log("Only first time when app loads");
//   }
// }
