function Slider(sliderEl) {
    if(!(sliderEl instanceof Element)) {
        throw new Error("No slider passed in");
    }
    // Variables for working with slider
    let current;
    let previous;
    let next;

    // Elements for slider
    const slides = sliderEl.querySelectorAll("slides");
    const previousButton = document.querySelector(".goToPrev");
    const nextButton = document.querySelector(".goToNext");
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));