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
                            text = nextSibText.slice(-nextCharsToAdd) + ' ' + text; // Add the text to the beginning of the extracted text
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

            function imgOrNot(element) {
                if (element.tagName.toLowerCase() === 'img') {
                    return {
                        imgUrl: element.src,
                        imgMeta: element.alt + " " + element.title,
                    };
                } else {
                    return {
                        textContent: element.textContent.trim(),
                        tag: element.tagName.toLowerCase()
                    }
                }
            }

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            // console.log(elements);
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);

                const textAroundImage = getTextAroundImage(el, 800);

                return {
                    text: imgOrNot(el).textContent,
                    tag: imgOrNot(el).tag,
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                    imgUrl: imgOrNot(el).imgUrl,
                    imgMeta: textAroundImage

                };
            });
        },
        domQueryForContent
    );

    return elements;
}
