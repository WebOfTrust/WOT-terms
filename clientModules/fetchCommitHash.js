/*
  Author: Kor Dwarshuis
  Created: 2024-04-19
  Updated: -
  Description:

*/

const fetchCommitHash = () => {
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
  buttonElement.innerText = "Show commit hash";
  buttonElement.classList.add('btn', 'btn-outline-secondary', 'mt-5', 'ms-2');

  // add the paragraph to the page at the end of the page
  document.querySelector('.markdown').appendChild(buttonElement);


  // Function to fetch the latest commit hash of the file
  async function fetchLatestCommitHash() {
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
        console.error(`Rate limit exceeded. Try again after ${resetTime}`);
        alert(`Rate limit exceeded. Try again after ${resetTime}`);
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
        console.log('No commits found for this file.');
        alert('No commits found for this file.');
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
