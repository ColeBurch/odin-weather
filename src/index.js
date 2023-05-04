import "./style.css";
import githubSVG from "./images/github.svg";
import I113 from "./images/weather/64x64/day/113.png";
import I116 from "./images/weather/64x64/day/116.png";
import I119 from "./images/weather/64x64/day/119.png";
import I122 from "./images/weather/64x64/day/122.png";
import I143 from "./images/weather/64x64/day/143.png";
import I176 from "./images/weather/64x64/day/176.png";
import I179 from "./images/weather/64x64/day/179.png";
import I182 from "./images/weather/64x64/day/182.png";
import I185 from "./images/weather/64x64/day/185.png";
import I200 from "./images/weather/64x64/day/200.png";
import I227 from "./images/weather/64x64/day/227.png";
import I230 from "./images/weather/64x64/day/230.png";
import I248 from "./images/weather/64x64/day/248.png";
import I260 from "./images/weather/64x64/day/260.png";
import I263 from "./images/weather/64x64/day/263.png";
import I266 from "./images/weather/64x64/day/266.png";
import I281 from "./images/weather/64x64/day/281.png";
import I284 from "./images/weather/64x64/day/284.png";
import I293 from "./images/weather/64x64/day/293.png";
import I296 from "./images/weather/64x64/day/296.png";
import I299 from "./images/weather/64x64/day/299.png";
import I302 from "./images/weather/64x64/day/302.png";
import I305 from "./images/weather/64x64/day/305.png";
import I308 from "./images/weather/64x64/day/308.png";
import I311 from "./images/weather/64x64/day/311.png";
import I314 from "./images/weather/64x64/day/314.png";
import I317 from "./images/weather/64x64/day/317.png";
import I320 from "./images/weather/64x64/day/320.png";
import I323 from "./images/weather/64x64/day/323.png";
import I326 from "./images/weather/64x64/day/326.png";
import I329 from "./images/weather/64x64/day/329.png";
import I332 from "./images/weather/64x64/day/332.png";
import I335 from "./images/weather/64x64/day/335.png";
import I338 from "./images/weather/64x64/day/338.png";
import I350 from "./images/weather/64x64/day/350.png";
import I353 from "./images/weather/64x64/day/353.png";
import I356 from "./images/weather/64x64/day/356.png";
import I359 from "./images/weather/64x64/day/359.png";
import I362 from "./images/weather/64x64/day/362.png";
import I365 from "./images/weather/64x64/day/365.png";
import I368 from "./images/weather/64x64/day/368.png";
import I371 from "./images/weather/64x64/day/371.png";
import I374 from "./images/weather/64x64/day/374.png";
import I377 from "./images/weather/64x64/day/377.png";
import I386 from "./images/weather/64x64/day/386.png";
import I389 from "./images/weather/64x64/day/389.png";
import I392 from "./images/weather/64x64/day/392.png";
import I395 from "./images/weather/64x64/day/395.png";

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
  areaInput.setAttribute("placeholder", "Search city");

  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");

  const leftBox = document.createElement("div");
  leftBox.classList.add("leftBox");

  const rightBox = document.createElement("div");
  rightBox.classList.add("rightBox");

  const hourlyForecastWidget = document.createElement("div");
  hourlyForecastWidget.classList.add("hourlyForecastWidget");

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
  mainBody.appendChild(leftBox);
  mainBody.appendChild(rightBox);
  leftBox.appendChild(createCurrentDayWidget());
  rightBox.appendChild(createThreeDayForecastWidget());
  rightBox.appendChild(hourlyForecastWidget);
  footer.appendChild(footerText);
  footer.appendChild(github);
  wrapper.appendChild(header);
  wrapper.appendChild(mainBody);
  wrapper.appendChild(footer);

  form.addEventListener("submit", handleSubmit);

  return wrapper;
}

