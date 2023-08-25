// business logic for pizza

function Pizza([topOne, topTwo, topThree], size) {
  this.toppings = [topOne, topTwo, topThree];
  // this.topTwo = topTwo;
  // this.topThree = topThree;
  this.size = size;
}

let myPizza = new Pizza(["pep", "mush"], "med")
// let myPizza = new Pizza(["pep", "mush", "sausage", "babies", "a random shoe", "a copy of Hitchhikers Guide", "a Towel"], "med")

Pizza.prototype.cost = function() {
  let price = 0;
  for (const key in this.toppings) {
    if (key !== undefined) {
      price += 1;
    }
  }
  console.log(price);
}


// business logic for toppings
function Toppings() {

}
this.toppings = ["pep", "mush", "sausage", "babies", "a random shoe", "a copy of Hitchhikers Guide", "a Towel"];


