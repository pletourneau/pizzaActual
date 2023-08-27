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
  const dolla = price;
  console.log(price);
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
  const sml = document.querySelector('input[name="size"]:checked');
  const myPizza = new Pizza(toppings, sml.value);
  

  
  document.querySelector("p").innerText = "Your Pizza will cost $ " + myPizza.cost() + ". You ordered a " + sml.value + " pizza with " + toppings.toString();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});



