// 'document' is our most important element for element selection we have to write document firstly 
// 'getElementById' this element is selecting elements by id 

document.getElementById("btn") //This code brings us the element with id btn
let ans;
ans = document.getElementById("btn"); //This code brings us the element with id btn
ans = document.getElementById("btn").id; //This code brings us the element id 
ans = document.getElementById("btn").className; //This code brings us the element class
ans = document.getElementById("btn").classList; //This code brings us the element class list

document.getElementById('btn').style.color = 'blue'; //This code change style selected element
document.getElementById('btn').innerText = 'Dont click here'; //This code change text selected element
document.getElementById('btn').innerHTML = '<p>Hello</p>'; //This code change html tag selected element

ans = document.querySelector("#text"); //This code brings the element we specified and how it will be retrieved.
ans = document.querySelector(".paragraph"); //This code brings the element we specified and how it will be retrieved.
ans = document.querySelector("p"); //This code brings the element we specified and how it will be retrieved.

ans = document.querySelector('li'); //This code brings the first li element 
ans = document.querySelector('li:last-child'); //This code brings the last li element 
ans = document.querySelector('li:nth-child(2)'); //This code brings the second li element 
console.log(ans);