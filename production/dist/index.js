"use strict";
class User {
    constructor(email, name) {
        this.number = "1235";
        this.city = "Delhi";
        this.email = email;
        this.name = name;
    }
}
//? OR
class User1 {
    constructor(email, name // private mobile: string
    ) {
        this.email = email;
        this.name = name;
        this.count = 1; //! Only accessible within the class
        this.city = "Delhi";
    }
}
const user = new User("a@2.xom", "Ntin");
// user.city = "Noida" //! Error
