const input = document.getElementById("Input");
const numberBtn = document.getElementById("numberBtn");
//for error message and span container
const addStatement = document.getElementById("eMessanger");
const spanContainer = document.getElementById("numberSpan");

//function to create a button that generates number
numberBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //making input a number
  const inputValue = parseInt(input.value);
  //making important if statements
  if (input.value === "") {
    addStatement.textContent = "please input a number";
  } else if (isNaN(input.value)) {
    addStatement.textContent = "Only numbers should be inputed";
  } else if (input.value > 500) {
    addStatement.textContent = "Numbers inputed should not be greater than 500";
  } else if (input.value < 0) {
    addStatement.textContent = "Negative Numbers are not allowed";
  } else {
    addStatement.text = "";
  }

  //creating the all important loop
  for (let i = 0; i < input.value; i++) {
    const span = document.createElement("span");
    span.textContent = i + 1;

    //creating common classes for span
    const commonClasses = [
      "w-10",
      "h-10",
      "rounded",
      "border-2",
      "flex",
      "items-center",
      "justify-center",
    ];
    spanContainer.appendChild(span);
    //creating special classes
    const colorClasses =
      i % 2 === 0
        ? ["border-red-500", "text-red-500"]
        : ["border-green-500", "text-green-500"];

    span.classList.add(...commonClasses, ...colorClasses);
  }
});
