console.log("It works");

// Select the elements on the page: canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");

// ctx is standard naming convention for context
const ctx = canvas.getContext("2d");

const shakeButton = document.querySelector(".shake");

// Set up canvas for drawing
const width = canvas.width;
const height = canvas.height;
// console.log(width, height)

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

// Start drawing
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200, 200);
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Clear/shake function

// Listen for arrow keys