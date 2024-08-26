"use strict";
const score1 = [];
const score2 = [];
// 1 way
function identity1(val) {
    return val;
}
// Worst Way
function identity2(val) {
    return val;
}
// Generics Way
//? Once u pass anything as Input that value type is locked. Just u have given number as input then automatically return type will be set to type number
function identity3(val) {
    return val;
}
// identity3(4);
// Generics Way - Shortcut
function identity4(val) {
    return val;
}
function identity5(val) {
    return val;
}
// Example usage
const myBottle = {
    brand: "Nike",
    type: "Gym",
    cost: 1000,
};
const result = identity5(myBottle);
console.log(result);
