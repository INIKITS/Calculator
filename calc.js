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

    if (value === '.'){
        if (disp.includes('.')){
            console.log('Too many decimals!');
        }
        else {
        updateDisplay('.');
        }
    }


    
    if (isNaN(value)){
        console.log('value NAN')

        switch (value){ 
            case '+':
                if (oper){
                    operate(tempNum, y, oper);
                   }
                console.log('+');
                oper = '+';
                tempNum = disp;
                console.log(tempNum);
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;
            case '-':
                if (oper){
                    operate(tempNum, y, oper);
                   }
                console.log('-');
                oper = '-';
                tempNum = disp;
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;
            case '*':
                if (oper){
                    operate(tempNum, y, oper);
                   }
                console.log('*');
                oper = '*';
                tempNum = disp;
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;
            case '/': 
                if (oper){
                    operate(tempNum, y, oper);
                }
                console.log('/');
                oper = '/';
                tempNum = disp;
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;
            case '.':
                console.log('.');
                document.getElementById('btndot').style.backgroundColor = 'rgb(213, 175, 202)';
                break;
            case 'A/C':
                console.log('clear');
                disp = '';
                y = '';
                value = '';
                oper = '';
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';

                clearDisplay();
                break;
            case '+/-':
                console.log('plus/min');
                disp = disp * -1;
                display.innerHTML = disp;
                console.log(disp);
                break;
            case '=':
                if (y === '0' && oper === '/'){
                    display.innerHTML = 'AHHHHHHHHH >:(';
                    fall();
                    break;
                }
                console.log(tempNum, disp, oper);
                operate(tempNum, y, oper);
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                console.log('=');
                break;
            default:
                console.log('operator broken');    
        }
    }
    else{
        
        updateDisplay(value);
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
    // num1 = num1.toFixed(2);
    // num2 = num2.toFixed(2);
    console.log(typeof(num1));
    console.log(typeof(num2));
    console.log(num1);
    console.log(num2);
    console.log(oper);

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
        case '=':
            console.log('equals!');
            break;
        default:
            console.log('operate function broken');
    }
}



function sum(x,y){
    disp = (x+y);
    disp = disp.toFixed(2);
    display.innerHTML = disp;
}

function subtract(x,y){
    disp = (x-y);
    disp = disp.toFixed(2);
    display.innerHTML = disp;
}

function product(x,y){
    disp = (x*y);
    disp = disp.toFixed(2);
    display.innerHTML = disp;
}

function divide(x,y){
    disp = x/y;
    disp = disp.toFixed(2);
    display.innerHTML = disp;
    
    
}

function fall(){
    console.log('Animate! I hope!');
    calc.animate([
     {transform: 'rotate(360deg)'},
    ],  {
        
    duration: 400,
    iterations: 10
});
}