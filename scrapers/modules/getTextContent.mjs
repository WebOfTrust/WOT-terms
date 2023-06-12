export default async function getTextContent(page, selector) {
    // https://stackoverflow.com/a/76057011
    const elements = await page.$$(selector);

    await Promise.all(elements.map(async (t) => {
        return await t.evaluate(x => x.textContent);
    }))
}