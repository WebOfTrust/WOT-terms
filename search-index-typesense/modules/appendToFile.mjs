/*
  Author: Kor Dwarshuis
  Created: 2023-08-11
  Updated: -
  Description: Append the jsonl (not json) output to a file.
*/


import fs from 'fs';
import path from 'path';

export default function appendToFile(entries, outputPath) {
  const resolvedPath = path.resolve(outputPath);

  // Writing a string to file (JSONL format)
  const fileContent = entries;

  // Append the entries array to the file
  console.log(`Appending entries to file...`);
  fs.appendFileSync(resolvedPath, fileContent);

  // For reporting purposes, though it might not be the actual number of total pages after append
  console.log(`Appended ${entries.length} pages`);
  console.log(`Search index updated at ${resolvedPath}`);
}
