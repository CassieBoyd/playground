console.log("It works");

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
// Wrapped tabs in Array.from to convert it to an array
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

console.log(tabButtons);

function handleTabClick(e) {
    // Hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    // Dashed html elements can usually be accessed by using the camel case version but not custom or aria properties. For aria use .setAttribute instead.
    // Mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute("aria-selected", false);
    });

    // Mark the clicked tab as selected
    event.currentTarget.setAttribute("aria-selected", true);

    // Find associated tab panel and show it
    const id = event.currentTarget.id;

    // METHOD 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
    // tabPanel.hidden = false;

    // METHOD 2- find in the array of tab panels
     const tabPanel = tabPanels.find(panel => 
        panel.getAttribute("aria-labelledby") === id
        );
     tabPanel.hidden = false;
    

}

tabButtons.forEach(button => button.addEventListener("click", handleTabClick))