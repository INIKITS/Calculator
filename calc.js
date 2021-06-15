const buttons = document.getElementsByClassName("buttons");

function displayNum(){
    buttons.addEventListener('click', function(){
        console.log('clicky!');
    })
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
    return x/y;
}

function operate(x,y,oper){
    switch(oper){
        case '+': sum(x,y);
        case '-': subtract(x,y);
        case '*': product(x,y);
        case '/': divide(x,y);
    }
}