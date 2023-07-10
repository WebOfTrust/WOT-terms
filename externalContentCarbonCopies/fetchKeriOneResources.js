const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

// Config

// URL of the static HTML site to scrape
const url = 'https://keri.one/keri-resources/';

// Directory to write the scraped data to
const directoryPath = '../docs/resources/';
const fileName = 'Keri.one resources.md';
// End Config



// const nodemailer = require('nodemailer');

// // Configuration for the email sender
// const emailConfig = {
//   host: 'smtp.example.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'your-email@example.com',
//     pass: 'your-password'
//   }
// };

// // Email recipient
// const emailRecipient = 'recipient@example.com';


// Function to write the markup to a file
const writeToFile = (content) => {
    const filePath = path.join(directoryPath, fileName);

    fs.mkdirSync(directoryPath, { recursive: true });
    fs.writeFileSync(filePath, content);

    console.log('File written successfully.');
};

// // Mail function not yet implemented
// // Function to send an email
// const sendEmail = async (error) => {
//   try {
//     const transporter = nodemailer.createTransport(emailConfig);

//     const mailOptions = {
//       from: 'your-email@example.com',
//       to: emailRecipient,
//       subject: 'Error occurred while scraping site',
//       text: error.toString()
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Error email sent successfully.');
//   } catch (error) {
//     console.error('Error sending error email:', error);
//   }
// };

// Function to scrape the HTML and extract hrefs, descriptions, and the sibling <h2> element
const scrapeSite = async () => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Array to store the scraped data
        const scrapedData = [];

        // Find all <ul> elements in the #main-content element
        $('#main-content ul').each((index, element) => {
            const links = [];

            // Find the sibling <h2> element. Every <ul> element has a sibling <h2> element just above it
            const siblingH2 = $(element).prev('h2').text();

            // Find <a> tags within the current <ul> element
            $(element).find('a').each((index, anchor) => {
                const href = $(anchor).attr('href');
                const description = $(anchor).text();

                links.push({ href, description });
            });

            // Add the links and sibling <h2> to the scraped data array
            scrapedData.push({ links, siblingH2 });
        });

        // Create HTML markup for each array item in scrapedData
        const markup = scrapedData.map((item) => {
            const listItems = item.links.map((link) => `<li><a href="${link.href}">${link.description}</a></li>`);
            return `<h2>${item.siblingH2}</h2><ul>${listItems.join('')}</ul>`;
        });

        // Output the scraped data
        const markupContent = markup.join('\n');
        console.log(markupContent);

        // Write the markup to a file
        writeToFile(markupContent);


        // Output the scraped data
        console.log(scrapedData);
    } catch (error) {
        console.error('Error:', error);
        // // Send an email notification
        // await sendEmail(error);
    }
};

// Invoke the function to start scraping
scrapeSite();
