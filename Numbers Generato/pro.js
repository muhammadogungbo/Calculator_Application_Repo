const addStatement = document.getElementById("addStatement");
const input = document.getElementById("Input");
const numBtn = document.getElementById("numBtn");

//span container
const spanContainer = document.getElementById("spanContainer");
const colorBtn = document.getElementById("colorBtn");
const body = document.getElementById("bod");

//Texts
const header = document.getElementById("header");
const Secheader = document.getElementById("Secheader");

//function to create number boxes
numBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //make input a number
  const inputValue = Number(input.value.trim());

  //make validations
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a number";
    return;
  } else if (isNaN(input.value.trim())) {
    addStatement.textContent = "Letters and symbols not allowed";
    return;
  } else if (input.value.trim() > 500) {
    addStatement.textContent = "Number should not be greater than 500";
    return;
  } else if (input.value.trim() < 0) {
    addStatement.textContent = "Negative numbers not allowed";
    return;
  } else {
    addStatement.textContent = "";
  }

  spanContainer.textContent = "";

  //Loop to print answer
  for (let i = 0; i < inputValue; i++) {
    //create span and add i
    const span = document.createElement("span");
    span.textContent = i + 1;

    //create styling for span
    const commonClasses = [
      "w-10",
      "h-10",
      "flex",
      "items-center",
      "justify-center",
      "border",
    ];

    const colorClasses =
      i % 2 === 0
        ? ["text-red-500", "border-red-500"]
        : ["text-green-500", "border-green-500"];

    span.classList.add(...commonClasses, ...colorClasses);
    spanContainer.appendChild(span);
  }
});

colorBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const colorArr = ["black", "green", "blue", "purple", "white"];
  const randomCol = colorArr[Math.floor(Math.random() * colorArr.length)];
  body.style.backgroundColor = randomCol;

  if (
    randomCol === "black" ||
    randomCol === "green" ||
    randomCol === "blue" ||
    randomCol === "purple"
  ) {
    header.style.color = "white";
    Secheader.style.color = "white";
  } else if (randomCol === "white") {
    header.style.color = "black";
    Secheader.style.color = "black";
  }
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    spanContainer.textContent = "";
  }
});
