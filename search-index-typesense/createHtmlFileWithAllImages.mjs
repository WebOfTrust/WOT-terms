/**
 * Author: Kor Dwarshuis
 * Date: 2024-03-12
 * Description:
 * 
 */


import { promises as fs } from 'fs';

// Function to generate Markdown file with img elements
async function generateMarkdown(inputFile, outputFile) {
    try {
        // Read the imgUrl array from the input JSON file
        const jsonContent = await fs.readFile(inputFile, 'utf-8');
        const imgUrlArray = JSON.parse(jsonContent);

        // Sort the array based on the "count" property in descending order
        imgUrlArray.sort((a, b) => b.count - a.count);

        // Create Markdown content with img elements and additional information
        let markdownContent = '# All images found\n\n';
        markdownContent += `Total unique images found: ${imgUrlArray.length}\n\n`;
        markdownContent += 'Images can hold anything: photo’s, diagrams, charts etc.\n\n';

        imgUrlArray.forEach((imageInfo, index) => {
            markdownContent += `## Image ${index + 1}\n`;
            markdownContent += `![Image](${imageInfo.imgUrl})\n`;
            markdownContent += `This images was found ${imageInfo.count} times\n\n`;
        });

        // Write Markdown content to output file
        await fs.writeFile(outputFile, markdownContent);
        console.log('Markdown file generated successfully:', outputFile);
    } catch (err) {
        console.error('Error generating Markdown file:', err);
    }
}

// Example usage:
const inputFile = './static/json/all-images/all-images.json'; // Specify input JSON file containing image information
const outputFile = './docs/05_resources/all-images.md'; // Specify output Markdown file

generateMarkdown(inputFile, outputFile);