function createCurrentDayWidget() {
  const currentDayWidget = document.createElement("div");
  currentDayWidget.classList.add("currentDayWidget");

  const locationAndCondition = document.createElement("div");
  locationAndCondition.classList.add("locationAndCondition");

  const condition = document.createElement("div");
  condition.classList.add("condition");
  condition.textContent = "Condition";

  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location";

  const currentWeatherDetails = document.createElement("div");
  currentWeatherDetails.classList.add("currentWeatherDetails");

  const currentTempF = document.createElement("div");
  currentTempF.classList.add("currentTempF");
  currentTempF.classList.add("active");
  currentTempF.textContent = "50";

  const currentWeatherMoreDetails = document.createElement("div");
  currentWeatherMoreDetails.classList.add("currentWeatherMoreDetails");

  const feelsLikeF = document.createElement("div");
  feelsLikeF.classList.add("feelsLikeF");
  feelsLikeF.classList.add("moreDetails");
  feelsLikeF.classList.add("active");
  feelsLikeF.textContent = "FEELS LIKE: 55";

  const windSpeed = document.createElement("div");
  windSpeed.classList.add("windSpeed");
  windSpeed.classList.add("moreDetails");
  windSpeed.textContent = "WIND: 10 MPH";

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  humidity.classList.add("moreDetails");
  humidity.textContent = "HUMIDITY: 10%";

  currentDayWidget.appendChild(locationAndCondition);
  locationAndCondition.appendChild(condition);
  locationAndCondition.appendChild(location);
  currentDayWidget.appendChild(currentWeatherDetails);
  currentWeatherDetails.appendChild(currentTempF);
  currentWeatherDetails.appendChild(currentWeatherMoreDetails);
  currentWeatherMoreDetails.appendChild(feelsLikeF);
  currentWeatherMoreDetails.appendChild(windSpeed);
  currentWeatherMoreDetails.appendChild(humidity);

  return currentDayWidget;
}

function createThreeDayForecastWidget() {
  const threeDayForecastWidget = document.createElement("div");
  threeDayForecastWidget.classList.add("threeDayForecastWidget");

  const todaysForecast = document.createElement("div");
  todaysForecast.classList.add("forecastBox");

  const today = document.createElement("div");
  today.classList.add("threeDayForecastDay");
  today.textContent = "Today";

  const todayHighF = document.createElement("div");
  todayHighF.classList.add("threeDayForecastHighF");
  todayHighF.classList.add("todayHighF");
  todayHighF.textContent = "60F";

  const todayLowF = document.createElement("div");
  todayLowF.classList.add("threeDayForecastLowF");
  todayLowF.classList.add("todayLowF");
  todayLowF.textContent = "50F";

  const todayWeatherIcon = document.createElement("img");
  todayWeatherIcon.classList.add("threeDayForecastIcon");
  todayWeatherIcon.classList.add("todayWeatherIcon");
  let imagePointer = getImagePointer("113");
  todayWeatherIcon.src = imagePointer;

  const tomorrowsForecast = document.createElement("div");
  tomorrowsForecast.classList.add("forecastBox");

  const tomorrow = document.createElement("div");
  tomorrow.classList.add("threeDayForecastDay");
  tomorrow.textContent = "Tomorrow";

  const tomorrowHighF = document.createElement("div");
  tomorrowHighF.classList.add("threeDayForecastHighF");
  tomorrowHighF.classList.add("tomorrowHighF");
  tomorrowHighF.textContent = "61F";

  const tomorrowLowF = document.createElement("div");
  tomorrowLowF.classList.add("threeDayForecastLowF");
  tomorrowLowF.classList.add("tomorrowLowF");
  tomorrowLowF.textContent = "51F";

  const tomorrowWeatherIcon = document.createElement("img");
  tomorrowWeatherIcon.classList.add("threeDayForecastIcon");
  tomorrowWeatherIcon.classList.add("tomorrowWeatherIcon");
  imagePointer = getImagePointer("116");
  tomorrowWeatherIcon.src = imagePointer;

  const inTwoDaysForecast = document.createElement("div");
  inTwoDaysForecast.classList.add("forecastBox");

  const inTwoDays = document.createElement("div");
  inTwoDays.classList.add("threeDayForecastDay");
  inTwoDays.textContent = "In Two Days";

  const inTwoDaysHighF = document.createElement("div");
  inTwoDaysHighF.classList.add("threeDayForecastHighF");
  inTwoDaysHighF.classList.add("inTwoDaysHighF");
  inTwoDaysHighF.textContent = "62F";

  const inTwoDaysLowF = document.createElement("div");
  inTwoDaysLowF.classList.add("threeDayForecastLowF");
  inTwoDaysLowF.classList.add("inTwoDaysLowF");
  inTwoDaysLowF.textContent = "52F";

  const inTwoDaysWeatherIcon = document.createElement("img");
  inTwoDaysWeatherIcon.classList.add("threeDayForecastIcon");
  inTwoDaysWeatherIcon.classList.add("inTwoDaysWeatherIcon");
  imagePointer = getImagePointer("119");
  inTwoDaysWeatherIcon.src = imagePointer;

  threeDayForecastWidget.appendChild(todaysForecast);
  threeDayForecastWidget.appendChild(tomorrowsForecast);
  threeDayForecastWidget.appendChild(inTwoDaysForecast);
  todaysForecast.appendChild(today);
  todaysForecast.appendChild(todayHighF);
  todaysForecast.appendChild(todayLowF);
  todaysForecast.appendChild(todayWeatherIcon);
  tomorrowsForecast.appendChild(tomorrow);
  tomorrowsForecast.appendChild(tomorrowHighF);
  tomorrowsForecast.appendChild(tomorrowLowF);
  tomorrowsForecast.appendChild(tomorrowWeatherIcon);
  inTwoDaysForecast.appendChild(inTwoDays);
  inTwoDaysForecast.appendChild(inTwoDaysHighF);
  inTwoDaysForecast.appendChild(inTwoDaysLowF);
  inTwoDaysForecast.appendChild(inTwoDaysWeatherIcon);

  return threeDayForecastWidget;
}

