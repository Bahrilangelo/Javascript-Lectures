let ans;

ans = document.getElementById("list");

//children
ans = ans.children;
ans = ans[0];
ans = ans.firstChild;
ans = ans.firstElementChild;
ans = ans.lastChild;
ans = ans.lastElementChild;

ans = document.getElementById('paragraph').parentElement; //We reached the parent element of paragraph

//Next - Previous elements sibling
ans = document.getElementById('list').nextSibling;
ans = document.getElementById('list').nextElementSibling;

console.log(ans);