import React from 'react';
const termsData = require('@site/static/json/external-glosseries/glossaries-combined/all-glossaries.json');


const CreateUnifiedGlossaries = () => {
    return (<div>
        <h1>All Glossaries</h1>
        <ul className="list-group">
            {termsData.map((term, index) => (
                <li className="list-group-item" key={index}>
                    <h2>{term.term}</h2>
                    <ul className="list-group">
                        {term.definitions.map((definition, index) => (
                            <li className="list-group-item" key={index}>
                                <h3>{definition.organisation}</h3>

                                <p dangerouslySetInnerHTML={{ __html: definition.definition }}></p>
                                <a href={definition.url}>Learn more</a>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>)

};


export default CreateUnifiedGlossaries;
