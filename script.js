function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
    
}
function operate(num1,num2,operator){
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
    }
}
function occurence(string,array){
    let count=0;
    for (let i = 0; i < array.length; i++) {
        if(string.includes(array[i])){
            count++;
        }
        
    }
    return count;

}
function checkWrongPosition(string,array){
    for (let i = 0; i < array.length; i++) {
        if(string.charAt(0)===array[i] || string.charAt(string.length-1)===array[i]){
            return true;
        }
        
        
    }
    return false;
}
function pointOccurence(string){
    let count=0;
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i)==="."){
            count++;
        }
        
    }
    return count;

}
let numberButtons=document.querySelectorAll(".number_bt");
let operationButtons=document.querySelectorAll(".operation_bt");
let clearButton = document.querySelector("#clear_bt");
let removeButton = document.querySelector("#remove_bt");
let equalsButton = document.querySelector("#equals_bt");
let input = document.querySelector("input");
let resultBox=document.querySelector("#result_box");
let text="";
let symbol;
numberButtons.forEach(i=>{
    i.addEventListener("click",(e)=>{
        text+=e.target.textContent;
        input.value=text;

    })
});
operationButtons.forEach(i=>{
    i.addEventListener("click",(e)=>{
        text+=e.target.textContent;
        input.value=text;
        symbol=e.target.textContent;
    })
});
clearButton.addEventListener("click",()=>{
    input.value="";
    text="";
    resultBox.textContent="";
});
removeButton.addEventListener("click",()=>{
    input.value=input.value.slice(0,input.value.length-1);
    text=input.value;
});
equalsButton.addEventListener("click",()=>{
    let array = input.value.split(/[-+*/]/);
        let num1 = Number(array[0]);
        let num2 = Number(array[1]);
    if(num2===NaN){
        input.value=String(num1);
        text=String(num1);
    }
    else if(occurence(input.value,["+","-","*","/"])>1){
        input.value="invalid input";
        text="";
    }
    else if(checkWrongPosition(input.value,["+","-","*","/"])){
        input.value="invalid input";
        text="";
    }
    else if(pointOccurence(array[0])>1 || pointOccurence(array[1])>1){
        input.value="invalid input";
        text="";
    }
    else if(array[1]==="0"){
        input.value="division by zero is not possible";
        text="";
    }
    else{
        resultBox.textContent=operate(num1,num2,symbol);
        text=resultBox.textContent;
    }

    
    

})







