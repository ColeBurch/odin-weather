import "./style.css";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello Webpack on the server";
  btn.innerHTML = "Click me and check the console!";

  btn.onclick = printMe;

  element.classList.add("hello");
  element.appendChild(btn);

  return element;
}

async function getWeather() {
  const apiResponse = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=83eb9e8a5cef4f549f114636231704&q=Golden, Colorado&days=7&aqi=no&alerts=no"
  );
  const weatherData = await apiResponse.json();
  try {
    const locationName = weatherData["location"]["name"];
    const regionName = weatherData["location"]["region"];
    const currentDayForecast = weatherData["forecast"]["forecastday"]["0"];
    const currentCondition = currentDayForecast["day"]["condition"]["text"];
    const currentHighCelsius = currentDayForecast["day"]["maxtemp_c"];
    const currentHighFarenheit = currentDayForecast["day"]["maxtemp_f"];
    const currentLowCelsius = currentDayForecast["day"]["mintemp_c"];
    const currentLowFarenheit = currentDayForecast["day"]["mintemp_f"];
    return {
      locationName,
      regionName,
      currentCondition,
      currentHighCelsius,
      currentHighFarenheit,
      currentLowCelsius,
      currentLowFarenheit,
    };
  } catch {}
}

function updateDashboard(weatherData) {
  console.log(weatherData);
}

document.body.appendChild(component());
let weatherData = getWeather();
updateDashboard(weatherData);
