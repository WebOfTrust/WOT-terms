import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
// import marked from 'marked'; // does not work
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"; // https://www.npmjs.com/package/marked
import DOMPurify from 'dompurify';

const Issues = ({ repo }) => {
    const [issues, setIssues] = useState([]);
    const [isHtmlCreationComplete, setHtmlCreationComplete] = useState(false);
    const [masonryWidth, setMasonryWidth] = useState(0); // [0, setMasonryWidth]

    const masonryRef = useRef(null);



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
            setHtmlCreationComplete(true);
        }
    }, [issues]); // Dependency on issues ensures this runs if issues change

    // Initialize or update Masonry
    useEffect(() => {
        if (!isHtmlCreationComplete) {
            return;
        }
        if (issues.length > 0 && typeof window !== 'undefined') { // Check if issues are fetched and window is defined

            // find width of container
            const issueContainerWidth = document.querySelector('.issue-container').offsetWidth;

            setMasonryWidth(Math.floor(issueContainerWidth > 600 ? issueContainerWidth / 2 - 1 : issueContainerWidth));

            const masonry = new Masonry(masonryRef.current, {
                itemSelector: '.masonry-item',
                columnWidth: masonryWidth,
            });

            return () => {
                masonry.destroy(); // Clean up Masonry instance on component unmount
            };
        }
    }, [issues, isHtmlCreationComplete, masonryWidth]); // Dependency on issues ensures Masonry is updated when issues change


    return (
        <div className="mx-auto issue-container">
            <div ref={masonryRef}>
                <h2 className="masonry-item w-100">{repo}</h2>

                {/* Short links with anchors to each issue. */}
                <div className="masonry-item w-100 d-flex flex-wrap justify-content-center">
                    {issues.map((issue, index) => (
                        <a className="btn btn-outline-secondary btn-sm mb-1 me-2" key={index} href={`#issue${issue.number}`}>#{issue.number}: {issue.title.substring(0, 30)}…</a>
                    ))}

                </div>


                {/* Issues */}
                {
                    issues.map((issue, index) => (
                        <div style={{ width: masonryWidth + 'px' }} className="masonry-item" key={index}>
                            <div className="card m-2">
                                <div className="card-header">
                                    <h3 id={`issue${issue.number}`} className="card-title"><a href={issue.html_url} target="_blank" rel="noopener noreferrer">#{issue.number}</a>: {issue.title}</h3>
                                    <span className="float-end">Created: {issue.created_at}</span>
                                    <span className="float-end">Updated: {issue.updated_at}</span>

                                </div>
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: issue.body.substring(0, 300) + '…' }}>

                                </div>
                                {/* <div className="card-footer">
                            <span className="float-end">Created: {issue.created_at}</span>
                            <span className="float-end">Updated: {issue.updated_at}</span>
                        </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Issues;
