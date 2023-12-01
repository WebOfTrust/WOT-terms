/**
 * Description: Converts string to lower case and removes special characters
 * @param {*} str 
 * @returns 
 */
export function toLowerCaseAndRemoveSpecialChars(str) {
    return str.toLowerCase().replace(/[\s-_—]/g, '');
}
