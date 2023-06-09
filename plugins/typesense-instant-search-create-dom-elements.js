/**
 * This plugin creates the DOM elements for the Typesense search box and search results.
 * The DOM elements for the search hits are in the main Typesense InstantSearch plugin code.
 */

const typesenseInstantSearchCreateDomElements = () => {
   const domStringSearchStart = `<button id="search-start">🔍</button>`;
   const domStringSearchResult = `
<div class="search-modal-backdrop hidden"></div>
<div id="search" class="container padding--lg hidden">
   <div id="search-box"></div>
   <div id="search-close">✖</div>
   <h1 class="sr-only">Search Results</h1>
   <div class="row">
      <div class="col col--3">
          <h2 class="text--center">Refine</h2>
          <nav class="">
            <div class="" id="filters-section">
               <div class="row margin-top--lg">
                  <div class="">
                     <h3 class="">Website</h3>
                     <div id="source-refinement-list"></div>
                  </div>
               </div>
               <div class="row margin-top--lg">
                  <div class="">
                     <h3 class="">Knowledge Level</h3>
                     <div id="knowledgelevel-refinement-list"></div>
                  </div>
               </div>
               <div class="row margin-top--lg">
                  <div class="">
                     <h3 class="">Type</h3>
                     <div id="type-refinement-list"></div>
                  </div>
               </div>
               <div class="row margin-top--lg">
                  <div class="">
                     <h3 class="">Subject</h3>
                     <div id="subject-refinement-list"></div>
                  </div>
               </div>
            </div>
         </nav>
      </div>
      <div class="col col--9">
        <h2 class="text--center">Results</h2>
         <div id="hits"></div>
         <div id="pagination"></div>
      </div>
   </div>
</div>
  `;

   // Add search to dom
   if (document.querySelector('#search') === null) {
      document
         .querySelector('body')
         .insertAdjacentHTML('afterbegin', domStringSearchResult);
   }

   // TODO: find out why check for null does not work
   // if (document.querySelector('#search-start') === null) {
   if (document.querySelector('#search-start')) {
      document.querySelector('#search-start').remove();
   }
   document
      .querySelector('.navbar__items--right')
      .insertAdjacentHTML('beforeend', domStringSearchStart);
   // }
};

export function onRouteDidUpdate({ location, previousLocation }) {
   // Don't execute if we are still on the same page; the lifecycle may be fired
   // because the hash changes (e.g. when navigating between headings)
   if (location.pathname === previousLocation?.pathname) return;
   typesenseInstantSearchCreateDomElements();
}
