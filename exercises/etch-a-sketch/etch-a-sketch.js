//console.log("It works");

// Select the elements on the page: canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");

// ctx is standard naming convention for context
const ctx = canvas.getContext("2d");

// All uppercase with underscores means the value is a "true constant" meaning it will never change. Some developers use this convention.
const MOVE_AMOUNT = 10;

const shakeButton = document.querySelector(".shake");

// Set up canvas for drawing
// const width = canvas.width;
// const height = canvas.height;
// console.log(width, height)

// const { width } = canvas;
// const { height } = canvas;

// Destructuring- make variables called width and height from the same properties on the canvas.
const { width, height } = canvas;
// console.log(width, height);

// Create random x and y starting points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

// Start drawing
ctx.beginPath();

// Moves the starting point x px over and y px from top
ctx.moveTo(x,y);

// Where to draw the line to
ctx.lineTo(x, y);

// Stroke makes the line from starting point to moveTo point
ctx.stroke();

// Write a draw function
// function draw(options) {
//     console.log("Options: ", options);
// }
function draw({ key }) {
    console.log(key);
    // Start path
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Move x and y values according to user input
    x = x - MOVE_AMOUNT;
    y = y - MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys
// If the pressed key is an arrow key, handleKey calls the draw function and passes the keypress as an object
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
        // console.log(e.key);
        // console.log("Handling Key");
    }
};

// Clear/shake function

// Listen for arrow keys
window.addEventListener("keydown", handleKey);