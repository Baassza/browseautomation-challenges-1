import { test } from "@playwright/test";

const segmentMap = {
    "a": 1,
    "b": 3,
    "c": 6,
    "d": 7,
    "e": 5,
    "f": 2,
    "g": 4,
};

function getSegment(number) {
    switch (number) {
        case 0:
            return ["a", "b", "c", "d", "e", "f"];
        case 1:
            return ["b", "c"];
        case 2:
            return ["a", "b", "d", "e", "g"];
        case 3:
            return ["a", "b", "c", "d", "g"];
        case 4:
            return ["b", "c", "f", "g"];
        case 5:
            return ["a", "c", "d", "f", "g"];
        case 6:
            return ["a", "c", "d", "e", "f", "g"];
        case 7:
            return ["a", "b", "c"];
        case 8:
            return ["a", "b", "c", "d", "e", "f", "g"];
        case 9:
            return ["a", "b", "c", "d", "f", "g"];
        default:
            return [];
    }
}

test("Seven", async ({ page }) => {
    await page.goto("https://lemon-meadow-0c732f100.5.azurestaticapps.net/ssg");
    await page.waitForSelector(".number");
    const numbers = await page.locator(".number").first().textContent();
    const digit = numbers.split("").map(Number);
    const segments = digit.map(d => getSegment(d));
    const allSevenSegments = await page.locator(".seven-segment").all();
    
    for (let i = 0; i < allSevenSegments.length; i++) {
        const children = await allSevenSegments[i].locator(".segment").all();
        const segment = segments[i];
        for (let j = 0; j < segment.length; j++) {
            const segmentName = segment[j];
            const index = segmentMap[segmentName] - 1; 
            const segmentElement = children[index];
            await segmentElement.click();
        }
    }
    await page.waitForSelector("text=Congratulations! You won!");
});
