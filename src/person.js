// Objects defined in modules are private by default
// So to make it public we have to export it
export class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}