async function getWeather(location) {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=83eb9e8a5cef4f549f114636231704&q=" +
    location +
    "&days=3&aqi=no&alerts=no";
  const apiResponse = await fetch(url);
  const weatherData = await apiResponse.json();
  console.log(weatherData);

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
  const locationParameter = document.querySelector(".location");
  locationParameter.textContent =
    weatherData.locationName + ", " + weatherData.regionName;
  const conditionParameter = document.querySelector(".condition");
  conditionParameter.textContent = weatherData.currentCondition;
  const currentTempFParameter = document.querySelector(".currentTempF");
  currentTempFParameter.textContent =
    Math.round(weatherData.currentTempFarenheit) + "F";
  const feelsLikeFParameter = document.querySelector(".feelsLikeF");
  feelsLikeFParameter.textContent =
    "FEELS LIKE: " + Math.round(weatherData.currentFeelsLikeFarenheit) + "F";
  const windSpeedParameter = document.querySelector(".windSpeed");
  windSpeedParameter.textContent =
    "WIND: " + weatherData.currentWindSpeed + " MPH";
  const humidityParameter = document.querySelector(".humidity");
  humidityParameter.textContent =
    "HUMIDITY: " + weatherData.currentHumidity + "%";
  const todayHighFParameter = document.querySelector(".todayHighF");
  todayHighFParameter.textContent =
    Math.round(weatherData.currentHighFarenheit) + "F";
  const todayLowFParameter = document.querySelector(".todayLowF");
  todayLowFParameter.textContent =
    Math.round(weatherData.currentLowFarenheit) + "F";
  const todayWeatherIconParameter = document.querySelector(".todayWeatherIcon");
  let imageNumber = weatherData.currentConditionIcon.slice(39, 42);
  todayWeatherIconParameter.src = getImagePointer(imageNumber);
  const tomorrowHighFParameter = document.querySelector(".tomorrowHighF");
  tomorrowHighFParameter.textContent =
    Math.round(weatherData.tomorrowHighFarenheit) + "F";
  const tomorrowLowFParameter = document.querySelector(".tomorrowLowF");
  tomorrowLowFParameter.textContent =
    Math.round(weatherData.tomorrowLowFarenheit) + "F";
  const tomorrowWeatherIconParameter = document.querySelector(
    ".tomorrowWeatherIcon"
  );
  imageNumber = weatherData.tomorrowConditionIcon.slice(39, 42);
  tomorrowWeatherIconParameter.src = getImagePointer(imageNumber);
  const twoDayHighFParameter = document.querySelector(".inTwoDaysHighF");
  twoDayHighFParameter.textContent =
    Math.round(weatherData.twoDayHighFarenheit) + "F";
  const twoDayLowFParameter = document.querySelector(".inTwoDaysLowF");
  twoDayLowFParameter.textContent =
    Math.round(weatherData.twoDayLowFarenheit) + "F";
  const twoDayWeatherIconParameter = document.querySelector(
    ".inTwoDaysWeatherIcon"
  );
  imageNumber = weatherData.twoDayConditionIcon.slice(39, 42);
  twoDayWeatherIconParameter.src = getImagePointer(imageNumber);
}

