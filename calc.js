
// setup shortcuts for elements //
var buttons = document.getElementsByClassName("buttons");
var calc = document.getElementById("calculator");
var display = document.getElementById("display");

// empty variables for holding values //
// couldn't think of a better name for the y variable, its just a placeholder for operations //
var disp = '';
var y = ''; 
var oper = '';
var tempNum = '';

// updates display and places values into respective variables //
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

// getting innerHTML from button presses //
function getInput() {
    var value = this.innerHTML;
    sortInput(value);
}

// sorts inputs and sends to respective operations or stores number for later use //
function sortInput(value){
    // Enter == '=' button //
    if (value === 'Enter'){
        operate(tempNum,y,oper);
    }
    // checks for decimal, adds one or does nothing //
    if (value === '.'){
        if (disp.includes('.')){
        }
        else {
        updateDisplay('.');
        }
    }


    
    if (isNaN(value)){

        switch (value){ 
            case '+':
                if (oper){
                    operate(tempNum, y, oper);
                   }
                oper = '+';
                tempNum = disp;
                // this changes decimal button back to normal color, seemed odd to make a function just for this //
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;

            case '-':
                if (oper){
                    operate(tempNum, y, oper);
                   }
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
                oper = '/';
                tempNum = disp;
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearVar();
                break;

            case '.':
                document.getElementById('btndot').style.backgroundColor = 'rgb(213, 175, 202)';
                break;

            case 'A/C':
                disp = '';
                y = '';
                value = '';
                oper = '';
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                clearDisplay();
                break;

            case '+/-':
                disp = disp * -1;
                display.innerHTML = disp;
                break;
                
            case '=':
                if (y === '0' && oper === '/'){
                    display.innerHTML = 'AHHHHHHHHH >:(';
                    fall();
                    break;
                }

                operate(tempNum, y, oper);
                document.getElementById('btndot').style.backgroundColor = 'rgb(238, 175, 202)';
                break;

            default:
                console.log('operator broken');    
            }
        }
    else{
        updateDisplay(value);
    }
}


// listens for and sends input from button click to be sorted //
calc.addEventListener("click", function() {
    for (var i=0; i < buttons.length; i++){
        console.log('for loop');
        buttons[i].addEventListener('click', getInput, false);

    }
})

function clearVar(){
    disp = '';
    y = '';
    value = '';

}

// takes variables and sends to respective operation function //
function operate(x,y,oper){
    var num1 = parseFloat(x);
    var num2 = parseFloat(y);

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

// animation for 0/0 //
function fall(){
    calc.animate([
     {transform: 'rotate(360deg)'},
    ],  {
        
    duration: 400,
    iterations: 10
});}

// keyboard support! //
window.addEventListener('keydown', function (e) {
    sortInput(e.key);
}, false);