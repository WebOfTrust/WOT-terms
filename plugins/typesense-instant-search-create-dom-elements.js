/**
 * This plugin creates the DOM elements for the Typesense search box and search results.
 * The DOM elements for the search hits are in the main Typesense InstantSearch plugin code.
 */

const typesenseInstantSearchCreateDomElements = () => {
   const domStringSearchStart = `<button id="search-start">🔍</button>`;
   const domStringSearchResult = `
<div class="search-modal-backdrop hidden"></div>
<div id="search" class="container p-5 hidden" style="max-width: 70em;">
<h1 class="search-heading text-center">KERI Suite Search Engine (KERISSE)</h1>
   <!--<div id="search-box" class="mt-5 mb-5"></div>-->
   <div id="search-box" class="mt-3 mb-2"></div>
   <div id="search-close">✖</div>
   <!--<div class="row">-->
   <div class="row mt-3">
      <div class="col-md-3">
         <h2 class="">Refine</h2>
          
         <div class="" id="filters-section">
            <!--<h3 class="mt-5">Source</h3>-->
            <h3 class="mt-1">Source</h3>
            <div id="source-refinement-list"></div>
            
            <h3 class="mt-5">Author</h3>
            <div id="author-refinement-list"></div>

            <h3 class="mt-5">Knowledge Level</h3>
            <div id="knowledgelevel-refinement-list"></div>
            
            <h3 class="mt-5">Type</h3>
            <div id="type-refinement-list"></div>
            
            <h3 class="mt-5">Subject</h3>
            <div id="subject-refinement-list"></div>
         </div>           
      </div>
      <div class="col-md-9">
        <h2 class="text-center">Results</h2>
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
