import React, { useState, useEffect } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const listItems = document.querySelectorAll('.term h2');
        listItems.forEach(item => {
            // If the item text includes the search term, remove 'd-none', else add 'd-none'
            if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                item.parentElement.classList.remove('d-none');
                console.log(item.textContent);
            } else {
                item.parentElement.classList.add('d-none');
            }
        });
    }, [searchTerm]);

    return (
        <div>
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" onChange={handleSearch} />

            <ul className="list-group">
                {termsData.map((term, index) => (
                    <li className="term list-group-item border border-0" key={index}>
                        <h2 id={term.anchor}>{term.term} <a href={`#${term.anchor}`} className="hash-link" aria-label={`Direct link to ${term.anchor}`} title={`Direct link to ${term.anchor}`}>​</a></h2>
                        <ul className="list-group">
                            {term.definitions.map((definition, index) => (
                                <li className="list-group-item border border-0" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">{definition.organisation}</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-text">{parse(definition.definition)}</div>
                                        </div>
                                        <div className="card-footer">
                                            <a href={definition.url} className="">Learn more</a>
                                        </div>
                                    </div>
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