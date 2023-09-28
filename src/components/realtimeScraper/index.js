import React, { useState, useEffect } from 'react';
import Masonry from 'masonry-layout';
import cheerio from 'cheerio';
// import paths from "../../../docusaurus.paths";

// Function to fetch GitHub commits and issues based on given URLs
function fetchGitHubCommitsAndIssues(urls, callback) {
  // Define the types of requests (commits and issues)
  const types = ['commits', 'issues'];

  // Create promises for each URL and each type (commit or issue)
  const promises = urls.flatMap((url) =>
    types.map((type) =>
      new Promise((resolve) => {
        // Perform a remote request for commits or issues
        remoteRequest(`${url}/${type}`, (response) => {
          // Process the HTML response to get needed data
          const processedData = processData(response, url, type);
          // Resolve the promise with the type and processed data
          resolve({ type, data: processedData });
        });
      })
    )
  );

  // Once all promises are resolved, proceed with the following
  Promise.all(promises).then((results) => {
    // Group the results by URL and type (commit or issue)
    const groupedResults = results.reduce((acc, { type, data }) => {
      const key = `${data.owner}/${data.repoName}`;
      if (!acc[key]) acc[key] = {};
      acc[key][type] = data;
      return acc;
    }, {});

    // Generate JSX for the fetched data
    let output = Object.entries(groupedResults).map(([key, value], index) => {
      return (
        <ul className="list-group" key={'parent' + index}>
          <li className="list-group-item mt-1" key={'a' + index}>
            <h3>{value.commits.repoName}</h3>
            <a href={`https://github.com/${value.commits.detailsLink ? value.commits.detailsLink : value.issues.issuesLink}`}>
              {value.commits.message ? "Latest commit: " + value.commits.owner : "issue: " + value.issues.owner}:
              {value.commits.message ? value.commits.repoName : null},
              {value.commits.message ? value.commits.h2Text : null},<br></br><br></br>
              {value.issues.issuesText ? "Latest issue: " + value.issues.issuesText : null}
            </a>


          </li>
        </ul >
      )
    });

    // Call the callback function with the JSX output
    callback(output);
  });
}

// Function to process HTML responses and extract needed data
function processData(response, url, type) {
  // Initialize DOMParser
  const parser = new DOMParser();
  const doc = parser.parseFromString(response, 'text/html');

  // Debugging: Log header menu items (can be removed)
  doc.querySelectorAll('.HeaderMenu-item').forEach((item) => {
  });

  // Extract repository owner and name from the URL
  const urlParts = url.split('/');
  const owner = urlParts[3];
  const repoName = urlParts[4];

  // Locate the first timeline item in the HTML document
  const firstTimelineItem = doc.querySelector('.TimelineItem');

  // Safely extract additional information from the HTML document
  const h2Text = firstTimelineItem ? firstTimelineItem.querySelector('h2').innerText.trim() : "";
  const detailsLinkElement = doc.querySelector('.Details p a.Link--primary');
  const detailsLink = detailsLinkElement ? detailsLinkElement.getAttribute('href') : "";
  const message = detailsLinkElement ? detailsLinkElement.innerText : "";
  const commitAuthorElement = doc.querySelector('.commit-author');
  const commitAuthor = commitAuthorElement ? commitAuthorElement.innerText : "";
  const issuesElement = doc.querySelector('div[aria-label="Issues"] .Link--primary');
  const issuesLink = issuesElement ? issuesElement.getAttribute('href') : "";
  const issuesText = issuesElement ? issuesElement.innerText : "";

  // Return processed data as an object
  return {
    type,
    owner,
    repoName,
    h2Text,
    detailsLink,
    message,
    commitAuthor,
    issuesLink,
    issuesText
  };
}

const urls = [
  'https://github.com/WebOfTrust/keripy',
  'https://github.com/WebOfTrust/cardano-backer',
  'https://github.com/WebOfTrust/cesride',
  'https://github.com/WebOfTrust/keria'
];


function fetchGithubInfo(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Process the JSON data here
      callback(data);
    })
    .catch(error => {
      console.error("Error fetching commit information: ", error);
    });
}

function remoteRequest(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://dwarshuis.com/various/kerisse/proxy/proxy-curl.php?url=" + url, true);
  request.timeout = 30000;
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      callback(this.response);
    } else {
      callback("Data cannot be shown.");
    }
  };

  request.onerror = function () {
    callback("Data cannot be shown.");
  };
  request.send();
}




