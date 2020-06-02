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
const anImage = document.createElement("img");

// set the source to an image
anImage.src = "https://picsum.photos/500";

// set the width to 250
anImage.width = 250;

// add a class of cute
anImage.classList.add("cute");

// add an alt of Cute Puppy
anImage.alt = "Cute Puppy";

// Append that image to the wrapper
aDiv.appendChild(anImage);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
    <div class="htmldiv">
        <p>Some text.</p>
        <p>More text.</p>
    </div>
`;
console.log("htmlString is: ", typeof(htmlString));

// put this div before the unordered list from above
unordered.insertAdjacentHTML("beforebegin", htmlString);

// add a class to the second paragraph called warning
const htmlDiv = aDiv.querySelector(".htmldiv"); //Added a class to the div in htmlString so it could be selected here and put into a variable
htmlDiv.children[1].classList.add("warning");//.children accesses the child elements of addClass by their index. .classList.add is then called on the 1 index to add a class of "warning"

// remove the first paragraph
htmlDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    </div>
    `
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement("div");
cardDiv.classList.add("cards");

// Have that function make 4 cards
let cards = generatePlayerCard("Cassie", 80, 120);
cards += generatePlayerCard("Ken", 82, 150);
cards += generatePlayerCard("Peach", 9, 30);
cards += generatePlayerCard("Autumn", 18, 30);
console.log(cards);

// append those cards to the div
cardDiv.append(cards);

// put the div into the DOM just before the wrapper element
cardDiv.innerHTML = cards;
aDiv.insertAdjacentElement("beforebegin", cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener