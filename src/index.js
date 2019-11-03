// this is very confusing in JavaScript
// It returns the reference of current object

const person = {
    name: "Suman",
    walk: function () {
        console.log(this);
    }
};

person.walk();
// Here this returns the reference of the person object 
// {name: "Suman", walk: ƒ}

// Now if make slight change in code
// function is not called here
const walk = person.walk;
walk();
// Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

// Value of this is determined by how a function is called
// If you call a function as method in object, this will always return the reference to that object
// If you call a function outside the object, this will return the global (window) object