const fetchData = (url, callback) => {
  switch (true) {
    // case 'https://www.gleif.org/en/newsroom/gleif-and-lei-news/':
    case url.includes('https://www.gleif.org/en/newsroom/gleif-and-lei-news'):
      remoteRequest(url, (response) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');

        let selection = doc.querySelectorAll('.news__item-headline');
        selection = [...selection];
        selection = selection.map((element) => {
          return element;
        });

        const listItems = selection.map((item, index) => {
          if (index > 5) {
            return;
          }
          return (
            <ul className="list-group" key={'parent' + index}>
              <li className='list-group-item mb-1 p-1' key={index}>
                {item.innerText}
              </li>
            </ul>)

        });



        // setTimeout(msnry.layout, 100);
        callback(listItems);
        // Optionally, you can call customFunction here.
        // customFunction(response);
      });
      break;
    case url.includes('commits'):
      fetchGithubInfo(url, (response) => {
        const listItems = response.map((item, index) => {
          if (index > 5) {
            return;
          }
          return (
            <ul className="list-group" key={'parent' + index}>
              <li className="list-group-item" key={'a' + index}><a href={item.html_url}>{item.author.login}: {item.commit.message}</a></li>
            </ul>
          )
        });
        callback(listItems);
      });
      break;
    case url.includes('internetidentityworkshop.com'):
      remoteRequest(url, (response) => {
        let $ = cheerio.load(response);

        let selection = $('#section-1').text();

        callback(selection);  // Make sure to call the callback function here
      });

      break;
  }
};

// function fetchIndexInfo() {
//   // Fetching the HTML content
//   fetch(paths.indexedInKERISSE)
//     .then(response => response.text())
//     .then(html => {
//       // Parsing the fetched HTML string into a DOM object
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, 'text/html');

//       // Finding the paragraph elements by their id's
//       const timestampElement = doc.querySelector('#index-created-timestamp');
//       const pageCountElement = doc.querySelector('#index-created-page-count');

//       if (timestampElement) {
//         // Extracting and logging the content of the paragraph
//         const timestampContent = timestampElement.textContent;
//         document.querySelector('#index-created-timestamp').textContent = timestampContent;
//       } else {
//         console.log('Element with id "index-created-timestamp" not found.');
//       }

//       if (pageCountElement) {
//         // Extracting and logging the content of the paragraph
//         const pageCountContent = pageCountElement.textContent;
//         document.querySelector('#index-created-page-count').textContent = pageCountContent;
//       } else {
//         console.log('Element with id "index-created-page-count" not found.');
//       }
//     })
//     .catch(error => {
//       console.error(`Error fetching the content: ${error}`);
//     });
//   // END TIMESTAMP


// }

const RealTimeScraping = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);

  useEffect(() => {
    fetchData('https://www.gleif.org/en/newsroom/gleif-and-lei-news/', setData1);
  }, []);

  // useEffect(() => {
  //   fetchData('https://api.github.com/repos/WebOfTrust/keripy/commits', setData2);
  // }, []);

  useEffect(() => {
    fetchData('https://internetidentityworkshop.com/schedule/', setData4);
  }, []);

  useEffect(() => {
    fetchGitHubCommitsAndIssues(urls, setData5);
  }, []);

  // useEffect(() => {
  //   fetchIndexInfo(setData6);
  // }, []);



  useEffect(() => {
    // Initialize Masonry
    const msnry = new Masonry('#masonry-grid', {
      "percentPosition": true,
      "itemSelector": '.mason-item',
      "initLayout": true
    });

    // You may also need to re-layout Masonry after each data update
    setTimeout(() => {
      msnry.layout()
    }, 2000);
  }, [data1, data2, data4]);

  return (
    <div className="container text-start mt-5 realtime">
      <div style={{ fontSize: '0.7em' }} className="row" id="masonry-grid">
        <div className="col-lg-4 col-md-6 mb-2 mason-item">
          <div className="card">
            <div className="card-body">
              <h2>Gleif latest news</h2>
              {data1}
              <p className="mt-2">Go to <a target='_blank' rel="noopener" href="https://www.gleif.org/en/newsroom/gleif-and-lei-news/">latest news</a></p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-6 mb-2 mason-item">
          <div className="card">
            <div className="card-body">
              <h2>Info</h2>
              {data6}
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 mb-2 mason-item">
          <div className="card">
            <div className="card-body">
              <h2>IIW schedule</h2>
              {data4}
              <p className="mt-2">Go to <a target='_blank' rel="noopener" href="https://internetidentityworkshop.com/schedule/">schedule</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2 mason-item">
          <div className="card">
            <div className="card-body">
              <h2>Repos</h2>
              {data5}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RealTimeScraping;
