import React from 'react';

const createExternalGlossary = ({ termsData }) => {
    return (
        <dl>
            {termsData.map((term) => (
                <React.Fragment key={term.term}>
                    <dt><a id={term.anchor}>{term.term}</a></dt>
                    <dd className='ms-5' dangerouslySetInnerHTML={{ __html: term.definition }}></dd>
                </React.Fragment>
            ))}
        </dl>
    );
};

export default createExternalGlossary;
