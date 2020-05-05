console.log("It works!")

function calculateBill() {
    console.log("Running Calculate Bill!")
    const total = 100 * 1.13;
    console.log("Console Log", total);
    return total;
}

// Capturing the result of the function return in a variable.
const myTotal = calculateBill();
console.log(`My Total: $${myTotal}`)

// Does the same as above without the need to capture the return in a variable.
console.log(`My Total: $${calculateBill()}`)

// console.log(total); // Will cause an error because variable total is only available within the scope (code block) of the calculateBill() function.