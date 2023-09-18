/*
  File: typesenseInstantSearch.js
  Author: Kor Dwarshuis
  Created: 2023
  Updated: 2023
  Description: This plugin instantiates the Typesense InstantSearch.js adapter and the InstantSearch.js search client.
*/

import instantsearch from 'instantsearch.js/es';

import {
  searchBox,
  hits,
  pagination,
  // infiniteHits,
  configure,
  // stats,
  // analytics,
  refinementList,
  clearRefinements
  // menu,
  // sortBy,
  // currentRefinements,
} from 'instantsearch.js/es/widgets';

import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
// import { SearchClient as TypesenseSearchClient } from 'typesense'; // To get the total number of docs

const typeSenseInstantSearch = () => {



  // "Try searching for:"
  function handleSearchTermClick(event) {
    const searchBox = document.querySelector('.ais-SearchBox-input');
    search.helper.clearRefinements();
    searchBox.value = event.currentTarget.textContent;
    search.helper.setQuery(searchBox.value).search();
  }

  document.querySelectorAll('.clickable-search-term').forEach((el) => {
    el.addEventListener('click', handleSearchTermClick);
  });

  const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: 'qy6mC9ZakKZ3C8GUD5T3iDrelDgpp5Zc', // Be sure to use an API key that only allows searches, in production
      nodes: [
        {
          host: '9ktso7i1b8034azqp-1.a1.typesense.net',
          port: '443',
          protocol: 'https',
        },
      ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    //  filterBy is managed and overridden by InstantSearch.js. To set it, you want to use one of the filter widgets like refinementList or use the `configure` widget.
    additionalSearchParameters: {
      // query_by: 'title,authors',
      query_by: 'imgMeta, content, firstHeadingBeforeElement, pageTitle, siteName, source, url',
      // weights: '10000,1,1,1,1,1,1',
      // filter_by: 'tag:=[p]',
      // filter_by: 'tag:[a]',
      // filter_by: 'contentLength:>50',
      // sort_by: 'contentLength:asc',//asc or desc

      // sort_by: 'imgMetaLength:asc, contentLength:asc',//asc or desc
      // sort_by: 'imgWidth:desc,contentLength:desc,imgUrl(missing_values: last):desc',//asc or desc
      sort_by: 'imgWidth:desc,imgUrl(missing_values: last):desc',//asc or desc
      group_by: 'url',
      group_limit: 2
    },
  });
  const searchClient = typesenseInstantsearchAdapter.searchClient;

  const search = instantsearch({
    searchClient,
    indexName: 'Wot-terms',// production
    // indexName: 'Wot-terms-test',// testing
    routing: true,
    // searchFunction(helper) {
    // if (helper.state.query === '') {
    //   document
    //     .querySelector('.search-modal-backdrop')
    //     .classList.add('hidden');
    //   document.querySelector('#search').classList.add('hidden');
    // } else {
    //   document
    //     .querySelector('.search-modal-backdrop')
    //     .classList.remove('hidden');
    //   document.querySelector('#search').classList.remove('hidden');
    // }
    // helper.search();
    // },
  });

  search.addWidgets([
    searchBox({
      container: '#search-box',
      showSubmit: false,
      showReset: false,
      showLoadingIndicator: true,
      placeholder: 'Enter Search…',
      autofocus: true,
      cssClasses: {
        input: 'form-control',
      },
      // queryHook(query, search) {
      //   const modifiedQuery = queryWithoutStopWords(query);
      //   if (modifiedQuery.trim() !== '') {
      //     search(modifiedQuery);
      //   }
      // },
    }),

    configure({
      hitsPerPage: 10,
    }),
    hits({
      container: '#hits',
      templates: {
        item(item) {
          function makeCodeStringShorter(string) {
            /*
            Sometimes code blocks are very long and they take up a lot of space in the search results.
            
            This function takes a string as input and returns a modified version of the string.
            It finds the first occurrence of the <marker> tag and the </marker> tag in the input string.
            Then, it extracts a substring that includes 100 characters before the first <marker> and 100 characters after the first </marker>.
            The extracted substring is wrapped in an HTML <span> element with the class "highlighted".
            If either the <marker> tag or the </marker> tag is not found, the function returns the original string unchanged.
            */

            // Find the index of the first occurrence of <marker> and </marker> in the string
            let firstMarkerTagIndex = string.indexOf('<mark>');
            let lastMarkerTagIndex = string.indexOf('</mark>');

            // Check if either < marker > or </ > is not found in the string
            if (firstMarkerTagIndex === -1 || lastMarkerTagIndex === -1) {
              return string; // Return the original string if the tags are not found
            }

            // Calculate the start and end indices for the substring
            let start = Math.max(0, firstMarkerTagIndex - 300); // Start xxx characters before the first <marker> or at the beginning of the string
            let end = Math.min(string.length, lastMarkerTagIndex + 300); // End xxx characters after the first </marker> or at the end of the string

            // Extract the substring containing 100 characters before the first <marker> and 100 characters after the first </marker>
            let firstMarkerTagWith100CharactersBeforeAndAfterIt = string.substring(start, end);

            // Add a span with the "highlighted" class around the extracted substring
            firstMarkerTagWith100CharactersBeforeAndAfterIt = `<span class="shorter-code">${firstMarkerTagWith100CharactersBeforeAndAfterIt}</span>`;

            return firstMarkerTagWith100CharactersBeforeAndAfterIt; // Return the modified string
          }


          // External links should open in a new tab
          let openInNewTab = '';
          if (item.url.indexOf('weboftrust.github.io/WOT-terms') === -1) {
            openInNewTab = 'target="_blank" rel="noopener"';
          }

          // "Postprocess" the content. Especially code samples can be very long and take up a lot of space in the search results. This function makes the code samples shorter. TODO: check if other content types need to be shortened as well.
          let postProcessedCode = '';

          // If the tag is pre or textarea, wrap the content in a <pre> tag
          let postProcessedOpeningTag = '';
          if (item.tag === 'pre' || item.tag === 'textarea') {
            postProcessedOpeningTag = '<pre>';
            postProcessedCode = makeCodeStringShorter(item._highlightResult.content.value);
          } else { // Otherwise, wrap the content in a <p> tag
            postProcessedOpeningTag = '<p class="ms-5">'
            postProcessedCode = item._highlightResult.content.value;
          }

          // If the tag is pre or textarea, wrap the content in a <pre> tag
          let postProcessedClosingTag = '';
          if (item.tag === 'pre' || item.tag === 'textarea') {
            postProcessedClosingTag = '</pre>';
          } else { // Otherwise, wrap the content in a <p> tag
            postProcessedClosingTag = '</p>'
          }
          // END "Postprocess" the content


          // Only if siteName is not empty, show it
          let itemSiteNameTemplateString = item.siteName !== '' ? `${item._highlightResult.siteName.value}` : '';

          // The same for title
          // mb-4
          let itemTitleTemplateString = item.pageTitle !== '' ? `<h3 class="page-title mb-2 ms-4">${item._highlightResult.pageTitle.value}</h3>` : '';

          // The same for author
          let itemAuthorTemplateString = item.author !== '' ? `• ${item._highlightResult.author.value}` : '';


          // Add class to img based on imgWidth (img that are under 200 are assumed to be logos etc, above 200 are assumed to be explanations, flowcharts, etc)
          let imgClass = '';
          item.imgWidth < 200 ? imgClass = "inline-thumb-start" : imgClass = "";

          // The same for img url
          // if img url is not empty show it
          let itemImgUrlTemplateString = item.imgUrl !== '' ? `<img class="search-results-img ${imgClass}" src='${item.imgUrl}'>` : '';

          // The same for img meta
          let itemImgMetaTemplateString = item.imgMeta !== '' ? `<p class="ms-5 mt-5">${item._highlightResult.imgMeta.value}</p>` : '';

          // The same for creationDate
          let itemCreationDateTemplateString = item.creationDate !== '' ? `• ${item.creationDate}` : '';

          // The same for knowledgeLevel
          let itemKnowledgeLevelTemplateString = item.knowledgeLevel !== '' ? `• Level: ${item.knowledgeLevel}` : '';

          //The same for type
          let itemTypeTemplateString = item.type !== '' ? `• ${item.type}` : '';

          //The same for hierarchy.lvl1
          let itemHierarchyLvl1TemplateString = item['hierarchy.lvl1'] !== '' ? `• ${item['hierarchy.lvl1']}` : '';

          // The same for firstHeadingBeforeElement
          let itemFirstHeadingBeforeElementTemplateString = item.firstHeadingBeforeElement !== '' ? `<h4 class="first-heading-before-element ms-5">${item.firstHeadingBeforeElement}</h4>` : '';

          let siteBrandingClass = '';
          if (item.siteName === "Gleif website") {
            siteBrandingClass = "gleif";
          }
          if (item.siteName === "eSSIF-Lab") {
            siteBrandingClass = "essif-lab";
          }
          if (item.siteName === "KERISSE (this site)") {
            siteBrandingClass = "kerisse";
          }
          return `
<div class="card border-secondary mt-5 scroll-shadows" data-typesense-id="${item.id}">
  <div class="card-header ${siteBrandingClass}">
    Found on: ${itemSiteNameTemplateString}
  </div>
  <div class="card-body text-secondary">
        <div style="font-size: 0.9rem;">
            <a class="search-hit-url btn btn-outline-primary mb-2" href="${item.url}" ${openInNewTab}>${item._highlightResult.url.value}</a>
            ${itemAuthorTemplateString}
            ${itemCreationDateTemplateString}
            ${itemKnowledgeLevelTemplateString}
            ${itemTypeTemplateString}
            ${itemHierarchyLvl1TemplateString}
        </div>
        <hr>
        ${itemTitleTemplateString}
        ${itemFirstHeadingBeforeElementTemplateString}

        ${postProcessedOpeningTag}
          ${postProcessedCode}
        ${postProcessedClosingTag}

        ${itemImgUrlTemplateString}
        ${itemImgMetaTemplateString}
  </div>
  <div class="card-footer p-3">
    <a href="#search-close" class="btn btn-outline-secondary d-inline btn-sm align-self-start p-2">Back search box</a>
    <a class="btn btn-outline-primary d-inline btn-sm align-self-start p-2" href="${item.url}">Go to URL</a>
    <button type="button" class="btn btn-outline-secondary d-inline align-self-end p-1 upvote">Upvote ↑</button>
  </div>
</div>
      `;
        },
      },
    }),

    pagination({
      container: '#pagination',
    }),
    clearRefinements({
      container: '#clear-refinements',
      templates: {
        resetLabel: 'Clear filters'
      },
      cssClasses: {
        button: 'btn btn-secondary btn-sm align-content-center mb-5 mt-3'
      }
    }),

    // KNOWLEDGELEVEL
    refinementList({
      container: '#knowledgelevel-refinement-list',
      attribute: 'knowledgeLevel',
      searchable: false,
      searchablePlaceholder: 'Search knowledge level',
      showMore: false,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },

      sortBy: ['name:asc', 'count:desc'],
    }),
    // TYPE
    refinementList({
      container: '#type-refinement-list',
      attribute: 'type',
      searchable: false,
      searchablePlaceholder: 'Search type',
      showMore: false,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },

      sortBy: ['name:asc', 'count:desc'],
    }),
    // SUBJECT
    refinementList({
      container: '#subject-refinement-list',
      attribute: 'hierarchy.lvl1',
      searchable: false,
      searchablePlaceholder: 'Subject',
      showMore: false,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
    // SOURCE
    refinementList({
      container: '#source-refinement-list',
      attribute: 'source',
      searchable: true,
      searchablePlaceholder: 'Source',
      showMore: true,
      // max_facet_values: 100, TODO: does this work?
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
    refinementList({
      container: '#author-refinement-list',
      attribute: 'author',
      searchable: true,
      searchablePlaceholder: 'Author',
      showMore: true,
      // max_facet_values: 100,TODO: does this work?
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
    // MEDIATYPE
    refinementList({
      container: '#media-type-refinement-list',
      attribute: 'mediaType',
      searchable: true,
      searchablePlaceholder: 'File type',
      showMore: true,
      // max_facet_values: 100,TODO: does this work?
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: '',
        label: '',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
  ]);

  // function handleSearchTermClick(event) {
  //   const searchBox = document.querySelector('#search-box input[type=search]');
  //   search.helper.clearRefinements();
  //   searchBox.val(event.currentTarget.textContent);
  //   search.helper.setQuery(searchBox.val()).search();
  // }

  // search.on('render', function () {
  //   // Make artist names clickable
  //   // $('#hits .clickable-search-term').on('click', handleSearchTermClick);
  //   document.querySelectorAll('.hit-url a').forEach((el) => {
  //     el.addEventListener('click', handleSearchTermClick);
  //   });
  // });

  search.start();
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  typeSenseInstantSearch();
}
