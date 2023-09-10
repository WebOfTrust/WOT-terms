/*
  File: typesenseInstantSearchInit.js
  Author: Kor Dwarshuis
  Created: 2023
  Updated: 2023
  Description: This plugin creates the DOM elements for the Typesense search box and search results. The DOM elements for the search hits are in the main Typesense InstantSearch plugin code.
*/

const typesenseInstantSearchCreateDomElements = () => {
   const domStringSearchStart = `<button id="search-start">🔍</button>`;
   const domStringSearchResult = `
<div class="search-modal-backdrop hidden"></div>
<div id="search" class="container p-3 hidden" style="max-width: 70em;">
<h1 class="search-heading text-center fs-5">KERI Suite Search Engine (KERISSE)</h1>
<p class='text-center' id='index-created-timestamp'>-</p>
   <div id="search-box" class="mt-3 mb-2"></div>
   <div id="search-close">✖</div>
   <a href="#search-results" class="btn btn-light btn-sm mt-3 mb-3 d-block d-md-none">To search results</a>
   <div id="example-search-terms" class="mt-4 text-center">Try:
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">Keri</a> 
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">ACDC</a> 
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">Trust over IP</a>
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">LEI</a>
   </div>
   <div class="container mt-3">

   <!-- Column with refinement filters -->
   <div class="row">
      <div class="col-md-3 p-0">
         <div class="container text-center border-bottom border-top mb-4 pb-2 pt-3">
            <div class="row">
               <div class="col p-0">
                  <h2 class="">Refine</h2>
               </div>
               <div class="col p-0" id="clear-refinements"></div>
            </div>
         </div>
         
         <div class="" id="filters-section">
            <h3 class="mt-1">Source</h3>
            <div id="source-refinement-list"></div>
            
            <h3 class="mt-5">Author</h3>
            <div id="author-refinement-list"></div>

            <h3 class="mt-5">File type</h3>
            <div id="media-type-refinement-list"></div>

            <h3 class="mt-5">Knowledge Level</h3>
            <div id="knowledgelevel-refinement-list"></div>
            
            <h3 class="mt-5">Type</h3>
            <div id="type-refinement-list"></div>
            
            <h3 class="mt-5">Subject</h3>
            <div id="subject-refinement-list"></div>
         </div>           
      </div>
      <!-- Column with search results -->
      <div class="col-md-9 p-0 ps-md-3">
        <h2 class="text-center border-bottom border-top mb-4 pb-3 pt-3" id="search-results">Results</h2>
         <div id="hits"></div>
         <div id="pagination"></div>
      </div>
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


   /*
      TIMESTAMP   

      The code below Fetches HTML content from indexed-in-KERISSE on this same domain using the `fetch` API.
      
      It then parses the fetched HTML using `DOMParser` and queries the DOM to find a paragraph element with the id "index-created-timestamp".
      
      If the element is found, its text content is added to the search result page; otherwise, an appropriate message indicating the absence of such an element is logged.
   */


   // Fetching the HTML content
   fetch('/WOT-terms/docs/overview/indexed-in-KERISSE/')
      .then(response => response.text())
      .then(html => {
         // Parsing the fetched HTML string into a DOM object
         const parser = new DOMParser();
         const doc = parser.parseFromString(html, 'text/html');

         // Finding the paragraph element by its id
         const timestampElement = doc.querySelector('#index-created-timestamp');

         if (timestampElement) {
            // Extracting and logging the content of the paragraph
            const timestampContent = timestampElement.textContent;
            document.querySelector('#index-created-timestamp').textContent = timestampContent;
         } else {
            console.log('Element with id "index-created-timestamp" not found.');
         }
      })
      .catch(error => {
         console.error(`Error fetching the content: ${error}`);
      });
   // END TIMESTAMP



};

export function onRouteDidUpdate({ location, previousLocation }) {
   // Don't execute if we are still on the same page; the lifecycle may be fired
   // because the hash changes (e.g. when navigating between headings)
   if (location.pathname === previousLocation?.pathname) return;
   typesenseInstantSearchCreateDomElements();
}
