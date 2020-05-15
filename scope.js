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

const dog = "snickers";

function logDog() {
    console.log(dog);
}

function goDog() {
    const dog = "sunny";
    logDog();
}

goDog(); //Will log snickers because even though logDog is called in goDog where dog = sunny, where logDog is defined there is no dog defined in the scope of that function so it looks up to the next level outside itself and finds snickers. 

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}

//yell(); //Will not work because yell isn't available outside of the sayHi function.