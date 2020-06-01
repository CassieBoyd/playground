console.log("DOM cardio up and running!")

// Make a div
const aDiv = document.createElement("div");

// add a class of wrapper to it
aDiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(aDiv);

// make an unordered list
const unordered = document.createElement("ul");

// add three list items with the words "one, two three" in them
const one = document.createElement("li");
one.textContent = "One";
unordered.insertAdjacentElement("afterbegin", one);
const two = document.createElement("li");
two.textContent = "Two";
one.insertAdjacentElement("afterend", two);
const three = document.createElement("li");
three.textContent = "Three";
unordered.insertAdjacentElement("beforeend", three);

// put that list into the above wrapper
aDiv.appendChild(unordered);

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener