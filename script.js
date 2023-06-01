let color = "red";
let btn = document.getElementById("btn");
setInterval(changeColor, 3000);

function changeColor() {
        switch(color){
            case 'red':
                color = "yellow";
                btn.style.backgroundColor = "yellow";
                break;
            case 'yellow':
                color = "green";                    
                btn.style.backgroundColor = "green";
                break;
            case 'green':
                color = "red";                    
                btn.style.backgroundColor = "red";
        }
};
