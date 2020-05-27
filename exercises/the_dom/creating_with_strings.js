console.log("It works")

const item = document.querySelector(".item");
const src = `https://picsum.photos/200`;
item.innerHTML = `
    <div>
        <h1>Hello</h1>
    </div>
    ` //Backticks allow for multi-line code that maintains the spacing
console.log(item.innerHTML);