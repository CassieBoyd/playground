console.log("It works");

// Select the elements on the page: canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");

// ctx is standard naming convention for context
const ctx = canvas.getContext("2d");

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
ctx.lineWidth = 10;

// Start drawing
ctx.beginPath();

// Moves the starting point x px over and y px from top
ctx.moveTo(x,y);

// Where to draw the line to
ctx.lineTo(x, y);

// Stroke makes the line from starting point to moveTo point
ctx.stroke();

// Write a draw function
function draw(options) {

}

// Write a handler for the keys
function handleKey(event) {
    if (event.key.includes("Arrow")) {
        event.preventDefault;
        draw({ key: event.key });
        console.log(event.key);
        console.log("Handling Key");
    }
};

// Clear/shake function

// Listen for arrow keys
window.addEventListener("keydown", handleKey);