const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

const filters = {
    sarcastic: function(letter, index){ 
        // If this statement doesn't return 0, it triggers and upper cases the letter
        if(index % 2) {
            return letter.toUpperCase();
        }
        // If the previous statement returns 0, this code will run instead and the letter will be lower cased
        return letter.toLowerCase();
    },
    funky: function(){ 

    },
    unable: function(){ 

    },
}

function transformText(text) {
    // Targets the radio buttons and grabs the value of the checked selection
    const filter = document.querySelector('[name="filter"]:checked').value;
    console.log(filter)
    // Take the text and loop over each letter
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod);
    result.textContent = mod.join("");
}


textArea.addEventListener("input", e => transformText(e.target.value));