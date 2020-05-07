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

function makeABaby (first, last) {
    
}