function handleSubmit(e) {
  e.preventDefault();
  let location = document.getElementById("areaInput").value;
  getWeather(location);
  document.getElementById("areaInput").value = "";
}

function getImagePointer(imageNumber) {
  if (imageNumber == "113") {
    return I113;
  }
  if (imageNumber == "116") {
    return I116;
  }
  if (imageNumber == "119") {
    return I119;
  }
  if (imageNumber == "122") {
    return I122;
  }
  if (imageNumber == "143") {
    return I143;
  }
  if (imageNumber == "176") {
    return I176;
  }
  if (imageNumber == "179") {
    return I179;
  }
  if (imageNumber == "182") {
    return I182;
  }
  if (imageNumber == "185") {
    return I185;
  }
  if (imageNumber == "200") {
    return I200;
  }
  if (imageNumber == "227") {
    return I227;
  }
  if (imageNumber == "230") {
    return I230;
  }
  if (imageNumber == "248") {
    return I248;
  }
  if (imageNumber == "260") {
    return I260;
  }
  if (imageNumber == "263") {
    return I263;
  }
  if (imageNumber == "266") {
    return I266;
  }
  if (imageNumber == "281") {
    return I281;
  }
  if (imageNumber == "284") {
    return I284;
  }
  if (imageNumber == "293") {
    return I293;
  }
  if (imageNumber == "296") {
    return I296;
  }
  if (imageNumber == "299") {
    return I299;
  }
  if (imageNumber == "302") {
    return I302;
  }
  if (imageNumber == "305") {
    return I305;
  }
  if (imageNumber == "308") {
    return I308;
  }
  if (imageNumber == "311") {
    return I311;
  }
  if (imageNumber == "314") {
    return I314;
  }
  if (imageNumber == "317") {
    return I317;
  }
  if (imageNumber == "320") {
    return I320;
  }
  if (imageNumber == "323") {
    return I323;
  }
  if (imageNumber == "326") {
    return I326;
  }
  if (imageNumber == "329") {
    return I329;
  }
  if (imageNumber == "332") {
    return I332;
  }
  if (imageNumber == "335") {
    return I335;
  }
  if (imageNumber == "338") {
    return I338;
  }
  if (imageNumber == "350") {
    return I350;
  }
  if (imageNumber == "353") {
    return I353;
  }
  if (imageNumber == "356") {
    return I356;
  }
  if (imageNumber == "359") {
    return I359;
  }
  if (imageNumber == "362") {
    return I362;
  }
  if (imageNumber == "365") {
    return I365;
  }
  if (imageNumber == "368") {
    return I368;
  }
  if (imageNumber == "371") {
    return I371;
  }
  if (imageNumber == "374") {
    return I374;
  }
  if (imageNumber == "377") {
    return I377;
  }
  if (imageNumber == "386") {
    return I386;
  }
  if (imageNumber == "389") {
    return I389;
  }
  if (imageNumber == "392") {
    return I392;
  }
  if (imageNumber == "395") {
    return I395;
  } else {
    return I113;
  }
}

document.body.appendChild(createLayout());
let location = "Golden, Colorado";
getWeather(location);
