const search = instantsearch({
    appId: 'FSH23UI187',
    apiKey: 'bdc36025938111a18bda9bfb9b651ceb',
    indexName: 'dev_bcws',
    onStateChange({ uiState, setUiState }) {
        // Custom logic
        console.log("state changes");
    },

    searchFunction(helper) {
        if (helper.state.query !== '') {
            helper.search();
            $('#search-hits').show();
        }
        if (helper.state.query === '') {
            $('#search-hits').hide();
            return;
        }

        // const page = helper.getPage(); // Retrieve the current page
        // helper.setQuery('') // this call resets the page
        //     .setPage(page) // we re-apply the previous page
        //     .search();
    }
});




const hitTemplate = function (hit) {
    let date = '';
    if (hit.date) {
        date = moment.unix(hit.date).format('MMM D, YYYY');
    }

    let url = `${hit.url
        }#${hit.anchor
        }`;

    let title = "";
    if (hit._highlightResult.title) {
        title = hit._highlightResult.title.value;
    } else {
        title = "";
    }

    // console.log(hit);
    // console.log(hit._highlightResult.tag.value);

    let breadcrumbs = '';
    if (hit._highlightResult.headings) {
        breadcrumbs = hit
            ._highlightResult
            .headings
            .map(match => {
                return `<span class="post-breadcrumb">${match.value
                    }</span>`
            })
            .join(' > ')
    }

    const content = hit._highlightResult.html.value;

    let level = hit.Level || "";
    // let keywords = hit.keywords || "";
    let term = hit.Term || "";
    let tags = hit.tags || "";
    let collection = hit.collection || "";
    let excerptText = hit.excerpt_text || "";



    return `
    <div class="post-item">
        <h2><a class="post-link" href="${url}">${title}</a></h2>
        <table class="table table-condensed">
            <tr>
                <td class="p-1 post-meta">Level: ${level}</td>
                <td class="p-1 post-meta">Term: ${term}</td>
            </tr>
            <tr>
                <td class="p-1 post-meta">Tag: ${tags}</td>
                <td class="p-1 post-meta">Collection: ${collection}</td>
            </tr>
        </table>
      <a href="${url}" class="post-breadcrumbs">${breadcrumbs}</a>
      <hr>
      <h3>Excerpt</h3>
      <div class="post-snippet">${excerptText}</div>
      <hr>
      <h3>Full</h3>
      <div class="post-snippet">${content}</div>
    </div>
  `;
}


search.addWidget(instantsearch.widgets.searchBox({
    container: '#search-searchbar', placeholder: 'Search into whitepapers, Q&A\'s, articles, glossaries ...', poweredBy: true // This is required if you're on the free Community plan
}));

search.addWidget(instantsearch.widgets.hits({
    container: '#search-hits',
    templates: {
        item: hitTemplate
    }
}));

// search.addWidget(
//     instantsearch.widgets.menu(
//         {
//             container: "#brands",
//             attributeName: "anchor",
//             templates: {
//                 header: "Dit is een test"
//             }
//         }
//     )
// )
// search.addWidget(
//     instantsearch.widgets.refinementList(
//         {
//             container: "#level",
//             attributeName: "Level",
//             templates: {
//                 header: "Level"
//             }
//         }
//     )
// )
search.addWidget(
    instantsearch.widgets.refinementList(
        {
            container: "#titles",
            attributeName: "title",
            templates: {
                header: "Titles"
            }
        }
    )
)
search.addWidget(
    instantsearch.widgets.refinementList(
        {
            container: "#tags",
            attributeName: "tags",
            templates: {
                header: "Tags"
            }
        }
    )
)


// https://www.algolia.com/doc/api-reference/widgets/clear-refinements/js/ , werkt niet
// instantsearch.widgets.clearRefinements({
//     container: '#tags'
// });


search.start();