const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// An array to hold state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    const name = e.currentTarget.item.value;
    console.log(name);
}

shoppingForm.addEventListener("submit", handleSubmit);