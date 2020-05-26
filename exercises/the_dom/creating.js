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
myDiv.appendChild(myParagraph);
