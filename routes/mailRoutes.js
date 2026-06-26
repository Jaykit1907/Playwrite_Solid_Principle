import express from "express";

const router = express.Router();

export default function (mailController) {

    router.get("/", (req, res) => {

        res.send("Home Page");

    });

    router.get("/sendmail", mailController.sendMail);

    return router;
}