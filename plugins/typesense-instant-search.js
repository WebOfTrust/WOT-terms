// import config from '@generated/docusaurus.config';

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
  // menu,
  // sortBy,
  // currentRefinements,
} from 'instantsearch.js/es/widgets';

import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
// import { SearchClient as TypesenseSearchClient } from 'typesense'; // To get the total number of docs

const TSIS = () => {
  // Hide the search results modal when clicking outside of it
  document
    .querySelector('.results-section-modal-backdrop')
    .addEventListener('click', (e) => {
      e.target.classList.add('hidden');
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
      query_by: 'content',
      filter_by: 'tag:=[p]',
      // filter_by: 'tag:[a]',
    },
  });
  const searchClient = typesenseInstantsearchAdapter.searchClient;

  const search = instantsearch({
    searchClient,
    indexName: 'Wot-terms',
    routing: true,
    searchFunction(helper) {
      if (helper.state.query === '') {
        document
          .querySelector('.results-section-modal-backdrop')
          .classList.add('hidden');
      } else {
        document
          .querySelector('.results-section-modal-backdrop')
          .classList.remove('hidden');
        helper.search();
      }
    },
  });

  search.addWidgets([
    searchBox({
      container: '#searchbox',
      showSubmit: false,
      showReset: false,
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
          console.log('item: ', item);
          return `
        <a class="hit" href="${item.url}" target="_blank">
          <div class="container">
            <div class="row">
              <div class="category col col--12 text--center">
                <h4 class="contextual-info" style="font-size: 1.5em">${item['hierarchy.lvl1']}</h4>
              </div>
            </div>
            <div class="row hit-name">
              <div class="col col--3">
                <h5 class="d-block contextual-info badge badge--secondary">Where:<br>${item['siteName']}</h5>
                <h5 class="d-block contextual-info badge badge--secondary">Knowledgelevel:<br>${item.knowledgeLevel}</h5>
                <h5 class="d-block contextual-info badge badge--secondary">Type:<br>${item.type}</h5>
              </div>

            <div class="col col--9">
                <p>${item._highlightResult.content.value}</p>
              </div
            </div>
          </div>
        </a>
      `;
        },
      },
    }),

    pagination({
      container: '#pagination',
    }),
    refinementList({
      container: '#knowledgelevel-refinement-list',
      attribute: 'knowledgeLevel',
      searchable: false,
      searchablePlaceholder: 'Search knowledge level',
      showMore: true,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'mr-2',
      },
    }),
    refinementList({
      container: '#type-refinement-list',
      attribute: 'type',
      searchable: false,
      searchablePlaceholder: 'Search type',
      showMore: true,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'mr-2',
      },
    }),
    refinementList({
      container: '#subject-refinement-list',
      attribute: 'hierarchy.lvl1',
      searchable: false,
      searchablePlaceholder: 'Subject',
      showMore: true,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'mr-2',
      },
    }),
    refinementList({
      container: '#site-name-refinement-list',
      attribute: 'siteName',
      searchable: false,
      searchablePlaceholder: 'Site name',
      showMore: true,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'mr-2',
      },
    }),
  ]);

  // function handleSearchTermClick(event) {
  //   const searchBox = document.querySelector('#searchbox input[type=search]');
  //   console.log('searchBox: ', searchBox);
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
  TSIS();
}
