console.log("It works");

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

console.log(tabButtons);

function handleTabClick(e) {
    console.log(e);
    console.log("Tab clicked");
}

tabButtons.forEach(button => button.addEventListener("click", handleTabClick))