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

    function showImage(el) {
        if(!el) {
            console.info("NO image to show");
            return
        }
        // Update modal
        console.log(el)
    }

    function handleImageClick(event) {
        showImage(event.currentTarget);
    }

    // Looping over images array and adding event listeners
    images.forEach(image => image.addEventListener("click", handleImageClick))
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));