console.log("It works");

// Functionality to only run if terms are found by query selector
// function scrollToAccept() {
//     const terms = document.querySelector(".terms-and-conditions");

//     if(!terms) {
//         return; // Quit scrollToAccept function
//     }
    
//     terms.addEventListener("scroll", function(event) {
//         console.log(event);
//     });
// }

// scrollToAccept();

const terms = document.querySelector(".terms-and-conditions");

const watch = document.querySelector(".watch");

// Intersection observer watches if an element is on or off the page


function obCallback(payload) {
    console.log(payload);
}

const ob = new IntersectionObserver(obCallback);

ob.observe(watch);

terms.addEventListener("scroll", function(event) {
    console.log(event.currentTarget.scrollTop);
    console.log(event.currentTarget.scrollHeight);
});