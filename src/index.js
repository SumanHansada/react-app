const square = function (number) {
    return number * number;
}

// Using the Arrow Functions
const square1 = (number) => number * number;
console.log(square1(5));

const jobs = [{
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: true
    },
    {
        id: 3,
        isActive: false
    }
];

// Traditional Way
const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});
console.log(activeJobs);
// 0: {id: 1, isActive: true}
// 1: {id: 2, isActive: true}

// Using Arrow Function
const activeJobs1 = jobs.filter(job => job.isActive);
console.log(activeJobs1);
// 0: {id: 1, isActive: true}
// 1: {id: 2, isActive: true}