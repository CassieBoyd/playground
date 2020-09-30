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
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));