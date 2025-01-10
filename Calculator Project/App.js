//Addition
const addBtn = document.getElementById("addButton");
const input = document.getElementById("firstInput");
//subtraction
const secInput = document.getElementById("secondInput");
const secBtn = document.getElementById("minusButton");
//for answer and error message
const addAnswer = document.getElementById("addAnswer");
const addStatement = document.getElementById("addStatement");

//function to add numbers
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //making input a number
  const inputValue = parseInt(input.value);
  const inputValues = parseInt(secInput.value);
  //writing important if statement
  if (input.value === "") {
    addStatement.textContent = "Please input a number";
  } else if (isNaN(input.value)) {
    addStatement.textContent = "Enter only numbers not letters or emojis";
  } else if (secInput.value === "") {
    addStatement.textContent = "Enter number to the second input";
  } else if (input.value === "" || secInput.value === "") {
    addAnswer.textContent = "";
  } else {
    addStatement === "";
  }

  // using loop to print out answer
  for (let i = 0; i <= inputValue + inputValues; i++) {
    addAnswer.textContent = i;
  }
});

//function to subtract numbers
secBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //making the two input a number
  const subInputValue = parseInt(input.value);
  const subInputValues = parseInt(secInput.value);
  //making important if statement
  if (input.value === "") {
    addStatement.textContent = "please enter a number";
  } else if (secInput.value === "") {
    addStatement.textContent = "please enter a number to the input below";
  } else if (isNaN(input.value)) {
    addStatement.textContent = "No letters and emojis allowed";
  } else if (input.value === "" || secInput.value === "") {
    addAnswer.textContent = "";
  } else {
    addStatement.textContent = "";
  }

  const subNumbers = subInputValue - subInputValues;
  addAnswer.textContent = subNumbers;
});
