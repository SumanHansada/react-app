import {
    Teacher
} from './teacher';

const teacher = new Teacher('Suman', 'BE');
console.log(teacher.name);
// Suman
console.log(teacher.degree);
// BE
console.log(teacher.walk());
// walk
console.log(teacher.teach());
// teach