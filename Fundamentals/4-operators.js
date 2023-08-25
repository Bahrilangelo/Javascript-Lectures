// On the javascript we have 4 operators
var answer;
var a = 20, b = 30, c = 40;

// 1. Arithmetic operators
answer = a + b; // Addition
answer = a - b; // Subtraction 
answer = a * b; // Multiplication
answer = a / b; // Division
answer = a % b; // Mod
answer = a++; // a + 1
answer = a--; // a = 1

// 2. Assignment operators
answer = a = b; // a = b
answer = a += b; // a = a + b
answer = a -= b; // a = a - b
answer = a *= b; // a = a * b
answer = a /= b; // a = a / b
answer = a %= b; // a = a % b

// 3. Comparison operators
answer = a == b; // a equal b
answer = a === b; // a equal b and a and b data type equal
answer = a != b; // a not equal b
answer = a !== b; // a not equal b and a and b data type not equal
answer = a > b; // a greater than b
answer = a < b; // a less than b
answer = a >= b; // a greater than or equal b
answer = a <= b; // a less than or equal b

// 4. Logical operators
answer = a && b; // a and b
answer = a || b; // a or b
answer = !a; // not a


console.log(answer);