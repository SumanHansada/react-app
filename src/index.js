const person = {
    talk() {
        console.log('this', this);
    }
}

person.talk();
// Here this point to person object
// {talk: ƒ}
// talk: ƒ talk()

const newPerson = {
    talk() {
        setTimeout(function () {
            console.log('this', this);
        }, 1000)
    }
}

newPerson.talk();
// Here this points to window(global) object
// Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

// Reason -
// Here callback function - function() {console.log('this', this)} is not the part of object
// It is a standalone function
// So callback function returns the reference of the window object

// Solution -
const anotherPerson = {
    talk() {
        var self = this;
        setTimeout(function () {
            console.log('self', self);
        }, 1000);
    }
}

anotherPerson.talk();
// {talk: ƒ}
// talk: ƒ talk()

// Another way - Using Arrow Functions
// Here this inherits the context in which it is defined
// Arrow functions don't rebind the this keyword
const person1 = {
    talk() {
        setTimeout(() => console.log('this', this), 1000)
    }
}

person1.talk();
// {talk: ƒ}
// talk: ƒ talk()