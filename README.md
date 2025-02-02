# README - Browse Automation Challenges

## About the Project / เกี่ยวกับโครงการ

This project is for practicing challenges to enhance **Playwright** skills, a powerful Browser Automation tool that supports **Chromium, Firefox, and WebKit**.

โครงการนี้เป็นการฝึกทำโจทย์เพื่อพัฒนาทักษะ **Playwright** ซึ่งเป็นเครื่องมือสำหรับทำ Browser Automation ที่สามารถใช้กับ **Chromium, Firefox และ WebKit** ได้อย่างมีประสิทธิภาพ

## Technologies Used / เทคโนโลยีที่ใช้

- **[Playwright](https://playwright.dev/)** – A tool for automating web browser interactions.
- **Node.js** – Used to run Playwright scripts.
- **JavaScript/TypeScript** – Programming languages for writing automation tests.

- **[Playwright](https://playwright.dev/)** – เครื่องมือสำหรับการควบคุมเว็บเบราว์เซอร์แบบอัตโนมัติ
- **Node.js** – สำหรับรันสคริปต์ Playwright
- **JavaScript/TypeScript** – ภาษาที่ใช้เขียนโค้ดสำหรับการทำ Automation Test

## Installation & Usage / การติดตั้งและใช้งาน

### 1. Install Playwright / ติดตั้ง Playwright

First, install Playwright using npm or yarn:

ก่อนอื่นให้ติดตั้ง Playwright ผ่าน npm หรือ yarn:

```sh
npm install -D playwright
# หรือ
yarn add -D playwright
```

Then, install the required browsers:

จากนั้นให้ติดตั้งเบราว์เซอร์ที่ต้องการใช้งาน:

```sh
npx playwright install
```

### 2. Additional Configuration / การตั้งค่าเพิ่มเติม

If using TypeScript or additional configurations, create a `playwright.config.ts` file.

หากต้องการใช้ TypeScript หรือปรับแต่งการตั้งค่า สามารถสร้างไฟล์ `playwright.config.ts` และตั้งค่าเพิ่มเติมตามต้องการ

### 3. Running Tests / การรันเทส

Run Playwright tests using:

สามารถรันเทสที่เขียนด้วย Playwright โดยใช้คำสั่งต่อไปนี้:

```sh
npx playwright test
```

To view test results in UI:

หรือหากต้องการดูผลลัพธ์แบบ UI:

```sh
npx playwright show-report
```

## Practice Challenges / โจทย์ฝึกฝน

These challenges are adapted from **BrowseAutomation Challenges** and can be used for Playwright skill practice.

โจทย์เหล่านี้นำมาจากการแข่งขัน **BrowseAutomation Challenges** ซึ่งสามารถใช้เป็นแบบฝึกหัดสำหรับพัฒนาทักษะ Playwright ได้

- More details on the event: [Showdown Space](https://showdown.space/events/browser-automation-challenges/)
- Example challenge walkthrough video: [YouTube](https://youtu.be/jrgjfOehdOY)

- รายละเอียดเพิ่มเติมเกี่ยวกับการแข่งขัน: [Showdown Space](https://showdown.space/events/browser-automation-challenges/)
- วิดีโอตัวอย่างการทำโจทย์: [YouTube](https://youtu.be/jrgjfOehdOY)

### Example Challenge / ตัวอย่างโจทย์
- Fill out a form with given text (copy-pasting not allowed).
- Check a single checkbox.
- Click a button 10 times.

- กรอกฟอร์มด้วยข้อความที่กำหนด (ห้ามคัดลอกและวาง)
- เลือกเช็คบ็อกซ์หนึ่งรายการ
- กดปุ่ม 10 ครั้ง

### Registration Challenge
- Select all checkboxes.
- Fight against the system randomly unchecking boxes.

- เลือกเช็คบ็อกซ์ทั้งหมด
- ต่อสู้กับระบบที่สุ่มยกเลิกการเลือกเช็คบ็อกซ์

### 1_hunting
- Find and click the correct numbers hidden in 64 boxes by hovering over them.

- ค้นหาและคลิกตัวเลขที่ถูกต้องจากกล่อง 64 กล่อง โดยต้องโฮเวอร์เพื่อดูตัวเลขที่อยู่ข้างใน

### 2_seven
- Click segments on a seven-segment display to match a given six-digit number.

- กดเซกเมนต์บนจอแสดงผลเจ็ดส่วนให้ตรงกับตัวเลขที่ได้รับ

### 3_blog
- Verify the correctness of blog articles by finding missing, duplicate, or incorrect word count articles.

- ตรวจสอบความถูกต้องของบทความในบล็อก โดยต้องหาบทความที่หายไป ซ้ำกัน หรือจำนวนคำไม่ตรงกับข้อมูลที่ให้มา

### 4_robot
- Navigate from the top-left to the bottom-right of the screen.

- นำทางจากมุมซ้ายบนไปยังมุมขวาล่างของหน้าจอ

### 5_button
- Solve 100 simple math problems using on-screen buttons.

- ตอบคำถามคณิตศาสตร์ 100 ข้อ โดยใช้ปุ่มที่กำหนด

### 6_typing
- Complete a typing lesson on Learn Manoonchai with a minimum speed of 420.69 WPM.

- ทำแบบฝึกหัดพิมพ์บน Learn Manoonchai และทำความเร็วให้ได้อย่างน้อย 420.69 WPM

### 7_towers
- Sort 24 numbers represented as vertical bars in ascending order.

- จัดเรียงตัวเลข 24 ตัวที่แสดงเป็นแท่งแนวตั้งจากต่ำไปสูง

### 8_calendar
- Use a date-time picker to select and submit 20 given date-time values correctly.

- ใช้ date-time picker เพื่อเลือกวันที่และเวลาที่ถูกต้องจากรายการที่กำหนด และส่งข้อมูลให้ครบถ้วน

## Additional Resources / แหล่งข้อมูลเพิ่มเติม

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Example Code on GitHub](https://github.com/microsoft/playwright)
- [Automation Testing Guide](https://playwright.dev/docs/test-runners)

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [ตัวอย่างโค้ดบน GitHub](https://github.com/microsoft/playwright)
- [แนวทางการทำ Automation Testing](https://playwright.dev/docs/test-runners)

## Author / ผู้พัฒนา

This project was created by Baassza to practice and enhance Automation Testing skills.

โครงการนี้พัฒนาโดย Baassza เพื่อฝึกฝนและเตรียมความพร้อมสำหรับการทำ Automation Testing

---

**Note:** If you find any issues or have suggestions, feel free to open an Issue or Pull Request. 😊

**หมายเหตุ:** หากพบปัญหาหรือข้อผิดพลาด สามารถเปิด Issue หรือ Pull Request เพื่อแก้ไขได้ 😊

