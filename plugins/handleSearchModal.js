/*
  File: handleSearchModal.js
  Author: Kor Dwarshuis
  Created: 2023-06-21
  Updated: 2023-06-21
  Description: This plugin makes the state of the search modal (open or closed) persistent in the url.
*/

const handleSearchModal = () => {
  let searchModalStatus = '';


  /**
    Get the value of a search parameter:
    const paramValue = myRouter.getParam('paramName');
    console.log(paramValue);
  
    Set the value of a search parameter:
    myRouter.setParam('paramName', 'paramValue');
   */
  function router() {
    // Function to get the value of a search parameter
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


  function hideModal() {
    // Hide the modal
    document.querySelector('.search-modal-backdrop').classList.add('hidden');
    document.querySelector('#search').classList.add('hidden');
    searchModalStatus = 'closed';
  }

  function showModal() {
    // Show the modal
    document.querySelector('.search-modal-backdrop').classList.toggle('hidden');
    document.querySelector('#search').classList.toggle('hidden');
    document.querySelector('.ais-SearchBox-input').focus();
  }

  // Create an instance of the router
  const myRouter = router();

  if (myRouter.getParam('searchModalStatus') === 'open') {
    showModal();
    searchModalStatus = 'open';
  } else {
    hideModal();
    searchModalStatus = 'closed';
  }

  // Add event listeners, events are fired in plugins/typesense-instant-search.js
  document.addEventListener('eventSearchModalCloses', function (e) {
    hideModal();

    // Add to url that the modal is closed
    myRouter.setParam('searchModalStatus', 'closed');
  }, false);

  document.addEventListener('eventSearchModalOpens', function (e) {
    showModal();

    searchModalStatus = 'open';

    // Add to url that the modal is open
    myRouter.setParam('searchModalStatus', 'open');

  }, false);


  document.querySelector('.ais-SearchBox-input').addEventListener('input', function (e) { /* ... */
    setTimeout(() => {
      myRouter.setParam('searchModalStatus', searchModalStatus);
    }, 1000);//TODO: typesense removes all query params so we need to wait for that to happen and the re-add the searchModalStatus param. Find out how typesense can be configured to not remove all query params
  }, false);
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  handleSearchModal();
}
