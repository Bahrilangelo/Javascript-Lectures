var final; 

final = 10;
final = '10';
final = Number("10");
//Converts str to int
final = parseInt("10.5");
//Converts str to int
final = parseFloat("10.6");
//Converts str to float

final = isNaN(10);
//Checks if 10 is not a number

var number = 15.2178128;

final = number.toPrecision(5);
//Returns 15.218
final = number.toFixed(2);
//Returns 15.22

final = Math.round(2.4);
//Returns 2
final = Math.round(2.6);
//Returns 3
final = Math.ceil(2.4);
//Returns 3
final = Math.floor(2.6);
//Returns 2
final = Math.sqrt(16);
//Returns 4
final = Math.abs(-4);
//Returns 4
final = Math.pow(2,3);
//Returns 8
final = Math.min(2,3,4,5,6,7,8,9,10);
//Returns 2
final = Math.max(2,3,4,5,6,7,8,9,10);
//Returns 10
final = Math.random();
//Returns random number between 0 and 1

console.log(typeof final);
console.log(final);