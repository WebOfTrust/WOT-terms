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

            // Helper function to check if an element is a heading element (h1, h2, h3, etc.)
            function isHeadingElement(element) {
                const tagName = element.tagName.toLowerCase();
                return (
                    tagName.startsWith("h") && tagName.length === 2 && !isNaN(tagName.charAt(1))
                );
            }

            function imgOrNot(el) {
                if (el.tagName.toLowerCase() === 'img') {
                    return {
                        imgUrl: el.src,
                        imgMeta: el.alt + " " + el.title,
                    };
                } else {
                    return {
                        textContent: el.textContent.trim(),
                        tag: el.tagName.toLowerCase()
                    }
                }
            }

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);
                return {
                    text: imgOrNot(el).textContent,
                    tag: imgOrNot(el).tag,
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                    imgUrl: imgOrNot(el).imgUrl,
                    imgMeta: imgOrNot(el).imgMeta
                };
            });
        },
        domQueryForContent
    );

    return elements;
}
