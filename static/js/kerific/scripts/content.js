(function () {
    /* global chrome */
    /** Description:
     * This script is injected into the page when the extension icon is clicked.
     * It is used to highlight terms and create popups when terms are clicked.
     * It is not injected into the page on page load.
     * It is injected into the page when the extension icon is clicked.
     * It is injected into the page by extension/background.js.
     * It is injected into the page by chrome.scripting.executeScript.
     * It is injected into the page by chrome.action.onClicked.addListener.
     * It loads glossaries related to Keri.
     */

    // 

    /*
     * CONFIGURATION
     */

    // CSS styles. “cssText” is used to set the style attribute of an element.
    const cssTextLoadingIndicator = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; border: 1px solid #333; border-radius: 20px; background: #e5ecff; padding: 3em; z-index: 9999999999999999;';

    // const cssTextGlossaryPopup = `
    //     display: none;
    //     position: fixed;
    //     top: 10px;
    //     right: 10px;
    //     width: 25%;
    //     height: 50%;
    //     background-color: white;
    //     border: 2px solid #ddd;
    //     border-radius: 20px;
    //     z-index: 1000;
    //     overflow: scroll;
    //     margin: 0.5em 0 0 0;
    //     padding: 1em;
    //     box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02), 0px 0px 5.3px rgba(0, 0, 0, 0.028), 0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 33.4px rgba(0, 0, 0, 0.05), 0px 0px 80px rgba(0, 0, 0, 0.07);
    // `;
    const cssTextGlossaryPopup = `
        display: none;
        position: fixed;
        top: 10px;
        right: 10px;
        width: 25%;
        height: 50%;
        padding: 1em;
        z-index: 1000;

    `;

    const cssTextTermHighlight = `
        display: inline-block;
        font-size: 0.8em;
        border: 1px solid #ffa0d6;
        border-radius: 5px;
        padding: 0.1em 0.6em;
        margin: 0.5em 0.5em 1.5em 0;
        cursor: pointer;
        background: #f1d1ff;
        box-shadow:0px 0px 0.3px rgba(0, 0, 0, 0.02),0px 0px 0.8px rgba(0, 0, 0, 0.028),0px 0px 1.5px rgba(0, 0, 0, 0.035),0px 0px 2.7px rgba(0, 0, 0, 0.042),0px 0px 5px rgba(0, 0, 0, 0.05),0px 0px 12px rgba(0, 0, 0, 0.07);
    `;

    const headerStyle = `
        .close-cross {
            font-size: 1.5em; display: block; position: fixed;top: 0.5em; right: 1em; cursor: pointer;
        }

        .kerific-popup .card-header {
        	position: sticky; top: 0; background-color: #eee;
        }

        .kerific-popup .card-footer {
            position: sticky; bottom: 0; background-color: #eee;
        }


    `;

    const glossaryJsonUrl = "https://weboftrust.github.io/WOT-terms/json/external-glosseries/glossaries-combined/all-glossaries.json";

    const versionNumberUrl = "https://weboftrust.github.io/WOT-terms/js/kerific/manifest.json";

    const whatToQuery = '*:not(ul) ';

    /*
     * END CONFIGURATION
     */


    // Insert bootstrap framework into page via CDN
    const bootstrapCss = document.createElement('link');
    bootstrapCss.rel = 'stylesheet';
    bootstrapCss.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCss);

    // Insert <style> element into page: headerStyle
    const headerStyleElement = document.createElement('style');
    headerStyleElement.innerHTML = headerStyle;
    document.head.appendChild(headerStyleElement);



    // In case the script runs multiple times on the same page, remove all previous popups and highlights
    // Remove all elements with class="kerific-popup" and class="kerific-term-highlight"
    document.querySelectorAll('.kerific-popup').forEach(element => {
        element.remove();
    });
    document.querySelectorAll('.kerific-term-highlight').forEach(element => {
        element.remove();
    });

    // Add loading indicator
    const loadingIndicator = document.createElement('h1');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.style.cssText = cssTextLoadingIndicator;
    loadingIndicator.textContent = 'Loading glossaries…';
    document.body.appendChild(loadingIndicator);

    // Combine JSON objects with identical terms.
    function combineJSONObjects(jsonArray) {
        const combined = {};

        jsonArray.forEach(item => {
            // Check if the term already exists in the combined object
            if (!combined[item.term]) {
                // If not, initialize it
                combined[item.term] = {
                    term: item.term,
                    anchor: item.anchor,
                    definitions: [...item.definitions]
                };
            } else {
                // If exists, concatenate the anchor and merge the definitions
                combined[item.term].anchor += "-" + item.anchor;
                combined[item.term].definitions = combined[item.term].definitions.concat(item.definitions);
            }
        });

        // Convert the combined object back to an array
        return Object.values(combined);
    }

    // let glossaryPopups = [];
    let glossaryPopups = new Map();
    let extensionVersionNumber;

    // Fetch and process glossary data
    // First, fetch the version number
    fetch(versionNumberUrl)
        .then(response => response.json())
        .then(versionData => {
            // Process the version data
            extensionVersionNumber = versionData.version;
            console.log('extensionVersionNumber: ', extensionVersionNumber);

            // Now that you have the version number, fetch the glossary
            return fetch(glossaryJsonUrl);
        })
        .then(response => response.json())
        .then(combinedGlossaries => {
            // Make all combinedGlossaries terms lowercase and join identical terms to one term
            combinedGlossaries.forEach(eachTerm => {
                eachTerm.term = eachTerm.term.toLowerCase();
            });

            // Combine JSON objects with identical terms. Needed since terms are now all lowercase.
            combinedGlossaries = combineJSONObjects(combinedGlossaries);

            // Loop through all terms in the glossary
            combinedGlossaries.forEach(combinedGlossariesEntry => {
                // Example glossaryEntry:
                // {
                //   "term": "aal",
                //   "anchor": "h.l6kidod3jk1m",
                //   "definitions": [
                //     {
                //       "organisation": "ToIP",
                //       "definition": "<p class=\"c2\"><span>See: <a href=\"foo\">authenticator surance level</a></p>",
                //       "url": "bar"
                //     }
                //   ]
                // }

                const tagNames = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'code', 'a'];

                // Loop through the textContent of all elements that are specified in tagNames
                tagNames.forEach(eachTagName => {
                    document.querySelectorAll(eachTagName).forEach(eachQuerySelectorAllTagName => {

                        // Check if the element is inside a <nav> element
                        if (eachQuerySelectorAllTagName.closest('nav')) {
                            // This element is inside a <nav> element, return early
                            return;
                        }
                        // For testing purposes
                        if (eachQuerySelectorAllTagName.closest('.summary')) {
                            return;
                        }
                        if (eachQuerySelectorAllTagName.closest('footer')) {
                            return;
                        }

                        function isStringBorderedBySpaceOrTag(element, string, extensionVersionNumber) {
                            // Escape special characters in the string for use in a regular expression
                            const escapedString = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                            // Construct a regular expression that checks for start/end of string or spaces around the term
                            const regexPattern = `(?:^|\\s)${escapedString}(?:$|\\s)`;
                            const regex = new RegExp(regexPattern, 'i');

                            // Test the textContent of the element against the regular expression

                            if (regex.test(element.innerHTML)) {
                                handleMatch(combinedGlossariesEntry, eachQuerySelectorAllTagName, combinedGlossaries, glossaryPopups, cssTextGlossaryPopup, cssTextTermHighlight, extensionVersionNumber);
                            }


                            // return regex.test(element.textContent);
                        }

                        // Example usage:
                        // const result = isStringBorderedBySpaceOrTag(yourElement, 'yourString');
                        // console.log(result); // true or false

                        isStringBorderedBySpaceOrTag(eachQuerySelectorAllTagName, combinedGlossariesEntry.term, extensionVersionNumber);
                    });
                });
            });
        })
        .then(() => {
            // Add glossaryPopups to body
            glossaryPopups.forEach(glossaryPopup => {
                document.body.appendChild(glossaryPopup);
            });

            // Event delegation for term highlights
            document.body.addEventListener('click', function (event) {
                if (event.target.classList.contains('kerific-term-highlight')) {
                    let term = event.target.innerText; // Assuming the innerText is the term
                    document.querySelectorAll('.kerific-popup').forEach(popup => {
                        popup.style.display = 'none';
                    });
                    let glossaryPopup = glossaryPopups.get(term);
                    if (glossaryPopup) {
                        glossaryPopup.style.display = 'block';
                    }
                }
            });

            // Event delegation for closing popups
            document.body.addEventListener('click', function (event) {
                if (event.target.classList.contains('close-cross')) {
                    event.target.parentElement.parentElement.style.display = 'none';
                }
            });

            // Hide loading indicator
            loadingIndicator.style.display = 'none';


        })
        .then(() => {

            // This function will group elements that are visually close to each other (within 100 pixels vertically, but you can adjust this value). It uses the getBoundingClientRect method to determine the position of each element relative to the viewport.
            function groupKerificTermsByVisualProximity() {
                const elements = Array.from(document.querySelectorAll('.kerific-term-highlight'));
                let container = null;

                // Function to get the vertical position of an element in the viewport
                function getVerticalPosition(element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top + window.scrollY;
                }

                elements.forEach((element, index) => {
                    if (index > 0) {
                        const prevElement = elements[index - 1];
                        const currentPos = getVerticalPosition(element);
                        const prevPos = getVerticalPosition(prevElement);

                        // Check if the current element is visually near the previous one (within 100 pixels, adjust as needed)
                        if (Math.abs(currentPos - prevPos) <= 100) {
                            // If visually near, append to the existing container
                            container.appendChild(element);
                        } else {
                            // If not, create a new container
                            container = document.createElement('div');
                            container.className = 'container-kerific-term-highlight';
                            // container.style.cssText = 'border: 3px solid green;';
                            element.parentNode.insertBefore(container, element);
                            container.appendChild(element);
                        }
                    } else {
                        // First element, creating new container
                        container = document.createElement('div');
                        container.className = 'container-kerific-term-highlight';
                        container.style.cssText = 'border: 3px solid green;';
                        element.parentNode.insertBefore(container, element);
                        container.appendChild(element);
                    }
                });
            }

            groupKerificTermsByVisualProximity();
        });

})();

