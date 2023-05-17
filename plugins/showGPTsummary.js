import overview from '@site/static/json/overview.json';
/**
 *  This plugin adds a GTP generated summary to the top of the page.
 */

const showGPTsummary = () => {
  // Find the column number of the column with the name 'Shortened version static copy'
  const columnNameSummary = 'Shortened version static copy';
  // loop through the first entry of the overview.json and find the column number of the column with the name 'Shortened version static copy'
  let columnNumberSummary;
  for (let i = 0; i < overview.values[0].length; i++) {
    if (overview.values[0][i].trim() === columnNameSummary) {
      columnNumberSummary = i;
    }
  }

  // Find the column number of the column with the name 'Term'
  const columnNameText = 'Term';
  // loop through the first entry of the overview.json and find the column number of the column with the name 'Term'
  let columnNumberText;
  for (let i = 0; i < overview.values[0].length; i++) {
    if (overview.values[0][i].trim() === columnNameText) {
      columnNumberText = i;
    }
  }

  overview.values.forEach((row, index) => {
    const heading = document.querySelector('header h1');
    if (index < 1) return;

    // Add a paragraph with the summary directly below the heading
    if (heading && row[columnNumberSummary] !== 'NO INPUT') {
      if (heading.innerText === row[columnNumberText]) {
        const summary = document.createElement('p');
        summary.classList.add('summary');
        summary.innerHTML = row[columnNumberSummary];
        heading.after(summary);

        const summaryHeading = document.createElement('h2');
        summaryHeading.classList.add('summary-heading');
        summaryHeading.innerHTML = 'AI–generated Summary';
        heading.after(summaryHeading);
      }
    }
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  showGPTsummary();
}
