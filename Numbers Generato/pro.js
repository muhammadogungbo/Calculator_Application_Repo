//Things to apply btn colour on
const body = document.getElementById("bod");
const header = document.getElementById("header");
const Secheader = document.getElementById("Secheader");

const addStatement = document.getElementById("addStatement");
const input = document.getElementById("Input");
const numBtn = document.getElementById("numBtn");
const spanContainer = document.getElementById("spanContainer");

//colorBtn
const colorBtn = document.getElementById("colorBtn");

//function to print numbers
numBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //change input to number
  const inputValue = Number(input.value);

  //make important checks
  if (input.value === "") {
    addStatement.textContent = "Enter a number";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Enter numbers only";
    return;
  } else if (input.value > 500) {
    addStatement.textContent = "Number should not be greater than 500";
    spanContainer.textContent = "";
    return;
  } else if (input.value < 0) {
    addStatement.textContent = "Negative numbers are not allowed";
    return;
  } else {
    addStatement.textContent = "";
  }

  //before every loop spanContainer empty
  spanContainer.textContent = "";

  //loop to print out numbers
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("span");
    box.textContent = i + 1;

    //create commonClasses
    const commonClasses = [
      "bg-white",
      "border",
      "flex",
      "items-center",
      "justify-center",
      "h-10",
      "w-10",
      "border-2",
    ];

    spanContainer.appendChild(box);

    const colorClasses =
      i % 2 === 0
        ? ["text-red-500", "border-red-500"]
        : ["text-green-500", "border-green-500"];

    box.classList.add(...commonClasses, ...colorClasses);
  }
});

//function on input
input.addEventListener("input", () => {
  if (input.value === "") {
    spanContainer.textContent = "";
  }
});

//function on colourBtn
colorBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const colorArr = ["blue", "purple", "green", "gray", "white"];
  const randomCol = colorArr[Math.floor(Math.random() * colorArr.length)];
  body.style.backgroundColor = randomCol;

  //changing color of some elements
  if (
    randomCol === "blue" ||
    randomCol === "purple" ||
    randomCol === "green" ||
    randomCol === "gray"
  ) {
    header.style.color = "white";
    Secheader.style.color = "white";
  } else if (randomCol === "white") {
    header.style.color = "black";
    Secheader.style.color = "black";
  }
});
