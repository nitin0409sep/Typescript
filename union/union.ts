//? Union => |

let score: number | string = 33;
score = "33";
score = 55;
// score = false; //! Error

type User = {
  _id: number;
  name: string;
};

type Admin = {
  id: number;
  username: string;
};

let user: User | Admin = {
  _id: 1,
  name: "A",
};

user = { id: 1, username: "B" };

//! INTERESTING
const arr11: number[] = [1, 2, 3];
const arr21: string[] | number[] = ["1", "2", "3"]; //? This says, that array should be either completly of
//? number type or string type, cant be mixup type

const arr31: (string | number)[] = [1, 2, "three"]; //! Now it can be of mixup type

//? U want to define particular type
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew" //! Error
