/**
 * @file This file fetches the commit hashes of current file and shows it after clicking on a button. The info is fetched from the Github API.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2024-04-19
 */

const paths = require('../docusaurus.paths.js');
const baseUrl = paths.baseUrl;

const textStrings = {
  fetchCommitHash: 'Show commit info',
  loading: 'Loading...',
  noCommitHash: 'No commit info found',
};


const fetchCommitHash = () => {
  // Where are we in the glossary?
  const urlIsGlossary = baseUrl + 'docs/glossary/'
  // And, are we in the glossary? Test if urlIsGlossary is in window.location.pathname
  const urlIsGlossaryInPathname = window.location.pathname.includes(urlIsGlossary);

  // if we are not in the glossary, return
  if (!urlIsGlossaryInPathname) {
    return;
  }

  const owner = 'WebOfTrust';
  const repo = 'WOT-terms';
  const pathName = window.location.pathname;

  let filePath = pathName.substring(pathName.indexOf('/', 1) + 1) + ".md";
  console.log('filePath: ', filePath);
  // in filePath, replace the string “glossary” with “04_glossary”
  filePath = filePath.replace('glossary', '04_glossary');

  // GitHub API URL
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;
  console.log('url: ', url);

  const buttonElement = document.createElement('button');
  buttonElement.innerText = textStrings.fetchCommitHash;
  buttonElement.classList.add('btn', 'btn-outline-secondary', 'mt-5', 'ms-2');

  // add the paragraph to the page at the end of the page
  document.querySelector('.markdown').appendChild(buttonElement);


  // Function to fetch the latest commit hash of the file
  async function fetchLatestCommitHash() {
    buttonElement.innerText = textStrings.loading;
    try {
      // Fetch the list of commits for the specified file
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      // Check for rate limit before proceeding
      if (response.status === 403 && response.headers.get('X-RateLimit-Remaining') === '0') {
        const resetTime = new Date(response.headers.get('X-RateLimit-Reset') * 1000);
        console.error(`Github API rate limit exceeded. Try again after ${resetTime}`);
        alert(`Github API rate limit exceeded. Try again after ${resetTime}`);
        return;
      }


      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Extract JSON data from the response
      const data = await response.json();

      // Check if there are any commits
      if (data.length === 0) {
        console.log(textStrings.noCommitHash);
        buttonElement.innerText = textStrings.noCommitHash;
        return;
      }

      // Process the last ten commits
      const commits = data.slice(0, 10); // Get only the last ten commits
      // reverse commits array to display from oldest to newest
      commits.reverse();

      commits.forEach((commit, index) => {
        const date = new Date(commit.commit.committer.date);

        const divElement = document.createElement('div');
        divElement.innerHTML = `
        <p class="mt-5">Commit ${index + 1}</p>
        <table>
        <tr>
          <td><img style="width: 50px;" src='${commit.author.avatar_url}' alt='' /></td>
          <td>${commit.commit.committer.name} (${commit.commit.committer.email})</td>
        </tr>
        <tr>
          <td>on</td>
          <td>` + date.toDateString() + `</td>
        </tr>
        <tr>
          <td>sha:</td>
          <td>` + commit.sha + `</td>
        </tr>
        <tr>
          <td>verification</td>
          <td><textarea class="form-control">` + commit.commit.verification.signature + `</textarea></td>
        </tr>
        </table>
        `;

        // Add each new div element after the buttonElement
        buttonElement.parentNode.insertBefore(divElement, buttonElement.nextSibling);
      });

      buttonElement.innerText = textStrings.fetchCommitHash;

      return commits.map(commit => commit.sha);
    } catch (error) {
      console.error('Failed to fetch commit hash:', error);
      alert('Failed to fetch commit hash: ' + error);
    }
  }

  // Call the function
  // fetchLatestCommitHash();
  buttonElement.addEventListener('click', fetchLatestCommitHash);

};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  fetchCommitHash();
}
