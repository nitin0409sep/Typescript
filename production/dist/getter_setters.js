"use strict";
class User11 {
    constructor(email, name // private mobile: string
    ) {
        this.email = email;
        this.name = name;
        this.count = 1;
    }
    //! Only accessible within the class
    method1() {
        console.log("Private Method");
    }
    //! Getter
    get getEmail() {
        return this.email;
    }
    //! Getter And Setter for Count
    get getCount() {
        //! Getter -- To get any private or public property from outside of class
        return this.count;
    }
    set setCount(num) {
        //! Setter - No return type is given in setters, even void is not given, yes thats the way ts is designed
        if (num <= 1) {
            throw new Error("Count should be more than 1");
        }
        this.count += num;
    }
}
const user13 = new User11("a@2.xom", "Ntin");
// user.city = "Noida" //! Error
