const numBtn = document.getElementById("numBtn");
const input = document.getElementById("firstInput");
const addStatement = document.getElementById("addStatement");
const spanContainer = document.getElementById("spanContainer");
const colorBtn = document.getElementById("colorBtn");
const body = document.getElementById("bod");

//function to print out number on the click of the btn
numBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //making input value a number
  const inputValue = parseInt(input.value);

  //making important if statements
  if (input.value === "") {
    addStatement.textContent = "Please Enter a number";
  } else if (isNaN(input.value)) {
    addStatement.textContent = "Please input a number not letters or emojis";
  } else if (input.value > 500) {
    addStatement.textContent =
      "Please enter a number that will be lesser or equals to 500";
  } else if (input.value < 0) {
    addStatement.textContent = "Negative Numbers are not allowed";
  } else {
    addStatement.textContent = "";
  }

  //Creating loop to print spans according to the inputed numbers
  for (let i = 0; i < inputValue; i++) {
    const span = document.createElement("span");
    span.textContent = i + 1;

    //creating designs for span
    const commonClasses = [
      "border-2",
      "h-10",
      "w-10",
      "rounded",
      "flex",
      "items-center",
      "justify-center",
    ];
    spanContainer.appendChild(span);
    //red for odd numbers and  green even numbers
    const colorClasses =
      i % 2 === 0
        ? ["border-red-500", "text-red-500"]
        : ["border-green-500", "text-green-500"];

    //add all classes
    span.classList.add(...commonClasses, ...colorClasses);
  }
});

colorBtn.addEventListener("click", () => {
  const myColorArr = ["red", "green", "blue"];
  const randomColor = myColorArr[Math.floor(Math.random() * myColorArr.length)];
  body.style.backgroundColor = randomColor;
});
