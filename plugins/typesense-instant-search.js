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
  // document
  //   .querySelector('.search-modal-backdrop')
  //   .addEventListener('click', (e) => {
  //     e.target.classList.add('hidden');
  //     document.querySelector('#search').classList.add('hidden');
  //   });

  document.querySelector('#search-close').addEventListener('click', (e) => {
    document.querySelector('.search-modal-backdrop').classList.add('hidden');
    document.querySelector('#search').classList.add('hidden');
  });

  document.querySelector('#search-start').addEventListener('click', (e) => {
    document.querySelector('.search-modal-backdrop').classList.toggle('hidden');
    document.querySelector('#search').classList.toggle('hidden');
    document.querySelector('.ais-SearchBox-input').focus();
  });

  document.addEventListener('keyup', (event) => {
    switch (event.key) {
      // escape
      case 'Escape':
        document
          .querySelector('.search-modal-backdrop')
          .classList.add('hidden');
        document.querySelector('#search').classList.add('hidden');
        break;
    }
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
      query_by: 'content, pageTitle, siteName, source',
      filter_by: 'tag:=[p]',
      // filter_by: 'tag:[a]',
    },
  });
  const searchClient = typesenseInstantsearchAdapter.searchClient;

  const search = instantsearch({
    searchClient,
    indexName: 'Wot-terms',
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
          // External links should open in a new tab
          let openInNewTab = '';
          if (item.url.indexOf('weboftrust.github.io/WOT-terms') === -1) {
            openInNewTab = 'target="_blank" rel="noopener"';
          }

          // Only if siteName is not empty, show it
          let itemSiteNameTemplateString = item.siteName !== '–' ? `${item._highlightResult.siteName.value}` : '';

          // The same for title
          let itemTitleTemplateString = item.pageTitle !== '–' ? `<h3 class="page-title mb-5 ms-4">${item._highlightResult.pageTitle.value}</h3>` : '';

          // The same for author
          let itemAuthorTemplateString = item.author !== '–' ? `• ${item._highlightResult.author.value}` : '';

          // The same for creationDate
          let itemCreationDateTemplateString = item.creationDate !== '–' ? `• ${item.creationDate}` : '';

          // The same for knowledgeLevel
          let itemKnowledgeLevelTemplateString = item.knowledgeLevel !== '–' ? `• Level: ${item.knowledgeLevel}` : '';

          //The same for type
          let itemTypeTemplateString = item.type !== '–' ? `• ${item.type}` : '';

          //The same for hierarchy.lvl1
          let itemHierarchyLvl1TemplateString = item['hierarchy.lvl1'] !== '–' ? `• ${item['hierarchy.lvl1']}` : '';

          // The same for firstHeadingBeforeElement
          let itemFirstHeadingBeforeElementTemplateString = item.firstHeadingBeforeElement !== '–' ? `<h4 class="first-heading-before-element ms-5">${item.firstHeadingBeforeElement}</h4>` : '';

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
<div class="card border-secondary mt-5">
    <div class="card-header ${siteBrandingClass}">Found on: ${itemSiteNameTemplateString}</div>
    <div class="card-body text-secondary">
        <div style="font-size: 0.9rem;">
            <a class="" href="${item.url}" ${openInNewTab}>${item._highlightResult.url.value}</a>
            ${itemAuthorTemplateString}
            ${itemCreationDateTemplateString}
            ${itemKnowledgeLevelTemplateString}
            ${itemTypeTemplateString}
            ${itemHierarchyLvl1TemplateString}
        </div>
        <hr>
        <!--<p>…</p>-->
        ${itemTitleTemplateString}
        ${itemFirstHeadingBeforeElementTemplateString}

        <p class="ms-5"><a class="stretched-link text-secondary" href="${item.url}" ${openInNewTab}>${item._highlightResult.content.value}</a></p>
        <!--<p class="mb-4">…</p>-->
        <a class="btn btn-outline-secondary mt-4 d-inline-block" href="${item.url}" ${openInNewTab}>Go</a>
    </div>
</div>
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
      showMore: false,
      cssClasses: {
        searchableInput: '',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
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
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
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
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
    refinementList({
      container: '#source-refinement-list',
      attribute: 'source',
      searchable: false,
      searchablePlaceholder: 'Source',
      showMore: false,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: '',
        checkbox: 'me-2',
      },
      sortBy: ['name:asc', 'count:desc'],
    }),
    refinementList({
      container: '#author-refinement-list',
      attribute: 'author',
      searchable: false,
      searchablePlaceholder: 'Author',
      showMore: false,
      cssClasses: {
        searchableInput: 'form-control form-control-sm mb-2 border-light-2',
        searchableSubmit: 'hidden',
        searchableReset: 'hidden',
        showMore: 'btn btn-secondary btn-sm align-content-center',
        list: 'list-unstyled',
        count: 'badge badge-light bg-light-2 ml-2',
        label: 'd-flex align-items-center',
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
  TSIS();
}
