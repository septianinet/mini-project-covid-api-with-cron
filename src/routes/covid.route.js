// var express = require('express');
// var router = express.Router();

import express from "express";
import * as covidController from "../controllers/covid.controller";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/covid-19", covidController.getLastestData);

module.exports = router;
