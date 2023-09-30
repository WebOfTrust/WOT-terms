import React, { useState, useEffect } from 'react';
import paths from "../../../docusaurus.paths";

// Initialize DOMParser
const initializeDOMparser = (response) => {
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');
        return doc;
    }
}


const IndexedInfo = () => {
    const [timestampContent, setTimestampContent] = useState("");
    const [pageCountContent, setPageCountContent] = useState("");

    useEffect(() => {
        fetch(paths.indexedInKERISSE)
            .then((response) => response.text())
            .then((html) => {
                const doc = initializeDOMparser(html);

                const timestampElement = doc.querySelector("#index-created-timestamp");
                const pageCountElement = doc.querySelector("#index-created-page-count");

                if (timestampElement) {
                    setTimestampContent(timestampElement.textContent);
                }

                if (pageCountElement) {
                    setPageCountContent(pageCountElement.textContent);
                }
            })
            .catch((error) => {
                console.error(`Error fetching the content: ${error}`);
            });
    }, []);

    return (
        <>
            <span id="index-created-timestamp">{timestampContent}</span> – <span id="index-created-page-count">{pageCountContent}</span>
        </>
    );
}

export default IndexedInfo