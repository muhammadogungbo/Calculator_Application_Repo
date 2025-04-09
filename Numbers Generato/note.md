//Span printer
const spanContainer = document.getElementById("spanContainer");
//Error Message
const addStatement = document.getElementById("addStatement");
//input
const input = document.getElementById("firstInput");
//Button
const numBtn = document.getElementById("numBtn");
//Effect
const colBtn = document.getElementById("colorBtn");
const body = document.getElementById("bod");

numBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //Making sure input is number
  const inputvalue = parseInt(input.value);

  //statements
  if (input.value === "") {
    addStatement.textContent = "Please Input A Number";
  } else if (isNaN(inputvalue)) {
    addStatement.textContent =
      "Symbols And Letters Are Not Allowed Only Numbers";
  } else if (input.value < 0) {
    addStatement.textContent = "Negative Numbers Are Not Allowed";
  } else if (input.value > 500) {
    addStatement.textContent = "Enter A Number Not More Than 500";
  } else {
    addStatement.textContent = "";
  }
  // for loop for Numbers
  for (let i = 0; i < input.value; i++) {
    const mspan = document.createElement("span");
    mspan.textContent = i + 1;
    //common classes
    //Style For the boxes
    const commonclasses = [
      "w-10",
      "h-10",
      "flex",
      "items-center",
      "justify-center",
      "border-2",
      "rounded",
    ];
    spanContainer.append(mspan);
    localStorage.setItem("span", mspan.innerHTML);

    //red for odd numbers and  green even numbers
    const colorClasses =
      i % 2 === 0
        ? ["border-green-500", "text-green-500"]
        : ["border-red-500", "text-red-500"];

    //add all classes
    mspan.classList.add(...commonclasses, ...colorClasses);
  }
});

colBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const mycolorArr = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "gold",
    "pink",
  ];
  const randomCol = mycolorArr[Math.floor(Math.random() * mycolorArr.length)];
  body.style.backgroundColor = randomCol;
});


const input = document.getElementById("Input");
const numBtn = document.getElementById("numBtn");
const addStatement = document.getElementById("addStatement");
const spanContainer = document.getElementById("spanContainer");

numBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //make input a number
  const inputValue = Number(input.value.trim());

  //validate
  if (input.value.trim() === "") {
    addStatement.textContent = "Enter a number";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Value not allowed";
    return;
  } else if (input.value.trim() < 0) {
    addStatement.textContent = "No negative values";
    return;
  } else if (input.value.trim() > 500) {
    addStatement.textContent = "Value most not be greater than 500";
    return;
  } else {
    addStatement.textContent = "";
  }

  spanContainer.innerHTML = "";

  //Loop function to print data

  for (let i = 0; i < inputValue; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.textContent = i + 1;
    //addding styling to the div
    const commonClasses = [
      "h-10",
      "w-10",
      "flex",
      "items-center",
      "justify-center",
      "rounded",
      "border",
    ];
    //adding content to cardDiv

    const colorClasses =
      i % 2 === 0
        ? ["text-red-500", "border-red-500"]
        : ["text-green-500", "border-green-500"];

    boxDiv.classList.add(...commonClasses, ...colorClasses);

    spanContainer.appendChild(boxDiv);
  }
});

//function on input
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    spanContainer.textContent = "";
  }
});


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
