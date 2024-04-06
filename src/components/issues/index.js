import React, { useState, useEffect } from 'react';

const Issues = () => {
    const [issues, setIssues] = useState([]);
    const repo = 'WebOfTrust/WOT-terms';

    useEffect(() => {
        // Fetch issues when the component mounts
        fetch(`https://api.github.com/repos/${repo}/issues`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched issues
                setIssues(data);
            })
            .catch(error => console.error('Error fetching issues:', error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h2>Issues from GitHub</h2>
            {issues.map((issue, index) => (
                <div key={index}>
                    <h3>Issue Title: {issue.title}</h3>
                    <p>Issue Body: {issue.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Issues;
