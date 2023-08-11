/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: 2023-08-11
  Description: Write the json output to a file.
*/

import fs from 'fs';
import path from 'path';

export default function writeToFile(entries, outputPath) {
  const resolvedOutputPath = path.resolve(outputPath);

  // Write the entries array to the file
  console.log(`Writing search index to file...`);
  const fileContent = JSON.stringify(entries);
  fs.writeFileSync(resolvedOutputPath, fileContent);

  console.log(`Indexed ${entries.length} pages`);
  console.log(`Search index written to ${resolvedOutputPath}`);
}
