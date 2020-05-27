console.log("It works")

const item = document.querySelector(".item");
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc =  `Cat`;
const myHTML = `
    <div className="wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;//Backticks allow for multi-line code that maintains the spacing. 
item.innerHTML = myHTML;
console.log(item.innerHTML);

console.log("myHTML is a: ", typeof(myHTML));//myHTML is a string, NOT an element.