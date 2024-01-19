// Copies css from file into a string in the content.js file

const fs = require('fs');

// Path to your CSS file
const cssFilePath = 'static/js/kerific/styles/options.min.css';



// Path to your JavaScript file
const jsFilePath = 'static/js/kerific/scripts/content.js';

// Read CSS file
fs.readFile(cssFilePath, 'utf8', (err, cssContent) => {
    if (err) {
        console.error('Error reading the CSS file:', err);
        return;
    }

    // Read JS file
    fs.readFile(jsFilePath, 'utf8', (err, jsContent) => {
        if (err) {
            console.error('Error reading the JS file:', err);
            return;
        }

        // Replace the existing content
        const newJsContent = jsContent.replace(/const headerStyle = `[\s\S]*?`;/, `const headerStyle = \`${cssContent}\`;`);

        // Write to JS file
        fs.writeFile(jsFilePath, newJsContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the JS file:', err);
                return;
            }
            console.log('CSS content has been updated in the JS file successfully.');
        });
    });
});
