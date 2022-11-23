"use strict";

const accountDAO = require("../db/dao/accountDAO");
const account = require("../model/account");

const accountController = (function() {
    const getaccounts = async function(req, res) {
        try{
            const accounts = await accountDAO.getaccounts();
            console.log(`controller:Accounts list: ${accounts}`);
            return accounts;
        }catch (error) {
            res.status(500);
            res.render("50x", {error: error})
        }
    };
    const addaccount = async function(req, res) {
        const account = new Account(null, parseInt(req.body.accountNo), req.body.customerName, req.body.typeOfAccount);
        try{
            const opRes = await accountDAO.saveAccount(account);
            console.log(`Account Controller: Save account output: ${opRes}`);
            return opRes;
        }catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    }
    return {
        getaccounts : getaccounts,
        addaccount : addaccount
    }

})();

module.exports = accountController;