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
    this.prevButton = modal.querySelector(".prev");
    this.nextButton = modal.querySelector(".next");

    

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

    function openModal() {
        console.info("Opening modal...");

        // Check if modal is already open
        if(modal.matches(".open")) {
            console.info("Modal already open");
            return; // Stops function from running
        }
        modal.classList.add("open");

        // Event listeners to be bound when modal is opened
        window.addEventListener("keyup", this.handleKeyUp);
        nextButton.addEventListener("click", this.showNextImage);
        prevButton.addEventListener("click", this.showPreviousImage);
    }

    Gallery.prototype.closeModal = function() {
        modal.classList.remove("open");
        // Add event listeners for clicks and keyboard

        window.removeEventListener("keyup", this.handleKeyUp);
        nextButton.removeEventListener("click", this.showNextImage);
        prevButton.removeEventListener("click", this.showPreviousImage);
    }

    Gallery.prototype.handleKeyUp(event) {
        if(event.key === "Escape") return this.closeModal();
        if(event.key === "ArrowRight") return this.showNextImage();
        if(event.key === "ArrowLeft") return this.showPreviousImage();
    }

    Gallery.prototype.showNextImage = function() {
        this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
    }

    Gallery.prototype.showPreviousImage = function() {
        this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
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

this.gallery1 = new Gallery(document.querySelector(".gallery1"));
this.gallery2 = new Gallery(document.querySelector(".gallery2"));

console.log(gallery1, gallery2);