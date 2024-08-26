interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  another: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
