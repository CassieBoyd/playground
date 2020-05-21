const p = document.querySelector("p"); //Selects first matching element
console.log(p);

const divs = document.querySelectorAll("div"); //Selects all matching elements
console.log(divs);

const item2 = document.querySelectorAll("div .item2"); //Searches for class of item2 within div tags
console.log(item2);

const heading = document.querySelector("h2");
console.log(heading)

console.log("Inner Text:", heading.innerText);//innerText is aware of the rendered appearance of text. Also ignores hidden content
console.log("Text Content:", heading.textContent);//textContent shows hidden content
console.log(heading.innerHTML);//Shows HTML within queried tag
console.log(heading.outerHTML);//Shows HTML of queried tag and all HTML therein

const pizzaList = document.querySelector(".pizza");
console.log(pizzaList.textContent);

//pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText("beforeend", "🍕"); //Tacks pizza emoji to end of element