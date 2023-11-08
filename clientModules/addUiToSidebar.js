import overview from '/static/json/overview.json';
const paths = require('../docusaurus.paths.js');
const baseUrl = paths.baseUrl;

/**
 * The column names of the list of websites to scrape.
 * @type {Array<string>}
 */
const entriesIndex = overview.values[0];


/**
 * Returns the position of a value in the entriesIndex array.
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */
function positionInArray(value) {
    for (let i = 0; i < entriesIndex.length; i++) {
        if (entriesIndex[i].trim() === value) return i;
    }
    return -1;
}

/**
 * Returns a set of unique values from a 2D array based on a given column index.
 * @param {Array<Array>} data - The 2D array to search for unique values.
 * @param {number} columnIndex - The index of the column to search for unique values.
 * @returns {Set} - A set of unique values from the specified column.
 */
function getUniqueValues(data, columnIndex) {
    const uniqueValues = new Set();
    for (let i = 1; i < data.length; i++) {
        const value = data[i][columnIndex];
        if (value) {
            uniqueValues.add(value);
        }
    }
    return uniqueValues;
}

// overview.values is a 2D array and formColumnNumber, levelColumnNumber, typeColumnNumber are the respective column indexes
const formColumnNumber = positionInArray('Form');
const levelColumnNumber = positionInArray('level');
const typeColumnNumber = positionInArray('Type');


// Get unique values for each column
const uniqueValuesForm = getUniqueValues(overview.values, formColumnNumber);
const uniqueValuesLevel = getUniqueValues(overview.values, levelColumnNumber);
const uniqueValuesType = getUniqueValues(overview.values, typeColumnNumber);


// convert Set to Array
let uniqueValuesArrayForm = Array.from(uniqueValuesForm);
let uniqueValuesArrayLevel = Array.from(uniqueValuesLevel);
let uniqueValuesArrayType = Array.from(uniqueValuesType);

// Create a checkbox state object
function createCheckboxState(uniqueValues) {
    const checkboxState = {};
    Array.from(uniqueValues).forEach((value) => {
        checkboxState[value] = false;
    });
    return checkboxState;
}

const allFormCheckboxesState = createCheckboxState(uniqueValuesForm);
const allLevelCheckboxesState = createCheckboxState(uniqueValuesLevel);
const allTypeCheckboxesState = createCheckboxState(uniqueValuesType);

function setLocalStorage() {
    localStorage.setItem('allFormCheckboxesStateLocalStorage', JSON.stringify(allFormCheckboxesState));
    localStorage.setItem('allLevelCheckboxesStateLocalStorage', JSON.stringify(allLevelCheckboxesState));
    localStorage.setItem('allTypeCheckboxesStateLocalStorage', JSON.stringify(allTypeCheckboxesState));
}

function getLocalStorage() {
    const allFormCheckboxesStateLocalStorage = JSON.parse(localStorage.getItem('allFormCheckboxesStateLocalStorage'));
    const allLevelCheckboxesStateLocalStorage = JSON.parse(localStorage.getItem('allLevelCheckboxesStateLocalStorage'));
    const allTypeCheckboxesStateLocalStorage = JSON.parse(localStorage.getItem('allTypeCheckboxesStateLocalStorage'));
    return [allFormCheckboxesStateLocalStorage, allLevelCheckboxesStateLocalStorage, allTypeCheckboxesStateLocalStorage];
}

function nothingChecked() {
    // If only one checkbox is checked, this function returns false, else it returns true. “some” is used to check if any checkbox in each category is checked. If any some call returns true, the function returns false, indicating that not "nothing is checked". If all some calls return false, the function returns true, indicating that "nothing is checked".
    const formCheckboxes = document.querySelectorAll('input[type="checkbox"][data-form]');
    const levelCheckboxes = document.querySelectorAll('input[type="checkbox"][data-level]');
    const typeCheckboxes = document.querySelectorAll('input[type="checkbox"][data-type]');

    const isFormChecked = Array.from(formCheckboxes).some(checkbox => checkbox.checked);
    const isLevelChecked = Array.from(levelCheckboxes).some(checkbox => checkbox.checked);
    const isTypeChecked = Array.from(typeCheckboxes).some(checkbox => checkbox.checked);

    return !(isFormChecked || isLevelChecked || isTypeChecked);
}

function areAllCheckboxesFalse() {
    const allCheckboxes = [allFormCheckboxesState, allLevelCheckboxesState, allTypeCheckboxesState];
    for (const checkboxes of allCheckboxes) {
        for (const checkbox in checkboxes) {
            if (checkboxes[checkbox]) {
                return false;
            }
        }
    }
    return true;
}

