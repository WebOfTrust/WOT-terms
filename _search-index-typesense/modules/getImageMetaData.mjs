/*
  Author: Kor Dwarshuis
  Created: 2024-03-14
  Updated: -
  Description:
*/

// imageInfo.js

import fetch from 'node-fetch';
import { createHash } from 'crypto';

// Function to get information about the image
export async function getImageMetaData(url) {
  try {
    // Fetch image
    const response = await fetch(url);
    const buffer = await response.buffer();

    // Calculate hash
    const hash = createHash('sha256').update(buffer).digest('hex');

    // Get file size
    const sizeInBytes = Buffer.byteLength(buffer);
    const sizeInKB = sizeInBytes / 1024 || null;

    return {
      sizeInKB,
      hash
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
