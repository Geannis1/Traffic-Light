var culoare = "rosu";
        var btn = document.getElementById("buton");
        setInterval(SchimbaCuloarea, 10000);
        btn.addEventListener("click", SchimbaCuloarea);
        function SchimbaCuloarea() {
            if(culoare == "rosu"){
            culoare = "galben";
            btn.style.backgroundColor = 'yellow';
        }else if(culoare == "galben"){
            culoare = "verde";
            btn.style.backgroundColor = "green";
        }else if(culoare == "verde"){
            culoare = "rosu";
            btn.style.backgroundColor = "red";
        }
    };
        
        