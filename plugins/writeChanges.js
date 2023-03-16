const writeChanges = (element) => {
  const el = document.querySelector(element);
  const buttonTextEdit = 'Edit';
  const buttonTextSave = 'Save';

  if (el !== null) {
    write();
  }

  function write() {
    const writeResultsTo =
      'https://dwarshuis.com/test/wot-terms/php_scripts/saveEdits.php';
    const makeEditable = el;
    let mutation = {};

    // Create an edit/save button and insert before the element we want to edit
    const editSaveButton = document.createElement('button');
    editSaveButton.classList.add('button');
    editSaveButton.classList.add('button--secondary');
    editSaveButton.classList.add('margin--md');
    editSaveButton.classList.add('edit-save');
    editSaveButton.innerText = buttonTextEdit;
    el.parentNode.insertBefore(editSaveButton, el);
    editSaveButton.addEventListener('click', makeContentEditable);

    let isEditable = false;
    function makeContentEditable() {
      if (isEditable === false) {
        el.contentEditable = 'true';
        this.innerText = buttonTextSave;
        el.style.backgroundColor = '#e8ffc6';
      } else {
        el.contentEditable = 'false';
        this.innerText = buttonTextEdit;
        el.style.backgroundColor = 'white';
        sendContent();
      }
      isEditable = !isEditable;
    }

    function sendContent() {
      var formData = new FormData();
      formData.append('content', JSON.stringify(mutation));

      // TODO: improve fetch
      fetch(writeResultsTo, { method: 'POST', body: formData });
      // .then(function (response) {
      //   return response.text();
      // })
      // .then(function (body) {
      //   console.log(body);
      // });
    }

    // https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
    // TODO: implement observer.disconnect();
    const observer = new MutationObserver((mutationRecords) => {
      if (
        mutation.row !== mutationRecords[0].target.parentElement.dataset.row ||
        mutation.column !== mutationRecords[0].target.parentElement.className
      ) {
        sendContent();
      }
      mutation.row = mutationRecords[0].target.parentElement.dataset.row;
      mutation.column = mutationRecords[0].target.parentElement.className;
      mutation.proposedText = mutationRecords[0].target.parentElement.innerText;
    });
    observer.observe(el, {
      characterData: true,
      subtree: true,
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  writeChanges('.googlesheet');
}
