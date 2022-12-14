"use strict";

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

//define router for home page
homeRouter.get("/",(req, res, next) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
homeRouter.get("/home",(req, res, next) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

module.exports = homeRouter;