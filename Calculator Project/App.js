const addStatement = document.getElementById("addStatement");
const addAnswer = document.getElementById("addAnswer");
//Addition input and button
const input = document.getElementById("firstInput");
const addButton = document.getElementById("addButton");
//subtraction input and button
const secInput = document.getElementById("secondInput");
const minusBtn = document.getElementById("minusButton");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  //make input a number
  const inputvalue = parseInt(input.value);
  const inputvalues = parseInt(secInput.value);

  //Importnat if statement
  if (input.value === "") {
    addStatement.textContent = "Please enter a value";
  } else if (secInput.value === "") {
    addStatement.textContent = "Please enter a a value to the input below";
  } else if (isNaN(input.value)) {
    addStatement.textContent = "Values entered should be numbers only";
  } else if (isNaN(secInput.value)) {
    addStatement.textContent = "Values entered should be numbers only";
  } else {
    addStatement.textContent = "";
  }

  //Create loop to add numbers and print out answers
  for (let i = 0; i < inputvalue + inputvalues; i++) {
    addAnswer.textContent = i + 1;
  }
});

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //make input a number
  const inputvalue = Number(input.value);
  const inputvalues = Number(secInput.value);

  //Importnat if statement
  if (input.value === "") {
    addStatement.textContent = "Please enter a Number";
  } else if (secInput.value === "") {
    addStatement.textContent = "Please enter a Number";
  } else {
    addStatement.textContent = "";
  }

  //Create loop to add numbers and print out answers
  const subtractNumbers = inputvalue - inputvalues;
  if (subtractNumbers) {
    return (addAnswer.textContent = subtractNumbers);
  }
});
