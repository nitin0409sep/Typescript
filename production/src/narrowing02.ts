//? instanceof Operator
function logVal(x: Date | string) {
  if (x instanceof Date) {
    console.log(x);
  } else console.log("String");
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

//?
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    // pet,
    return "fish food";
  } else return "bird food";
}
