var students = ['Bahri', 'Gani', 'Gokturk', 'Kaan', 'Harun'];

// 1. push() method
// Adds new element to the end of the array
students.push('Mehmet');
console.log(students);
/* Output:
[ 'Bahri', 'Gani', 'Gokturk', 'Kaan', 'Harun', 'Mehmet' ]
*/

// 2. pop() method
// Removes the last element of the array
students.pop();
console.log(students);
/* Output:
[ 'Bahri', 'Gani', 'Gokturk', 'Kaan', 'Harun' ]
*/

// 3. unshift() method
// Adds new element to the beginning of the array
students.unshift('Mehmet');
console.log(students);
/* Output:
[ 'Mehmet', 'Bahri', 'Gani', 'Gokturk', 'Kaan', 'Harun' ]
*/

// 4. shift() method
// Removes the first element of the array
students.shift();
console.log(students);
/* Output:
[ 'Bahri', 'Gani', 'Gokturk', 'Kaan', 'Harun' ]
*/

// 5. indexOf() method
// Returns the index of the element in the array
console.log(students.indexOf('Gokturk'));
/* Output:
2
*/

// 6. splice() method
// Removes the element from the array
students.splice(2, 1);
console.log(students);
/* Output:
[ 'Bahri', 'Gani', 'Kaan', 'Harun' ]
*/

// 7. concat() method
// Concatenates two arrays
var students2 = ['Mehmet', 'Gokturk'];
var allStudents = students.concat(students2);
console.log(allStudents);
/* Output:
[ 'Bahri', 'Gani', 'Kaan', 'Harun', 'Mehmet', 'Gokturk' ]
*/

// 8. slice() method
// Returns the elements between the given indexes
var students3 = allStudents.slice(1, 3);
console.log(students3);
/* Output:
[ 'Gani', 'Kaan' ]
*/

// 9. sort() method
// Sorts the array
allStudents.sort();
console.log(allStudents);
/* Output:
[ 'Bahri', 'Gani', 'Gokturk', 'Harun', 'Kaan', 'Mehmet' ]
*/

// 10. reverse() method
// Reverses the array
allStudents.reverse();
console.log(allStudents);
/* Output:
[ 'Mehmet', 'Kaan', 'Harun', 'Gokturk', 'Gani', 'Bahri' ]
*/

// And more...