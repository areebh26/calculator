function add(a,b){
    let l = a+b;
    l=String(l);
    if(l.includes(".")){
        let temp = l.substring(position(l,"."),l.length);
        let temp2 = l.substring(0,position(l,"."));
        if(temp.length>5){
            return Number(`${temp2}${temp.substring(0,3)}`);
        }else{
            return Number(`${temp2}${temp}`);
        }

    }else{
        return Number(l);
    }
}
function subtract(a,b){
    let l = a-b;
    l=String(l);
    if(l.includes(".")){
        let temp = l.substring(position(l,"."),l.length);
        let temp2 = l.substring(0,position(l,"."));
        if(temp.length>5){
            return Number(`${temp2}${temp.substring(0,3)}`);
        }else{
            return Number(`${temp2}${temp}`);
        }

    }else{
        return Number(l);
    }
}
function multiply(a,b){
    let l = a*b;
    l=String(l);
    if(l.includes(".")){
        let temp = l.substring(position(l,"."),l.length);
        let temp2 = l.substring(0,position(l,"."));
        if(temp.length>5){
            return Number(`${temp2}${temp.substring(0,3)}`);
        }else{
            return Number(`${temp2}${temp}`);
        }

    }else{
        return Number(l);
    }
}
function divide(a,b){
    let l = a/b;
    l=String(l);
    if(l.includes(".")){
        let temp = l.substring(position(l,"."),l.length);
        let temp2 = l.substring(0,position(l,"."));
        if(temp.length>5){
            return Number(`${temp2}${temp.substring(0,3)}`);
        }else{
            return Number(`${temp2}${temp}`);
        }

    }else{
        return Number(l);
    }
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
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(string[i]===array[j]){
                count++;
            }
            
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
function position(string,ch){
    for (let i = 0; i < string.length; i++) {
        if(string[i]===ch){
            return i;
        }
        
    }
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
        resultBox.textContent="";

    })
});
operationButtons.forEach(i=>{
    i.addEventListener("click",(e)=>{
        
    if(input.value.charAt(input.value.length-1)==="+" || input.value.charAt(input.value.length-1)==="-" || input.value.charAt(input.value.length-1)==="*" || input.value.charAt(input.value.length-1)==="/"){
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
        text="";
        text+=operate(num1,num2,symbol);
        text+=e.target.textContent;
        symbol=e.target.textContent;
        input.value=text;
        
        
        
    }
        }
        else if(resultBox.textContent.length>0){
            text="";
            text+=resultBox.textContent;
            text+=e.target.textContent;
            symbol=e.target.textContent;
            input.value=text;


        }
        else{
            text+=e.target.textContent;
        input.value=text;
        symbol=e.target.textContent;
        resultBox.textContent="";
        }

        
        
        
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
        input.value="";
        text="";
    }

    
    

})
document.addEventListener("keydown",(e)=>{
    if(e.key==="1" || e.key==="2" || e.key==="3" || e.key==="4" || e.key==="5" || e.key==="6" || e.key==="7" || e.key==="8" || e.key=== "9" || e.key==="0"){
        text+=e.key;
        input.value=text;
        resultBox.textContent="";

    }
    else if (e.key==="+" || e.key==="-" || e.key==="*" || e.key==="/" || e.key==="."){
        if(input.value.length>2){
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
        text="";
        text+=operate(num1,num2,symbol);
        text+=e.key;
        symbol=e.key;
        input.value=text;
        
        
        
        }
        }
        else if(resultBox.textContent.length>0){
            text="";
            text+=resultBox.textContent;
            text+=e.key;
            symbol=e.key;
            input.value=text;


        }
        else{
            text+=e.key;
        input.value=text;
        symbol=e.key;
        resultBox.textContent="";
        }
    }
    else if(e.key==="Escape"){
        input.value="";
        text="";
        resultBox.textContent="";
    }
    else if(e.key==="Backspace"){
        input.value=input.value.slice(0,input.value.length-1);
        text=input.value;
    }
    else if (e.key==="Enter"){
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
        input.value="";
        text="";
        }
    }
    
        
    

})






