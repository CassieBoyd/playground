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
    const previousButton = sliderEl.querySelector(".goToPrev");
    const nextButton = sliderEl.querySelector(".goToNext");

    function startSlider() {
        current = sliderEl.querySelector(".current") || slides.firstElementChild;
        previous = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, previous, next})
    }

    function applyClasses() {
        current.classList.add("current");
        previous.classList.add("previous");
        next.classList.add("next");
    }

    function move(direction) {
        // Remove all classes from current slides
        const classesToRemove = ["previous", "current", "next"];
        previous.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if(direction === "back") {
            // Make a new array of the new values and destructure them over and into the previous, current and next variables.
            [previous, current, next] = [
                previous.previousElementSibling || slides.lastElementChild, 
                previous, 
                current];
        } else {
            [previous, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }

        applyClasses();
    }

    // When slider is created, run startSlider function
    startSlider();
    applyClasses();

    // Event listeners
    previousButton.addEventListener("click", () => move("back"));
    nextButton.addEventListener("click", move);
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));