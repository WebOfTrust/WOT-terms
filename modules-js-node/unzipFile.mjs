/**
 * @file This file unzips a zip file to a specified destination directory.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-11-12
 */

import AdmZip from 'adm-zip';

/**
 * @module unzipFile
 * @description Unzips a zip file to a specified destination directory
 * @param {*} zipFilePath 
 * @param {*} extractToDir 
 */
function unzipFile(zipFilePath, extractToDir) {
    try {
        let zip = new AdmZip(zipFilePath);
        zip.extractAllTo(extractToDir, true);
        console.log(`Extraction complete. Files extracted to ${extractToDir}`);
    } catch (error) {
        console.error('Error extracting the file:', error);
        throw error;
    }
}

export default unzipFile;
