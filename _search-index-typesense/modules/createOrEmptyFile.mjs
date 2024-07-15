import fs from 'fs';

export function createOrEmptyFile(filePath) {
  try {
    // Check if file exists
    if (fs.existsSync(filePath)) {
      // If file exists, empty it
      fs.writeFileSync(filePath, '');
    } else {
      // If file does not exist, create it
      fs.writeFileSync(filePath, '');
    }
    console.log(`File ${filePath} created or emptied successfully.`);
  } catch (err) {
    console.error(err);
  }
}
