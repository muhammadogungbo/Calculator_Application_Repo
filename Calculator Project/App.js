const addAnswer = document.getElementById("addAnswer");
const addStatement = document.getElementById("addStatement");
// for addition
const input = document.getElementById("firstInput");
const addBtn = document.getElementById("addButton");
// for subtraction
const secInput = document.getElementById("secondInput");
const minusBtn = document.getElementById("minusButton");

// function for addition
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //make input a number
  const inputValue = Number(input.value.trim());
  const inputValues = Number(secInput.value.trim());

  //validation
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a number";
    addAnswer.textContent = "";
    return;
  } else if (secInput.value.trim() === "") {
    addStatement.textContent = "Enter a number below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Numbers only";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "No values other than numbers";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //function to addAnswer
  const addTwoAnswers = inputValue + inputValues;
  addAnswer.textContent = addTwoAnswers;
});

//function to subtract numbers
minusBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //make input and secinput a number
  const inputValue = Number(input.value.trim());
  const inputValues = Number(secInput.value.trim());

  //Validate
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a number";
    addAnswer.textContent = "";
    return;
  } else if (secInput.value.trim() === "") {
    addStatement.textContent = "Enter a number below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Number only";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "No other values than numbers";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //Function to subtract numbers
  const minusNumbers = inputValue - inputValues;
  addAnswer.textContent = minusNumbers;
});
