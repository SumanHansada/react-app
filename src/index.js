// var -> function scoped
// let -> block scoped
// const -> block scoped
// value declared with const cannot be reassigned

function sayHello() {
    console.log('Say Hello');
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // But i is still accesible outside the scope
    console.log(i);
}

sayHello();

function sayHelloAgain() {
    console.log('Say Hello Again');
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // Now i is not accesible outside the scope
    // console.log(i);
}

sayHelloAgain();

const x = 1;
// value declared with const cannot be reassigned.
// x = 2;
console.log(x);