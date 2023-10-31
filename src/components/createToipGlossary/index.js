import React, { useState, useEffect } from 'react';

const CreateToipGlossary = () => {
    const [terms, setTerms] = useState([]);
    const termsData = require('@site/static/json/terms-definitions-toip.json');

    return (
        <dl>
            {termsData.map((term) => (
                <>
                    <dt>{term.term}</dt>
                    <dd className='ms-5' dangerouslySetInnerHTML={{ __html: term.definition }}></dd>
                </>
            ))}
        </dl>
    );
};

export default CreateToipGlossary;
