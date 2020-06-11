const wes = document.querySelector(".wes");

wes.addEventListener("click", function(event) {
    console.log("You clicked it");
    
    // confirm() is a method which returns true or false depending on user input
    const shouldChangePage = confirm("This page may be delicious, do you wish to proceed?");
    if(!shouldChangePage) {
        // preventDefault prevents the default action of the event which in this case is to go to the href link
        event.preventDefault();
        //window.location = event.currentTarget.href;
    }
    console.log(shouldChangePage);
});


const signupForm = document.querySelector("[name='signup']");

signupForm.addEventListener("submit", function(event) {
    //console.dir(event.currentTarget);
    const name = event.currentTarget.name.value;
    // .includes is not case-sensitive so chad or Chad will work
    if (name.includes("chad")) {
        alert("Sorry");
        event.preventDefault();
    }
})

// keyup, keydown, focus, blur
function logEvent() {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);

// Focus- when an input element is tabbed or clicked into
signupForm.name.addEventListener("focus", logEvent);
// Blur- when an input element is tabbed or clicked away from
signupForm.name.addEventListener("blur", logEvent);

// Use buttons for actions within your application.
// Links are used to change the page.
// Don't mix the two.

const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
    if(event.type === "click" || event.key === "Enter") {
        console.log("Photo was clicked");

    }
    // Logs which key was pressed while focused on the element.
    console.log(event.key);
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);

// Can use keycode.info to get code for particular keys to listen for