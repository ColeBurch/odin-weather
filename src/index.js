import "./style.css";
import githubSVG from "./images/github.svg";

function createLayout() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const header = document.createElement("header");
  header.classList.add("header");

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("searchContainer");

  const form = document.createElement("form");
  form.classList.add("form");

  const areaInput = document.createElement("input");
  areaInput.classList.add("areaInput");
  areaInput.setAttribute("id", "areaInput");
  areaInput.setAttribute("type", "text");
  areaInput.setAttribute("placeholder", "search city");

  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");

  const footer = document.createElement("footer");

  const footerText = document.createElement("div");
  footerText.classList.add("footerText");
  footerText.textContent = "Made by Cole Burch";

  const github = new Image();
  github.src = githubSVG;
  github.classList.add("github");

  header.appendChild(searchContainer);
  searchContainer.appendChild(form);
  form.appendChild(areaInput);
  footer.appendChild(footerText);
  footer.appendChild(github);
  wrapper.appendChild(header);
  wrapper.appendChild(mainBody);
  wrapper.appendChild(footer);

  form.addEventListener("submit", handleSubmit);

  return wrapper;
}

async function getWeather(location) {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=83eb9e8a5cef4f549f114636231704&q=" +
    location +
    "&days=3&aqi=no&alerts=no";
  const apiResponse = await fetch(url);
  const weatherData = await apiResponse.json();

  const locationName = weatherData["location"]["name"];
  const regionName = weatherData["location"]["region"];
  const currentDayForecast = weatherData["forecast"]["forecastday"]["0"];
  const currentCondition = currentDayForecast["day"]["condition"]["text"];
  const currentConditionIcon = currentDayForecast["day"]["condition"]["icon"];
  const currentHighCelsius = currentDayForecast["day"]["maxtemp_c"];
  const currentHighFarenheit = currentDayForecast["day"]["maxtemp_f"];
  const currentLowCelsius = currentDayForecast["day"]["mintemp_c"];
  const currentLowFarenheit = currentDayForecast["day"]["mintemp_f"];
  const currentTempCelsius = weatherData["current"]["temp_c"];
  const currentTempFarenheit = weatherData["current"]["temp_f"];
  const currentFeelsLikeCelsius = weatherData["current"]["feelslike_c"];
  const currentFeelsLikeFarenheit = weatherData["current"]["feelslike_f"];
  const currentHumidity = weatherData["current"]["humidity"];
  const currentWindSpeed = weatherData["current"]["wind_mph"];
  const currentRainChance = currentDayForecast["day"]["daily_will_it_rain"];
  const tomorrowForecast = weatherData["forecast"]["forecastday"]["1"];
  const tomorrowHighCelsius = tomorrowForecast["day"]["maxtemp_c"];
  const tomorrowHighFarenheit = tomorrowForecast["day"]["maxtemp_f"];
  const tomorrowLowCelsius = tomorrowForecast["day"]["mintemp_c"];
  const tomorrowLowFarenheit = tomorrowForecast["day"]["mintemp_f"];
  const tomorrowConditionIcon = tomorrowForecast["day"]["condition"]["icon"];
  const twoDayForecast = weatherData["forecast"]["forecastday"]["2"];
  const twoDayHighCelsius = twoDayForecast["day"]["maxtemp_c"];
  const twoDayHighFarenheit = twoDayForecast["day"]["maxtemp_f"];
  const twoDayLowCelsius = twoDayForecast["day"]["mintemp_c"];
  const twoDayLowFarenheit = twoDayForecast["day"]["mintemp_f"];
  const twoDayConditionIcon = twoDayForecast["day"]["condition"]["icon"];

  const sparsedWeatherData = {
    locationName,
    regionName,
    currentCondition,
    currentConditionIcon,
    currentHighCelsius,
    currentHighFarenheit,
    currentLowCelsius,
    currentLowFarenheit,
    currentTempCelsius,
    currentTempFarenheit,
    currentFeelsLikeCelsius,
    currentFeelsLikeFarenheit,
    currentWindSpeed,
    currentHumidity,
    currentRainChance,
    tomorrowHighCelsius,
    tomorrowHighFarenheit,
    tomorrowLowCelsius,
    tomorrowLowFarenheit,
    tomorrowConditionIcon,
    twoDayHighCelsius,
    twoDayHighFarenheit,
    twoDayLowCelsius,
    twoDayLowFarenheit,
    twoDayConditionIcon,
  };

  updateDashboard(sparsedWeatherData);
}

function updateDashboard(weatherData) {
  console.log(weatherData);
}

function handleSubmit(e) {
  e.preventDefault();
  let location = document.getElementById("areaInput").value;
  getWeather(location);
}

document.body.appendChild(createLayout());
let location = "Golden, Colorado";
getWeather(location);
