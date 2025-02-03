import { test } from "@playwright/test";

test("Button", async ({ page }) => {
    test.setTimeout(150000);
    await page.goto("https://showdownspace-rpa-challenge.vercel.app/challenge-buttons-a9808c5e/");
    await page.waitForSelector("text=Start challenge");
    await page.click("text=Start challenge");
    await page.waitForSelector('.css-157wn8n');

    const buttons = await page.locator('button').all();
    const submitButton = page.locator('button:text-is("Submit")');

    const nonSubmitButtons = [];
    for (const button of buttons) {
        const buttonText = await button.innerText();
        if (buttonText !== 'Submit') {
            nonSubmitButtons.push(button);
        }
    }

    for (let i = 0; i < 100; i++) {
        const questionText = (await page.locator('.css-157wn8n').textContent())
            .split('=')[0]
            .trim()
            .replace('×', '*')
            .replace('÷', '/')
            .replace(/,/g, '');
        const answer = eval(questionText);
        const answerDigits = answer.toString().split('');

        for (const digit of answerDigits) {
            for (const button of nonSubmitButtons) {
                const buttonText = await button.textContent();
                if (buttonText === digit) {
                    await button.click();
                    break;
                }
            }
        }
        await submitButton.click();
    }
    await page.waitForSelector("strong:text('Challenge completed!')");
});
