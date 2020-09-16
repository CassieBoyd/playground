const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// An array to hold state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    const name = e.currentTarget.item.value;

    // Function won't run if input is empty
    if(!name) return;

    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    // Push items into state
    items.push(item);
    console.log(`There are now ${items.length} items in your state`);

    // Clear the form
    // .reset() will clear an entire form
    e.target.reset();
    // Trigger custom event that tells an event listener that the items have been updated
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
    console.log(items)
    const html = items.map(item => {
        return `<li class="shopping-item">
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}">&times;</button>
        </li>`
        }).join("");
    list.innerHTML = html;
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);