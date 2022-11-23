"use strict"

const express = require("express");
const accountAPIRoutes = express.Router();

const accountController = require("../../controller/accountController");

accountAPIRoutes.get("/list", async (req, res) => {
    const accounts = await accountController.getaccounts(req, res);
    res.json(accounts);
})

accountAPIRoutes.post("/list", async (req, res) => {
    const accounts = await accountController.addaccount(req, res);
    res.json(accounts);
})

module.exports = accountAPIRoutes;