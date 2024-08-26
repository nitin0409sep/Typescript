type Person1 = {
  name: string;
};

// This would cause an error; `type` cannot be reopened or extended directly
// type Person = {
//   age: number;
// };

// Instead, you'd need to create a new type that extends the original
type ExtendedPerson = Person1 & { age: number };

const person1: ExtendedPerson = {
  name: "Alice",
  age: 25,
};

// E.g
type cardNo = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// MixMatch
type cardDetails = cardNo &
  cardDate & {
    cvv: number;
    myFunction: (param: string) => number;
  };

const card: cardDetails = {
  cardNumber: "123",
  cardDate: Date.now() + "",
  cvv: 123,
  myFunction(param = "1") {
    return Number(param);
  },
};
