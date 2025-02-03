import { test } from "@playwright/test";

test("Registration", async ({ page }) => {
    await page.goto("https://lemon-meadow-0c732f100.5.azurestaticapps.net/");
    await page.waitForSelector("text=Check all the boxes to get the unlock code!");

    const checkboxes = await page.locator("input[type='checkbox']").all();
    
    const checkAllUnchecked = async () => {
        for (const checkbox of checkboxes) {
            if (!await checkbox.isChecked()) {
                await checkbox.check();
            }
        }
    };

    const areAllChecked = async () => {
        for (const checkbox of checkboxes) {
            if (!await checkbox.isChecked()) {
                return false;
            }
        }
        return true;
    };

    while (!await areAllChecked()) {
        await checkAllUnchecked();
    }
});
