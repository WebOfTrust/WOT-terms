// const axios = require('axios');
import axios from 'axios';
// const fs = require('sfs');
import fs from 'fs';

async function downloadFile(downloadUrl, fullPath) {
    try {
        const response = await axios({
            method: 'GET',
            url: downloadUrl,
            responseType: 'stream',
        });

        const writer = fs.createWriteStream(fullPath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading the file:', error);
        throw error;
    }
}

export default downloadFile;
