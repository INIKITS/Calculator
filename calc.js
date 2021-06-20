var buttons = document.getElementsByClassName("buttons");
var calc = document.getElementById("calculator");
var display = document.getElementById("display");
console.log(display);

var disp = '';
var y = ''; 
var oper = '';

function updateDisplay(value){

    value = y + value;
    disp = value;
    display.innerHTML = disp;
    console.log(disp);
    y = disp;
}

function clearDisplay() {
    display.innerHTML = "";
}

console.log(document.getElementsByClassName('buttons'));
var getInput = function() {
    var value = this.innerHTML;
    console.log(value);

    if (isNaN(value)){
        console.log('pooppiieeeee')

        switch (value){ 
            case '+':
                console.log('+');
                break;
            case '-':
                console.log('-');
                break;
            case '*':
                console.log('*');
                break;
            case '/': 
                console.log('/');
                break;
            case '.':
                console.log('.');
                break;
            case 'A/C':
                console.log('clear');
                break;
            case '+/-':
                console.log('plus/min');
                break;
            case '=':
                console.log('=');
                break;
            default:
                console.log('nope');    
        }
    }
    else{
        var pointNum = parseFloat(value);
        updateDisplay(pointNum);
    }
    
}
document.addEventListener("click", function() {
    console.log('butt');
    for (var i=0; i < buttons.length; i++){
        console.log('for loop');
        buttons[i].addEventListener('click', getInput, false);
    }
}
)

function operate(x,y,oper){
    switch(oper){
        case '+': sum(x,y);
        case '-': subtract(x,y);
        case '*': product(x,y);
        case '/': divide(x,y);
    }
}



function sum(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function product(x,y){
    return x*y;
}

function divide(x,y){
    return x/y + x%y;
}