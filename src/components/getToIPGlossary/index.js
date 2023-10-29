import React, { useEffect, useState } from 'react';
import config from '@generated/docusaurus.config';

const GlossaryContent = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchHtmlContent = async () => {
            try {
                const response = await fetch(`${config.baseUrl}/glossary.html?timestamp=${new Date().getTime()}`);
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
