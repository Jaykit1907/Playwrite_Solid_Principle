class MailService {

    constructor(transporter) {
        this.transporter = transporter;
    }

    async sendMail() {

        const attachments = [];

        for (let i = 2; i <= 11; i++) {

            attachments.push({
                filename: `data${i}.png`,
                path: `./screenshots/data${i}.png`
            });

        }

        const info = await this.transporter.sendMail({

            from: process.env.Email,
            to: process.env.receiver_mail,
            subject: "NodeJS Testing",
            text: "This is testing mail.",
            attachments

        });

        return info;
    }

}

export default MailService;