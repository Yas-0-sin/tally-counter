// do you know the difference between var, let and const?
// also what is hoisting?
var clicks = 0;

function onClick() {
  clicks += 1; // what is the difference between ++clicks, clicks++ and clicks += 1?
  document.getElementById("clicks").innerHTML = clicks;
};