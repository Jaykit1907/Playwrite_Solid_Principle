class RPAService {

    async fillForm(page, sheet) {

        await page.getByRole("button", {
            name: "Start"
        }).click();

        for (let i = 2; i <= sheet.rowCount; i++) {

            const row = sheet.getRow(i);
            if (!row.hasValues) continue;

            await page.fill('[ng-reflect-name="labelFirstName"]', String(row.getCell(1).value));

            await page.fill('[ng-reflect-name="labelLastName"]', String(row.getCell(2).value));

            await page.fill('[ng-reflect-name="labelCompanyName"]', String(row.getCell(3).value));

            await page.fill('[ng-reflect-name="labelRole"]', String(row.getCell(4).value));

            await page.fill('[ng-reflect-name="labelAddress"]', String(row.getCell(5).value));

            await page.fill('[ng-reflect-name="labelEmail"]', String(row.getCell(6).value));

            await page.fill('[ng-reflect-name="labelPhone"]', String(row.getCell(7).value));

            await page.screenshot({
                path: `./screenshots/data${i}.png`,
                fullPage: true
            });


            console.log(`data->${i - 1}`);

            await page.locator('input[value="Submit"]').click();
        }
    }
}

export default RPAService;