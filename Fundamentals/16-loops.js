// On the javascript we have a three loop
// 1. For
// 2. While
// 3. Do While

// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

var nums = [1,2,3,4,5];
var sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];    
}

console.log(sum);

var user = {
    'name': 'John',
    'age': 34,
    'hobbies': ['Reading', 'Sports', 'Coding']
};

for (let key in user) {
    console.log(key + ': ' + user[key]);
}


// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do While loop
let x = 0;
do {
    console.log(x);
    x++;
}
while (x < 10);
