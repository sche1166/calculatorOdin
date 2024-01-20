// Global variables
//latest version//
let inputArray = [];
let currentNumber = "";
let previousNumber=""
const calculatorDisplay = document.getElementById("calculatorDisplay");
const operatorButtons = document.querySelectorAll(".operators");
const numberButtons = document.querySelectorAll(".numbers");
const equals = document.querySelector('#equals');

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
numberButtons.forEach((num) => {
num.addEventListener('click', ()=>{
calculatorDisplay.innerText+= num.innerText
currentNumber+= num.value
})
})

equals.addEventListener('click', ()=>{
    if(currentNumber){
        inputArray.push(currentNumber)
    }
    let result= parseFloat(inputArray[0])
    for (let i=1; i<inputArray.length;i+=2){
   let operator= inputArray[i]
   let nextNumber= parseFloat(inputArray[i+1])
   result = calculations(result,operator,nextNumber)
    }
   
    calculatorDisplay.innerText=result.toString()
    inputArray=[]
    currentNumber= result
})


operatorButtons.forEach((op=>{
op.addEventListener('click', ()=>{
calculatorDisplay.innerText+=op.innerText
inputArray.push(currentNumber, op.value)
currentNumber=''
})
})
)

function updateResults(op){
    operator=op

    if(op==null){
        previousNumber= currentNumber
    }else{
        calculations(currentNumber,operator,previousNumber)

    }
    
}
    // Clears Display and resets variables
    function clearAll() {
        calculatorDisplay.innerText = "";
        inputArray = [];
        currentNumber = "";
    }