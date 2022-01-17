let valor = 0;
let a = 0;
let num = document.querySelectorAll('button');

function press(elemento){
    if (a == 0){
        display.innerText="";
        display.innerText+=elemento;
        a=1;
    }
    else{
        display.innerText+=elemento;
    }
}
function setOP(elemento){
    display.innerText+=elemento;
}
function calculate(){
    if (display.innerText[1] === "-"){
        valor=display.innerText[0]-display.innerText[2];
        display.innerText=valor;
    }
    if (display.innerText[1] === "+"){
        valor=display.innerText[0]+display.innerText[2];
        display.innerText=valor;
    }
    if (display.innerText[1] === "*"){
        valor=display.innerText[0]*display.innerText[2];
        display.innerText=valor;
    }
    if (display.innerText[1] === "/"){
        valor=display.innerText[0]/display.innerText[2];
        display.innerText=valor;
    }
}