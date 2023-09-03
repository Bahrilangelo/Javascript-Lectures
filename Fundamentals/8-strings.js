var name = "Bahri";
var surname = "Uranli";
var age = 20;
var city = "Isparta";

var message = "My name is " + name + " " + surname + ". I am " + age + " years old. I live in " + city + ".";

// backtick

var message = `My name is ${name} ${surname} I am ${age} years old. I live in ${city}.`;

// ternary operetors

var message = age >= 18 ? "You are adult" : "You are child";

console.log(message);
