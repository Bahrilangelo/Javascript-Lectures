var furits = ['Apple', 'Banana', 'Strawberry', 'Berry'];
var ans = furits.length; //4
ans = [furits[0], furits[furits.length - 1]]; // Apple, Berry
ans = 'Apple' in furits;
furits.push('Cherry');
furits.pop()
console.log(ans); 