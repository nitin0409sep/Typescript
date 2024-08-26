"use strict";
//! Access Modifers - Public, Private, Protected
//? Protected - Everyone within the class, and the class which extends the class in which its declared can use/modify it
class ParentUser {
    sayHello() {
        return `Hello!`;
    }
    constructor(email, name // private mobile: string
    ) {
        this.email = email;
        this.name = name;
        this.count = 1; //! Only accessible within the class
        this.color = "red";
        this.city = "Delhi";
    }
}
class ChildUser extends ParentUser {
    constructor(email, name) {
        super(email, name); // Calls the constructor of the base class (ParentUser)
        this.email = email;
        this.name = name;
        this.isFamily = true;
    }
    chanegColor() {
        // this.count = 1; //! Error, Private property can't be accessed outside the class.
        this.color = "Yellow"; //? Protected can be accessed within the class, or the class that extends base class
    }
}
//! The obj created using ChildUser, wouldn't be able to aquire properties defined as private in parent class
