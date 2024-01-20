// Global variables
let inputArray = [];
let currentNumber = "";
const calculatorDisplay = document.getElementById("calculatorDisplay");
const operatorButtons = document.querySelectorAll(".operators");
const numberButtons = document.querySelectorAll(".numbers");
const equals = document.getElementById('equals');

// Basic mathematical operations
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

// Takes an operator and 2 numbers and then calls one of the above functions on the numbers
function calculations(firstNumber, operator, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber =parseFloat(secondNumber);
    switch (operator) {
    
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break; 
        case '/':
            return divide(firstNumber, secondNumber);
            break;
        default: return secondNumber
    }
    
}


// Event listener for number buttons
numberButtons.forEach((numberButton) => {
numberButton.addEventListener('click', ()=>{
calculatorDisplay.innerText += numberButton.value
currentNumber+= numberButton.value
})
})

// Event listener for operator buttons
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', ()=>{
  calculatorDisplay.innerText+=operatorButton.innerText;
  inputArray.push(currentNumber, operatorButton.value)
  currentNumber=''
    })
})
// Event listener for equals button
equals.addEventListener('click', () => {
    if(currentNumber){
        inputArray.push(currentNumber);}
        let result = parseFloat(inputArray[0])
        for(let i=1; i<inputArray.length; i += 2){
        const operator = inputArray[i]
        const  nextNumber = parseFloat(inputArray[i+1])
        result = calculations(result,operator, nextNumber)
        }
    calculatorDisplay.innerText = result
    inputArray=[]
    currentNumber = result.toString();
    })

    // Clears Display and resets variables
    function clearAll() {
        calculatorDisplay.innerText = "";
        inputArray = [];
        currentNumber = "";
    }