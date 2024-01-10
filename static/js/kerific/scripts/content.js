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

    const cssTextGlossaryPopup = `
        z-index: 9999999999999999;
        display: none;
        position: fixed;
        top: 10px;
        right: 10px;
        width: 25%;
        height: 50%;
        background-color: white;
        border: 2px solid #ddd;
        border-radius: 20px;
        z-index: 1000;
        overflow: scroll;
        margin: 0.5em 0 0 0;
        padding: 1em;
        box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02), 0px 0px 5.3px rgba(0, 0, 0, 0.028), 0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 33.4px rgba(0, 0, 0, 0.05), 0px 0px 80px rgba(0, 0, 0, 0.07);
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

    const glossaryJsonUrl = "https://weboftrust.github.io/WOT-terms/json/external-glosseries/glossaries-combined/all-glossaries.json";

    /*
     * END CONFIGURATION
     */


    // In case the script runs multiple times on the same page, remove all previous popups and highlights
    // Remove all elements with class="kerific-popup" and class="kerific-term-highlight"
    document.querySelectorAll('.kerific-popup').forEach(element => {
        element.remove();
    });
    document.querySelectorAll('.kerific-term-highlight').forEach(element => {
        element.remove();
    });

    function findLinkTextAfterSee(str) {
        const pattern = /See\s?:? ?<.*?<a.*?>(.*?)<\/a>/is;
        const match = pattern.exec(str);
        console.log('match: ', match);
        return match ? match[1] : null;
    }
    // // Example usage:
    // const exampleString = 'Random text See <a href="link.html">Link Text</a> more text';
    // console.log(findLinkTextAfterSee(exampleString)); // Outputs: "Link Text"


    // Add loading indicator
    const loadingIndicator = document.createElement('h1');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.style.cssText = cssTextLoadingIndicator;
    loadingIndicator.textContent = 'Loading glossaries…';
    document.body.appendChild(loadingIndicator);

    let matchedTermsCount = 0;

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

    // Fetch and process glossary data
    fetch(glossaryJsonUrl)
        .then(response => response.json())
        .then(glossaryData => {
            // Make all glossaryData terms lowercase and join identical terms to one term
            glossaryData.forEach(term => {
                term.term = term.term.toLowerCase();
            });

            // Combine JSON objects with identical terms.
            glossaryData = combineJSONObjects(glossaryData);

            // Loop through all terms in the glossary
            glossaryData.forEach(glossaryEntry => {
                const tagNames = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'code', 'a'];

                // Loop through the textContent of all elements that are specified in tagNames
                tagNames.forEach(tagName => {
                    document.querySelectorAll(tagName).forEach(selectedTagName => {
                        // // A: Case sensitive search
                        // if (element.textContent.includes(' ' + term.term + ' ')) {

                        // B: Case insensitive search
                        // if (element.textContent.toLowerCase().includes((' ' + term.term.toLowerCase() + ' '))) {
                        function handleMatch() {
                            // Create a unique ID for the term highlight
                            matchedTermsCount++;
                            let currentTimeStamp = new Date().getTime();
                            let termId = 'id' + currentTimeStamp + matchedTermsCount + glossaryData.indexOf(glossaryEntry);
                            let glossaryId = termId + 'glossary';

                            // glossaryPopupContent is the content of the popup
                            let glossaryPopupContent = `<h1>“${glossaryEntry.term}”</h1>`;

                            // Add the definitions to the popup
                            glossaryEntry.definitions.forEach(definition => {
                                glossaryPopupContent += `
                                    <h2>${definition.organisation} :</h2>
                                    <div>${definition.definition}</div>
                                `;
                            });

                            // Add a close button to the popup
                            glossaryPopupContent += '<span class="close-cross" style="font-size: 1.5em; display: block; position: fixed;top: 1.5em; right: 1.5em; cursor: pointer;">✕</span></div>';

                            // Create a popup for the term
                            if (!glossaryPopups.has(glossaryEntry.term)) {
                                let glossaryPopup = document.createElement('div');
                                glossaryPopup.innerHTML = glossaryPopupContent;
                                glossaryPopup.id = glossaryId;
                                glossaryPopup.classList.add('kerific-popup');
                                // Set styles and content for glossaryPopup
                                glossaryPopup.style.cssText = cssTextGlossaryPopup;
                                glossaryPopups.set(glossaryEntry.term, glossaryPopup);
                            }

                            // Create a button for the term highlight
                            let termHighlight = document.createElement('button');
                            termHighlight.innerText = glossaryEntry.term;
                            termHighlight.id = termId;
                            termHighlight.classList.add('kerific-term-highlight');
                            // Set styles for termHighlight
                            termHighlight.style.cssText = cssTextTermHighlight;

                            // Insert termHighlight
                            selectedTagName.parentNode.insertBefore(termHighlight, selectedTagName.nextSibling);
                        }

                        function isStringBorderedBySpaceOrTag(element, string) {
                            // Escape special characters in the string for use in a regular expression
                            const escapedString = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                            // Construct a regular expression that checks for start/end of string or spaces around the term
                            const regexPattern = `(?:^|\\s)${escapedString}(?:$|\\s)`;
                            const regex = new RegExp(regexPattern, 'i');

                            // Test the textContent of the element against the regular expression

                            if (regex.test(element.innerHTML)) {
                                handleMatch();
                            }


                            // return regex.test(element.textContent);
                        }

                        // Example usage:
                        // const result = isStringBorderedBySpaceOrTag(yourElement, 'yourString');
                        // console.log(result); // true or false

                        isStringBorderedBySpaceOrTag(selectedTagName, glossaryEntry.term);
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
                    event.target.parentElement.style.display = 'none';
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

            // setTimeout(groupKerificTermsByVisualProximity, 100);
            groupKerificTermsByVisualProximity()



        });

})();