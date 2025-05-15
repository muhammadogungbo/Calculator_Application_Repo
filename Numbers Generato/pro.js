//elements
const bod = document.getElementById("bod");
const Secheader = document.getElementById("Secheader");
const header = document.getElementById("header");

//Importat imports
const addStatement = document.getElementById("addStatement");
const addWelcome = document.getElementById("addWelcome");

//main imports
const input = document.getElementById("Input");
const numBtn = document.getElementById("numBtn");
const spanContainer = document.getElementById("spanContainer");
const colorBtn = document.getElementById("colorBtn");

// function on number ntn
numBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");

  const inputValue = Number(input.value.trim());

  //make checks
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a number";
    spanContainer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Value must be a number";
    spanContainer.textContent = "";
    return;
  } else if (input.value.trim() > 500) {
    addStatement.textContent = "Value should not be greater than 500";
    spanContainer.textContent = "";
    return;
  } else if (input.value.trim() < 0) {
    addStatement.textContent = "Negative values are not allowed";
    spanContainer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  spanContainer.textContent = "";

  //creating loop to enforce number creation
  for (let i = 0; i < inputValue; i++) {
    //creating boxes div
    const cardDiv = document.createElement("span");
    cardDiv.textContent = i + 1;

    //adding commonClasses
    const commonClasses = [
      "bg-white",
      "flex",
      "items-center",
      "justify-center",
      "h-10",
      "w-10",
      "rounded",
      "border",
      "border-2",
    ];

    spanContainer.appendChild(cardDiv);

    //creating colorClasses
    const colorClasses =
      i % 2 === 0
        ? ["text-red-500", "border-red-500"]
        : ["text-green-500", "border-green-500"];

    cardDiv.classList.add(...commonClasses, ...colorClasses);
  }
});

//input and

input.addEventListener("input", handleInput);

function handleInput() {
  if (input.value.trim() === "") {
    spanContainer.textContent = "";
    addStatement.textContent = "";
    addWelcome.textContent = "Welcome to mohds application";
  } else {
    addWelcome.textContent = "";
  }
}

//onBtn
colorBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const colorArr = ["red", "green", "blue"];
  const randomCol = colorArr[Math.floor(Math.random() * colorArr.length)];

  bod.style.backgroundColor = randomCol;
});

//New record 24 MINS - 40 secs
