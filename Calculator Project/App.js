// for text throwers
const addWelcome = document.getElementById("addWelcome")
const addStatement = document.getElementById("addStatement")
const addAnswer = document.getElementById("addAnswer")

//Important
const input = document.getElementById("firstInput")
const addButton = document.getElementById("addButton")
const secondInput = document.getElementById("secondInput")
const minusButton = document.getElementById("minusButton")


//function to addNumbers
addButton.addEventListener("click", (e) => {
e.preventDefault()

//make input a number
  const inputValue = Number(input.value.trim())
  const inputValues = Number(secondInput.value.trim())

  //make important checks
  if(input.value.trim() === ""){
    addStatement.textContent = "Please enter a value"
    addAnswer.textContent = ""
    return
  }else if(secondInput.value.trim() === ""){
    addStatement.textContent = "Enter a value below"
    addAnswer.textContent = ""
    return
  } else if(isNaN(inputValue)){
    addStatement.textContent = "Value entered should be number"
    addAnswer.textContent = ""
    return
  } else if(isNaN(inputValues)){
    addStatement.textContent = "Only numbers are allowed"
    addAnswer.textContent = ""
    return
  } else {
    addStatement.textContent = ""
  }

  //function to addNumbers
  const addNumbers = inputValue+inputValues
  addAnswer.textContent = addNumbers
})

//Function to subNumbers
minusButton.addEventListener("click", (e) => {
e.preventDefault()

//make input a number
  const inputValue = Number(input.value.trim())
  const inputValues = Number(secondInput.value.trim())

  //make important checks
  if(input.value.trim() === ""){
    addStatement.textContent = "Please enter a value"
    addAnswer.textContent = ""
    return
  }else if(secondInput.value.trim() === ""){
    addStatement.textContent = "Enter a value below"
    addAnswer.textContent = ""
    return
  } else if(isNaN(inputValue)){
    addStatement.textContent = "Value entered should be number"
    addAnswer.textContent = ""
    return
  } else if(isNaN(inputValues)){
    addStatement.textContent = "Only numbers are allowed"
    addAnswer.textContent = ""
    return
  } else {
    addStatement.textContent = ""
  }

  //function to addNumbers
  const subNumbers = inputValue-inputValues
  addAnswer.textContent = subNumbers
})


// Function on input
input.addEventListener("input",handleInput)
secondInput.addEventListener("input",handleInput)


function handleInput(){
  if(input.value.trim() === "" && secondInput.value.trim() === ""){
    addAnswer.textContent = ""
    addStatement.textContent = ""
    addWelcome.textContent = "Hello"
  } else{
    addWelcome.textContent = ""
  }
}
