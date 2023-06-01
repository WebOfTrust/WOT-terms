import fs from 'fs';

export default function writeToFile(entries, output) {
  // Check if the file already exists
  if (fs.existsSync(output)) {
    // Remove existing backup file (if exists)
    const backupFile = `${output}.backup`;
    if (fs.existsSync(backupFile)) {
      fs.unlinkSync(backupFile);
      console.log(`Existing backup file removed: ${backupFile}`);
    }

    // Create a new backup file with a timestamp
    const timestamp = Date.now();
    const newBackupFile = `${output}.backup-${timestamp}`;
    fs.copyFileSync(output, newBackupFile);
    console.log(`New backup file created: ${newBackupFile}`);
  }

  // Write the entries array to the file
  console.log(`Writing search index to file...`);
  const fileContent = JSON.stringify(entries);
  fs.writeFileSync(output, fileContent);

  console.log(`Indexed ${entries.length} pages`);
  console.log(`Search index written to ${output}`);
}
