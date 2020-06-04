console.log("It works");

const butts = document.querySelector(".butts");
const sibButton = document.querySelector(".sibling");

// Defining the handleClick outside of the event listener lets you reuse the function in other event listeners
function handleClick() {
    console.log("Button was clicked")
};

// Event listener takes two arguments: what event to listen for and what to do once event happens (callback function triggers)
// Go get something (butts), listen for something(ael), do something (function)
// Function can be anonymous if defined within the event listener or the event listener can reference a function defined elsewhere

// butts.addEventListener("click", function () {
//     console.log("Button was clicked")
// });

butts.addEventListener("click", handleClick);
sibButton.addEventListener("click", handleClick);

// Unbinding handleClick function from butts class elements
butts.removeEventListener("click", handleClick);
