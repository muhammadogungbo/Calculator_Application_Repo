//for answer and error
const addAnswer = document.getElementById("addAnswer");
const input = document.getElementById("firstInput");
const addBtn = document.getElementById("addButton");
const secondInput = document.getElementById("secondInput");
const minusButton = document.getElementById("minusButton");
const addStatement = document.getElementById("addStatement");

//function on addBtn
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("clickde");

  //make the two inputs number
  const inputValue = Number(input.value);
  const inputValues = Number(secondInput.value);

  //make important checks
  if (input.value === "") {
    addStatement.textContent = "Enter a value";
    addAnswer.textContent = "";
    return;
  } else if (secondInput.value === "") {
    addStatement.textContent = "Enter a value below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Input numbers only";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "only numbers are allowed";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //function to add numbers
  const addNumbers = inputValue + inputValues;
  addAnswer.textContent = addNumbers;
});

//function on subBtn
minusButton.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("clickde");

  //make the two inputs number
  const inputValue = Number(input.value);
  const inputValues = Number(secondInput.value);

  //make important checks
  if (input.value === "") {
    addStatement.textContent = "Enter a value";
    addAnswer.textContent = "";
    return;
  } else if (secondInput.value === "") {
    addStatement.textContent = "Enter a value below";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Input numbers only";
    addAnswer.textContent = "";
    return;
  } else if (isNaN(inputValues)) {
    addStatement.textContent = "only numbers are allowed";
    addAnswer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  //function to add numbers
  const minusNumbers = inputValue - inputValues;
  addAnswer.textContent = minusNumbers;
});

//function on input to clearAnswer
