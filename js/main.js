let equlat = "";
document.querySelector("#one").addEventListener("click", () =>{
    clickEvent("#one");
});
document.querySelector("#two").addEventListener("click", () =>{
    clickEvent("#two");
});
document.querySelector("#three").addEventListener("click", () =>{
    clickEvent("#three");
});
document.querySelector("#four").addEventListener("click", () =>{
    clickEvent("#four");
});
document.querySelector("#five").addEventListener("click", () =>{
    clickEvent("#five");
});
document.querySelector("#six").addEventListener("click", () =>{
    clickEvent("#six");
});
document.querySelector("#seven").addEventListener("click", () =>{
    clickEvent("#seven");
});
document.querySelector("#eight").addEventListener("click", () =>{
    clickEvent("#eight");
});
document.querySelector("#nine").addEventListener("click", () =>{
    clickEvent("#nine");
});
document.querySelector("#zero").addEventListener("click", () =>{
    clickEvent("#zero");
});
document.querySelector("#division").addEventListener("click", () =>{
    clickEvent("#division");
});
document.querySelector("#multiply").addEventListener("click", () =>{
    clickEvent("#multiply");
});
document.querySelector("#add").addEventListener("click", () =>{
    clickEvent("#add");
});
document.querySelector("#sub").addEventListener("click", () =>{
    clickEvent("#sub");
});
document.querySelector("#decimal").addEventListener("click", () =>{
    clickEvent("#decimal");
});
document.querySelector("#calculate").addEventListener("click",calcEvent)

function clickEvent(s1){
    let value = document.querySelector(s1).innerHTML;
    document.querySelector("#displayMonitor").innerHTML += value;
    equlat+=value;
}
function calcEvent(){
    let equ = document.querySelector("#displayMonitor").innerHTML;
    console.log(equ);
    let newEqu = equ.split("x");
    console.log(newEqu);
    
}
function Calculator(){
    let currentValue = 0;
    let equation = "";
}