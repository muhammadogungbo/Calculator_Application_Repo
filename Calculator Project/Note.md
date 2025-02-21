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

//Best functionality
const addBtn = document.getElementById("addButton");
const input = document.getElementById("firstInput");
const minusBtn = document.getElementById("minusButton");
const secInput = document.getElementById("secondInput");
const addStatement = document.getElementById("addStatement");
const addAnswer = document.getElementById("addAnswer");

const clearInput = document.getElementById("clearInputs");

//function to add answer
addBtn.addEventListener("click", (event) => {
event.preventDefault();

//make input value number
const inputValue = parseInt(input.value);
const inputsValue = Number(secInput.value);

//making some if statement
if (input.value === "") {
addStatement.textContent = "Please Enter a Number";
} else if (isNaN(input.value)) {
addStatement.textContent = "Only numbers should be inputed";
} else if (secInput.value === "") {
addStatement.textContent = "Input a number to the inut space below";
} else if (isNaN(secInput.value)) {
addStatement.textContent = "Only Numbers should be inputed";
} else {
addStatement.textContent = "";
}

//creating loop to add and sub numbers
for (let i = 0; i <= inputValue + inputsValue; i++) {
addAnswer.textContent = i;
}

//create tenary operator
const colorClasses =
[inputValue + inputsValue] % 2 === 0
? ["text-green-500"]
: ["text-red-500"];

addAnswer.classList.add(...colorClasses);
});

//function to subtract Numbers
minusBtn.addEventListener("click", (event) => {
event.preventDefault();

const inputValue = Number(input.value);
const inputsValue = Number(secInput.value);

const minus2Numbers = inputValue - inputsValue;

//make important checks
if (input.value === "") {
addStatement.textContent = "Please enter a number in the input space above";
} else if (secInput.value === "") {
addStatement.textContent = "Please enter a number in the input space below";
} else if (isNaN(input.value)) {
addStatement.textContent = "Only numbers allowed";
} else if (isNaN(secInput.value)) {
addStatement.textContent = "Only numbers should be inputed";
} else {
addStatement.textContent = "";
}

//show numbers to users
addAnswer.textContent = minus2Numbers;

//style
addAnswer.classList.add("text-red-500");
});

//function to clear answer after input value is cleared

//first input
input.addEventListener("input", () => {
if (input.value === "") {
addAnswer.textContent = "";
}
});

//second input
secInput.addEventListener("input", () => {
if (input.value === "") {
addAnswer.textContent = "";
}
});
