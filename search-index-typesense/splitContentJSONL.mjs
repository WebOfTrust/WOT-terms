import fs from 'fs';
import path from 'path';
import readline from 'readline';
import logger from './modules/logger.mjs';

const directoryPath = './search-index-typesense/search-index-entries/';  // The path to the directory containing the .jsonl files
// Set it to your desired path
const chunkSize = 2500;  // Adjust this value to change the chunk size


// Get all files from the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    logger.setLogFile('error.log');
    logger.log('Error reading the directory:', err);
    return;
  }

  // Filter .jsonl files and process each
  files.filter(file => path.extname(file) === '.jsonl').forEach(processFile);
});

function processFile(file) {
  const originalFilePath = path.join(directoryPath, file);
  const renamedOriginalFilePath = originalFilePath + '.not-split';
  const tempFilePath = originalFilePath + '.temp';

  const readStream = fs.createReadStream(originalFilePath);
  const writeStream = fs.createWriteStream(tempFilePath);

  const rl = readline.createInterface({
    input: readStream,
    output: writeStream
  });

  rl.on('line', (line) => {
    const obj = JSON.parse(line);
    const contents = splitContent(obj.content);
    contents.forEach(content => {
      const newObj = { ...obj, content };
      writeStream.write(JSON.stringify(newObj) + '\n');
    });
  });

  rl.on('close', () => {
    // Rename the original file by adding ".not-split" at the end
    fs.rename(originalFilePath, renamedOriginalFilePath, (err) => {
      if (err) {
        logger.setLogFile('error.log');
        logger.log(`Error renaming ${file} to ${renamedOriginalFilePath}:`, err);
        return;
      }
      // Rename the temp file back to the original name
      fs.rename(tempFilePath, originalFilePath, (err) => {
        if (err) {
          logger.setLogFile('error.log');
          logger.log(`Error renaming temporary file ${tempFilePath} to ${file}:`, err);

          return;
        }
        logger.setLogFile('success.log');
        logger.log(`Done processing ${file}. Original renamed to ${file}.not-split`);

      });
    });
  });
}



// Version 1: Splitting by number of characters
// // This function splits the content into chunks of the configured size, but also tries to avoid splitting in the middle of a word
// function splitContent(content) {
//   // Splitting the content into chunks of the configured size
//   return content.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
// }

// Version 2: Splitting by number of lines
// This function splits the content into chunks of the configured size
function splitContent(content) {
  const chunks = [];
  for (let i = 0; i < content.length; i += chunkSize) {
    chunks.push(content.slice(i, i + chunkSize));
  }
  return chunks;
}

// Version 3: Splitting into chunks of configurable size, but also trying to avoid splitting in the middle of a line
// // This function splits the content into chunks of the configured size, but also tries to avoid splitting in the middle of a line
// function splitContent(content) {
//   const lines = content.split('\n');
//   const chunks = [];

//   let currentChunk = '';

//   lines.forEach(line => {
//     // If adding the next line exceeds the chunk size or if it's a significant break in content (e.g., a comment or new function)
//     if (currentChunk.length + line.length + 1 > chunkSize || line.trim().startsWith('#') || line.trim().startsWith('def ')) {
//       if (currentChunk) {
//         chunks.push(currentChunk);
//       }
//       currentChunk = line;
//     } else {
//       // If there's already content in the current chunk, add a newline before adding the next line
//       if (currentChunk) {
//         currentChunk += '\n';
//       }
//       currentChunk += line;
//     }
//   });

//   if (currentChunk) {
//     chunks.push(currentChunk);
//   }

//   return chunks;
// }
