/*
  Author: Kor Dwarshuis
  Created: 2024-04-19
  Updated: -
  Description: Fetch issues from a GitHub repository and display them in a Docusaurus page. The issues are fetched via the GitHub API and displayed in a paginated list. The issues are displayed in a card format, with the issue number, title, state, created date, updated date, and body. The body is displayed as HTML, after being converted from markdown via the marked and DOMPurify libraries. The issues are displayed in a paginated list, with 15 issues per page. The page number is displayed at the top and bottom of the list, and the user can navigate between pages using the pagination buttons. The issues are also displayed as short links with anchors, so the user can easily navigate to a specific issue by clicking on the link. The page is styled using Bootstrap.

*/


import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import PaginationButtons from './PaginationButtons';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * Renders a list of issues for a given repository.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.repo - The name of the repository.
 * @returns {JSX.Element} The rendered component.
 */
const Issues = ({ repo }) => {
    const [issues, setIssues] = useState([]);
    const [counter, setCounter] = useState(1);
    const [issuesLength, setIssuesLength] = useState(0);
    useEffect(() => {
        // after fetching issues
        setIssuesLength(issues.length)
    }, [issues])

    const daysSinceLastUpdateAlertThreshold = 100;

    // Function to calculate time since last update
    const getTimeSince = (updatedDate) => {
        const now = new Date();
        const difference = now - updatedDate; // difference in milliseconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);

        return {
            days,
            hours,
            minutes
        };
    };

    // Fetch issues
    const fetchIssues = (page) => {
        let pageNr = page || 1;
        fetch(`https://api.github.com/repos/${repo}/issues?state=all&per_page=15&page=${pageNr}`)
            .then(response => {
                if (response.status === 403 && response.headers.get('X-RateLimit-Remaining') === '0') {
                    alert('Rate limit exceeded');
                    throw new Error('Rate limit exceeded');
                }
                return response.json();
            })
            .then(data => {
                setIssues(data.map(issue => ({
                    ...issue,
                    stateIndicator: getStateIndicator(issue.state),
                    timeSinceLastUpdate: getTimeSince(new Date(issue.updated_at))
                })))
            })
            .catch(error => {
                console.log('error: ', error);

                console.error('Error fetching issues:', error);
                alert('Error fetching issues.');
            });
    };

    useEffect(fetchIssues, [repo]); // Fetch issues on page load and when repo changes

    function getStateIndicator(state) {
        return state === 'open' ? 'text-warning-emphasis bg-warning-subtle' : 'text-light-emphasis bg-light-subtle';
    }

    // Make html from markdown, via marked and DOMPurify
    //TODO: use useState
    useEffect(() => {
        if (issues.length > 0 && typeof window !== 'undefined') { // Check if issues are fetched and window is defined
            const processIssues = () => {
                issues.forEach(issue => {
                    issue.body = issue.body ? DOMPurify.sanitize(marked(issue.body)) : '';
                    issue.created_at = new Date(issue.created_at).toLocaleString();
                    issue.updated_at = new Date(issue.updated_at).toLocaleString();
                });
            };

            processIssues();
        }
    }, [issues]); // Dependency on issues ensures this runs if issues change

    return (
        <div className="mx-auto issue-container">
            <div>
                <h2 className="w-100">{repo}</h2>

                {/* Short links with anchors to each issue. */}
                <div className="w-100 d-flex flex-wrap justify-content-center">
                    {issues.length > 0 ? (
                        issues.map((issue, index) => (
                            <div className='generated-index-links m-0 p-2' key={index}>
                                <a title={`Days since last update: ${issue.timeSinceLastUpdate.days}`} className={`text-start position-relative w-100 btn btn-outline-secondary-subtle text-primary-subtle btn-sm p-0 mb-1 p-1 ${issue.stateIndicator}`} href={`#issue${issue.number}`}>
                                    #{issue.number}: {issue.title ? issue.title.substring(0, 25) : 'No Title'}…
                                    {/* <span className="position-absolute top-0 start-100 translate-middle badge bg-primary-subtle text-primary-emphasis border-primary-subtle">{issue.comments}</span> */}
                                    {issue.timeSinceLastUpdate.days > daysSinceLastUpdateAlertThreshold && issue.state === 'open' ? (
                                        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger border-primary-subtle p-1">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    ) : (
                                        <span className="position-absolute top-0 start-100 translate-middle badge bg-info-subtle border-primary-subtle p-1">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    )}
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="alert alert-info" role="alert">
                            No more issues to show
                        </div>
                    )}
                </div>

                <p className='text-center'>Page {counter}</p>
                <PaginationButtons counter={counter} setCounter={setCounter} fetchIssues={fetchIssues} issuesLength={issuesLength} />


                {/* Issues */}
                {
                    issues.map((issue, index) => (
                        <div key={index}>
                            <div className={`card m-2 mb-5 ${issue.stateIndicator}`}>
                                <div className="card-header">
                                    <h3 id={`issue${issue.number}`} className="card-title">
                                        <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                                            #{issue.number}
                                        </a>: {issue.title}
                                    </h3>
                                    <span>State: {issue.state}</span> – <span>Created: {issue.created_at}</span> –

                                    {issue.timeSinceLastUpdate.days > daysSinceLastUpdateAlertThreshold && issue.state === 'open' ? (
                                        <span className="alert alert-danger p-1">Updated: {issue.updated_at}</span>
                                    ) : (
                                        <span>Updated: {issue.updated_at}</span>
                                    )}
                                </div>
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: issue.body ? issue.body.substring(0, 300) + '…' : 'No content.' }}>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <p className='text-center'>Page {counter}</p>
            <PaginationButtons counter={counter} setCounter={setCounter} fetchIssues={fetchIssues} issuesLength={issuesLength} />
        </div >
    );
};

export default (props) => (
    <BrowserOnly fallback={<div className="alert alert-info" role="alert">Loading…</div>}>
        {() => <Issues {...props} />}
    </BrowserOnly>
);
