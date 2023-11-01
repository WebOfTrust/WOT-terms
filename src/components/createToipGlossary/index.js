import React, { useState, useEffect } from 'react';

const CreateToipGlossary = () => {
    const termsData = require('@site/static/json/terms-definitions-toip.json');

    return (
        <dl>
            {termsData.map((term) => (
                <React.Fragment key={term.term}>
                    <dt>{term.term}</dt>
                    <dd className='ms-5' dangerouslySetInnerHTML={{ __html: term.definition }}></dd>
                </React.Fragment>
            ))}
        </dl>
    );
};

export default CreateToipGlossary;
