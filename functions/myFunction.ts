function sum(num1: number, num2: number = 5): number {
  return num1 + num2;
}

// let sums: number = sum("1", 2); //! Error
let sums: number = sum(1, 2);

const arr = ["a", "b", "c", 1];

arr.map((val): string | number => val);
