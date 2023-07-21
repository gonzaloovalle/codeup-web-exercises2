"use strict";

do {
    var userNumber = parseInt(prompt("Please enter a number between 1 and 50"));

    if (userNumber < 1 || userNumber > 50) {
        alert("Number is invalid, try again.")
    } else if (userNumber % 2 === 0) {
        alert(`${userNumber} is not odd, try again.`)
    } else if (isNaN(userNumber)) {
        alert(`${userNumber} is not a number, try again`)
    } else {
        alert("Number is valid!")
        break;
    }
} while (true);

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (i === userNumber) {
        console.log(`Yikes! Skipping number ${i}`);
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}

