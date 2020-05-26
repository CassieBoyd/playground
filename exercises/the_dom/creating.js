console.log("It works");

const myParagraph = document.createElement("p");//Creates a p tag element
myParagraph.textContent = "I am a p tag";//Puts text inside p tag
myParagraph.classList.add("special");//Adds class of special to p tag
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);


document.body.appendChild(myDiv);//Adds a node to the end of specified parent node
myDiv.appendChild(myParagraph);//Puts p tag inside div tag
myDiv.appendChild(myImage);//Puts img tag inside div tag
//The above method causes the DOM to "reflow" multiple times. Fix this by moving line 18 below 19 and 20. This appends the DOM all at once instead of 3 times in a row.

const heading = document.createElement("h2");
heading.textContent = "Cool things";
myDiv.insertAdjacentElement("beforebegin", heading);//Inserts heading element before myDiv

// EXERCISE: create unordered list with 5 items in it using methods from this lesson. Start with three.
const list = document.createElement("ul");
const three = document.createElement("li");
three.textContent = "THREE";
list.appendChild(three);
const two = document.createElement("li");
two.textContent = "two";
three.insertAdjacentElement("beforebegin", two);
const one = document.createElement("li");
one.textContent = "ONE";
list.insertAdjacentElement("afterbegin", one);
const four = document.createElement("li");
four.textContent = "four";
three.insertAdjacentElement("afterend", four);
const five = document.createElement("li");
five.textContent = "FIVE";
list.insertAdjacentElement("beforeend", five);
console.log(list);

document.body.appendChild(list);

//const li1 = li5.cloneNode(true);//.cloneNode creates a copy of li5 and true passes child nodes as well to access the text. Also, this method was NOT PART OF THE LESSON, WES. I have my eye on you.
//li1.textContent = "one";
