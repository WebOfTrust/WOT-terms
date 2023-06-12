export default async function getTextContent(page, selector) {
    const elements = await page.$$(selector);

    const output = await Promise.all(elements.map(async (t) => {
        return await t.evaluate(x => x.textContent);
    }))
    return output[0];

}