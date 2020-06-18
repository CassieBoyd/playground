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

const button = document.querySelector(".accept");


// Intersection observer watches if an element is on or off the page

// Turns off the disabled class once the last element is on the page
function obCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
    }
    console.log(payload[0].isIntersecting);
}

const ob = new IntersectionObserver(obCallback, { 
    root: terms,
    threshold: 1,
});

// ob.observe(watch);

terms.addEventListener("scroll", function(event) {
    // console.log(event.currentTarget.scrollTop);
    // console.log(event.currentTarget.scrollHeight);
});

// Watches for the last element tag to be visible
ob.observe(terms.lastElementChild);