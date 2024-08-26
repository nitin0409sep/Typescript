"use strict";
//? instanceof Operator
function logVal(x) {
    if (x instanceof Date) {
        console.log(x);
    }
    else
        console.log("String");
}
//?
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        // pet,
        return "fish food";
    }
    else
        return "bird food";
}
