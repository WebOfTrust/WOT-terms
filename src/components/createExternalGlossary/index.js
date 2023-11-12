import React from 'react';

const createExternalGlossary = ({ termsData }) => {
    // Create an index mapping each alphabet letter to the first term's anchor starting with that letter
    const alphabetIndex = {};

    termsData.forEach(term => {
        const firstLetter = term.term.charAt(0).toUpperCase();
        if (!alphabetIndex[firstLetter]) {
            alphabetIndex[firstLetter] = term.anchor;
        }
    });

    // Create an array of alphabet letters (A-Z)
    const alphabetLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return (
        <div id='glossary_content-container'>
            <div id='alphabet-index' className='fs-4'>
                [ {alphabetLetters.map((letter, index) => (
                    <React.Fragment key={letter}>
                        <a href={`#${alphabetIndex[letter]}`}>{letter}</a>
                        {index < alphabetLetters.length - 1 && <span> | </span>}
                    </React.Fragment>
                ))} ]
            </div>

            <dl id='glossary_content'>
                {termsData.map(term => (
                    <React.Fragment key={term.term}>
                        <dt><a id={term.anchor}>{term.term}</a></dt>
                        <dd dangerouslySetInnerHTML={{ __html: term.definition }}></dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default createExternalGlossary;
