interface UserI {
  readonly _id: number;
  name: string;
  email: string;
  fun: () => string; //! Declared abstraction of function,
  fun2(): number;
  getCoupon(couponName: string, value: number): string;
}

//! Reopening of interface
interface UserI {
  token: string;
}

const user: UserI = {
  _id: 1,
  name: "Tintin",
  email: "a@2.com",
  fun: () => {
    return "String";
  },
  fun2() {
    return 1;
  },
  getCoupon(name = "TintinCoupon", val = 10) {
    return `${val} + ${name}`;
  },
  token: "123",
};

interface Admin extends UserI {
  role: "Admin" | "User";
}

const userAdmin: Admin = {
  _id: 1,
  name: "Tintin",
  email: "a@2.com",
  fun: () => {
    return "String";
  },
  fun2() {
    return 1;
  },
  getCoupon(name = "TintinCoupon", val = 10) {
    return `${val} + ${name}`;
  },
  token: "123",

  // Admin Things
  role: "Admin",
};
