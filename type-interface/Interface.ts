interface Person {
  readonly _id: number; // U can't change the id, as it's assigned as readonly
  name: string;
  isActive?: boolean;
}

interface Person {
  age: number;
}

// This is valid because `interface` allows reopening
const person: Person = {
  _id: 1,
  name: "Alice",
  age: 25,
};

// person._id = 12; //! ERROR
person.name = "Nitin"; //? Allowed

//? 1. Defining Shapes:
//? 1.1 interface: Primarily used to define the shape of an object, including property names, types, and optional
//? properties.

//? 1.2 type: Can be used for the same purpose but also allows for more complex types like unions, intersections,
//? and more.

//?  2. Extensibility:
//? 2.1 interface: One of the main features of an interface is that it can be "reopened" or extended.
//? This means you can define an interface in one place, and later in your code, you can add more properties to
//? it without redeclaring the whole thing.

//? 2.2 type: Once a type is declared, it is fixed and cannot be reopened or extended directly.
//? If you want to extend a type, you typically create a new type that extends the origina
