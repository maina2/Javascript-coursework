let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2")
let answer = document.getElementById("answer");
let total = 0;

function add(){
    total = numberOne + numberTwo;
    answer.textContent = total;
    numberOne = "";
    numberTwo = "";
}

function subtract(){
    total = numberOne - numberTwo;
    answer.textContent = total;
    numberOne = "";
    numberTwo = "";
}

function multiply(){
    total = numberOne * numberTwo;
    answer.textContent = total;
    numberOne = "";
    numberTwo = "";
}

function divide(){
    total = numberOne / numberTwo;
    answer.textContent = total;
    numberOne = "";
    numberTwo = "";
}