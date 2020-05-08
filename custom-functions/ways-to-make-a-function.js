console.log("It's working");

// Anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Functions declared with the function keyword are hoisted to the top of the file giving them the ability to be called before they're defined. Just because you can do something doesn't mean you should.
// function doctorize2 (firstName) {
//     return `Dr. ${firstName}`;
// }

// Arrow function with implicit return. Can remove parentheses if there is only one argument
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

// Side note: Hitting option and the equal sign gives the does not equal sign ≠. Discovered this just now while trying to get a plus sign and hitting option instead of shift because I probably need caffeine. Happy little accidents.

// Returning an object
const makeABaby = (first, last) => {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}

// Have to put parentheses around function definition to implicitly return an object
const makeABaby2 = (first, last) => ({name: `${first} ${last}`,
age: 0})

// IIFE Immediately Invoked Function Expression. Parentheses run first in JS
(function() {
    console.log(`Running the Anon function`);
    return `You are cool`;
})();

// Methods
const cassie = {
    name: "Cassie Boyd",
    sayHi: function() {
        console.log(`Hi, Cassie`);
        return `Hey Cassie`;
    },
    // Shorthand method
    yellHi() {
        console.log("HEY CASSIE")
    },
    // Arrow function
    whisperHi: () => {console.log("hiii"); return "return"}
}

// Callback functions- waits for an event such as a click to run
// Click callback
const button = document.querySelector(".clickMe")

button.addEventListener("click", cassie.yellHi)

// Timer callback- takes a function to call and a duration in milliseconds
setTimeout(cassie.yellHi, 1000);

// Can also be gat arrow
setTimeout(() => {
    console.log("Time to eat!")
}, 1000);