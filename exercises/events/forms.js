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