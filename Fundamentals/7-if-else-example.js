var x = 15, y = 20, z = 30;
// Example 1
if (50 >= x >= 10){
    console.log(x+' is bigger than 10 and lower than 50');
}
else if(x > 50){
    console.log(x + ' is bigger than 50');
}
else{
    console.log(x + " is lower than 10");
}

//Example 2
if(x % 2 == 0){
    console.log(x + ' is even');
}
else{
    console.log(x + ' is odd');
}

//Example 3

if(x > y && x > z){
    console.log(x + ' is the biggest number');
}
else if(y > x && y > z){
    console.log(y + ' is the biggest number');
}
else{
    console.log(z + ' is the biggest number');
}