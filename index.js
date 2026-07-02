import express from "express";

import transporter from "./config/mailConfig.js";

import ExcelService from "./services/ExcelService.js";
import BrowserService from "./services/BrowserService.js";
import MailService from "./services/MailService.js";
import MailController from "./controllers/MailController.js";
import createRoutes from "./routes/mailRoutes.js";
const app = express();
const excelService = new ExcelService();
const browserService = new BrowserService();
const mailService = new MailService(transporter);
const mailController = new MailController(

    excelService,
    browserService,
    mailService

);

app.use("/", createRoutes(mailController));

app.listen(5000, () => {
    console.log("Server running on port 5000");

});