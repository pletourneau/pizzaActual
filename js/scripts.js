//utility logic



// business logic for pizza

function Pizza([top1, top2, top3, top4, top5, top6], size) {
  this.toppings = [top1, top2, top3, top4, top5, top6];
  this.size = size;
  // this.price = price;
}

// function Pizza([pep, saus, mush, anch, grnPep, macChz], size) {
//   this.toppings = [pep, saus, mush, anch, grnPep, macChz];
//   this.size = size;
//   // this.price = price;
// }

// let myPizza = new Pizza(["pep", "mush"], "med")
let myPizza = new Pizza ( ['pep', 'anch', 'macChz'], 'lg');

Pizza.prototype.cost = function() {
  let price = 0;
  if (this.size === "sm") {
    price += 10;
  } else if (this.size === "med") {
    price += 15;
  } else if (this.size === "lg") {
    price += 20;
  } else {
    console.log("danger will robinson");
  }
  for (const key in this.toppings) {
    if (key !== undefined) {
      price += 1;
      console.log(key);
    }
  }
  console.log(price);
  return this.price;
}


// ui logic


function handleFormSubmission(event) {
  event.preventDefault();


  // let myPizza = new Pizza()

}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})


