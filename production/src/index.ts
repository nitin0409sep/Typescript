class User {
  public email: string;
  name: string;
  private number: string = "1235";
  readonly city: string = "Delhi";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

//? OR

class User1 {
  private count = 1; //! Only accessible within the class

  readonly city: string = "Delhi";
  constructor(
    public email: string,
    public name: string // private mobile: string
  ) {}
}

const user: User = new User("a@2.xom", "Ntin");
// user.city = "Noida" //! Error
