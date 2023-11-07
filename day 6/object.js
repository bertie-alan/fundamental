const bmw = {
  brand: "bmw",
  model: "m135i",
  price: 800000000,
};

const toyota = {
  brand: "toyota",
  model: "innova",
  price: 500000000,
};
console.log(bmw, toyota);

//template
//Constructor
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const honda = new Car("honda", "jazz", 280000000);
console.log(honda);
