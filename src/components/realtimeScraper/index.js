import React, { useState, useEffect } from 'react';

const urlsGithub = [
  'https://github.com/WebOfTrust/keripy',
  'https://github.com/WebOfTrust/cardano-backer',
  'https://github.com/WebOfTrust/cesride',
  'https://github.com/WebOfTrust/keria',
  'https://github.com/WebOfTrust/signify-ts',
  'https://github.com/WebOfTrust/signifypy'
];


// useEffect(() => {
//   // Initialize Masonry
//   const msnry = new Masonry('#masonry-grid', {
//     "percentPosition": true,
//     "itemSelector": '.mason-item',
//     "initLayout": true
//   });

//   // You may also need to re-layout Masonry after each data update
//   setTimeout(() => {
//     msnry.layout()
//   }, 2000);
// }, []);


// Helper function
const fetchData = async (url) => {
  const proxyUrl = 'https://dwarshuis.com/various/kerisse/proxy/proxy-curl.php?url=';
  const res = await fetch(proxyUrl + url);

  if (res.ok) {
    return await res.text();
  } else {
    return 'Failed to fetch data';
  }
};

// Initialize DOMParser
const initializeDOMparser = (response) => {
  if (typeof window !== 'undefined') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(response, 'text/html');
    return doc;
  }
}

const RealtimeScraperGithub = async (appendOutputData) => {
  // loop through urlsGithub
  for (const url of urlsGithub) {
    const dataCommits = await fetchData(url + '/commits');
    const documentCommits = initializeDOMparser(dataCommits);

    const dataIssues = await fetchData(url + '/issues');
    const documentIssues = initializeDOMparser(dataIssues);

    // Extract repository owner and name from the URL
    const urlParts = url.split('/');
    const owner = urlParts[3];
    const repoName = urlParts[4];

    // only in client side rendering (browser) we can access the DOM elements. Webpack will give an error if we do not use an if .
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {

      // COMMITS
      const firstTimelineItem = documentCommits.querySelector('.TimelineItem');
      const commitDate = firstTimelineItem ? firstTimelineItem.querySelector('h2').innerText.trim() : "";
      const commitLinkElement = firstTimelineItem.querySelector('.Details p a.Link--primary');
      const commitLink = commitLinkElement ? commitLinkElement.getAttribute('href') : "";
      const commitMessage = commitLinkElement ? commitLinkElement.innerText : "";
      const commitAuthorElement = firstTimelineItem.querySelector('.commit-author');
      const commitAuthor = commitAuthorElement ? commitAuthorElement.innerText : "";

      // ISSUES
      const issueElement = documentIssues.querySelector('div[aria-label="Issues"] .Link--primary');
      const issueLink = issueElement ? issueElement.getAttribute('href') : "";
      const issueMessage = issueElement ? issueElement.innerText : "";

      // Append new information to the output data
      appendOutputData(prevData => [...prevData, { owner, repoName, commitDate, commitLink, commitMessage, commitAuthor, issueLink, issueMessage }]);
    }
  }
};

RealtimeScraperGithub();

// const IIW = () => {
//   const [response, setResponse] = useState('');

//   useEffect(() => {
//     const fetchFromProxy = async () => {
//       const response = await fetchData('https://internetidentityworkshop.com/schedule/');
//       const doc = initializeDOMparser(response);

//       let selection;
//       if (typeof window !== 'undefined' && typeof document !== 'undefined') {
//         selection = doc.querySelector('#section-1').innerText;
//         setResponse(selection);
//       }
//     };

//     fetchFromProxy();
//   }, []);

//   return (
//     <div>
//       <h2>IIW Schedule</h2>
//       {/* <div dangerouslySetInnerHTML={{ __html: response }} /> */}
//       <p>{response}</p>
//     </div>
//   );
// };

const Gleif = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchFromProxy = async () => {
      const response = await fetchData('https://www.gleif.org/en/newsroom/gleif-and-lei-news');
      const doc = initializeDOMparser(response);

      let selection;
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        selection = doc.querySelectorAll('.news__item-headline');
        selection = [...selection];
        selection = selection.map((element) => {
          return element;
        });
      }
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

      setResponse(listItems);
    };
    fetchFromProxy();
  }, []);


  return (
    <div>
      <h2>Gleif news</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: response }} /> */}
      <div>{response}</div>
    </div>
  );
};


const GithubFinalOutput = ({ outputData }) => {
  return (
    <ul className="list-group">
      {outputData.map((data, index) => (
        <li key={index} className='list-group-item mb-1 p-1'>
          <h3 key={index}>{data.owner} – {data.repoName}</h3>
          <h4>{data.commitDate}</h4>
          <p><a href={`https://github.com/${data.commitLink}`}>{data.commitMessage} ({data.commitAuthor})</a></p>
          {/* <p>Author: {data.commitAuthor}</p> */}
          {data.issueMessage && (
            <>
              <h4>Latest issue:</h4>
              <p><a href={`https://github.com/${data.issueLink}`}>{data.issueMessage}</a></p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};


const GithubScraper = () => {
  const [outputData, setOutputData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await RealtimeScraperGithub(setOutputData); // Pass setOutputData to RealtimeScraperGithub
    };

    fetchData();
  }, []);

  return <GithubFinalOutput outputData={outputData} />;
}


const RealtimeScraper = () => {
  return (
    <div className="container text-start mt-5 realtime">
      <div className="row" id="masonry-grid">
        <div className="col-lg-6 col-md-6 mb-2 mason-item">
          <div className="card">
            <div className="card-body">
              <h2>Github</h2>
              <GithubScraper />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mb-2 mason-item">
          {/* <div className="card">
            <div className="card-body">
              <IIW />
            </div>
          </div> */}
          <div className="card">
            <div className="card-body">
              <Gleif />
              <p class='mt-3'><a class='btn btn-outline-dark' target='_blank' rel='noopener' href="https://www.gleif.org/en/newsroom/gleif-and-lei-news">Go to gleif news</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RealtimeScraper;