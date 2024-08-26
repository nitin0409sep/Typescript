# Types

## number, string , boolean, any, void , never, tuple, undefined ...etc

# Inference

### TypeScript will automatically detect variables data type, functions return type, Object types, Array Types, etc. This detection is based on the values assigned to the variables and the usage of the code or function calls. e.g. let myString = "Nitim"; no need to write like myString: string = "Nitin"

## noImplicitAny - use it in tsconfig file, to avoid use of any, as any isn’t type-checked

# Differences Between Type Aliases and Interfaces

### Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## 1. Defining Shapes:

#### 1.1 interface: Primarily used to define the shape of an object, including property names, types, and optional properties.

#### 1.2 type: Can be used for the same purpose but also allows for more complex types like unions, intersections, and more.

## 2. Extensibility:

#### 2.1 interface: One of the main features of an interface is that it can be "reopened" or extended. This means you can define an interface in one place, and later in your code, you can add more properties to it without redeclaring the whole thing.

#### 2.2 type: Once a type is declared, it is fixed and cannot be reopened or extended directly. If you want to extend a type, you typically create a new type that extends the origina

# INTERESTING ARRAY UNION

1.1 const arr2: string[] | number[] = ["1", "2", "3"]; // This says, that array should be either completly of
number type or string type, cant be mixup type

1.2 const arr3: (string | number)[] = [1, 2, "three"]; //! Now it can be of mixup type

## Setters - No return type is given in setters, even void is not given, yes thats the way ts is designed

# Classes

## Example of Class Extension

```typescript
class ParentUser {
  private count: number = 0; // Example of a private property
  protected color: string = "Red"; // Example of a protected property

  constructor(public email: string, public name: string) {}

  // Example method in ParentUser
  incrementCount() {
    this.count++;
  }
}

class ChildUser extends ParentUser {
  isFamily: boolean = true;

  constructor(public email: string, public name: string) {
    super(email, name); // Calls the constructor of the base class (ParentUser)
  }

  changeColor() {
    // this.count = 1; //! Error: Private property can't be accessed outside the class.
    this.color = "Yellow"; // Protected property can be accessed within the class or the class that extends the base class
    console.log(this); // Valid: inside a method
  }

  //! ERROR - Syntax Error: console.log(this); is placed outside any method. It should be inside a method, like chanegColor() or a new method.
  // console.log(this);
}

// Example usage:
// const childUser = new ChildUser("example@example.com", "John Doe");
// childUser.changeColor();
```
