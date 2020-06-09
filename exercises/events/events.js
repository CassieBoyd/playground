console.log("It works");

const butts = document.querySelector(".butts");
const sibButton = document.querySelector(".sibling");

// Defining the handleClick outside of the event listener lets you reuse the function in other event listeners
function handleClick() {
    console.log("Button was clicked")
};

// Technically an anonymous function but because it's stored in a variable we can refer to it with methods such as removeEventListener
const yay = () => console.log("yay");

// Event listener takes two arguments: what event to listen for and what to do once event happens (callback function triggers)
// Go get something (butts), listen for something(ael), do something (function)
// Function can be anonymous if defined within the event listener or the event listener can reference a function defined elsewhere

// butts.addEventListener("click", function () {
//     console.log("Button was clicked")
// });

butts.addEventListener("click", handleClick);
sibButton.addEventListener("click", yay);

// Unbinding handleClick function from butts class elements. Only works with named functions
butts.removeEventListener("click", handleClick);

// ****************************************
// Listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");

console.log(buyButtons);

function handleBuyButtonClick(event) {
    // console.log("Bought");
    // console.log(parseFloat(event.target.dataset.price));
    console.log("Target", event.target);
    console.log("Current Target", event.currentTarget);
    console.log(event.target === event.currentTarget);
    // To stop event from bubbling up to window event listener
    event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
})

// Propagation- triggering multiple functions with one click. Event bubbles up through the nesting to the top element that has a listener. Can be prevented with event.stopPropagation() on the nested event listener.

window.addEventListener("click", function() {
    console.log("Window was clicked");
    console.log(event.target);
})

// function buyItem() {
//     console.log("Buying item now");
// }

// function loopOverButtons(singleButton) {
//     singleButton.addEventListener("click", buyItem);
// }

// buyButtons.forEach(loopOverButtons);

// Function defined inside
// buyButtons.forEach(function(buyButton) {
//     console.log("Binding the buy button");
//     buyButton.addEventListener("click", buyItem);
// });

// OR
// buyButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         console.log("You clicked it")
//     })
// })