function createHighlightButton(glossaryEntry, termId, cssTextTermHighlight) {
    let termHighlight = document.createElement('button');
    termHighlight.innerText = glossaryEntry.term;
    termHighlight.id = termId;
    termHighlight.classList.add('kerific-term-highlight');
    termHighlight.style.cssText = cssTextTermHighlight;
    return termHighlight;
}

function handleMatch(combinedGlossariesEntry, htmlElement, combinedGlossaries, glossaryPopups, cssGlossaryPopup, cssTermHighlight, extensionVersionNumber) {
    // Create a unique ID for the term highlight
    let currentTimeStamp = new Date().getTime();
    let termId = 'id' + currentTimeStamp + combinedGlossaries.indexOf(combinedGlossariesEntry);
    let glossaryId = termId + 'glossary';
    let glossaryPopupHeaderContent = `<h2>“${combinedGlossariesEntry.term}”</h2>`;
    let glossaryPopupBodyContent = ``;

    // Add the definitions to the popup
    combinedGlossariesEntry.definitions.forEach((glossaryEntryDefinitionsEntry, index) => {


        // With redirect after SEE
        // If the definition contains a link to another term, replace the link with the definition of the other term
        // console.log('eachDefinitions.organisation A: ', eachDefinitions.organisation);

        // 
        if (findLinkTextAfterSee(glossaryEntryDefinitionsEntry.definition) !== null) {
            // console.log('eachDefinitions.definition: ', eachDefinitions.definition);
            console.log("not null");

            // Go through all terms in the glossary
            combinedGlossaries.forEach(combinedGlossariesEntry2 => {
                // If the term in the glossary is the same as the term found after “See”
                if (combinedGlossariesEntry2.term === findLinkTextAfterSee(glossaryEntryDefinitionsEntry.definition)) {
                    combinedGlossariesEntry2.definitions.forEach((eachDefinitions2, index2) => {
                        glossaryPopupBodyContent += `
                            <h3>${eachDefinitions2.organisation} :</h3>
                            <div>[Redirected to this definition: “${combinedGlossariesEntry2.term}”] ${eachDefinitions2.definition}</div>
                        `;
                    });
                }
            });
        } else {
            glossaryPopupBodyContent += `
                <p>index2: ${index}</p>
                <h3>${glossaryEntryDefinitionsEntry.organisation} :</h3>
                <div>${glossaryEntryDefinitionsEntry.definition}</div>
            `;
        }
    });

    // Create a popup for the term
    createPopup(glossaryPopups, combinedGlossariesEntry, glossaryPopupHeaderContent, glossaryPopupBodyContent, glossaryId, cssGlossaryPopup, extensionVersionNumber);

    // Create a button for the term highlight
    let termHighlight = createHighlightButton(combinedGlossariesEntry, termId, cssTermHighlight);

    // Insert termHighlight
    htmlElement.parentNode.insertBefore(termHighlight, htmlElement.nextSibling);
} // End function handleMatch()

