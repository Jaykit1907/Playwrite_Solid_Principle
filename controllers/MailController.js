class MailController {

    constructor(excelService, browserService, mailService) {

        this.excelService = excelService;
        this.browserService = browserService;
        this.mailService = mailService;

        this.sendMail = this.sendMail.bind(this);
    }

    async sendMail(req, res) {

        try {

            const sheet = await this.excelService.readExcel();

            await this.browserService.fillForm(sheet);
            console.log("sending mail.....");

            await this.mailService.sendMail();

            console.log("mail sent succesfully...");

        } catch (err) {

            console.log(err);

            res.status(500).send("Error");

        }

    }

}

export default MailController;