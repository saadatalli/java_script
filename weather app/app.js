var Destinations = [
    { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
    { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
    { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
    { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
    { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
    { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
    { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
    { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
    { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
    { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
    { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
    { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
    { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
    { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
    { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
    { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
    { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
    { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
    { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
    { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  ];

  var locationsDropdown = document.getElementById("locations_dropdown");
  var weatherInfo = document.getElementById("weather_info");
  var weatherList = document.getElementById("weather_list");

  Destinations.forEach((destination, index) => {
    var option = document.createElement("option");
    option.value = index;
    option.textContent = destination.name;
    locationsDropdown.appendChild(option);
  });

  locationsDropdown.addEventListener("change", function () {
    if (this.value !== "") {
      var destination = Destinations[this.value];
      fetchWeather(destination.latitude, destination.longitude, displayWeatherData);
    }
  });

  function fetchWeather(latitude, longitude, callback) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c153479685c47f1b34a83591f3b1acbe`
    )
      .then((res) => res.json())
      .then((data) => {
        callback(data);
      });
  }

  function displayWeatherData(info) {
    weatherList.innerHTML = `
      <li>Location: ${info.name}</li>
      <li>Temperature: ${(info.main.temp - 273.15).toFixed(2)}°C</li>
      <li>Max Temperature: ${(info.main.temp_max - 273.15).toFixed(2)}°C</li>
      <li>Min Temperature: ${(info.main.temp_min - 273.15).toFixed(2)}°C</li>
      <li>Wind Speed: ${info.wind.speed} m/s</li>
    `;
  }