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
        console.log('value NAN')
        if (oper){
            operate(tempNum, disp, oper);
            tempNum = '';
            oper = '';
    }
        switch (value){ 
            case '+':

                console.log('+');
                oper = '+';
                tempNum = disp;
                console.log(tempNum);
                clearVar();
                break;
            case '-':
                console.log('-');
                oper = '-';
                tempNum = disp;
                clearVar();
                break;
            case '*':
                console.log('*');
                oper = '*';
                tempNum = disp;
                clearVar();
                break;
            case '/': 
                console.log('/');
                oper = '/';
                tempNum = disp;
                clearVar();
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
                oper = '';
                clearDisplay();
                break;
            case '+/-':
                console.log('plus/min');
                disp = disp * -1;
                display.innerHTML = disp;
                console.log(disp);
                break;
            case '=':
                operate(tempNum, disp, oper);
                console.log('=');
                break;
            default:
                console.log('operator broken');    
        }
    }
    else{

        var pointNum = parseFloat(value);
        updateDisplay(pointNum);
    }
    
}
document.addEventListener("click", function() {
    console.log('Event Click');
    for (var i=0; i < buttons.length; i++){
        console.log('for loop');
        buttons[i].addEventListener('click', getInput, false);

    }
}
)

function clearVar(){
    disp = '';
    y = '';
    value = '';

}

function operate(x,y,oper){

    var num1 = parseFloat(x);
    var num2 = parseFloat(y);
    console.log(typeof(num1));
    switch(oper){
        case '+': 
            sum(num1,num2);
            break;
        case '-': 
            subtract(num1,num2);
            break;
        case '*': 
            product(num1,num2);
            break;
        case '/': 
            divide(num1,num2);
            break;
        default:
            console.log('operate function broken');
    }
}



function sum(x,y){
    disp = (x+y);
    display.innerHTML = disp;
}

function subtract(x,y){
    disp = (x-y);
    display.innerHTML = disp;
}

function product(x,y){
    disp = (x*y);
    display.innerHTML = disp;
}

function divide(x,y){
    disp = (x/y + x%y);
    display.innerHTML = disp;
    
    
}