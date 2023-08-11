/*
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Write the json output to a file.
*/

import fs from 'fs';
import path from 'path';

export default function writeToFile(entries, strOutput) {
  const output = path.resolve(strOutput);

  // Write the entries array to the file
  console.log(`Writing search index to file...`);
  const fileContent = JSON.stringify(entries);
  fs.writeFileSync(output, fileContent);

  console.log(`Indexed ${entries.length} pages`);
  console.log(`Search index written to ${output}`);
}
