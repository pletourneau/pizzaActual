// business logic for toppings

function Pizza(topOne, topTwo, topThree, size) {
  this.topOne = topOne;
  this.topTwo = topTwo;
  this.topThree = topThree;
  this.size = size;
}

let myPizza = new Pizza("pep", "saus", "mush", "med");

Pizza.prototype.cost = function() {
  let price = 0;
  if (this.topOne !== undefined) {
    price += 1;
    console.log(price);
  }
}