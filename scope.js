console.log("It works!");
const first = "Cassie"; // Global variable

function sayHi() {
    console.log("hi");
}

const age = 100;

function go() {
    const hair = "blonde";
    console.log(hair);
}

console.log(age);
//console.log(hair); // Can't access outside the function it was defined in

// Block scope
function isCool(name) {
    let cool; //Initialized but not defined
    if (name === "Cassie") {
        cool = true; //Updated
    }
    console.log(cool);
    return cool;
}

if (1 === 1) {
    const cool = true;
}

//console.log(cool);