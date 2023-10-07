let firstNum;
let secondNum;
let step = 0;
let Operation;
let result = 0;

let numArray = [];
let numArrTwo = [];

let display = document.getElementById('display');
display.value = 0;
function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num);
        step = 1;
        firstNum = Number(numArray.join(''));
        display.value = firstNum;
    }
    else if (step === 2){
        numArrTwo.push(num);
        secondNum = Number(numArrTwo.join(''));
        display.value = firstNum + operation + secondNum;
    }
}

function getOperator(op){
    step = 2;
    operation = op;
    display.value = firstNum + operation
}
function clearDisplay(){
    display.value = 0;
    firstNum = null;
    secondNum = null;
    step = 0;
    operation = null;
    result = 0;
    numArray = [];
    numArrTwo = [];
}
const calculateEquals = () =>{
    if(operation === '+'){
        result = firstNum + secondNum;
        display.value = result;
        firstNum = result;
        numArrTwo = [];
    }
    else if(operation === '-'){
        result = firstNum - secondNum;
        display.value = result;
        firstNum = result;
        numArrTwo = [];
    }
    else if(operation === '*'){
        result = firstNum * secondNum;
        display.value = result;
        firstNum = result;
        numArrTwo = [];
    }
    else if(operation === '/'){
        result = firstNum / secondNum;
        display.value = result;
        firstNum = result;
        numArrTwo = [];
    }
}