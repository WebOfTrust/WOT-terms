import axios from 'axios';
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import { JSDOM } from 'jsdom';
import dotenv from 'dotenv';
dotenv.config();

console.log('ToIP: Fetching external content...');

// CONFIG
const dir = 'fetchExternalContent/fetchMentalModels/fetchToIPContent/download';
const filename = 'toip-html-download.zip';
const fullPath = path.join(dir, filename); // Use path.join for better compatibility

const toipDownloadHtmlUrl = 'https://docs.google.com/document/export?format=zip&id=1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM&includes_info_params=true&cros_files=false&inspectorResult=%7B%22pc%22%3A83%2C%22lplc%22%3A6%7D&showMarkups=true';
const unzippedFilename = 'ToIPGlossaryWorkspace_PublicVersion_.html';
const generatedJSONfilename = 'terms-definitions-toip.json';
// END CONFIG

const downloadFile = async () => {
    const response = await axios({
        method: 'GET',
        url: toipDownloadHtmlUrl,
        responseType: 'stream',
    });

    const writer = fs.createWriteStream(fullPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

const unzipFile = (zipFilePath, extractToDir) => {
    let zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractToDir, true);
};

const createJSONfromHTML = async (extractToDir) => {
    const htmlFilePath = path.join(extractToDir, unzippedFilename);
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const termsDefinitions = [];

    document.querySelectorAll('h1').forEach(h1 => {
        let organisation = 'ToIP';
        let term = h1.textContent;
        let anchor = h1.getAttribute('id');
        let definition = '';

        let node = h1.nextSibling;
        while (node && node.nodeName.toLowerCase() !== 'h1') {
            if (node.outerHTML) {
                definition += node.outerHTML;
            }
            node = node.nextSibling;
        }

        termsDefinitions.push({ organisation, url: 'https://docs.google.com/document/d/1fZByfuSOwszDRkE7ARQLeElSYmVznoOyJK4sxRvJpyM/edit', term, definition, anchor });
    });

    const jsonContent = JSON.stringify(termsDefinitions, null, 2);
    const jsonFilePath = path.join(process.env.GENERATED_JSON_GLOSSARIES_DIR, generatedJSONfilename);
    fs.writeFileSync(jsonFilePath, jsonContent);

    console.log('Terms and definitions have been saved to terms-definitions.json');
};

const main = async () => {
    try {
        await downloadFile();
        unzipFile(fullPath, dir);
        await createJSONfromHTML(dir);
        console.log('Download and unzip completed');
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

main();
