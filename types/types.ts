// let myString: string = "Nitim";

// Both are good equal to write
let myString = "Nitim"; // if you have assgined value then no need to write type or infer type as typescript is
// quiet smart to assign type it as the value u have assigned

// myString = 1; //Error

// Number
let myNumber: number = 1;

// boolean
let isUser: boolean = false;

let heeloo; // Has any type, so it can store any type of value. Basically it isn’t type-checked.

function greet() {
  //   return true;
  //   return "hekko";
  return 1;
}

heeloo = greet();
