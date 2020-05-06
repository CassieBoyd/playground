console.log("It works!")



function calculateBill(bill, taxRate = 0.13, tipRate = 0.15) {
    console.log("Running Calculate Bill!")
    const total = bill + bill * taxRate + bill * tipRate;
    // console.log("Console Log", total);
    return total;
}

// Capturing the result of the function return in a variable.
const myTotal = calculateBill(12.34, .05);
console.log(`My Total: $${myTotal}`)

// Does the same as above without the need to capture the return in a variable.
console.log(`My Total: $${calculateBill(435.54, .10)}`)

// console.log(total); // Will cause an error because variable total is only available within the scope (code block) of the calculateBill() function.

function sayHiTo(firstName) {
    return `Hello, ${firstName}!`;
}

const greeting = sayHiTo("Ken");
console.log(greeting)

const myTotal3 = calculateBill(20 + 20 + 30 + 78, 0.15)

// Can add default values in case a value was not provided, can also be an empty string.
function doctorize(name = "Who") {
    return `Doctor ${name}`;
}

function yell(name) {
    return `HEY, ${name.toUpperCase()}`;
}

console.log(yell(doctorize("Cassie")));

// To make a function fall back on a default argument, pass "undefined" in its place.
const myBill = calculateBill(123.43, undefined, 0.2);
console.log("My Bill", myBill)