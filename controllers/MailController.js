class MailController {

    constructor(excelService, browserService, rpaService, mailService, browserName) {
        this.excelService = excelService;
        this.browserService = browserService;
        this.rpaService = rpaService;
        this.mailService = mailService;
        this.browserName = browserName;

        this.sendMail = this.sendMail.bind(this);
    }

    async sendMail(req, res) {

        try {

            const sheet = await this.excelService.readExcel();

            const { browser, page } =
                await this.browserService.openBrowser(
                    this.browserName,
                    "https://rpachallenge.com"
                );

            console.log("browser is open");
            await this.rpaService.fillForm(page, sheet);
            console.log("form is closed");

            await browser.close();
            console.log("sending mail....");
            await this.mailService.sendMail();
            console.log("mail sent succesfully...");

            res.send("Success");

        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

export default MailController;