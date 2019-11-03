// objects in JavaScript is a collection of key-value pairs
// Function declared within the objects are called methods
// There is a cleaner way in ES6, just declare the function without key-value pair as talk () {}

const person = {
    name: "Suman",
    walk: function () {

    },
    talk() {

    }
}

// accessing methods
// if we know what properties to access we use (.) notation
person.walk();

// When we don't know what properties or methods to access at run time,
// We use bracket and quotes notation
person['name'] = 'Kumar';