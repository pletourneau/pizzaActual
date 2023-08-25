# _{Pizza Constructor}_

#### By _**{Paul LeTourneau}**_

#### _{Web App allowing for construction and pricing of pizza}_

## Technologies Used

* _Javascript_
* _HTML5_
* _CSS_
* _Bootstrap_
* _Git_

## Description

_{This app allows a user to select toppings and size to build and price a pizza}_

## Setup/Installation Requirements

* _Clone Repository to desktop_
* _open index.html in a web browser(Chrome is preferred)_

## TDD tests
```Javascript

Describe: Pizza() (FORMERLY called Toppings())

Test 1: "it should return a toppings object with up to three toppings"
Code: let myToppings = new Toppings("pep", "saus", "mush");
Expected Output: myToppings; Toppings {topOne: 'pep', topTwo: 'saus', topThree: 'mush'}

Test 2: "it should return a toppings object with up to three toppings and a size"
Code: let myToppings = new Toppings("pep", "saus", "mush", "med");
Expected Output: myToppings; Toppings {topOne: 'pep', topTwo: 'saus', topThree: 'mush', size: 'med'}

Test 4: "it should return toppings as an array"
Code: let myPizza = new Pizza(["pep", "mush", "sausage"], "med")
myPizza;
Expected Output: Pizza {toppings: Array(3), size: 'med'}

Test 6: "it should allow user to select as many toppings as they wish"
Code: let myPizza = new Pizza(["pep", "mush", "sausage", "babies", "a random shoe", "a copy of Hitchhikers Guide", "a Towel"], "med")
myPizza;
Expected Output: Pizza {toppings: Array(8), size: 'med'}


Describe Pizza.prototype.cost 

Test 3: "it should add 1 to price if "topOne" is defined"
Code: myPizza.cost()
Expected Output: 1

Test 5: "it should add 1 to price for each topping in toppings array"topOne, topTwo, or topThree"
Code: myPizza.cost()
Expected Output: 3

```


## Known Bugs

* _Any known issues_
* _should go here_

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2023_ _Paul LeTourneau_