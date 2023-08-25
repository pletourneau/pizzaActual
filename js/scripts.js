//utility logic



// business logic for pizza

// function Pizza([top1, top2, top3, top4, top5, top6], size) {
//   this.toppings = [top1, top2, top3, top4, top5, top6];
//   this.size = size;
//   // this.price = price;
// }

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
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
  
  
  // let myReturn = addToppings();
  // price += myReturn;
  // console.log(price);
  // return this.price;
}


// ui logic


function handleFormSubmission(event) {
  event.preventDefault(event);
  let topps = 
  [document.querySelector("input#btncheck1").checked,
  document.querySelector("input#btncheck2").checked,
  document.querySelector("input#btncheck3").checked,
  document.querySelector("input#btncheck4").checked,
  document.querySelector("input#btncheck5").checked,
  document.querySelector("input#btncheck6").checked];

  const arr =[];
  for (let i=0; i < topps.length; i++) {
    if (topps[i] === true) {
      arr.push(topps.i);
    }
    console.log(arr);
  }

}


function addToppings() {
  let topps = 
  [document.querySelector("input#btncheck1").checked,
  document.querySelector("input#btncheck2").checked,
  document.querySelector("input#btncheck3").checked,
  document.querySelector("input#btncheck4").checked,
  document.querySelector("input#btncheck5").checked,
  document.querySelector("input#btncheck6").checked];

  let topTot = 0;
  for (let i=0; i < topps.length; i++) {
    if (topps[i] === true) {
    topTot += 1;
    }
  }
  console.log(topTot);
  return topTot;
}

function priceAndOrder() {

  // document.querySelector("label#lblcheck2").innerText;
}
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})


