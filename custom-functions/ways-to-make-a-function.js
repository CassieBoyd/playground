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