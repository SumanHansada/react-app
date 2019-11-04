const first = [1, 2, 3];
const second = [3, 4, 5];

// Combining traditional way
const combined = first.concat(second);
console.log(combined);
// [1, 2, 3, 3, 4, 5]

// Combining using spread operator
const combinedAnother = [...first, 'a', ...second, 'b'];
console.log(combinedAnother);
// [1, 2, 3, "a", 3, 4, 5, "b"]

const clone = [...first];
console.log(first);
//  [1, 2, 3]

console.log(clone);
//  [1, 2, 3]

// spread operator can be also used to combine objects
const obj1 = {
    name: 'Suman'
};
const obj2 = {
    job: 'Software Engineer'
};

const combinedObject = {
    ...obj1,
    ...obj2,
    location: 'Pune'
};
console.log(combinedObject);
// {name: "Suman", job: "Software Engineer", location: "Pune"}

// spread operator can be also used again to clone the object
const clonedObj = {
    ...obj1
};
console.log(clonedObj);
// {name: "Suman"}