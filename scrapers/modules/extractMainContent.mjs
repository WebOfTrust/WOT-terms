/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Extract the main content from a page, the paragraphs, list items, images and text around them. It loops through all elements that match the given selector and extracts the text content of the element and the first heading element preceding the element. It also extracts the text content of the image preceding the element and the text content of the elements preceding and following the image. It returns an array of objects with the following properties: 
  text
  firstHeadingBeforeElement
  imgUrl
  imgMeta (text content of the elements preceding and following the image)
  tag (the tag name of the element) 
*/


export default async function (page, domQueryForContent) {
    const elements = await page.evaluate(
        (domQueryForContent) => {
            // Helper function to find the first heading element preceding the given element
            function findPreviousHeadingElement(element) {
                let previousElement = element.previousElementSibling;
                while (previousElement) {
                    if (isHeadingElement(previousElement) && !isHeadingElement(element)) {// if the previous element is a heading element and the current element is not a heading element
                        return previousElement;
                    }
                    previousElement = previousElement.previousElementSibling;
                }
                return null;
            }

            function getTextAroundImage(element, maxCharacters) {
                // Check if the element is an image
                if (element.tagName !== 'IMG') {
                    return '';
                }

                let text = ''; // Variable to store the extracted text
                let remainingCharacters = maxCharacters; // Track the remaining characters to reach the maximum

                // Find the nearest previous sibling node that contains text
                let prevSibling = element.previousElementSibling;
                while (prevSibling && remainingCharacters > 0) {
                    const prevText = prevSibling.innerText.trim();
                    const charsToAdd = Math.min(remainingCharacters, prevText.length);
                    text = prevText.slice(-charsToAdd) + ' ' + text; // Add the text to the beginning of the extracted text
                    remainingCharacters -= charsToAdd;
                    prevSibling = prevSibling.previousElementSibling;
                }

                // Find the nearest next sibling node that contains text
                let nextSibling = element.nextElementSibling;
                while (nextSibling && remainingCharacters > 0) {
                    const nextText = nextSibling.innerText.trim();
                    const charsToAdd = Math.min(remainingCharacters, nextText.length);
                    text += ' ' + nextText.slice(0, charsToAdd); // Add the text to the end of the extracted text
                    remainingCharacters -= charsToAdd;
                    nextSibling = nextSibling.nextElementSibling;
                }

                // Traverse up the tree if the maximum characters limit is not reached
                let parent = element.parentNode;

                while (parent && remainingCharacters > 0) {
                    let prevSib = parent.previousElementSibling;
                    let nextSib = parent.nextElementSibling;
                    while (remainingCharacters > 0) {
                        if (prevSib) {
                            const prevSibText = prevSib.innerText.trim();
                            const prevCharsToAdd = Math.min(remainingCharacters, prevSibText.length);
                            text = prevSibText.slice(-prevCharsToAdd) + ' ' + text; // Add the text to the beginning of the extracted text
                            remainingCharacters -= prevCharsToAdd;
                            prevSib = prevSib.previousElementSibling;
                        }

                        if (nextSib) {
                            const nextSibText = nextSib.innerText.trim();
                            const nextCharsToAdd = Math.min(remainingCharacters, nextSibText.length);
                            text += ' ' + nextSibText.slice(-nextCharsToAdd); // Add the text to the end of the extracted text
                            remainingCharacters -= nextCharsToAdd;
                            nextSib = nextSib.nextElementSibling;
                        }

                        if (!prevSib && !nextSib) {
                            break;
                        }
                    }
                    parent = parent.parentNode;
                }

                return text.trim();
            }

            // Helper function to check if an element is a heading element (h1, h2, h3, etc.)
            function isHeadingElement(element) {
                const tagName = element.tagName.toLowerCase();
                return (
                    tagName.startsWith("h") && tagName.length === 2 && !isNaN(tagName.charAt(1))
                );
            }

            function elementRouting(element) {
                if (element.tagName.toLowerCase() === 'img') {
                    return {
                        imgUrl: element.src,//TODO: remove or use it
                        // imgMeta: element.alt + " " + element.title,//TODO: remove or use it
                        imgWidth: element.clientWidth,
                        imgHeight: element.clientHeight,
                    };
                } else if (element.tagName.toLowerCase() === 'pre' || element.tagName.toLowerCase() === 'code') {
                    return {
                        textContent: element.innerText.trim(),// use innerText here
                        textContentLength: element.textContent.trim().length,// use textContentLength here
                        tag: element.tagName.toLowerCase()
                    };
                } else if (element.tagName.toLowerCase() === 'turbo-frame') {// Special case for github repo pages
                    return {
                        textContent: element.innerText.trim(),
                        // textContent: element.innerHTML,
                        textContentLength: element.textContent.trim().length,// use textContentLength here
                        tag: element.tagName.toLowerCase()
                    };
                } else {
                    return {
                        textContent: element.textContent.trim(),
                        textContentLength: element.textContent.trim().length,
                        tag: element.tagName.toLowerCase()
                    }
                }
            }

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            // console.log(elements);
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);

                const textAroundImage = getTextAroundImage(el, 800);
                const textAroundImageLength = getTextAroundImage(el, 800).length;

                return {
                    content: elementRouting(el).textContent,
                    contentLength: elementRouting(el).textContentLength,
                    tag: elementRouting(el).tag,
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                    imgUrl: elementRouting(el).imgUrl,
                    imgMeta: textAroundImage,
                    imgMetaLength: textAroundImageLength,
                    imgWidth: elementRouting(el).imgWidth,
                    imgHeight: elementRouting(el).imgHeight,

                };
            });
        },
        domQueryForContent
    );

    return elements;
}
