import { test } from "@playwright/test";

test("Towers", async ({ page }) => {
    await page.goto("https://showdownspace-rpa-challenge.vercel.app/challenge-towers-6d3a20be/");
    await page.waitForSelector("text=Start challenge");
    await page.click("text=Start challenge");

    const towers = await page.locator('[draggable="true"]').all();
    const swap = async (source, target) => {
        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();
        if (!sourceBox || !targetBox) return;
        await page.mouse.move(
            sourceBox.x + sourceBox.width / 2,
            sourceBox.y + sourceBox.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
            targetBox.x + targetBox.width / 2,
            targetBox.y + targetBox.height / 2,
            { steps: 10 }
        );
        await page.mouse.up();
    };

    for (let i = 0; i < towers.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < towers.length; j++) {
            const currentMin = Number(await towers[minIndex].textContent());
            const compareValue = Number(await towers[j].textContent());
            if (compareValue < currentMin) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            await swap(towers[minIndex], towers[i]);
        }
    }
});