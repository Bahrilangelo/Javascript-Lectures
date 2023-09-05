var now = new Date(); // Curent time - current date

// Get methods

var date = now; // Printing current date and time
date = now.getDate(); // Current day on the motnh
date = now.getDay(); // Current day
date = now.getFullYear(); // Current Year
date = now.getHours(); // Current Hour
date = now.getMilliseconds(); // Current Milliseconds
date = now.getMinutes(); // Current Minutes
date = now.getMonth(); // Current Month
date = now.getSeconds(); // Current Seconds
date = now.getTime(); // Current Time Stamp


// Set Methods
now.setFullYear(2025); // Set current year to 2025
now.setMonth(11); // Set current month to December
now.setDate(25); // Set current day to 25
now.setHours(0); // Set current hour to 0
now.setMinutes(4); // Set current minutes to 4

var birthDate = new Date(2006, 11, 14);
var age = now.getFullYear() - birthDate.getFullYear();

console.log(date); 
console.log(age);