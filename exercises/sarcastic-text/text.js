const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

console.log(textArea);
console.log(result);
console.log(filterInputs);

function transformText(text) {
    result.textContent = text;
}

textArea.addEventListener("input", e => transformText(e.target.value));