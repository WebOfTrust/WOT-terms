import { Octokit, App } from 'octokit';

// https://f3oall.github.io/awesome-notifications/docs/why-such-awesome
// https://www.npmjs.com/package/awesome-notifications
// https://github.com/f3oall/awesome-notifications#readme
// import AWN from 'awesome-notifications';
import AWN from './libs/awesome-notifications.js';

// Initialize instance of AWN
let notifier = new AWN({
  maxNotifications: 6,
  durations: {
    alert: 0,
    success: 4000,
  },
  icons: {
    enabled: false,
  },
});

const writeChanges = (element) => {
  const el = document.querySelector(element);
  const buttonTextEdit = 'Edit';
  const buttonTextSave = 'Send';
  const buttonTextCancel = 'Cancel';
  let explanationAboutGithubIssueShown = false;

  const domainReceivingChanges =
    'https://dwarshuis.com/test/wot-terms/php_scripts/saveEdits.php';

  if (el !== null) {
    write();
  }

  function write() {
    const makeEditable = el;
    let mutation = {};

    // // Create an edit/save button and insert before the element we want to edit
    // const editSaveButton = document.createElement('button');
    // editSaveButton.classList.add('button');
    // editSaveButton.classList.add('button--secondary');
    // editSaveButton.classList.add('margin--md');
    // editSaveButton.classList.add('edit-save');
    // editSaveButton.innerText = buttonTextEdit;
    // el.parentNode.insertBefore(editSaveButton, el);
    // editSaveButton.addEventListener('click', makeContentEditable);

    // Create an edit/save button in every table cell
    const tableCells = document.querySelectorAll('.googlesheet td');
    tableCells.forEach((cell) => {
      if (cell.dataset.columnnr !== '0') {
        // Surround the cell content with a div
        cell.innerHTML =
          '<div class="cell-content">' + cell.innerHTML + '</div>';

        const div = document.createElement('div');
        div.classList.add('buttons');
        cell.appendChild(div);

        const editSaveButton = document.createElement('button');
        editSaveButton.classList.add('button');
        editSaveButton.classList.add('button--secondary');
        editSaveButton.classList.add('margin--md');
        editSaveButton.classList.add('edit-save');
        editSaveButton.innerText = buttonTextEdit;
        div.appendChild(editSaveButton);
        editSaveButton.addEventListener('click', makeTableCellEditable);

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('button');
        cancelButton.classList.add('button--secondary');
        cancelButton.classList.add('margin--md');
        cancelButton.classList.add('cancel');
        cancelButton.innerText = buttonTextCancel;
        div.appendChild(cancelButton);
        cancelButton.addEventListener('click', cancelTableCellEditable);
      }
    });

    function makeTableCellEditable() {
      if (this.parentElement.parentElement.contentEditable !== 'true') {
        this.parentElement.parentElement.contentEditable = 'true';
        this.parentElement.parentElement.classList.add('editable');
        this.parentElement.parentElement.focus();
        this.innerText = buttonTextSave;

        if (explanationAboutGithubIssueShown === false) {
          notifier.info(
            `After editing, click the “${buttonTextSave}” button, and a Github issue will be generated.`
          );
          explanationAboutGithubIssueShown = true;
        }
      } else {
        this.parentElement.parentElement.contentEditable = 'false';
        this.innerText = buttonTextEdit;
        sendContent();
      }
    }
    function cancelTableCellEditable() {
      this.parentElement.parentElement.contentEditable = 'false';
      this.parentElement.parentElement.classList.remove('editable');
      this.parentElement.querySelector('button.edit-save').innerText =
        buttonTextEdit;
    }

    async function sendContent() {
      var formData = new FormData();

      formData.append('content', JSON.stringify(mutation));

      /**
       * Write to a textfile on a domain
       */

      // TODO: improve fetch
      fetch(domainReceivingChanges, { method: 'POST', body: formData });
      // .then(
      //   function (response) {
      //     return response.text();
      //   }
      // );
      // .then(function (body) {
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
        title: `New edit for “${mutation.columnname}” for the term: “${mutation.term}”.`,
        body: `An edit has been made in column “${mutation.columnname}” for the term: “${mutation.term}”.\n\nThe new text is: “${mutation.proposedText}”\n\n(Column: ${mutation.columnnr}, Row: ${mutation.rownr})`,
      };

      // Send the request to create the issue
      const response = await octokit.rest.issues.create(payload);

      let onOk = () => {
        // notifier.info('You pressed OK');
      };
      notifier.confirm(
        `A new issue has been created on Github at: <a target="_blank" rel="noopener" href="${response.data.html_url}">${response.data.html_url}</a>`,
        onOk,
        false,
        {
          labels: {
            confirm: 'Info',
          },
        }
      );
    }

    // https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
    // TODO: implement observer.disconnect();
    const observer = new MutationObserver((mutationRecords) => {
      // Collect the data like row, column, rownr, columnnr, columnname, proposedText, term of the edited cell
      mutation.row =
        mutationRecords[0].target.parentElement.parentElement.dataset.row;
      mutation.rownr =
        mutationRecords[0].target.parentElement.parentElement.dataset.rownr;
      mutation.column =
        mutationRecords[0].target.parentElement.parentElement.dataset.column;
      mutation.columnnr =
        mutationRecords[0].target.parentElement.parentElement.dataset.columnnr;
      mutation.columnname = document.querySelectorAll(
        `.googlesheet th[data-columnnr]`
      )[
        mutationRecords[0].target.parentElement.parentElement.dataset.columnnr
      ].innerText;

      // The text that is being edited
      mutation.proposedText =
        mutationRecords[0].target.parentElement.parentElement.innerText;

      // Remove the edit button text from the text that is being edited
      mutation.proposedText = mutation.proposedText.substring(
        0,
        mutation.proposedText.length -
        buttonTextSave.length -
        buttonTextCancel.length -
        1
      );

      // The term that is being edited
      mutation.term = document.querySelectorAll(
        `.googlesheet tr[data-rownr="${mutation.rownr}"] td[data-columnnr="4"]`
      )[0].innerText;

      // Remove the edit button text from the term
      mutation.term = mutation.term.substring(
        0,
        mutation.term.length -
        document.querySelectorAll(
          `.googlesheet tr[data-rownr="${mutation.rownr}"] td[data-columnnr="4"] button.cancel`
        )[0].innerText.length -
        document.querySelectorAll(
          `.googlesheet tr[data-rownr="${mutation.rownr}"] td[data-columnnr="4"] button.edit-save`
        )[0].innerText.length -
        1
      );
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
