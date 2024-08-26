"use strict";
function getSearchProducts1(products) {
    return products[0];
}
function getSearchProducts2(products) {
    // We can perform array functions on products, as its also of type array
    return products;
}
//! <T,> -> Indicates  that this is a generic
const getSearchProducts3 = (products) => {
    // We can perform array functions on products, as its also of type array
    return products[3];
};
function anotherFunc(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunc(2, "3");
function anotherFunc1(val1, val2) {
    return {
        val1,
        val2,
    };
}
// anotherFunc1(2, "3"); //!ERROR
anotherFunc1(3, 1);
function anotherFunc3(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunc3(1, {
    connection: "connection",
    username: "user",
    password: "123",
});
