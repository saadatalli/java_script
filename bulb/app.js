var button1 =document.getElementById("on")
var button2 =document.getElementById("off")
var light = document.getElementById("bulb")
var picture = document.getElementById("pic")


button1.addEventListener("click", function () {

  picture.src = ("https://i.pinimg.com/736x/31/8e/52/318e52abb1d1c010b025ec9087863cb5.jpg")
  picture.style.height = "600px";
  picture.style.width = "470px";

});


button2.addEventListener("click", function () {

picture.src = ("none");
    
  });
  