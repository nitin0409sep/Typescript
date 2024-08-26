"use strict";
function detectTypes(val) {
    // return val.toLowerCase() //! Error
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id)
        return null;
    id.toLowerCase();
}
//? in Operator
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
