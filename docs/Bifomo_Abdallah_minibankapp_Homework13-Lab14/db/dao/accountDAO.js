"use strict";

const productDAO = (function() {

    const getaccounts = function() {
        const accounts = [];
        accounts.push(new Account("01-123-4567", "Emma Mbulu", "loan"));
        accounts.push(new Account("01-987-5432", "Roody Louis", "checking"));
        return accounts;
    }

})();

module.exports = productDAO;