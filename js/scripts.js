//utility logic



// business logic for pizza


function Pizza(toppings, sml) {
  this.toppings = toppings;
  this.size = sml;
}


Pizza.prototype.cost = function() {
  let price = 0;
  if (this.size === "small") {
    price += 10;
  } else if (this.size === "medium") {
    price += 15;
  } else if (this.size === "large") {
    price += 20;
  } else {
    console.log("danger will robinson");
  }
  
  for (const key in this.toppings) {
    if (key !== undefined) {
      price += 1;
    }
  }
  const dolla = this.price
  return dolla;
}


// ui logic

function handleFormSubmission(event) {
  event.preventDefault(event);
  addTopAndSize();


}


function addTopAndSize() {
  let topps = document.querySelectorAll('input[name="topping"]:checked');
  let toppings = [];
  for (let i = 0; i < topps.length; i++) {
    toppings.push(topps[i].value);
  }
console.log(toppings);
  const sml = document.querySelector('input[name="size"]:checked');
  console.log(sml.value);
  const myPizza = new Pizza(toppings, sml.value);
  myPizza.cost();
  console.log(dolla);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


// let topps = 
// [document.querySelector("input#btncheck1").checked,
// document.querySelector("input#btncheck2").checked,
// document.querySelector("input#btncheck3").checked,
// document.querySelector("input#btncheck4").checked,
// document.querySelector("input#btncheck5").checked,
// document.querySelector("input#btncheck6").checked];

// const arr =[];
// for (let i=0; i < topps.length; i++) {
//   if (topps[i] === true) {
//     arr.push(topps.i);
//   }
//   console.log(arr);
// }