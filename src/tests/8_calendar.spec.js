import { test } from "@playwright/test";

const monthMap = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11,
};

function selectsDateTimesToObject(selectsDateTimesString) {
    const selectsDateTimes = selectsDateTimesString.split(" ");
    const dateString = selectsDateTimes[0];
    const timeString = selectsDateTimes[1];
    const date = dateString.split("-");
    const time = timeString.split(":");
    return {
        year: parseInt(date[0]),
        month: parseInt(date[1]) - 1,
        day: parseInt(date[2]),
        hour: parseInt(time[0]),
        minute: parseInt(time[1]),
    };
}

function gotoMonth(current, target) {
    if (current === target) return { direction: null, times: 0 };
    if (current < target) {
        return {
            direction: "next",
            times: target - current
        };
    } else {
        return {
            direction: "prev",
            times: current - target
        };
    }
}

async function clickCircle(page, θ, inner = false) {
    const mask = await page.locator(".MuiClock-squareMask").first();
    const bbox = await mask.boundingBox();
    const radius = bbox.height / 2;
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const x = cx + (inner ? 0.9 : 0.6) * radius * Math.sin(θ / 360 * 2 * Math.PI);
    const y = cy - (inner ? 0.9 : 0.6) * radius * Math.cos(θ / 360 * 2 * Math.PI);
    return page.mouse.click(x, y);
}

test("Calendar", async ({ page }) => {
    await page.goto("https://showdownspace-rpa-challenge.vercel.app/challenge-mui-168af805/");
    await page.waitForSelector("text=Start challenge");
    await page.click("text=Start challenge");
    await page.waitForSelector(".css-1bzq5ag");

    let allSelectsDateTimes = (await Promise.all(
        (await page.locator(".css-n2903v").all())
            .map(async (el) => await el.textContent())
    )).filter((el) => el !== "offline");

    let allSelectsDateTimesObject = allSelectsDateTimes.map(selectsDateTimesToObject);

    for (let i = 0; i < allSelectsDateTimesObject.length; i++) {
        await page.click(".css-19xycpm");
        const year = await page.locator(".css-kiu2gm > * > button").all();
        const selectsDateTimes = allSelectsDateTimesObject[i];
        const yearIndex = selectsDateTimes.year - 1900;
        const currentMonthText = await page.locator(".css-1v994a0").first().textContent();
        const currentMonth = monthMap[currentMonthText.split(" ")[0]];
        const { direction, times } = await gotoMonth(currentMonth, selectsDateTimes.month);
        await year[yearIndex].click();
        await page.waitForTimeout(100);
        if (direction === "next") {
            for (let j = 0; j < times; j++) {
                await page.locator('[data-testid="ArrowRightIcon"]').click();
            }
        } else if (direction === "prev") {
            for (let j = 0; j < times; j++) {
                await page.locator('[data-testid="ArrowLeftIcon"]').click();
            }
        }
        const day = await page.locator(".css-a78wou").all();
        await day[selectsDateTimes.day - 1].click();
        await clickCircle(page, (selectsDateTimes.hour * 30), selectsDateTimes.hour <= 12);
        await clickCircle(page, (selectsDateTimes.minute * 6));
        await page.locator('text=OK').click();
        if (i !== allSelectsDateTimesObject.length - 1) {
            await page.locator('[aria-label="pick date"]').click();
        }
    }
    await page.waitForSelector("strong:text('Challenge completed!')");

});
