import { Octokit, App } from 'octokit';

const writeChanges = (element) => {
  const el = document.querySelector(element);
  const buttonTextEdit = 'Edit';
  const buttonTextSave = 'Save';
  const doimainReceivingChanges =
    'https://dwarshuis.com/test/wot-terms/php_scripts/saveEdits.php';

  if (el !== null) {
    write();
  }

  function write() {
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

    async function sendContent() {
      var formData = new FormData();
      formData.append('content', JSON.stringify(mutation));

      /**
       * Write to a textfile on a domain
       */

      // TODO: improve fetch
      fetch(doimainReceivingChanges, { method: 'POST', body: formData });

      // .then(function (response) {
      //   return response.text();
      // })
      // .then(function (body) {
      //   console.log(body);
      // });

      // // Octokit.js
      // // https://github.com/octokit/core.js#readme
      // const octokit = new Octokit({
      //   auth: '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',
      // });

      // octokit.request('POST /repos/kordwarshuis/WOT-terms-edits/dispatches', {
      //   owner: 'kordwarshuis',
      //   repo: 'WOT-terms-edits',
      //   event_type: 'edit',
      //   client_payload: {
      //     unit: false,
      //     integration: true,
      //   },
      //   headers: {
      //     'X-GitHub-Api-Version': '2022-11-28',
      //   },
      // });

      /**
       * Create an issue on Github
       */
      let auth = prompt('Enter token');

      // Initialize the Octokit client
      const octokit = new Octokit({
        auth: auth,
      });

      // Create the issue payload
      const payload = {
        owner: 'kordwarshuis',
        repo: 'WOT-terms-edits',
        title: 'Definition redefined',
        body: `An edit has been made in column “${mutation.columnname}” on row ${mutation.rownr}.\n\nThe new text is: “${mutation.proposedText}”\n\n(Column: ${mutation.column}, Row: ${mutation.row})`,
      };

      console.log('payload: ', payload.body);

      // Send the request to create the issue
      const response = await octokit.rest.issues.create(payload);

      console.log(response.data);
    }

    // https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
    // TODO: implement observer.disconnect();
    const observer = new MutationObserver((mutationRecords) => {
      // console.log(
      //   'mutationRecords[0].target: ',
      //   mutationRecords[0].target.parentElement.dataset.rownr
      // );
      if (
        mutation.rownr !==
          mutationRecords[0].target.parentElement.dataset.rownr ||
        mutation.colnr !== mutationRecords[0].target.parentElement.dataset.colnr
      ) {
        // sendContent();
      }
      mutation.row = mutationRecords[0].target.parentElement.dataset.row;
      mutation.rownr = mutationRecords[0].target.parentElement.dataset.rownr;
      mutation.column = mutationRecords[0].target.parentElement.dataset.column;
      mutation.columnnr =
        mutationRecords[0].target.parentElement.dataset.columnnr;
      mutation.columnname = document.querySelectorAll(
        `.googlesheet th[data-columnnr]`
      )[mutationRecords[0].target.parentElement.dataset.columnnr].innerText;
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
