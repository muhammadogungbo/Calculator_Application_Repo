//element
const body = document.getElementById("bod");
const header = document.getElementById("header");
const Secheader = document.getElementById("Secheader");

//important
const addStatement = document.getElementById("addStatement");
const Input = document.getElementById("Input");
const numBtn = document.getElementById("numBtn");
const spanContainer = document.getElementById("spanContainer");
const colorBtn = document.getElementById("colorBtn");
const addWelcome = document.getElementById("addWelcome");

//function on numBtn
numBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  //make input number
  const inputValue = Number(Input.value);

  //validate
  if (Input.value === "") {
    addStatement.textContent = "Enter a number in the input";
    spanContainer.textContent = "";
    return;
  } else if (isNaN(inputValue)) {
    addStatement.textContent = "Numbers only! other value are not allowed";
    spanContainer.textContent = "";
    return;
  } else if (Input.value > 500) {
    addStatement.textContent = "Number most not be greater than 500";
    spanContainer.textContent = "";
    return;
  } else if (Input.value < 0) {
    addStatement.textContent = "Negative numbers are not allowed";
    spanContainer.textContent = "";
    return;
  } else {
    addStatement.textContent = "";
  }

  spanContainer.textContent = ""

  //creating loop to print numbers
  for (let i = 0; i < inputValue; i++) {
    const span = document.createElement("span");
    span.textContent = i + 1;

    const commonClasses = [
      "flex",
      "items-center",
      "justify-center",
      "h-10",
      "w-10",
      "rounded",
      "border",
      "border-2",
    ];

    localStorage.setItem("span", span);

    spanContainer.appendChild(span);

    const colorClasses =
      i % 2 === 0
        ? ["text-red-500", "border-red-500"]
        : ["text-green-500", "border-green-500"];

    span.classList.add(...commonClasses, ...colorClasses);
  }
  spanContainer.appendChild(span);
});

//function on input
Input.addEventListener("input", handleInput);

function handleInput() {
  if (Input.value === "") {
    spanContainer.textContent = "";
    addWelcome.textContent = "Keep enjoying our applications";
    addStatement.textContent = ""
  } else {
    addWelcome.textContent = "";
  }
}

//function on bg-col changer
colorBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const colArr = ["blue", "black", "gray", "white"];
  const randomCol = colArr[Math.floor(Math.random() * colArr.length)];
  body.style.backgroundColor = randomCol;

  //To toggle between black and white
  if (randomCol === "blue" || randomCol === "black" || randomCol === "gray") {
    header.style.color = "white";
    Secheader.style.color = "white";
    addWelcome.style.color = "white";
  } else {
    header.style.color = "black";
    Secheader.style.color = "black";
    addWelcome.style.color = "black";
  }
});
