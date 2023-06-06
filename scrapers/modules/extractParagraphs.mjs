// extractElements.mjs
export default async function extractElements(page, domQueryForContent) {
    const elements = await page.evaluate(
        (domQueryForContent) => {
            // Helper function to find the first heading element preceding the given element
            function findPreviousHeadingElement(element) {
                let previousElement = element.previousElementSibling;
                while (previousElement) {
                    if (isHeadingElement(previousElement)) {
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

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);
                return {
                    text: el.textContent.trim(),
                    tag: el.tagName.toLowerCase(),
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                };
            });
        },
        domQueryForContent
    );

    return elements;
}
