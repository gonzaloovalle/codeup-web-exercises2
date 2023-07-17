"use strict";

console.log("Hello from External Javascript");



alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");

alert(`Great, ${userInput} is my favorite color too!`);



let littleMermaid = prompt("How many days are you going to rent the Little Mermaid?");

let brotherBear = prompt("How many days are you going to rent Brother Bear?");

let hercules = prompt("How many days are you going to rent Hercules?");

let price = prompt("What is the price of a movie per day?");

let littleMermaidPrice = littleMermaid * price;

let brotherBearPrice = brotherBear * price;

let herculesPrice = hercules * price;

alert(`Little Mermaid will cost: $${littleMermaidPrice}, Brother Bear will cost: $${brotherBearPrice}, Hercules will cost: $${herculesPrice}. Your total is: $${littleMermaidPrice + brotherBearPrice + herculesPrice}`);



