import overview from '@site/static/json/overview.json';
/**
 *  This plugin adds a GTP generated summary to the top of the page.
 */

const showGPTsummary = () => {
  // TODO: fix bug where the summary is added multiple times when navigating between pages
  // TODO: endless loop when navigating between pages too fast
  function typeWriter(selector, strText, interval) {
    let text = document.querySelector(selector),
      i = 0,
      clear,
      pauseBeforeStart = 60,
      finalString = '';
    text.innerHTML = '';
    clearInterval(clear);

    function createTextString() {
      for (let i = 0; i < strText.length; i++) {
        finalString +=
          "<span id='n" +
          i +
          "' style='visibility: hidden'>" +
          strText[i] +
          '</span>';
      }
    }

    function typeText() {
      let counterId = '#n' + i;

      document.querySelector(counterId).style.visibility = 'visible';
      i++;

      if (i === strText.length) {
        clearInterval(clear);
      }
    }
    createTextString();

    document.querySelector(selector).innerHTML = finalString;

    setTimeout(function () {
      clear = setInterval(typeText, interval);
    }, pauseBeforeStart);
  } // end typeWriter

  const heading = document.querySelector('.markdown h1:first-child');

  if (heading) {
    // Find the column number of the column with the name 'Shortened version static copy'
    const summaryColumnName = 'Shortened version static copy';
    // loop through the first entry of the overview.json and find the column number of the column with the name 'Shortened version static copy'
    let summaryColumnNumber;
    for (let i = 0; i < overview.values[0].length; i++) {
      if (overview.values[0][i].trim() === summaryColumnName) {
        summaryColumnNumber = i;
      }
    }

    // Find the column number of the column with the name 'Term'
    const textColumnName = 'Term';
    // loop through the first entry of the overview.json and find the column number of the column with the name 'Term'
    let textColumnNumber = -1;
    for (let i = 0; i < overview.values[0].length; i++) {
      if (overview.values[0][i].trim() === textColumnName) {
        textColumnNumber = i;
      }
    }

    overview.values.forEach((row, index) => {
      if (index < 1) return;

      // Add a paragraph with the summary directly below the heading
      if (
        row[summaryColumnNumber] !== 'NO INPUT' &&
        typeof row[summaryColumnNumber] !== undefined
      ) {
        if (heading.innerText === row[textColumnNumber]) {
          const summaryContainer = document.createElement('div');
          summaryContainer.classList.add(
            'summary-container',
            // 'alert',
            // 'alert--info',
            'margin-bottom--lg'
          );
          summaryContainer.setAttribute('role', 'alert');
          heading.after(summaryContainer);

          const domSummaryContainer =
            document.querySelector('.summary-container');

          const summaryHeading = document.createElement('h2');
          summaryHeading.classList.add('summary-heading');
          summaryHeading.innerHTML = 'AI–generated Summary';
          domSummaryContainer.appendChild(summaryHeading);

          const summary = document.createElement('p');
          summary.classList.add('summary');
          summary.innerHTML = row[summaryColumnNumber];
          domSummaryContainer.appendChild(summary);

          // typeWriter('.summary', row[summaryColumnNumber], 30);
        }
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  showGPTsummary();
}
