let instructions = "";
btns = document.getElementsByClassName("value");
for(let i =0 ; i < btns.length;i++){
  btns[i].addEventListener("click",() =>{
    let value = btns[i].innerHTML;
    if(value ==="="){
      calcEvent();
    }else if (value ==="C"){
      instructions = "";
      document.querySelector("#monitor").innerHTML = "";
    }else if(value === "x"){
      instructions+="*";
      document.querySelector("#monitor").innerHTML += value;
    }else{
      instruct(value);
    }
  });
}
function instruct(val){
  instructions+=val;
  document.querySelector("#monitor").innerHTML += val;
}
function calcEvent(){
  let result = eval(instructions).toFixed(5);
  document.querySelector("#monitor").innerHTML = result;
  instructions = result;
}