const addUiToSidebar = (ulElement, glossaryListItemChildLinks) => {
    function createFilters() {
        // add checkboxes to the sidebar, first add a container
        if (document.querySelector('.check-container-form')) {
            // checkboxes already added, do nothing
            return;
        }
        const classesToAdd = ['border', 'me-2', 'mb-1', 'ps-2', 'pt-2', 'pe-2', 'rounded', 'd-block', 'bg-light', 'border-secondary'];
        const fontSize = '0.8rem';

        const checkboxFormContainer = document.createElement('div');
        checkboxFormContainer.classList.add(...classesToAdd);
        checkboxFormContainer.classList.add('check-container-form');
        checkboxFormContainer.style.fontSize = fontSize;
        checkboxFormContainer.innerHTML = `<h2 class="d-inline pe-1" style="font-size: 1.2em">Form:</h2>`

        const checkboxLevelContainer = document.createElement('div');
        checkboxLevelContainer.classList.add(...classesToAdd);
        checkboxLevelContainer.classList.add('check-container-level');
        checkboxLevelContainer.style.fontSize = fontSize;
        checkboxLevelContainer.innerHTML = `<h2 class="d-inline pe-1" style="font-size: 1.2em">Level:</h2>`

        const checkboxTypeContainer = document.createElement('div');
        checkboxTypeContainer.classList.add(...classesToAdd);
        checkboxTypeContainer.classList.add('check-container-type');
        checkboxTypeContainer.style.fontSize = fontSize;
        checkboxTypeContainer.innerHTML = `<h2 class="d-inline pe-1" style="font-size: 1.2em">Type:</h2>`


        // add the container with filters to the sidebar
        if (ulElement) {
            ulElement.insertBefore(checkboxLevelContainer, ulElement.firstChild);
            ulElement.insertBefore(checkboxFormContainer, ulElement.firstChild);
            ulElement.insertBefore(checkboxTypeContainer, ulElement.firstChild);
        }

        const checkboxesForm = [];
        const checkboxesLevel = [];
        const checkboxesType = [];


        // Form checkboxes
        for (let i = 0; i < uniqueValuesArrayForm.length; i++) {
            const checkboxForm = document.createElement('div');
            checkboxForm.classList.add('form-check');
            checkboxForm.classList.add('form-check-inline');
            checkboxForm.innerHTML = `
          <input checked data-filter="form" data-form=${uniqueValuesArrayForm[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck${i}">
          <label class="form-check-label" for="defaultCheck${i}">
              ${uniqueValuesArrayForm[i]} 
          </label>
      `;
            checkboxForm.addEventListener('click', (e) => {
                checkboxesForm.forEach((cb, index) => {
                    allFormCheckboxesState[cb.dataset.form] = cb.checked;
                });
                // update the menu items based on the checkboxData array
                setMenuItems(e);
            });

            const formCheckContainer = document.querySelector('.check-container-form');
            formCheckContainer.appendChild(checkboxForm);

            checkboxesForm.push(checkboxForm.querySelector('input'));
        }


        // Level checkboxes
        for (let i = 0; i < uniqueValuesArrayLevel.length; i++) {
            const checkboxLevel = document.createElement('div');
            checkboxLevel.classList.add('form-check');
            checkboxLevel.classList.add('form-check-inline');

            checkboxLevel.innerHTML = `
          <input checked data-filter="level" data-level=${uniqueValuesArrayLevel[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck2${i}">
          <label class="level-check-label" for="defaultCheck2${i}">
              ${uniqueValuesArrayLevel[i]} 
          </label>
      `;
            checkboxLevel.addEventListener('click', (e) => {
                checkboxesLevel.forEach((cb, index) => {
                    allLevelCheckboxesState[cb.dataset.level] = cb.checked;
                });
                // update the menu items based on the checkboxData array
                setMenuItems(e);
            });

            const levelCheckContainer = document.querySelector('.check-container-level');
            levelCheckContainer.appendChild(checkboxLevel);

            checkboxesLevel.push(checkboxLevel.querySelector('input'));
        }
        // Type checkboxes
        for (let i = 0; i < uniqueValuesArrayType.length; i++) {
            const checkboxType = document.createElement('div');
            checkboxType.classList.add('form-check');
            checkboxType.classList.add('form-check-inline');

            checkboxType.innerHTML = `
          <input checked data-filter="type" data-type=${uniqueValuesArrayType[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck3${i}">
          <label class="type-check-label" for="defaultCheck3${i}">
              ${uniqueValuesArrayType[i]} 
          </label>
      `;
            checkboxType.addEventListener('click', (e) => {
                checkboxesType.forEach((cb, index) => {
                    allTypeCheckboxesState[cb.dataset.type] = cb.checked;
                });
                // update the menu items based on the checkboxData array
                setMenuItems(e);
            });

            const typeCheckContainer = document.querySelector('.check-container-type');
            typeCheckContainer.appendChild(checkboxType);

            checkboxesType.push(checkboxType.querySelector('input'));
        }
    }

    createFilters();

    document.querySelector('.navbar__toggle').addEventListener('click', (e) => {
        createFilters();
    });

    function greyOutAllLinks() {
        glossaryListItemChildLinks.forEach((link) => {
            link.classList.add('greyed-out');
        });
    }
    function removeGreyOutAllLinks() {
        glossaryListItemChildLinks.forEach((link) => {
            link.classList.remove('greyed-out');
        });
    }

    function setMenuItems(e) {
        let eTargetChecked = e.target.checked;
        let eTargetDatasetFilter = e.target.dataset.filter

        // update the checkboxes state object
        if (e.target.dataset.form !== undefined) {
            allFormCheckboxesState[e.target.dataset.form] = true;
        }
        if (e.target.dataset.level !== undefined) {
            allLevelCheckboxesState[e.target.dataset.level] = true;
        }
        if (e.target.dataset.type !== undefined) {
            allTypeCheckboxesState[e.target.dataset.type] = true;
        }


        // loop through all links in the glossary menu
        glossaryListItemChildLinks.forEach((link) => {
            // loop through all entries in the overview.json
            for (let i = 0; i < overview.values.length; i++) {

                // if the link text matches the term in the overview.json
                if (overview.values[i][positionInArray('Term')].trim() === link.innerText) {
                    // now we can lookup the form, level and type of the entry

                    // if the checkbox belongs to the “Form” (name of the column in the source data, has nothing to do with html forms) filter
                    if (eTargetDatasetFilter === "form") {
                        // if the checkbox value matches the value in the overview.json
                        if (e.target.dataset.form === overview.values[i][positionInArray('Form')]) {
                            // then it should control this menu item
                            // the state of the checkbox determines if the menu item is greyed-out or not
                            // if the checkbox is checked then remove the greyed-out class

                            if (eTargetChecked) {
                                link.classList.remove('greyed-out');
                            } else {
                                link.classList.add('greyed-out');
                            }
                        }
                    }
                    if (eTargetDatasetFilter === "level") {
                        // if the checkbox value matches the value in the overview.json
                        if (e.target.dataset.level === overview.values[i][positionInArray('level')]) {
                            // if the checkbox is checked then remove the greyed-out class

                            if (eTargetChecked) {
                                link.classList.remove('greyed-out');
                            } else {
                                link.classList.add('greyed-out');
                            }
                        }
                    }
                    if (eTargetDatasetFilter === "type") {
                        // if the checkbox value matches the value in the overview.json
                        if (e.target.dataset.type === overview.values[i][positionInArray('Type')]) {
                            // if the checkbox is checked then remove the greyed-out class

                            if (eTargetChecked) {
                                link.classList.remove('greyed-out');
                            } else {
                                link.classList.add('greyed-out');
                            }
                        }
                    }


                }

                // for (const checkbox in allFormCheckboxesState) {
                //     if (checkbox === formValue) {
                //         link.classList.remove('greyed-out');
                //     } else {
                //         link.classList.add('greyed-out');
                //     }
                // }

            }
        });
    }
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    // if (location.pathname === previousLocation?.pathname) return;

    // if the sidebar is not present, do nothing
    if (!document.querySelector('.theme-doc-sidebar-container')) {
        return;
    }
    // const glossaryMainMenuItem = document.querySelector(`.theme-doc-sidebar-menu li a[href="${baseUrl}docs/glossary"]`);
    console.log('baseUrl: ', baseUrl);
    const glossaryMainMenuItem = document.querySelector(`.theme-doc-sidebar-menu li a[href="` + baseUrl + `docs/glossary"]`);
    console.log('glossaryMainMenuItem: ', glossaryMainMenuItem);
    const parentElement = glossaryMainMenuItem.parentNode.parentNode; // This is the 'li'
    const ulElement = parentElement.querySelector('ul');

    // if the sidebar is present but the glossary menu is not present, do nothing
    if (!ulElement) {
        return
    }

    // now get the ul, so we skip the <a>glossary</a> link
    const glossaryListItemChildLinks = ulElement.querySelectorAll('a');

    addUiToSidebar(ulElement, glossaryListItemChildLinks);
}

