const userTuple1: (string | number)[] = ["hi", 1];
const userTuple2: (string | number)[] = [1, "hi"];

// Helps in mainiting the order, in which we want to store data
let userTuple3: [string, number];

userTuple3 = ["1", 1]; //? Correct // Maintaint the order you have defined during declaration of tuple
// userTuple3 = [1, "1"]; //! Error

type UserT = [number, string];

const usert: UserT = [1, "a@2.com"];
usert[0] = 10; // We can override

usert.push(1);
