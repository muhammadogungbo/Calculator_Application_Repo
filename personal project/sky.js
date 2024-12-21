const mbody = document.getElementById("carl");
const colorBtn = document.getElementById("colorBtn");

// Function to change color after clicked
colorBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log("clicked");
  const myColorArr = [
    "red",
    "green",
    "blue",
    "pink",
    "orange",
    "yellow",
    "gold",
  ];
  const randomColor = myColorArr[Math.floor(Math.random() * myColorArr.length)];
  mbody.style.backgroundColor = randomColor;
});
