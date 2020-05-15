console.log("It works");

sayHi(); // This will work even though it's being called before it's declared because of hoisting. JavaScript moves all function and variable declarations to the top of the file so the function call will work. It's probably better not to do this unless there's a specific use case. Doesn't work for functions declared inside a variable.

function sayHi() {
    console.log("Hey");
    console.log(add(12, 8));
}

function add(a, b) {
    return a + b;
}

console.log(age); // Comes back as undefined in the console because even though the variable declaration gets hoisted, the actual value does not.
 var age = 10;