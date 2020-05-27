console.log("It works")

const item = document.querySelector(".item");
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cat`; //Creates security hole because user could enter HTML in this field and it would render to the DOM. They can also run script tags and cause all kinds of havoc. Lesson on scrubbing HTML forthcoming.
const myHTML = `
    <div class="wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;//Backticks allow for multi-line code that maintains the spacing. 
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// console.log("myHTML is a: ", typeof(myHTML));//myHTML is a string, NOT an element so we can't call things like classList.add against it...at least, not until it has been rendered to the DOM. Once that happens it IS an element and can be dynamically changed.

// const itemImage = document.querySelector(".wrapper img");
// itemImage.classList.add("round");
// console.log(itemImage);

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector("img"));//This is possible because the string was converted to an element
console.log(myFragment);

document.body.appendChild(myFragment);

