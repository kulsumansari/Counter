var incBtn = document.getElementById("incCount");
var decBtn = document.getElementById("decCount");
var reset = document.getElementById("reset");

var label=  document.querySelector('.countLable');

let count=0;

const inrementCount=()=>{
    count+=1;
    display();
    
}
const decrementCount=()=>{
    count-=1;
    display();
}

const display= ()=>{
    label.innerHTML= count;
}

const resetCounter=() =>{
    count=0;
    display();
}

incBtn.addEventListener("click", inrementCount);
decBtn.addEventListener("click", decrementCount);
reset.addEventListener("click", resetCounter);






