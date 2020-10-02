function Gallery(gallery) {
    if(!gallery) {
        throw new Error("No Gallery Found!");
    }

    // Select elements we need
    // Put in an array so they can be looped over
    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevButton = modal.querySelector(".prev");
    const nextButton = modal.querySelector(".next");
    let currentImage;

    function openModal() {
        console.info("Opening modal...");

        // Check if modal is already open
        if(modal.matches(".open")) {
            console.info("Modal already open");
            return; // Stops function from running
        }
        modal.classList.add("open");

        // Event listeners to be bound when modal is opened
        window.addEventListener("keyup", handleKeyUp);
        nextButton.addEventListener("click", showNextImage);
        prevButton.addEventListener("click", showPreviousImage);
    }

    function closeModal() {
        modal.classList.remove("open");
        // Add event listeners for clicks and keyboard

        window.removeEventListener("keyup", handleKeyUp);
        nextButton.removeEventListener("click", showNextImage);
        prevButton.removeEventListener("click", showPreviousImage);
    }

    function handleKeyUp(event) {
        if(event.key === "Escape") closeModal();
        if(event.key === "ArrowRight") showNextImage();
        if(event.key === "ArrowLeft") showPreviousImage();
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showPreviousImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function handleClickOutside(event) {
        if(event.target === event.currentTarget) {
            closeModal();
        }
    }

    function showImage(el) {
        if(!el) {
            console.info("NO image to show");
            return
        }
        // Update modal
        console.log(el);

        modal.querySelector("img").src = el.src;
        modal.querySelector("h2").textContent = el.title;
        modal.querySelector("figure p").textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    //function handleImageClick(event) {
    //    showImage(event.currentTarget);
    //}

    // Looping over images array and adding event listeners
    // images.forEach(image => image.addEventListener("click", handleImageClick))

    // Refactored- does same thing as above lines
    images.forEach(image => image.addEventListener("click", (event) => showImage(event.currentTarget)));

    modal.addEventListener("click", handleClickOutside);
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));