// Get the json file
// const jsonFile = "https://dwarshuis.com/various/kerisse/bookmarklets/data/all-glossaries-test.json";
const jsonFile = "/WOT-terms/json/external-glosseries/glossaries-combined/all-glossaries.json";

let counter = 0;
let newText = '';
let bodyText = document.body.innerHTML;

// Get content of jsonFile
fetch(jsonFile)
    .then(response => response.json())
    .then(data => { data.length; console.log('data.length: ', data.length); return data; })
    .then(data => data.forEach(term => {
        const fullSearchTerm = term.term + '</a>';

        // if term.term is a substring of a word in the page then console.log(term.definitions[0].organisation)
        if (bodyText.match(new RegExp(fullSearchTerm, 'i'))) {
            counter++;
            let stringToAdd = `<div class="popup" style="display: none; position: fixed; top: 10px; right: 10px; width: 25%; height: 50%; background-color: white; border: 2px solid blue; z-index: 1000; overflow: scroll; padding: 1em;"><h1>${term.term}</h1>`;
            term.definitions.forEach(definition => {
                stringToAdd += `<h2>${definition.organisation} :</h2> <div>${definition.definition}</div>`;
            });
            stringToAdd += '</div>';

            // unix timestamp in ms
            let timestamp = new Date().getTime();
            let spanClass = term.term + timestamp;

            let searchTerm = fullSearchTerm; // replace with the term you are searching for
            let replacement = fullSearchTerm + '<span style="font-size: 1.5em; border: 1px solid black; border-radius: 50%; padding: 0.2em; cursor: pointer; background: lightblue;" class="span-plusje ' + spanClass + '">+</span>' + stringToAdd; // replace with the term you want to replace with

            let regex = new RegExp(searchTerm, 'gi');
            let bodyText2 = bodyText.replace(regex, replacement);
            bodyText = bodyText2;
        }
    })
    )
    .then(() => {
        document.body.innerHTML = bodyText;
        console.log('counter: ', counter);

        document.querySelectorAll('.span-plusje').forEach(span => {
            span.addEventListener("click", function () {

                document.querySelectorAll('.span-plusje').forEach(span => {
                    // console.log('span: ', span);
                    if (span.nextSibling) {
                        span.nextSibling.style.display = 'none';
                    }
                    // console.log('span.nextSibling: ', span.nextSibling);
                });

                if (this.nextSibling) {
                    this.nextSibling.style.display = 'block';
                }
            });
        });
    });