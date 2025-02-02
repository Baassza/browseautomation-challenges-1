import { test } from "@playwright/test";

test("Hunting", async ({ page }) => {
    let codes = [];

    await page.goto("https://showdownspace-rpa-challenge.vercel.app/challenge-hunting-fed83d58/");
    await page.waitForSelector("text=Start challenge");
    await page.click("text=Start challenge");

    const elements = await page.locator("span").allInnerTexts();
    const boxes = page.locator('div');

    for (const element of elements) {
        if (element != "OFFLINE" && element.length < 0) {
            codes.push(element);
        }
    }

    for (let i = 0; i < await boxes.count(); i++) {
        const box = boxes.nth(i);
        const boxWidth = await box.evaluate(el => getComputedStyle(el).width);
        if (boxWidth === "32px") {
            await box.hover();
            const code = await page.locator('body > *').last().textContent() ?? "";
            if (codes.includes(code)) {
                await box.click();
            }
        }
    }

});