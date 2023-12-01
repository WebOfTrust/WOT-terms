/*
  File: typesenseInstantSearchInit.js
  Author: Kor Dwarshuis
  Created: 2023
  Updated: 2023
  Description: This plugin creates the DOM elements for the Typesense search box and search results. The DOM elements for the search hits are in the main Typesense InstantSearch plugin code.
*/

import paths from "../docusaurus.paths";

const typesenseInstantSearchCreateDomElements = () => {
    const domStringSearchStart = `<button id="search-start">🔍</button>`;
    const domStringSearchResult = `
<div class="search-modal-backdrop hidden"></div>
<div id="search" class="container p-3 hidden" style="max-width: 70em;">
    <h1 class="search-heading text-center fs-5">KERI Suite Search Engine (KERISSE)</h1>
    <p class='text-center'><span id='index-created-timestamp-target-search-modal'>–</span>, <span
            id='index-created-page-count-target-search-modal'>–</span></p>
    <div id="search-box" class="mt-3 mb-2"></div>
    <div id="search-close">✖</div>
    <a href="#search-results" class="to-search-results btn btn-light btn-sm mt-3 mb-3 d-block d-md-none">To search
        results</a>
    <!--<p id="example-search-terms" class="mt-4 text-center"><small>Try:
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">Keri</a>
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">ACDC</a>
      <a role="button" class="clickable-search-term btn btn-outline-secondary btn-sm d-inline">Trust over IP</a>
   </p>-->
    <!--
    <nav class="navbar navbar-expand">
        <div class="container-fluid">
            <a target="_blank" rel="noopener" class="btn btn-outline-secundary"
                href="https://github.com/WebOfTrust/keri">Keri on Github</a>
            <a target="_blank" rel="noopener" class="btn btn-outline-secundary"
                href="https://keri.one/keri-resources/">Keri.one</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown1"
                aria-controls="navbarDropdown1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarDropdown1">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Kent Bull Tutorials
                        </button>
                        <ul class="dropdown-menu">
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://kentbull.com/2022/06/05/keri-start/">Keri start</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://kentbull.com/2023/03/09/keri-tutorial-series-treasure-hunting-in-abydos-issuing-and-verifying-a-credential-acdc/">ACDC</a>
                            </li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://kentbull.com/2023/01/27/keri-tutorial-series-kli-sign-and-verify-with-heartnet/">Heartnet</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown2"
                aria-controls="navbarDropdown2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarDropdown2">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Nuttawut Kongsuwan Tutorials
                        </button>
                        <ul class="dropdown-menu">
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/keri-jargon-in-a-nutshell-part-1-fb554d58f9d0">KERI
                                    jargon in a nutshell. Part 1: KERI and AID.</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/keri-jargon-in-a-nutshell-part-2-said-and-acdc-de6bc544b95e">KERI
                                    jargon in a nutshell. Part 2: SAID and ACDC.</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/keri-jargon-in-a-nutshell-part-3-oobi-and-ipex-2e6b222f4b87">KERI
                                    jargon in a nutshell. Part 3: OOBI and IPEX.</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/anonymous-credential-part-1-brief-overview-and-history-c6679034c914">Anonymous
                                    Credential Part 1: Brief Overview and History</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/remote-identity-proofing-for-digital-identity-c9a285c1b774">Remote
                                    Identity Proofing for Digital Identity</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/verifiable-credential-and-verifiable-presentation-for-decentralized-digital-identity-132d107c2d9f">Verifiable
                                    Credentials for Decentralized Digital Identity</a></li>
                            <li><a target="_blank" rel="noopener" class="dropdown-item"
                                    href="https://medium.com/finema/minimal-disclosure-of-identity-with-zero-knowledge-proof-and-cl-signature-517ed2a61307">Minimal
                                    Disclosure of Identity with Zero-Knowledge Proof and CL-Signature</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    -->

    <div class="search-results-container container mt-3" style="z-index: 1999;">

        <!-- Column with refinement filters -->
        <div class="row">
            <div class="col-md-3 p-1 pt-0 column-refinement-filters">
                <div class="container border-bottom border-top mb-4 pb-2 pt-3">
                    <div class="row">
                        <div class="col p-0" style='flex-basis: 0'>
                            <!-- Something goes wrong in build phase, this is to compensate -->
                            <h2 class="">Refine</h2>
                        </div>
                        <div class="text-end col p-0" id="clear-refinements" style='flex-basis: 0'></div>
                    </div>
                </div>

                <div class="" id="filters-section">
                    <!--
            <h3 class="mt-1">Sort</h3>
            <div id="sort-by"></div>
            -->

                    <div id="current-refinements-list-container">
                        <h3 id="current-refinements-list-heading" class="mt-1 fs-6">Current refinements</h3>
                        <div id="current-refinements-list" class="fs-6"></div>
                        <hr>
                    </div>

                    <h3 class="mt-1">Category</h3>
                    <div id="category-refinement-list"></div>

                    <h3 class="mt-1">Source</h3>
                    <div id="source-refinement-list"></div>

                    <h3 class="mt-5">Author</h3>
                    <div id="author-refinement-list"></div>

                    <h3 class="mt-5">File type</h3>
                    <div id="media-type-refinement-list"></div>
                    <!--
            <h3 class="mt-5">Knowledge Level</h3>
            <div id="knowledgelevel-refinement-list"></div>

            <h3 class="mt-5">Type</h3>
            <div id="type-refinement-list"></div>

            <h3 class="mt-5">Subject</h3>
            <div id="subject-refinement-list"></div>
            -->
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
       
       It then parses the fetched HTML using `DOMParser` and queries the DOM to find a paragraph element with the id "index-created-timestamp-source".
       
       If the element is found, its text content is added to the search result page; otherwise, an appropriate message indicating the absence of such an element is logged.
    */

    // Fetching the HTML content
    fetch(paths.indexedInKERISSE, {
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
        .then(response => response.text())
        .then(html => {
            // Parsing the fetched HTML string into a DOM object
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Finding the paragraph elements by their id's
            const timestampElement = doc.querySelector('#index-created-timestamp-source');
            const pageCountElement = doc.querySelector('#index-created-page-count-source');

            if (timestampElement) {
                // Extracting and logging the content of the paragraph
                const timestampContent = timestampElement.textContent;
                document.querySelector('#index-created-timestamp-target-search-modal').textContent = timestampContent;
            } else {
                console.log('Element with id "index-created-timestamp-source" not found.');
            }

            if (pageCountElement) {
                // Extracting and logging the content of the paragraph
                const pageCountContent = pageCountElement.textContent;
                document.querySelector('#index-created-page-count-target-search-modal').textContent = pageCountContent;
            } else {
                console.log('Element with id "index-created-page-count-source" not found.');
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
