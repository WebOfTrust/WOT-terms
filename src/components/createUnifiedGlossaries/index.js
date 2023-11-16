import React from 'react';
import parse from 'html-react-parser';
const termsData = require('@site/static/json/external-glosseries/glossaries-combined/all-glossaries.json');

// // Create an index mapping each alphabet letter to the first term's anchor starting with that letter
// const alphabetIndex = {};

// termsData.forEach(term => {
//     const firstLetter = term.term.charAt(0).toUpperCase();
//     if (!alphabetIndex[firstLetter]) {
//         alphabetIndex[firstLetter] = term.anchor;
//     }
// }
// );

// // Create an array of alphabet letters (A-Z)
// const alphabetLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


// Go through termsDate.definitions.definition and and replace <h2> with <h4> and <h3> with <h5> etc.
termsData.forEach(term => {
    term.definitions.forEach(definition => {
        definition.definition = definition.definition
            .replace(/<h4>/g, '<h6>').replace(/<\/h4>/g, '</h6>')
            .replace(/<h3>/g, '<h5>').replace(/<\/h3>/g, '</h5>')
            .replace(/<h2>/g, '<h4>').replace(/<\/h2>/g, '</h4>');
    });
});

const CreateUnifiedGlossaries = () => {
    return (
        <div>
            {/* <h1>All Glossaries</h1> */}
            {/* <div id='alphabet-index' className='fs-4'>
                [ {alphabetLetters.map((letter, index) => (
                    <React.Fragment key={letter}>
                        <a href={`#${alphabetIndex[letter]}`}>{letter}</a>
                        {index < alphabetLetters.length - 1 && <span> | </span>}
                    </React.Fragment>
                ))} ]
            </div> */}
            <ul className="list-group">
                {termsData.map((term, index) => (
                    <li className="list-group-item" key={index}>
                        <h2>{term.term}</h2>
                        <ul className="list-group">
                            {term.definitions.map((definition, index) => (
                                <li className="list-group-item" key={index}>
                                    <h3>{definition.organisation}</h3>
                                    <div>{parse(definition.definition)}</div>
                                    <a href={definition.url}>Learn more</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateUnifiedGlossaries;