var buttons = document.getElementsByClassName("buttons");
var calc = document.getElementById("calculator");
var display = document.getElementById("display");
console.log(display);

var disp = '';
var y = ''; 
var oper = '';

var tempNum = '';

function updateDisplay(value){

    value = y + value;
    disp = value;
    display.innerHTML = disp;
    console.log(disp);
    y = disp;
}

function clearDisplay() {
    display.innerHTML = '0';
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
                oper = '+';
                tempNum = disp;
                console.log(tempNum);
                disp = '';
                y = '';
                value = '';
                break;
            case '-':
                console.log('-');
                oper = '-';
                break;
            case '*':
                console.log('*');
                oper = '*';
                break;
            case '/': 
                console.log('/');
                oper = '/';
                break;
            case '.':
                console.log('.');
                updateDisplay('.');
                break;
            case 'A/C':
                console.log('clear');
                disp = '';
                y = '';
                value = '';
                clearDisplay();
                break;
            case '+/-':
                console.log('plus/min');
                disp = disp * -1;
                display.innerHTML = disp;
                console.log(disp);
                break;
            case '=':
                switch(oper){
                    case '+':
                        operate(tempNum, disp, oper)
                        console.log(typeof(tempNum, disp, oper));
                        console.log(tempNum, disp, oper);
                        break;
                    case '-':
                        break;
                    case '*':
                        break;
                    case '/':
                        break;
                    default:
                        console.log('meeeEEEEEHHHH');
                    
                }
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
    var num1 = parseFloat(x);
    var num2 = parseFloat(y);
    console.log(typeof(num1));
    switch(oper){
        case '+': sum(num1,num2);
        case '-': subtract(x,y);
        case '*': product(x,y);
        case '/': divide(x,y);
    }
}



function sum(x,y){
    disp = (x+y);
    display.innerHTML = disp;
    
    console.log(disp);
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