var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
};

// Why we use objects
// 1. Group related variables
// 2. Group related functions

// Accessing object properties
console.log(user.name);
console.log(user.age);
console.log(user.spells[1]);
console.log(user.isMarried);
console.table({ ...user }); // spread operator to copy all the values from one variable into another (object)