"use strict";

let num = 2;

while (num < 65537) {
    console.log(num);
    num *= 2;
}


let allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(`I have a total of ${allCones} cones`);
    let conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold < allCones) {
        console.log(`${conesSold} cones sold`);
        allCones -= conesSold;
    } else if (conesSold > allCones) {
        console.log(`I cannot sell ${conesSold} cones, I only have ${allCones} cone(s) left`);
        allCones -= conesSold;
    } else if (conesSold === allCones) {
        `Yay, I sold the last ${conesSold} cones! I can go home now!`
    }
}while (allCones > 0);