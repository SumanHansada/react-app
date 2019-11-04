// Object destructuring

const address = {
    street: 'Baner',
    city: 'Pune',
    country: 'India'
};

// Traditional Way
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

// Modern Way
const {
    street,
    city,
    country
} = address;

// If we need to use alias. Here value of street is stored in newStreet
const {
    street: newStreet
} = address;

console.log(newStreet);
// Baner