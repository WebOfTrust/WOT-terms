import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { marked } from 'marked';
import DOMPurify from 'dompurify';

const Issues = ({ repo }) => {
    const [issues, setIssues] = useState([]);

    // Fetch issues
    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}/issues`)
            .then(response => response.json())
            .then(data => setIssues(data))
            .catch(error => console.error('Error fetching issues:', error));
    }, [repo]); // Dependency on repo ensures this runs if repo changes

    // Make html from markdown, via marked and DOMPurify
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
                    {issues.map((issue, index) => (
                        <a className="btn btn-outline-secondary btn-sm mb-1 me-2" key={index} href={`#issue${issue.number}`}>
                            #{issue.number}: {issue.title ? issue.title.substring(0, 30) : 'No Title'}…
                        </a>
                    ))}
                </div>

                {/* Issues */}
                {
                    issues.map((issue, index) => (
                        <div key={index}>
                            <div className="card m-2 mb-5">
                                <div className="card-header">
                                    <h3 id={`issue${issue.number}`} className="card-title">
                                        <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                                            #{issue.number}
                                        </a>: {issue.title}
                                    </h3>
                                    <span className="float-end">Created: {issue.created_at}</span>
                                    <span className="float-end">Updated: {issue.updated_at}</span>
                                </div>
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: issue.body ? issue.body.substring(0, 300) + '…' : 'No content.' }}>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
    );
};

export default (props) => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <Issues {...props} />}
    </BrowserOnly>
);
