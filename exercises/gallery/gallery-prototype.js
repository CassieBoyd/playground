function Gallery(gallery) {
    if(!gallery) {
        throw new Error("No Gallery Found!");
    }
    this.gallery = gallery;

    // Select elements we need
    // Put in an array so they can be looped over
    // Changed const variables to this.variableName to surface the variables on an instance. Sets a property on the Gallery instance.
    this.images = Array.from(gallery.querySelectorAll("img"));
    this.modal = document.querySelector(".modal");
    this.prevButton = this.modal.querySelector(".prev");
    this.nextButton = this.modal.querySelector(".next");

    // Bind methods to the instance when we need them
    this.showNextImage = this.showNextImage.bind(this);
    this.showPreviousImage = this.showPreviousImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    

    //function handleImageClick(event) {
    //    showImage(event.currentTarget);
    //}

    // Looping over images array and adding event listeners
    // images.forEach(image => image.addEventListener("click", handleImageClick))

    // Refactored- does same thing as above lines
    this.images.forEach(image => image.addEventListener("click", (event) => this.showImage(event.currentTarget)));

    // Loop over each image
    this.images.forEach(image => {
        // Add event listener on each image
        image.addEventListener("keyup", event => {
            // When keyUp is sensed, check if key was Enter
            if(event.key === "Enter") {
                // If it was, show that image
                this.showImage(event.currentTarget);
            }
        })
    })

    this.modal.addEventListener("click", this.handleClickOutside);
}

Gallery.prototype.openModal = function() {
    console.info("Opening modal...");

    // Check if modal is already open
    if(this.modal.matches(".open")) {
        console.info("Modal already open");
        return; // Stops function from running
    }
    this.modal.classList.add("open");

    // Event listeners to be bound when modal is opened
    window.addEventListener("keyup", this.handleKeyUp);
    this.nextButton.addEventListener("click", this.showNextImage);
    this.prevButton.addEventListener("click", this.showPreviousImage);
};

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove("open");
    // Add event listeners for clicks and keyboard

    window.removeEventListener("keyup", this.handleKeyUp);
    this.nextButton.removeEventListener("click", this.showNextImage);
    this.prevButton.removeEventListener("click", this.showPreviousImage);
};

Gallery.prototype.handleKeyUp = function(event) {
    if(event.key === "Escape") return this.closeModal();
    if(event.key === "ArrowRight") return this.showNextImage();
    if(event.key === "ArrowLeft") return this.showPreviousImage();
};

Gallery.prototype.showNextImage = function() {
    this.showImage(
        this.currentImage.nextElementSibling || this.gallery.firstElementChild
        );
};

Gallery.prototype.showPreviousImage = function() {
    this.showImage(
        this.currentImage.previousElementSibling || this.gallery.lastElementChild
        );
}

Gallery.prototype.handleClickOutside = function(event) {
    if(event.target === event.currentTarget) {
        this.closeModal();
    }
}

Gallery.prototype.showImage = function(el) {
    if(!el) {
        console.info("NO image to show");
        return
    }
    // Update modal
    console.log(el);

    this.modal.querySelector("img").src = el.src;
    this.modal.querySelector("h2").textContent = el.title;
    this.modal.querySelector("figure p").textContent = el.dataset.description;
    this.currentImage = el;
    this.openModal();
}

const gallery1 = new Gallery(document.querySelector(".gallery1"));
const gallery2 = new Gallery(document.querySelector(".gallery2"));

console.log(gallery1, gallery2);
