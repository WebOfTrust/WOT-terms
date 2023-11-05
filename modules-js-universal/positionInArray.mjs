/**
 * Returns the position of a value in the entriesIndex array.
 * @param {Array<string>} content - The content to search in.
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */
function positionInArray(content, value) {
    const entriesIndex = content[0];
    for (let i = 0; i < entriesIndex.length; i++) {
        if (entriesIndex[i] === value) return i;
    }
    return -1;
}

export default positionInArray;