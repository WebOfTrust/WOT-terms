import AdmZip from 'adm-zip';

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
