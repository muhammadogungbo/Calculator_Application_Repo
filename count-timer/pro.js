const numberBtn = document.getElementById("numberBtn");
const input = document.getElementById("Input");
const eMessage = document.getElementById("eMessanger");
const Holder = document.getElementById("numberSpan");

//changing refresh default of the btn
numberBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //make sure Number Going into input is a number
  const inputvalue = parseInt(input.value);

  //Writing some important if statements
  if (input.value == "") {
    eMessage.textContent = "Please Add A Number";
  } else if (isNaN(input.value)) {
    eMessage.textContent = "Do not add text,emojis Numbers Only";
  } else if (input.value > 500) {
    eMessage.textContent = "Numbers Should Not Be Greater Than 500";
  } else {
    eMessage.textContent = "";
  }

  //create Loop to print answers
  for (let i = 0; i < input.value; i++) {
    const mspan = document.createElement("span");
    mspan.textContent = i + 1;

    //adding style to number span
    const commonclasses = [
      "w-10",
      "h-10",
      "flex",
      "items-center",
      "justify-center",
      "border-2",
      "rounded",
    ];
    Holder.append(mspan);
    localStorage.setItem("span", mspan.innerHTML);

    // conditional statement to differ odd numbers from the even once
    const colorClasses =
      i % 2 === 0
        ? ["border-red-500", "text-red-500"]
        : ["border-green-500", "text-green-500"];

    //add the styles to numberspan
    mspan.classList.add(...commonclasses, ...colorClasses);
  }
});
