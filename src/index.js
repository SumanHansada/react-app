// Using class
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

// Using inheritance
// Here Teacher class inherits all the properties of Person class
class Teacher extends Person {
    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Suman');
// so now teacher object can access person constructor
console.log(teacher.name);
// Suman
console.log(teacher.walk());
// walk
console.log(teacher.teach());
// teach

// Taking it to next level
// Passing the name to parent class
class NewTeacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach');
    }
}

const newTeacher = new NewTeacher('Suman', 'BE');
console.log(newTeacher.name);
// Suman
console.log(newTeacher.degree);
// BE
console.log(newTeacher.walk());
// walk
console.log(newTeacher.teach());
// teach