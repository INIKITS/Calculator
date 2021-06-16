document.querySelectorAll('.buttons').forEach(item => {
    item.addEventListener('click', () =>{
        console.log('clicky');
    })
})
var buttons = document.getElementsByClassName("buttons");

console.log(document.getElementsByClassName('buttons'));
var displayNum = function() {
    console.log('click')
    var attribute = this.getAttribute("innerHTML");
    console.log(attribute);
    alert(attribute);
}

for (var i=0; i < buttons.length; i++){
    console.log(buttons[i]);
    buttons[i].addEventListener('click', displayNum, false);
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