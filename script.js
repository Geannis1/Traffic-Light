var color = "red";
var btn = document.getElementById("button");
setInterval(ChangeColor, 10000);
btn.addEventListener("click", ChangeColor);
function ChangeColor() {
        if(color == "red"){
            color = "yellow";
            btn.style.backgroundColor = 'yellow';
        }else if(culoare == "yellow"){
            color = "green";
            btn.style.backgroundColor = "green";
        }else if(color == "green"){
            color = "red";
            btn.style.backgroundColor = "red";
        }
};
        
        
