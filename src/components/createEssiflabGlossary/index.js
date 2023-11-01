import React, { useState, useEffect } from 'react';

const CreateEssiflabGlossary = () => {
    const termsData = require('@site/static/json/terms-definitions-essiflab.json');

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

export default CreateEssiflabGlossary;
