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
    const threeDayForecast = weatherData["forecast"]["forecastday"]["3"];
    const threeDayHighCelsius = threeDayForecast["day"]["maxtemp_c"];
    const threeDayHighFarenheit = threeDayForecast["day"]["maxtemp_f"];
    const threeDayLowCelsius = threeDayForecast["day"]["mintemp_c"];
    const threeDayLowFarenheit = threeDayForecast["day"]["mintemp_f"];
    const threeDayConditionIcon = threeDayForecast["day"]["condition"]["icon"];
    const fourDayForecast = weatherData["forecast"]["forecastday"]["4"];
    const fourDayHighCelsius = fourDayForecast["day"]["maxtemp_c"];
    const fourDayHighFarenheit = fourDayForecast["day"]["maxtemp_f"];
    const fourDayLowCelsius = fourDayForecast["day"]["mintemp_c"];
    const fourDayLowFarenheit = fourDayForecast["day"]["mintemp_f"];
    const fourDayConditionIcon = fourDayForecast["day"]["condition"]["icon"];
    const fiveDayForecast = weatherData["forecast"]["forecastday"]["5"];
    const fiveDayHighCelsius = fiveDayForecast["day"]["maxtemp_c"];
    const fiveDayHighFarenheit = fiveDayForecast["day"]["maxtemp_f"];
    const fiveDayLowCelsius = fiveDayForecast["day"]["mintemp_c"];
    const fiveDayLowFarenheit = fiveDayForecast["day"]["mintemp_f"];
    const fiveDayConditionIcon = fiveDayForecast["day"]["condition"]["icon"];
    const sixDayForecast = weatherData["forecast"]["forecastday"]["6"];
    const sixDayHighCelsius = sixDayForecast["day"]["maxtemp_c"];
    const sixDayHighFarenheit = sixDayForecast["day"]["maxtemp_f"];
    const sixDayLowCelsius = sixDayForecast["day"]["mintemp_c"];
    const sixDayLowFarenheit = sixDayForecast["day"]["mintemp_f"];
    const sixDayConditionIcon = sixDayForecast["day"]["condition"]["icon"];

    return {
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
      threeDayHighCelsius,
      threeDayHighFarenheit,
      threeDayLowCelsius,
      threeDayLowFarenheit,
      threeDayConditionIcon,
      fourDayHighCelsius,
      fourDayHighFarenheit,
      fourDayLowCelsius,
      fourDayLowFarenheit,
      fourDayConditionIcon,
      fiveDayHighCelsius,
      fiveDayHighFarenheit,
      fiveDayLowCelsius,
      fiveDayLowFarenheit,
      fiveDayConditionIcon,
      sixDayHighCelsius,
      sixDayHighFarenheit,
      sixDayLowCelsius,
      sixDayLowFarenheit,
      sixDayConditionIcon,
    };
  } catch {}
}

function updateDashboard(weatherData) {
  console.log(weatherData);
}

document.body.appendChild(component());
let weatherData = getWeather();
updateDashboard(weatherData);
