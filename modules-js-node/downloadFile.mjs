/**
 * @file This file downloads a file from a given URL and save it to a specified path on the local file system.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-11-12
 */

import axios from 'axios';
import fs from 'fs';

/**
 * @module downloadFile
 * @description This module downloads a file from a given URL and saves it to a specified path on the local file system.
 * @param {string} downloadUrl - The URL of the file to download.
 * @param {string} fullPath - The full path of the file to write to.
 * @returns {Promise<void>} A Promise that resolves when the file is downloaded and written successfully.
 * @throws {Error} An error if the file cannot be downloaded.
 */
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
