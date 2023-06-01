let color = ["red", "yellow", "green"];
let i = 0;
let btn = document.getElementById("btn");
setInterval(changeColor, 10000);

function changeColor() {
btn.style.backgroundColor = color[i];
    ++i;
    if(i == 3) {
        i = 0;
    }
}
