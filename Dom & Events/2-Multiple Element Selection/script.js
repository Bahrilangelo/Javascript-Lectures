let ans; 

ans = document.getElementsByClassName("list"); //That code return an object with list class
ans = document.getElementsByClassName("list")[0]; //That code return 0th index in the list class
ans = document.getElementsByClassName("list")[1]; //That code return 1th index in the list class

taskList = document.getElementsByClassName("list");
//This loop return all element 
for(var i = 0; i < taskList.lengh; i++){
    console.log(taskList[i]);
}

for(var task of taskList){
    task.style.color = "blue"; //we can change all element style 
    task.style.fontSize = "20px";
}

//We can use querySelectorAll for multiple element selection
ans = document.querySelectorAll(".list"); //That code return an object with list class


console.log(ans);