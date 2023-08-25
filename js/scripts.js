// business logic for toppings

function Pizza(size) {
  this.toppings = {};
  this.size = size;
  this.price;
}

// let myPizza = new Pizza(["pep", "mush", "sausage"], "med")
let myPizza = new Pizza(["pep", "mush", "sausage", "babies", "a random shoe", "a copy of Hitchhikers Guide", "a Towel"], "med")

Pizza.prototype.cost = function() {
  let price = 0;
  for (const key in this.toppings) {
    if (key !== undefined) {
      price += 1;
    }
  }
  console.log(price);
}

this.toppings = ["pep", "mush", "sausage", "babies", "a random shoe", "a copy of Hitchhikers Guide", "a Towel"];

function keyAdder(pizza) {
  let price = 0;
  for (const key in pizza) {
    if (key !== undefined) {
      price += 1;
    }
    console.log(price);
  }
}
