
  var now = new Date();
  
  console.log(now); // date
  console.log(typeof now); // get date type
  
  console.log(now.getDate()); // get date for date object
  console.log("Date", now.toLocaleDateString()); // full date
  
  var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  
  console.log("Day ", dayNames[now.getDay()]);
  
  console.log(now.getMonth());
  console.log(now.getFullYear());
  
  console.log(now.getHours())
  console.log(now.getMinutes())
  console.log(now.getSeconds())
  
  var hours = document.getElementById("hours")
  var minutes = document.getElementById("minutes")
  var seconds = document.getElementById("seconds")
  var ampm = document.getElementById("ampm")

  
  setInterval(function(){
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
  
      var formattedHour = currentHour % 12; 
      if (formattedHour === 0) { 
          formattedHour = 12;
      }
  
      var period = currentHour >= 12 ? "PM" : "AM"; 

      hours.innerText = formattedHour;
      minutes.innerText = currentDate.getMinutes().toString().padStart(2,'0');
      seconds.innerText = currentDate.getSeconds().toString().padStart(2,'0');
      ampm.innerText =period;
  }, 1000);