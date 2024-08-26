function createUser({ name: string, isPaid: boolean }) {}

//! It will give u error
// createUser({ name: "nitin", isPaid: false, email:"a@2.com" });

const user = {
  name: "nitin",
  isPaid: false,
  email: "a@2.com",
};

//? This will not
createUser(user);
