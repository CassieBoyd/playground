console.log("It works");

const name = "Cassie";
const middle = "Andra";
const last = "Bacon";

const sentence = 'If you don\'t eat your meat you can\'t have any pudding.';
// When using single or double quotes in variable assignment you have to use \ before any additional single or double quotes contained within your string.

const secondSentence = `We don't need no "education"`;
// Alternately, using backticks eliminates the need for the escape character altogether!

const song = `Oh

you
pretty


things`;
// Backticks also preserve any line breaks you have in your code.

const hello = `Hello, my name is ${name}. Nice to meet you! I have ${392 + 84} My Little Ponies! This sure is a normal way to start a converstion, huh?`;
// And they allow string interoplation. Backticks sure are swell!

const html = `
<div>
    <h2>${name}</h2>
    <p>${hello}</p>
</div>
`;
document.body.innerHTML = html;
console.log(html);


// ********************** NUMBERS **********************************

const age = 89; //Can type typeof followed by the variable name in the console to see data type

const a = 2;
const b = 9;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const momGets = smarties % kids; //Modulo returns remainder after division
console.log(`Each kid gets ${eachKidGets}, mom gets ${momGets}`);

const power = 10 ** 2; // ** is equivalent to ^ or "to the power of" So cool! 

// ********************* OBJECTS **************************************

const person = {
    first: "Cassie",
    last: "Bacon",
    age: 90
};

// **************** NULL & UNDEFINED **************************************

let cat; // Will return Undefined until assigned a value
console.log(cat);
cat = "Casper";

const somethingNull = null; // Has to be set to null in order to return null

const alice = {
    first: "alice",
    last: null,
    address: "Wonderland"
};

// ******************* BOOLEANS & EQUALITY ********************************

let isDrawing = false;
let currentAge = 18;
const ofAge = currentAge > 19;
console.log(ofAge); // Returns false

currentAge = 100;
let currentAge2 = 40;

// === checks that both value and type are equivalent
// == only checks value so "10" == 10 would evaluate to true

// ********************* BUILT-IN FUNCTIONS *****************************

const max = Math.max(10, 12); // Returns max number given
console.log(max);

const float = parseFloat("343.24234"); // Converts strings to numbers with decimals
console.log(float); // In console, run typeOf on variable to confirm it's a number

const int = parseInt("324.32423") // Also converts from string to number but returns only the numbers to the left to the decimal without rounding up or down
console.log(int)

console.log(Date.now()) // Returns milliseconds since 1/1/70
