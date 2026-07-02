import express from "express";

import transporter from "./config/mailConfig.js";

import ExcelService from "./services/ExcelService.js";
import BrowserService from "./services/BrowserService.js";
import RPAService from "./services/RPAService.js";
import MailService from "./services/MailService.js";
import MailController from "./controllers/MailController.js";
import createRoutes from "./routes/mailRoutes.js";

const app = express();

const excelService = new ExcelService();
const browserService = new BrowserService();
const rpaService = new RPAService();
const mailService = new MailService(transporter);

const browserName = "chromium";   // chromium, firefox, webkit

const mailController = new MailController(
    excelService,
    browserService,
    rpaService,
    mailService,
    browserName
);

app.use("/", createRoutes(mailController));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});