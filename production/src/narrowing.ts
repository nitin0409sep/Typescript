function detectTypes(val: number | string) {
  // return val.toLowerCase() //! Error

  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 2;
}

function provideId(id: string | null) {
  if (!id) return null;

  id.toLowerCase();
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

//? in Operator
function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
