function bold(){
    document.getElementById("textarea1").style.fontWeight="bold";
}

function italic(){
    document.getElementById("textarea1").style.fontStyle="italic";
}

function capital(){
    document.getElementById("textarea1").style.textTransform="uppercase";
}

function lower(){
    document.getElementById("textarea1").style.textTransform="lowercase";
}
function underline(){
    document.getElementById("textarea1").style.textDecoration="underline";
}

function changeColor() {
            var gfg = document.getElementById("textarea1");
            var selectColor =document.getElementById("selectColor");
            var selectedColor =selectColor.options[selectColor.selectedIndex].value;
            textarea1.style.color = selectedColor;
        }

        
function reset(){
    document.getElementById("textarea1").style.fontWeight = "normal"; 
    document.getElementById("textarea1").style.textAlign = "left"; 
    document.getElementById("textarea1").style.fontStyle = "normal"; 
    document.getElementById("textarea1").style.textTransform = "capitalize"; 
    document.getElementById("textarea1").style.textDecoration="none";
    document.getElementById("textarea1").value = " "; 
}