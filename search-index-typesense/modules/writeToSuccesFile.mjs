import fs from 'fs';

export function writeToSuccesFile(content) {
    const newLineContent = content + '\n';
    const filePath = 'search-index-typesense/logs/succes.log';

    try {
        if (!fs.existsSync(filePath)) {
            // File does not exist, create it and append content as the first line
            fs.writeFileSync(filePath, newLineContent, 'utf8');
            console.log('File created and content appended successfully.');
        } else {
            // File exists, append content as a new line
            fs.appendFileSync(filePath, newLineContent, 'utf8');
            console.log('String appended to file successfully.');
        }
    } catch (err) {
        console.error('Error occurred:', err);
    }
}