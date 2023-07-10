import React, { useEffect, useState } from 'react';

const GlossaryContent = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchHtmlContent = async () => {
            try {
                const response = await fetch('/glossary.html'); // Assumes glossary.html is in the root of your project
                const html = await response.text();
                const bodyStartIndex = html.indexOf('<body>');
                const bodyEndIndex = html.indexOf('</body>');
                const processedHtml = html.substring(bodyStartIndex + 6, bodyEndIndex);
                setHtmlContent(processedHtml);
            } catch (error) {
                console.error('Error fetching glossary content:', error);
            }
        };

        fetchHtmlContent();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default GlossaryContent;
