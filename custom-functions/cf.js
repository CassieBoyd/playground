console.log("It works!")



function calculateBill(bill, taxRate) {
    console.log("Running Calculate Bill!")
    const total = bill * (1 + taxRate);
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