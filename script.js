let firstNumber;
let secondNumber;
let step = 0;
let Operation;
let result = 0;

let numArray = [];
let numArrTwo = [];

let display = document.getElementById('display');
display.value = 0;
function getNumber(num){
    if(result === 0 && step === 0 || step === 1){
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        display.value = firstNumber;

    }
    else if (result === 0 && step === 2){
        numArrTwo.push(num);
        secondNumber = Number(numArrTwo.join(''));
        display.value = numArrTwo;
    }
    else if (result != 0){
        numArrTwo.push(num);
        secondNumber = Number(numArrTwo.join(''));

    }
}

function getOperator(op){
    step = 2;
    operation = op;
}
function clearDisplay(){
    display.value = 0;
    firstNumber = null;
    secondNUmber = null;
    step = 0;
    operation - null;
    result = 0;
    numArray = [];
    numArrTwo = [];
}
const calculateEquals = () =>{
    if(operation === '+'){
        result = firstNumber + secondNumber;
        display.value = result;
    }
    else if(operation === '-'){
        result = firstNumber - secondNumber;
        display.value = result;
    }
    else if(operation === '*'){
        result = firstNumber * secondNumber;
        display.value = result;
    }
    else if(operation === '/'){
        result = firstNumber / secondNumber;
        display.value = result;
    }
}