var bakra_eid = new Date("June 17, 2024 12:00:00").getTime();


var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval(function(){
    var countDownDate = new Date("June 17, 2024 12:00:00").getTime();


      var now = new Date().getTime();
    
      var distance = countDownDate - now;

      var year = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12 ));
      var month = Math.floor(distance % (1000 * 60 * 60 * 24 * 30 * 12 ) / (1000 * 60 * 60 * 24 * 30));
      var day = Math.floor(distance % (1000 * 60 * 60 * 24 * 30 ) /(1000 * 60 * 60 * 24));
      var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var second = Math.floor((distance % (1000 * 60)) / 1000);

    
    years.innerText = year + "\n years";  
    months.innerText = month + "\n months";
    days.innerText = day + "\n days";
    hours.innerText = hour + "\n hours";
    minutes.innerText = minute + "\n minutes";
    seconds.innerText = second + "\n seconds";
    
    }, 1000);