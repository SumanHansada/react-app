import Teacher, {
    promote
} from './teacher';

// Here we are using default as well as named exports
// Default Exports -> import ... from '';
// Named Exports -> import { ... } from '';

const teacher = new Teacher('Suman', 'BE');
console.log(teacher.name);
// Suman
console.log(teacher.degree);
// BE
console.log(teacher.walk());
// walk
console.log(teacher.teach());
// teach