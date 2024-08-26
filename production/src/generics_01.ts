const score1: Array<number> = [];
const score2: Array<string> = [];

// 1 way
function identity1(val: boolean | number): boolean | number {
  return val;
}

// Worst Way
function identity2(val: any): any {
  return val;
}

// Generics Way
//? Once u pass anything as Input that value type is locked. Just u have given number as input then automatically return type will be set to type number
function identity3<Type>(val: Type): Type {
  return val;
}

// identity3(4);

// Generics Way - Shortcut
function identity4<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
  cost: number;
}

function identity5<T extends Bottle>(val: T): T {
  return val;
}

// Example usage
const myBottle: Bottle = {
  brand: "Nike",
  type: "Gym",
  cost: 1000,
};

const result = identity5(myBottle);
console.log(result);
