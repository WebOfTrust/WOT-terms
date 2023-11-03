import overview from '/static/json/overview.json';

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

// Find the column number of the column with the name 'Form'
const formColumnNumber = positionInArray('Form');
const levelColumnNumber = positionInArray('level');
const termColumnNumber = positionInArray('Term');

// Create a Set of unique values in the Form column
const uniqueValuesForm = new Set();
for (let i = 1; i < overview.values.length; i++) {
    const value = overview.values[i][formColumnNumber];
    if (value) {
        uniqueValuesForm.add(value);
    }
}
// Create a Set of unique values in the Level column
const uniqueValuesLevel = new Set();
for (let i = 1; i < overview.values.length; i++) {
    const value = overview.values[i][levelColumnNumber];
    if (value) {
        uniqueValuesLevel.add(value);
    }
}

// convert Set to Array
let uniqueValuesArrayForm = Array.from(uniqueValuesForm);
let uniqueValuesArrayLevel = Array.from(uniqueValuesLevel);

// const checkboxData = uniqueValuesArray.map((value) => {
//     const obj = {};
//     obj[value] = false;
//     return obj;
// });

const checkboxFormData = {};
uniqueValuesArrayForm.forEach((value) => {
    checkboxFormData[value] = false;
});
const checkboxLevelData = {};
uniqueValuesArrayLevel.forEach((value) => {
    checkboxLevelData[value] = false;
});

const addUiToSidebar = () => {
    const glossaryLink = document.querySelector('li.theme-doc-sidebar-item-category-level-1 a[href*="/docs/glossary"]');
    // go up two nodes to get the list item
    const glossaryListItem = glossaryLink.parentNode.parentNode;
    // now get the ul, so we skip the <a>glossary</a> link
    const glossaryListItemChildLinks = glossaryListItem.querySelector('ul').querySelectorAll('a');

    function setMenuItems() {

        console.log('checkboxData in setMenuItems: ', JSON.stringify(checkboxFormData));
        // loop through all links in the glossary menu
        glossaryListItemChildLinks.forEach((link) => {
            for (let i = 0; i < overview.values.length; i++) {
                if (overview.values[i][positionInArray('Term')] === link.innerText) {
                    for (const formValue in checkboxFormData) {
                        if (checkboxFormData.hasOwnProperty(formValue)) {
                            if (formValue === overview.values[i][positionInArray('Form')]) {
                                if (!checkboxFormData[formValue]) { // if it's false
                                    link.classList.add('greyed-out');
                                } else {
                                    link.classList.remove('greyed-out');
                                }
                            }
                        }
                    }
                }
            }
        });
    }


    // add checkboxes to the sidebar, first add a container
    if (document.querySelector('.check-container-form')) {
        // checkboxes already added, do nothing
        return;
    }
    const nav = document.querySelector('nav[aria-label="Docs sidebar"]');
    const checkboxFormContainer = document.createElement('div');
    checkboxFormContainer.classList.add('check-container-form');
    checkboxFormContainer.classList.add('border');
    checkboxFormContainer.classList.add('ms-2');
    checkboxFormContainer.classList.add('me-2');
    checkboxFormContainer.classList.add('mb-2');
    checkboxFormContainer.classList.add('p-2');
    checkboxFormContainer.classList.add('rounded');
    checkboxFormContainer.style.fontSize = '0.8rem';

    checkboxFormContainer.innerHTML = `<h2 style="font-size: 1.2em">Form:</h2>`

    const checkboxLevelContainer = document.createElement('div');
    checkboxLevelContainer.classList.add('check-container-level');
    checkboxLevelContainer.classList.add('border');
    checkboxLevelContainer.classList.add('ms-2');
    checkboxLevelContainer.classList.add('me-2');
    checkboxFormContainer.classList.add('mb-2');
    checkboxLevelContainer.classList.add('p-2');
    checkboxLevelContainer.classList.add('rounded');
    checkboxLevelContainer.style.fontSize = '0.8rem';

    checkboxLevelContainer.innerHTML = `<h2 style="font-size: 1.2em">Level:</h2>`

    nav.insertBefore(checkboxLevelContainer, nav.firstChild);
    nav.insertBefore(checkboxFormContainer, nav.firstChild);


    const checkboxesForm = [];
    const checkboxesLevel = [];


    // Form checkboxes
    for (let i = 0; i < uniqueValuesArrayForm.length; i++) {
        const checkboxForm = document.createElement('div');
        checkboxForm.classList.add('form-check');
        checkboxForm.classList.add('form-check-inline');
        checkboxForm.innerHTML = `
          <input data-form=${uniqueValuesArrayForm[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck${i}">
          <label class="form-check-label" for="defaultCheck${i}">
              ${uniqueValuesArrayForm[i]} 
          </label>
      `;
        checkboxForm.addEventListener('click', () => {
            checkboxesForm.forEach((cb, index) => {
                checkboxFormData[cb.dataset.form] = cb.checked;
            });
            // update the menu items based on the checkboxData array
            setMenuItems();
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
          <input data-level=${uniqueValuesArrayLevel[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck2${i}">
          <label class="level-check-label" for="defaultCheck2${i}">
              ${uniqueValuesArrayLevel[i]} 
          </label>
      `;
        checkboxLevel.addEventListener('click', () => {
            checkboxesLevel.forEach((cb, index) => {
                checkboxLevelData[cb.dataset.level] = cb.checked;
            });
            // update the menu items based on the checkboxData array
            setMenuItems();
        });

        const levelCheckContainer = document.querySelector('.check-container-level');
        levelCheckContainer.appendChild(checkboxLevel);

        checkboxesLevel.push(checkboxLevel.querySelector('input'));
    }
    // return checkboxesForm.map(checkboxForm => checkboxForm.checked);
    // return checkboxesLevel.map(checkboxLevel => checkboxLevel.checked);
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    // if (location.pathname === previousLocation?.pathname) return;
    addUiToSidebar();
}

