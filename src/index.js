// this is very confusing in JavaScript
// It returns the reference of current object

const person = {
    name: "Suman",
    walk: function () {
        console.log(this);
    }
};

person.walk();

// To fix the problem of this returning window object when called outside the object
// We need to use the bind method
// Every function in javascript is an object
const walk = person.walk.bind(person);

// Here the value of this is based on the arguments we pass to bind method
walk();

// Now this returns the person object
// {name: "Suman", walk: ƒ}