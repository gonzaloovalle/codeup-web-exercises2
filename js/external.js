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



let google = prompt("How much does Google pay?");

let amazon = prompt("How much does Amazon pay?");

let facebook = prompt("How much does Facebook pay?");

let googleHours = prompt("How many hours did you work for Google?");

let amazonHours = prompt("How many hours did you work for Amazon?");

let facebookHours = prompt("How many hours did you work for Facebook?");

let googlePay = google * googleHours;

let amazonPay = amazon * amazonHours;

let facebookPay = facebook * facebookHours;

alert(`You will earn: $${googlePay} from Google, $${amazonPay} from Amazon, and $${facebookPay} from Facebook. Your total pay will be: $${googlePay + amazonPay + facebookPay}`);



let classNotFull = confirm("The class is not full");

let noConflicts = confirm("There are no schedule conflicts");

let studentEnrolled = classNotFull && noConflicts;

alert(`Student enrolled: ${studentEnrolled}`);



let itemsBought = prompt("How many items have you bought?");

let premiumMember = confirm("Are you a premium member?");

let discountCheck = (itemsBought > 2) && premiumMember;

alert(`Eligible for discount: ${discountCheck}`);