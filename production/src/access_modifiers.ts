//! Access Modifers - Public, Private, Protected

//? Protected - Everyone within the class, and the class which extends the class in which its declared can use/modify it

class ParentUser {
  private count: number = 1; //! Only accessible within the class
  public sayHello(): string {
    return `Hello!`;
  }

  protected color: string = "red";

  readonly city: string = "Delhi";
  constructor(
    public email: string,
    public name: string // private mobile: string
  ) {}
}

class ChildUser extends ParentUser {
  isFamily: boolean = true;

  constructor(public email: string, public name: string) {
    super(email, name); // Calls the constructor of the base class (ParentUser)
  }

  chanegColor() {
    // this.count = 1; //! Error, Private property can't be accessed outside the class.
    this.color = "Yellow"; //? Protected can be accessed within the class, or the class that extends base class
  }

  //! ERROR - Syntax Error: console.log(this); is placed outside any method. It should be inside a method, like chanegColor() or a new method.
  // console.log(this);
}

//! The obj created using ChildUser, wouldn't be able to aquire properties defined as private in parent class
