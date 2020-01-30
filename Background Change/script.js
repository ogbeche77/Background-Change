var change = document.querySelector (".btncolor");
var changeBody = document.querySelector ("body");

var colors = ["blue", "red", "green"]

change.addEventListener("click", changeColor);

function changeColor (){
     let random = Math.floor(Math.random()* colors.length)
     changeBody.style.backgroundColor = colors[random];
}