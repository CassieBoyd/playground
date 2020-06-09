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
    console.log("Bought");
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
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