import { toLowerCaseAndRemoveSpecialChars } from '../../../modules-js-universal/toLowerCaseAndRemoveSpecialChars.js';

import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
const termsData = require('@site/static/json/external-glosseries/glossaries-combined/all-glossaries.json');

// Update the structure of termsData to replace tags as needed
termsData.forEach(term => {
    term.definitions.forEach(definition => {
        definition.definition = definition.definition
            .replace(/<h4>/g, '<h6>').replace(/<\/h4>/g, '</h6>')
            .replace(/<h3>/g, '<h5>').replace(/<\/h3>/g, '</h5>')
            .replace(/<h2>/g, '<h4>').replace(/<\/h2>/g, '</h4>');

        if (definition.organisation === 'WebOfTrust') {
            console.log(definition.definition);
            // In definition.definition find every <a> tag that has a href attribute that does not contain 'http' or 'https' and add to the href attribute value the string '/docs/glossary/'.
            // This is because the WebOfTrust definitions do not contain the full URL, but only the relative path.
            definition.definition = definition.definition.replace(/<a href="((?!http|https).*)">/g, '<a href="/WOT-terms/docs/glossary/$1">');
        }
    });
});

const CreateUnifiedGlossaries = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [organisations, setOrganisations] = useState([]);
    const [checkedOrganisations, setCheckedOrganisations] = useState({});

    useEffect(() => {
        const allOrganisations = new Set();
        termsData.forEach(term => {
            term.definitions.forEach(definition => {
                allOrganisations.add(definition.organisation);
            });
        });

        const orgArray = Array.from(allOrganisations);
        setOrganisations(orgArray);

        const initialCheckedState = {};
        orgArray.forEach(org => {
            initialCheckedState[org] = true;
        });
        setCheckedOrganisations(initialCheckedState);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const [animateCards, setAnimateCards] = useState(false);

    const triggerAnimation = () => {
        setAnimateCards(true);
        setTimeout(() => setAnimateCards(false), 1000); // Animation duration is 1s
    };

    const handleCheckboxChange = (organisation) => {
        triggerAnimation();
        setCheckedOrganisations(prevChecked => ({
            ...prevChecked,
            [organisation]: !prevChecked[organisation]
        }));
    };

    const isTermVisible = (term) => {
        const regexPattern = /[-–_ ]/g; // Matches a dash, an en dash, or an underscore

        // Normalizes the term and search term for comparison
        const normalizedTerm = toLowerCaseAndRemoveSpecialChars(term.term);
        const normalizedSearchTerm = toLowerCaseAndRemoveSpecialChars(searchTerm);
        const regex = new RegExp(normalizedSearchTerm, 'i');

        return term.definitions.some(definition =>
            checkedOrganisations[definition.organisation] && regex.test(normalizedTerm)
        );
    };

    return (
        <div className='glossaries-combined'>
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" onChange={handleSearch} />
            <div className='mt-5 mb-5 text-left'>
                {organisations.map((organisation, index) => (
                    <div className="form-check form-check-inline" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={checkedOrganisations[organisation]}
                            onChange={() => handleCheckboxChange(organisation)}
                            id={`checkbox-${organisation}`}
                        />
                        <label className="form-check-label" htmlFor={`checkbox-${organisation}`}>
                            {organisation}
                        </label>
                    </div>
                ))}
            </div>
            <ul className="list-group">
                {termsData.map((term, index) => (
                    <li className={`term list-group-item border border-0 ${isTermVisible(term) ? '' : 'd-none'}`} key={index}>
                        <h2 id={term.anchor}>{term.term}</h2>
                        <ul className="list-group">
                            {term.definitions.map((definition, defIndex) => (
                                <li className={`list-group-item border border-0 ${checkedOrganisations[definition.organisation] ? '' : 'd-none'}`} key={defIndex}>
                                    <div className={`card ${animateCards ? 'animate-outline' : ''}`}>
                                        <div className="card-header">
                                            <h3 className="card-title organisation text-end fs-5">{definition.organisation}</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-text">{parse(definition.definition)}</div>
                                        </div>
                                        <div className="card-footer">
                                            <a href={definition.url}>Learn more</a>
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
