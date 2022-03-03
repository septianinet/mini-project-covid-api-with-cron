import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import covidRouter from "./routes/covid.route";
import nodeCron from "node-cron";
import * as covidService from "./services/covid.service";
var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", covidRouter);

// nodeCron.schedule("*/1 * * * *", covidService.createIfPublicApiUpdate);
nodeCron.schedule("59 11 * * *", covidService.insertIfPublicApiUpdate);

export default app;
