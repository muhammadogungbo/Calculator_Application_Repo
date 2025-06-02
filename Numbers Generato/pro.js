//Changes due to colorBtn
const bod = document.getElementById("bod")
const header = document.getElementById("header")
const Secheader = document.getElementById("Secheader")

//Messangers
const addStatement = document.getElementById("addStatement")
const addWelcome = document.getElementById("addWelcome")

//Important
const input = document.getElementById("Input")
const numBtn= document.getElementById("numBtn")
const spanContainer = document.getElementById("spanContainer")
const colorBtn = document.getElementById("colorBtn")


spanContainer.textContent = ""

//Function on numBtn
numBtn.addEventListener("click",(e)=>{
e.preventDefault()

//make input number
 const inputValue = Number(input.value.trim())

 //important validation
 if(input.value.trim() === ""){
  addStatement.textContent = "Please enter a value"
  spanContainer.textContent = ""
  return
 } else if(isNaN(inputValue)){
  addStatement.textContent = "Value must be numeric"
   spanContainer.textContent = ""
  return
 } else if (input.value.trim() > 500){
  addStatement.textContent = "Value must not be greater than 500"
   spanContainer.textContent = ""
  return
 } else if (input.value.trim() < 0){
  addStatement.textContent = "Negative values are not allowed"
   spanContainer.textContent = ""
  return
 } else {
  addStatement.textContent = ""
 }

 spanContainer.textContent = ""

 //Function to print numbers
  for(let i = 0 ; i < inputValue ; i ++){
    //creating boxDiv
     const span = document.createElement("span")
     span.textContent = i+1
     localStorage.setItem("spanCount",i+1)
     localStorage.getItem("spanCount")

     //creating commonClasses
     const commonClasses = ["h-10",
      "w-10","flex","items-center","justify-center","border","border-2","rounded","transition-all","overflow-hidden","duration-300","hover:shadow-md"]

      const colorClasses = i % 2 !== 0 ? ["text-green-500","border-green-500"] : ["text-red-500","border-red-500"]

      span.classList.add(...colorClasses,...commonClasses)

      spanContainer.appendChild(span)
  }
})

//function on input
input.addEventListener("input", handleInput)

function handleInput(){
  if(input.value.trim() === ""){
    addStatement.textContent = ""
    addWelcome.textContent = "Print Up To 500 Boxes With Mohd's Application"
    spanContainer.textContent = ""
  } else{
    addWelcome.textContent = ""
  }
}


//function on colorBtn
colorBtn.addEventListener("click",(e)=>{
  e.preventDefault()

  const colArray = ["gray","green","purple","black","white"]
  const randomCol = colArray[Math.floor(Math.random() *colArray.length)]
  bod.style.backgroundColor = randomCol

  localStorage.setItem("colorToggle", randomCol)
  localStorage.getItem ("colorToggle")

  //Validation to prevent color war
  if(randomCol=== "gray" || randomCol === "green" || randomCol === "purple" || randomCol === "purple" || randomCol === "black"){
    header.style.color = "white"
    Secheader.style.color = "white"
  } else if (randomCol === "white"){
      header.style.color = "black"
    Secheader.style.color = "black"
  }
})