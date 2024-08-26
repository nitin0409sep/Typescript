class User11 {
  private count = 1;

  constructor(
    public email: string,
    public name: string // private mobile: string
  ) {}

  //! Only accessible within the class
  private method1() {
    console.log("Private Method");
  }

  //! Getter
  get getEmail(): string {
    return this.email;
  }

  //! Getter And Setter for Count
  get getCount() {
    //! Getter -- To get any private or public property from outside of class
    return this.count;
  }

  set setCount(num: number) {
    //! Setter - No return type is given in setters, even void is not given, yes thats the way ts is designed
    if (num <= 1) {
      throw new Error("Count should be more than 1");
    }

    this.count += num;
  }
}

const user13: User11 = new User11("a@2.xom", "Ntin");
// user.city = "Noida" //! Error
