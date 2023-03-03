fetch('https://api.open-meteo.com/v1/forecast?latitude=46.048936592838544&longitude=14.503452828882725&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
  .then(response => response.json())
  .then(vegova_data => {
    console.log(vegova_data);
    var weather_data = vegova_data["current_weather"]
    // You can access the weather data here and do whatever you need with it
    document.getElementById("vegova_temp").textContent = "Temperature: " + weather_data["temperature"] + "°C"
    document.getElementById("vegova_wind").textContent = "Windspeed: " + weather_data["windspeed"] + " km/h"
    document.getElementById("vegova_wind").textContent = "Windspeed: " + weather_data["windspeed"] + " km/h"
    const datetimestring = weather_data["time"]
    const [date, time] = datetimestring.split("T")
    document.getElementById("vegova_date").textContent = "Current date: " + date
    document.getElementById("vegova_time").textContent = "Current time: " + time
  })
  .catch(error => {
    console.error(error);
  }
);

fetch('https://api.open-meteo.com/v1/forecast?latitude=45.963380933308294&longitude=14.295538671057301&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
  .then(response => response.json())
  .then(vrhnika_data => {
    console.log(vrhnika_data);
    var weather_data = vrhnika_data["current_weather"]
    // You can access the weather data here and do whatever you need with it
    document.getElementById("vrhnika_temp").textContent = "Temperature: " + weather_data["temperature"] + "°C"
    document.getElementById("vrhnika_wind").textContent = "Windspeed: " + weather_data["windspeed"] + " km/h"
    document.getElementById("vrhnika_wind").textContent = "Windspeed: " + weather_data["windspeed"] + " km/h"
    const datetimestring = weather_data["time"]
    const [date, time] = datetimestring.split("T")
    document.getElementById("vrhnika_date").textContent = "Current date: " + date
    document.getElementById("vrhnika_time").textContent = "Current time: " + time
  })
  .catch(error => {
    console.error(error);
  }
);