// Create a popup for the term
function createPopup(mapGlossaryPopups, glossaryEntry, glossaryPopupHeaderContent, glossaryPopupBodyContent, glossaryId, cssTextGlossaryPopup, extensionVersionNumber) {
    if (!mapGlossaryPopups.has(glossaryEntry.term)) {
        const glossaryPopupContent = `
            <div class="card-header p-1">
                ${glossaryPopupHeaderContent}
                <span class="close-cross">✕</span></div>
            </div>
            <div class="card-body">
                ${glossaryPopupBodyContent}
            </div>
            <div class="card-footer p-1">
                <small>Kerific version: ${extensionVersionNumber}</small>
            </div>
        `;

        // glossaryPopupContent += closeButton;
        let glossaryPopup = document.createElement('div');
        glossaryPopup.innerHTML = glossaryPopupContent;
        glossaryPopup.id = glossaryId;
        glossaryPopup.classList.add('kerific-popup', 'card', 'p-0');
        glossaryPopup.style.cssText = cssTextGlossaryPopup;
        mapGlossaryPopups.set(glossaryEntry.term, glossaryPopup);
    }
}

// The pattern looks for the occurrence of the word "See" followed by an optional colon and space, then a link enclosed in <a> tags. It captures the text inside the <a> tags and returns it as the result. If there is no match, it returns null.
function findLinkTextAfterSee(str) {
    const pattern = /See\s?:? ?<.*?<a.*?>(.*?)<\/a>/is;
    const match = pattern.exec(str);
    // console.log('match: ', match);
    return match ? match[1] : null;
}
// // Example usage:
// const exampleString = 'Random text See <a href="link.html">Link Text</a> more text';
// console.log(findLinkTextAfterSee(exampleString)); // Outputs: "Link Text"
