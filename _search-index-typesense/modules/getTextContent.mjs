/*
  Author: 
  Created: 2023-03-16
  Updated: -
  Description: Get the text content of an element.
*/


export default async function getTextContent(page, selector) {
  const elements = await page.$$(selector);

  const output = await Promise.all(elements.map(async (t) => {
    return await t.evaluate(x => x.textContent);
  }))
  return output[0];

}