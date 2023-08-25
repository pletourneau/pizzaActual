// business logic for toppings

function Pizza([topOne, topTwo, topThree], size) {
  this.toppings = [topOne, topTwo, topThree];
  this.size = size;
}

let myPizza = new Pizza(["pep", "mush", "sausage"], "med")

Pizza.prototype.cost = function() {
  let price = 0;
  for (const key in this.toppings) {
    if (key !== undefined) {
      price += 1;
    }
  }
  console.log(price);
}

function keyAdder(pizza) {
  let price = 0;
  for (const key in pizza) {
    if (key !== undefined) {
      price += 1;
    }
    console.log(price);
  }
}
