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
