// PaginationButtons.js
import React from 'react';

const PaginationButtons = ({ counter, setCounter, fetchIssues, issuesLength }) => (
    <div className="d-flex justify-content-center mb-5">
        <div className="btn-group">
            <a className={`btn btn-outline-secondary ${issuesLength === 0 ? 'disabled' : ''}`} onClick={() => {
                setCounter(prevCounter => prevCounter + 1);
                fetchIssues(counter + 1);
            }}>Older</a>

            <a className={`btn btn-outline-secondary ${counter === 1 ? 'disabled' : ''}`} onClick={() => {
                if (counter > 1) { // Make sure counter is not less than 1
                    setCounter(prevCounter => prevCounter - 1);
                    fetchIssues(counter - 1);
                }
            }}>Newer</a>
        </div>
    </div >
);

export default PaginationButtons;