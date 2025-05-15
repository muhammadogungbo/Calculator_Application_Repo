//Text printer
const addWelcome = document.getElementById("addWelcome");
const addAnswer = document.getElementById("addAnswer");
const addStatement = document.getElementById("addStatement");

//Elements
const input = document.getElementById("firstInput");
const addButton = document.getElementById("addButton");
const secondInput = document.getElementById("secondInput");
const minusButton = document.getElementById("minusButton");

//Function to add Numbeers

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("click")

  const inputValue = Number(input.value.trim());
  const inputValues = Number(secondInput.value.trim());

  //checks
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a value";
    addAnswer.textContent = "";
    return;
  } else if (secondInput.value.trim() === "") {
    addStatement.textContent = "Enter a value below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Numbers are only accepted";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "Enter a number";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //function to print numbers
  const addNumbers = inputValue + inputValues;
  addAnswer.textContent = addNumbers;
});

//function to sub Numbers
minusButton.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("click")

  const inputValue = Number(input.value.trim());
  const inputValues = Number(secondInput.value.trim());

  //checks
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a value";
    addAnswer.textContent = "";
    return;
  } else if (secondInput.value.trim() === "") {
    addStatement.textContent = "Enter a value below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Value must be a number";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "Value entered must be numbers";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //function to print numbers
  const subNumbers = inputValue - inputValues;
  addAnswer.textContent = subNumbers;
});

//Function on input
input.addEventListener("input", handleInput);
secondInput.addEventListener("input", handleInput);

function handleInput() {
  if (input.value.trim() === "" && secondInput.value.trim() === "") {
    addStatement.textContent = "";
    addAnswer.textContent = "";
    addWelcome.textContent = "Thanks for using mohds calculator";
  } else {
    addWelcome.textContent = "";
  }
}
