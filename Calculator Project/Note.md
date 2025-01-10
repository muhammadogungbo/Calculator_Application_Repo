// First
const input = document.getElementById("firstInput");
const addBtn = document.getElementById("addButton");
//second
const secInput = document.getElementById("secondInput");
const minusBtn = document.getElementById("minusButton");
//for both
const addStatement = document.getElementById("addStatement");
const addAnswer = document.getElementById("addAnswer");
//To clear all information if user wishes to
const clearAll = document.getElementById("clearAll");

//To Add Numbers
addBtn.addEventListener("click", (event) => {
event.preventDefault();

//To Make input a number
const inputvalue = Number(input.value);
// To make second inout a number
const inputvalues = Number(secInput.value);

// Onclick the two numbers on each imput should combine
// console.log(inputvalue + inputvalues);

//Answer To Users
// for loop
// for (let i = 0; i <= inputvalue + inputvalues; i++) {
// addAnswer.textContent = i;
// }
const twoNumbers = inputvalue + inputvalues;
addAnswer.textContent = twoNumbers;

//
//Statement for when there is no input
if (input.value === "") {
addStatement.textContent = "Please Put A Number in The First Input Space";
} else if (secInput.value === "") {
addStatement.textContent = "Please Put A Number in The Second Input Space";
} else {
addStatement.textContent = "";
}
});

//To subtract Numbers
minusBtn.addEventListener("click", (event) => {
event.preventDefault();

//To make sure input value is a number
const inputvalue = Number(input.value);
//To make sure Secinput is a number
const inputvalues = Number(secInput.value);

//if statements
if (input.value === "") {
addStatement.textContent = "Please Enter A Number In The First Input space";
} else if (secInput.value === "") {
addStatement.textContent =
"Please Enter A Number In The Second Input space";
} else {
addStatement.textContent = "";
}
//Answer Format For Users using For Loop
// for (let i = 0; i <= inputvalue - inputvalues; i++) {
// addAnswer.textContent = i;
// }
const doubleNumbers = inputvalue - inputvalues;
addAnswer.textContent = doubleNumbers;
});
