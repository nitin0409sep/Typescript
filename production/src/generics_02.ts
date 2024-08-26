function getSearchProducts1<T>(products: T[]): T {
  return products[0];
}

function getSearchProducts2<T>(products: T[]): T[] {
  // We can perform array functions on products, as its also of type array
  return products;
}

//! <T,> -> Indicates  that this is a generic
const getSearchProducts3 = <T>(products: T[]): T => {
  // We can perform array functions on products, as its also of type array
  return products[3];
};

function anotherFunc<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunc(2, "3");

function anotherFunc1<T, U extends number>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// anotherFunc1(2, "3"); //!ERROR
anotherFunc1(3, 1);

interface DB {
  connection: string;
  username: string;
  password: string;
}

function anotherFunc3<T, U extends DB>(val1: T, val2: U): object {
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
