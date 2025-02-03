import { test } from "@playwright/test";

let page;

test.describe.serial("Example", () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto("https://browser-automation-challenges-demo.netlify.app/");
        await page.waitForSelector("id=start-challenge");
        await page.click("id=start-challenge");
    });

    test("Step 1: Extract UUID and fill form", async () => {
        await page.waitForSelector("id=uuid");
        const uuid = await page.locator("id=uuid").textContent();
        await page.fill("id=uuid-input", uuid);
    });

    test("Step 2: Check all checkboxes", async () => {
        await page.waitForSelector("input[type='checkbox']");
        const checkboxes = await page.locator("input[type='checkbox']").all();
        for (const checkbox of checkboxes) {
            await checkbox.check();
        }
    });

    test("Step 3: Click a button 10 times", async () => {
        await page.waitForSelector("text=Click me");
        for (let i = 0; i < 10; i++) {
            await page.click("text=Click me");
        }
    });

    test.afterAll(async () => {
        await page.close();
    });
});
