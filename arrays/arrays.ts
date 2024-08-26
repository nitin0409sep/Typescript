// const heroes = [];
// const heroes: [] = [];

//! Error as heroes of never type array
// heroes.push("helo");

const heroes: string[] = [];
const power: number[] = [];

type User1 = {
  name: string;
  email: string;
};

const userArray: Array<User1> = [];
// const userArray: User[] = [];
userArray.push({ name: "R", email: "a" });

heroes.push("hero1");
power.push(1);

const arrayofArray: number[][] = [];

arrayofArray.push([1]);

//! INTERESTING
const arr1: number[] = [1, 2, 3];
const arr2: string[] | number[] = ["1", "2", "3"]; //? This says, that array should be either completly of
//? number type or string type, cant be mixup type

const arr3: (string | number)[] = [1, 2, "three"]; //! Now it can be of mixup type
