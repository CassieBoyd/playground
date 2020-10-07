function Slider(sliderEl) {
    if(!(sliderEl instanceof Element)) {
        throw new Error("No slider passed in");
    }
    // Variables for working with slider
    let current;
    let previous;
    let next;

    // Elements for slider
    const slides = sliderEl.querySelector(".slides");
    const previousButton = document.querySelector(".goToPrev");
    const nextButton = document.querySelector(".goToNext");

    function startSlider() {
        current = sliderEl.querySelector(".current") || slides.firstElementChild;
        previous = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, previous, next})
    }

    // When slider is created, run startSlider function
    startSlider();
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));