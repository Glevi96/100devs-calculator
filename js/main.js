document.querySelector("#seven").addEventListener("click", clickEvent);
function clickEvent(){
    let value = document.querySelector("#seven").innerHTML;
    document.querySelector("#displayMonitor").innerHTML += value;
}
function Calculator(){
    let currentValue = 0;

}