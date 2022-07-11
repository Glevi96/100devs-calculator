let instructions = [];
let num = [];
btns = document.getElementsByClassName("value");
for(let i =0 ; i < btns.length;i++){
  btns[i].addEventListener("click",() =>{
    let value = btns[i].innerHTML;
    if(value ==="="){
      console.log(num);
      instructions.push(num.join(""));
      calcEvent();
    }else if (value ==="C"){
      instructions = [];
      resetNum()
      document.querySelector("#monitor").innerHTML = "";
      console.log(instructions)
    }else if(value === "+"){
      instructions.push(num.join(""));
      instructions.push(addition);
      document.querySelector("#monitor").innerHTML += value;
      resetNum()
    }else if(value === "-"){
      instructions.push(num.join(""));
      instructions.push(substraction);
      document.querySelector("#monitor").innerHTML += value;
      resetNum()
    }else if(value === "x"){
      instructions.push(num.join(""));
      instructions.push(multiplication);
      document.querySelector("#monitor").innerHTML += value;
      resetNum()
    }else if(value === "/"){
      instructions.push(num.join(""));
      instructions.push(division);
      document.querySelector("#monitor").innerHTML += value;
      resetNum()
    }else{
      document.querySelector("#monitor").innerHTML += value;
      num.push(value);
      console.log(value);
      console.log(num);
    }
  });
}
function calcEvent(){
document.querySelector("#monitor").innerHTML = instructions[1](instructions[0],instructions[2]);
 num = instructions[1](instructions[0],instructions[2]);
  console.log(instructions);
}
function addition(n1,n2){
  return operation(n1,"+",n2);
}
function substraction(n1,n2){
  return operation(n1,"-",n2);
}
function multiplication(n1,n2){
  return operation(n1,"*",n2);
}
function division(n1,n2){
  return operation(n1,"/",n2);
}
function operation(n1,operator,n2){
  return eval(n1+operator+n2);
}
function Calculator(){
    let currentValue = 0;
    let equation = "";
}
function resetNum(){
  num = [];
}
