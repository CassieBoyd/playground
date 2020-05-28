console.log("It works");

const cassie = document.querySelector(".cassie");
console.log(cassie.children);//Shows child elements

console.log("child nodes: ", cassie.childNodes);//Shows text nodes and child elements

console.log("1st element child: ", cassie.firstElementChild);
console.log("last element child: ", cassie.lastElementChild);
console.log("previous element sibling: ", cassie.previousElementSibling);
console.log("next element sibling: ", cassie.nextElementSibling);
console.log("parent element: ", cassie.parentElement);

// From console, select element then type $0.remove() to remove selected element

const p = document.createElement("p");//Creating p tag
p.textContent = "I will be removed";//Adding text inside p tag
document.body.appendChild(p);//Adding p tag to the body

p.remove();
console.log(p);//Even though it was removed from the DOM we can still access it 