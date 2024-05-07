/**
 * @file This file converts string to lower case and removes special characters
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-12-01
 */

/**
 * @module toLowerCaseAndRemoveSpecialChars
 * @description Description: Converts string to lower case and removes special characters
 * @param {*} str 
 * @returns {string} - The string in lower case without special characters
 */
export function toLowerCaseAndRemoveSpecialChars(str) {
    return str.toLowerCase().replace(/[\s-_—]/g, '');
}
