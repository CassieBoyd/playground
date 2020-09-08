const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
    // Take the text and loop over each letter
    const mod = Array.from(text).map(filters.sarcastic);
    result.textContent = text;
}

const filters = {
    sarcastic: function(letter, index){ 
        console.log(letter, index);
        return letter;
    },
    funky: function(){ 

    },
    unable: function(){ 

    },
}

textArea.addEventListener("input", e => transformText(e.target.value));