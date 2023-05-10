"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.whiteText {\n  color: #f3f3f3;\n}\n\n.blackText {\n  color: #000000;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n  gap: 20px;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.sliderContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px;\n  gap: 10px;\n}\n\n.farenheit {\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.celsius {\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #ccc;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #ccc;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTemp {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.currentTempF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentTempC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.currentTempC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.feelsLike {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.feelsLikeF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.feelsLikeF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.feelsLikeC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.feelsLikeC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHigh {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.threeDayForecastLow {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.todayHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.inactive-right {\n  transform: translate(50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.inactive-left {\n  transform: translate(-50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTemp {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.hourlyForecastTemp {\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastTemp.inactive {\n  transform: translate(0, 0) scale(0);\n}\n\n.hourlyForecastTemp.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\n.scrollbarLeft,\n.scrollbarRight {\n  filter: invert(97%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n\n.github.white {\n  filter: invert(100%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.whiteText {\n  color: #f3f3f3;\n}\n\n.blackText {\n  color: #000000;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n  gap: 20px;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.sliderContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px;\n  gap: 10px;\n}\n\n.farenheit {\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.celsius {\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #ccc;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #ccc;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTemp {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.currentTempF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentTempC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.currentTempC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.feelsLike {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.feelsLikeF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.feelsLikeF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.feelsLikeC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.feelsLikeC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHigh {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.threeDayForecastLow {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.todayHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.todayLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.tomorrowLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.inTwoDaysLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.inactive-right {\n  transform: translate(50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.inactive-left {\n  transform: translate(-50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTemp {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.hourlyForecastTemp {\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastTemp.inactive {\n  transform: translate(0, 0) scale(0);\n}\n\n.hourlyForecastTemp.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\n.scrollbarLeft,\n.scrollbarRight {\n  filter: invert(97%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n\n.github.white {\n  filter: invert(100%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/weather/64x64/day/113.png */ "./src/images/weather/64x64/day/113.png");
/* harmony import */ var _images_weather_64x64_day_116_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/weather/64x64/day/116.png */ "./src/images/weather/64x64/day/116.png");
/* harmony import */ var _images_weather_64x64_day_119_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/weather/64x64/day/119.png */ "./src/images/weather/64x64/day/119.png");
/* harmony import */ var _images_weather_64x64_day_122_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/weather/64x64/day/122.png */ "./src/images/weather/64x64/day/122.png");
/* harmony import */ var _images_weather_64x64_day_143_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/weather/64x64/day/143.png */ "./src/images/weather/64x64/day/143.png");
/* harmony import */ var _images_weather_64x64_day_176_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/weather/64x64/day/176.png */ "./src/images/weather/64x64/day/176.png");
/* harmony import */ var _images_weather_64x64_day_179_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/weather/64x64/day/179.png */ "./src/images/weather/64x64/day/179.png");
/* harmony import */ var _images_weather_64x64_day_182_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/weather/64x64/day/182.png */ "./src/images/weather/64x64/day/182.png");
/* harmony import */ var _images_weather_64x64_day_185_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/weather/64x64/day/185.png */ "./src/images/weather/64x64/day/185.png");
/* harmony import */ var _images_weather_64x64_day_200_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/weather/64x64/day/200.png */ "./src/images/weather/64x64/day/200.png");
/* harmony import */ var _images_weather_64x64_day_227_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/weather/64x64/day/227.png */ "./src/images/weather/64x64/day/227.png");
/* harmony import */ var _images_weather_64x64_day_230_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/weather/64x64/day/230.png */ "./src/images/weather/64x64/day/230.png");
/* harmony import */ var _images_weather_64x64_day_248_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/weather/64x64/day/248.png */ "./src/images/weather/64x64/day/248.png");
/* harmony import */ var _images_weather_64x64_day_260_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/weather/64x64/day/260.png */ "./src/images/weather/64x64/day/260.png");
/* harmony import */ var _images_weather_64x64_day_263_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/weather/64x64/day/263.png */ "./src/images/weather/64x64/day/263.png");
/* harmony import */ var _images_weather_64x64_day_266_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/weather/64x64/day/266.png */ "./src/images/weather/64x64/day/266.png");
/* harmony import */ var _images_weather_64x64_day_281_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/weather/64x64/day/281.png */ "./src/images/weather/64x64/day/281.png");
/* harmony import */ var _images_weather_64x64_day_284_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/weather/64x64/day/284.png */ "./src/images/weather/64x64/day/284.png");
/* harmony import */ var _images_weather_64x64_day_293_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/weather/64x64/day/293.png */ "./src/images/weather/64x64/day/293.png");
/* harmony import */ var _images_weather_64x64_day_296_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/weather/64x64/day/296.png */ "./src/images/weather/64x64/day/296.png");
/* harmony import */ var _images_weather_64x64_day_299_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/weather/64x64/day/299.png */ "./src/images/weather/64x64/day/299.png");
/* harmony import */ var _images_weather_64x64_day_302_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/weather/64x64/day/302.png */ "./src/images/weather/64x64/day/302.png");
/* harmony import */ var _images_weather_64x64_day_305_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/weather/64x64/day/305.png */ "./src/images/weather/64x64/day/305.png");
/* harmony import */ var _images_weather_64x64_day_308_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/weather/64x64/day/308.png */ "./src/images/weather/64x64/day/308.png");
/* harmony import */ var _images_weather_64x64_day_311_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/weather/64x64/day/311.png */ "./src/images/weather/64x64/day/311.png");
/* harmony import */ var _images_weather_64x64_day_314_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/weather/64x64/day/314.png */ "./src/images/weather/64x64/day/314.png");
/* harmony import */ var _images_weather_64x64_day_317_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/weather/64x64/day/317.png */ "./src/images/weather/64x64/day/317.png");
/* harmony import */ var _images_weather_64x64_day_320_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/weather/64x64/day/320.png */ "./src/images/weather/64x64/day/320.png");
/* harmony import */ var _images_weather_64x64_day_323_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/weather/64x64/day/323.png */ "./src/images/weather/64x64/day/323.png");
/* harmony import */ var _images_weather_64x64_day_326_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/weather/64x64/day/326.png */ "./src/images/weather/64x64/day/326.png");
/* harmony import */ var _images_weather_64x64_day_329_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/weather/64x64/day/329.png */ "./src/images/weather/64x64/day/329.png");
/* harmony import */ var _images_weather_64x64_day_332_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/weather/64x64/day/332.png */ "./src/images/weather/64x64/day/332.png");
/* harmony import */ var _images_weather_64x64_day_335_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/weather/64x64/day/335.png */ "./src/images/weather/64x64/day/335.png");
/* harmony import */ var _images_weather_64x64_day_338_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/weather/64x64/day/338.png */ "./src/images/weather/64x64/day/338.png");
/* harmony import */ var _images_weather_64x64_day_350_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/weather/64x64/day/350.png */ "./src/images/weather/64x64/day/350.png");
/* harmony import */ var _images_weather_64x64_day_353_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/weather/64x64/day/353.png */ "./src/images/weather/64x64/day/353.png");
/* harmony import */ var _images_weather_64x64_day_356_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/weather/64x64/day/356.png */ "./src/images/weather/64x64/day/356.png");
/* harmony import */ var _images_weather_64x64_day_359_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/weather/64x64/day/359.png */ "./src/images/weather/64x64/day/359.png");
/* harmony import */ var _images_weather_64x64_day_362_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/weather/64x64/day/362.png */ "./src/images/weather/64x64/day/362.png");
/* harmony import */ var _images_weather_64x64_day_365_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/weather/64x64/day/365.png */ "./src/images/weather/64x64/day/365.png");
/* harmony import */ var _images_weather_64x64_day_368_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/weather/64x64/day/368.png */ "./src/images/weather/64x64/day/368.png");
/* harmony import */ var _images_weather_64x64_day_371_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/weather/64x64/day/371.png */ "./src/images/weather/64x64/day/371.png");
/* harmony import */ var _images_weather_64x64_day_374_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/weather/64x64/day/374.png */ "./src/images/weather/64x64/day/374.png");
/* harmony import */ var _images_weather_64x64_day_377_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/weather/64x64/day/377.png */ "./src/images/weather/64x64/day/377.png");
/* harmony import */ var _images_weather_64x64_day_386_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/weather/64x64/day/386.png */ "./src/images/weather/64x64/day/386.png");
/* harmony import */ var _images_weather_64x64_day_389_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/weather/64x64/day/389.png */ "./src/images/weather/64x64/day/389.png");
/* harmony import */ var _images_weather_64x64_day_392_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/weather/64x64/day/392.png */ "./src/images/weather/64x64/day/392.png");
/* harmony import */ var _images_weather_64x64_day_395_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/weather/64x64/day/395.png */ "./src/images/weather/64x64/day/395.png");
/* harmony import */ var _images_weather_64x64_night_113_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/weather/64x64/night/113.png */ "./src/images/weather/64x64/night/113.png");
/* harmony import */ var _images_weather_64x64_night_116_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./images/weather/64x64/night/116.png */ "./src/images/weather/64x64/night/116.png");
/* harmony import */ var _images_weather_64x64_night_119_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./images/weather/64x64/night/119.png */ "./src/images/weather/64x64/night/119.png");
/* harmony import */ var _images_weather_64x64_night_122_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./images/weather/64x64/night/122.png */ "./src/images/weather/64x64/night/122.png");
/* harmony import */ var _images_weather_64x64_night_143_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./images/weather/64x64/night/143.png */ "./src/images/weather/64x64/night/143.png");
/* harmony import */ var _images_weather_64x64_night_176_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./images/weather/64x64/night/176.png */ "./src/images/weather/64x64/night/176.png");
/* harmony import */ var _images_weather_64x64_night_179_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./images/weather/64x64/night/179.png */ "./src/images/weather/64x64/night/179.png");
/* harmony import */ var _images_weather_64x64_night_182_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./images/weather/64x64/night/182.png */ "./src/images/weather/64x64/night/182.png");
/* harmony import */ var _images_weather_64x64_night_185_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./images/weather/64x64/night/185.png */ "./src/images/weather/64x64/night/185.png");
/* harmony import */ var _images_weather_64x64_night_200_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./images/weather/64x64/night/200.png */ "./src/images/weather/64x64/night/200.png");
/* harmony import */ var _images_weather_64x64_night_227_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./images/weather/64x64/night/227.png */ "./src/images/weather/64x64/night/227.png");
/* harmony import */ var _images_weather_64x64_night_230_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./images/weather/64x64/night/230.png */ "./src/images/weather/64x64/night/230.png");
/* harmony import */ var _images_weather_64x64_night_248_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./images/weather/64x64/night/248.png */ "./src/images/weather/64x64/night/248.png");
/* harmony import */ var _images_weather_64x64_night_260_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./images/weather/64x64/night/260.png */ "./src/images/weather/64x64/night/260.png");
/* harmony import */ var _images_weather_64x64_night_263_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./images/weather/64x64/night/263.png */ "./src/images/weather/64x64/night/263.png");
/* harmony import */ var _images_weather_64x64_night_266_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./images/weather/64x64/night/266.png */ "./src/images/weather/64x64/night/266.png");
/* harmony import */ var _images_weather_64x64_night_281_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./images/weather/64x64/night/281.png */ "./src/images/weather/64x64/night/281.png");
/* harmony import */ var _images_weather_64x64_night_284_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./images/weather/64x64/night/284.png */ "./src/images/weather/64x64/night/284.png");
/* harmony import */ var _images_weather_64x64_night_293_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./images/weather/64x64/night/293.png */ "./src/images/weather/64x64/night/293.png");
/* harmony import */ var _images_weather_64x64_night_296_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./images/weather/64x64/night/296.png */ "./src/images/weather/64x64/night/296.png");
/* harmony import */ var _images_weather_64x64_night_299_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./images/weather/64x64/night/299.png */ "./src/images/weather/64x64/night/299.png");
/* harmony import */ var _images_weather_64x64_night_302_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./images/weather/64x64/night/302.png */ "./src/images/weather/64x64/night/302.png");
/* harmony import */ var _images_weather_64x64_night_305_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./images/weather/64x64/night/305.png */ "./src/images/weather/64x64/night/305.png");
/* harmony import */ var _images_weather_64x64_night_308_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./images/weather/64x64/night/308.png */ "./src/images/weather/64x64/night/308.png");
/* harmony import */ var _images_weather_64x64_night_311_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./images/weather/64x64/night/311.png */ "./src/images/weather/64x64/night/311.png");
/* harmony import */ var _images_weather_64x64_night_314_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./images/weather/64x64/night/314.png */ "./src/images/weather/64x64/night/314.png");
/* harmony import */ var _images_weather_64x64_night_317_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./images/weather/64x64/night/317.png */ "./src/images/weather/64x64/night/317.png");
/* harmony import */ var _images_weather_64x64_night_320_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./images/weather/64x64/night/320.png */ "./src/images/weather/64x64/night/320.png");
/* harmony import */ var _images_weather_64x64_night_323_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./images/weather/64x64/night/323.png */ "./src/images/weather/64x64/night/323.png");
/* harmony import */ var _images_weather_64x64_night_326_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./images/weather/64x64/night/326.png */ "./src/images/weather/64x64/night/326.png");
/* harmony import */ var _images_weather_64x64_night_329_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./images/weather/64x64/night/329.png */ "./src/images/weather/64x64/night/329.png");
/* harmony import */ var _images_weather_64x64_night_332_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./images/weather/64x64/night/332.png */ "./src/images/weather/64x64/night/332.png");
/* harmony import */ var _images_weather_64x64_night_335_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./images/weather/64x64/night/335.png */ "./src/images/weather/64x64/night/335.png");
/* harmony import */ var _images_weather_64x64_night_338_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./images/weather/64x64/night/338.png */ "./src/images/weather/64x64/night/338.png");
/* harmony import */ var _images_weather_64x64_night_350_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./images/weather/64x64/night/350.png */ "./src/images/weather/64x64/night/350.png");
/* harmony import */ var _images_weather_64x64_night_353_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./images/weather/64x64/night/353.png */ "./src/images/weather/64x64/night/353.png");
/* harmony import */ var _images_weather_64x64_night_356_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./images/weather/64x64/night/356.png */ "./src/images/weather/64x64/night/356.png");
/* harmony import */ var _images_weather_64x64_night_359_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./images/weather/64x64/night/359.png */ "./src/images/weather/64x64/night/359.png");
/* harmony import */ var _images_weather_64x64_night_362_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./images/weather/64x64/night/362.png */ "./src/images/weather/64x64/night/362.png");
/* harmony import */ var _images_weather_64x64_night_365_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./images/weather/64x64/night/365.png */ "./src/images/weather/64x64/night/365.png");
/* harmony import */ var _images_weather_64x64_night_368_png__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./images/weather/64x64/night/368.png */ "./src/images/weather/64x64/night/368.png");
/* harmony import */ var _images_weather_64x64_night_371_png__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./images/weather/64x64/night/371.png */ "./src/images/weather/64x64/night/371.png");
/* harmony import */ var _images_weather_64x64_night_374_png__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./images/weather/64x64/night/374.png */ "./src/images/weather/64x64/night/374.png");
/* harmony import */ var _images_weather_64x64_night_377_png__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./images/weather/64x64/night/377.png */ "./src/images/weather/64x64/night/377.png");
/* harmony import */ var _images_weather_64x64_night_386_png__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./images/weather/64x64/night/386.png */ "./src/images/weather/64x64/night/386.png");
/* harmony import */ var _images_weather_64x64_night_389_png__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./images/weather/64x64/night/389.png */ "./src/images/weather/64x64/night/389.png");
/* harmony import */ var _images_weather_64x64_night_392_png__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./images/weather/64x64/night/392.png */ "./src/images/weather/64x64/night/392.png");
/* harmony import */ var _images_weather_64x64_night_395_png__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./images/weather/64x64/night/395.png */ "./src/images/weather/64x64/night/395.png");
/* harmony import */ var _images_chevron_left_svg__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./images/chevron-left.svg */ "./src/images/chevron-left.svg");
/* harmony import */ var _images_chevron_right_svg__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./images/chevron-right.svg */ "./src/images/chevron-right.svg");
/* harmony import */ var _images_weather_backgrounds_sunny_jpg__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./images/weather/backgrounds/sunny.jpg */ "./src/images/weather/backgrounds/sunny.jpg");
/* harmony import */ var _images_weather_backgrounds_cloudy_jpg__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./images/weather/backgrounds/cloudy.jpg */ "./src/images/weather/backgrounds/cloudy.jpg");
/* harmony import */ var _images_weather_backgrounds_overcast_jpg__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./images/weather/backgrounds/overcast.jpg */ "./src/images/weather/backgrounds/overcast.jpg");
/* harmony import */ var _images_weather_backgrounds_lightning_jpg__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./images/weather/backgrounds/lightning.jpg */ "./src/images/weather/backgrounds/lightning.jpg");
/* harmony import */ var _images_weather_backgrounds_foggy_jpg__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./images/weather/backgrounds/foggy.jpg */ "./src/images/weather/backgrounds/foggy.jpg");
/* harmony import */ var _images_weather_backgrounds_snow_jpg__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./images/weather/backgrounds/snow.jpg */ "./src/images/weather/backgrounds/snow.jpg");
/* harmony import */ var _images_weather_backgrounds_rainy_jpg__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./images/weather/backgrounds/rainy.jpg */ "./src/images/weather/backgrounds/rainy.jpg");
/* harmony import */ var _images_weather_backgrounds_clearNight_jpg__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./images/weather/backgrounds/clearNight.jpg */ "./src/images/weather/backgrounds/clearNight.jpg");













































































































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

  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("sliderContainer");

  const farenheit = document.createElement("div");
  farenheit.classList.add("farenheit");
  farenheit.textContent = "F";

  const cAndFSwitch = document.createElement("label");
  cAndFSwitch.classList.add("switch");
  cAndFSwitch.setAttribute("class", "switch");

  const cAndFInput = document.createElement("input");
  cAndFInput.classList.add("input");
  cAndFInput.setAttribute("type", "checkbox");

  const cAndFSlider = document.createElement("span");
  cAndFSlider.classList.add("slider");
  cAndFSlider.setAttribute("class", "slider round");

  const Celsius = document.createElement("div");
  Celsius.classList.add("celsius");
  Celsius.textContent = "C";

  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");

  const leftBox = document.createElement("div");
  leftBox.classList.add("leftBox");

  const rightBox = document.createElement("div");
  rightBox.classList.add("rightBox");

  const footer = document.createElement("footer");

  const footerText = document.createElement("div");
  footerText.classList.add("footerText");
  footerText.textContent = "Made by Cole Burch";

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/ColeBurch");

  const github = new Image();
  github.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_1__;
  github.classList.add("github");

  header.appendChild(searchContainer);
  form.appendChild(areaInput);
  header.appendChild(sliderContainer);
  sliderContainer.appendChild(farenheit);
  sliderContainer.appendChild(cAndFSwitch);
  cAndFSwitch.appendChild(cAndFInput);
  cAndFSwitch.appendChild(cAndFSlider);
  sliderContainer.appendChild(Celsius);
  searchContainer.appendChild(form);
  mainBody.appendChild(leftBox);
  mainBody.appendChild(rightBox);
  leftBox.appendChild(createCurrentDayWidget());
  rightBox.appendChild(createThreeDayForecastWidget());
  rightBox.appendChild(createHourlyForecastWidget());
  footer.appendChild(footerText);
  footer.appendChild(githubLink);
  githubLink.appendChild(github);
  wrapper.appendChild(header);
  wrapper.appendChild(mainBody);
  wrapper.appendChild(footer);

  form.addEventListener("submit", handleSubmit);
  cAndFInput.addEventListener("change", toggleCAndF);

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

  const currentTempBox = document.createElement("div");
  currentTempBox.classList.add("currentTemp");

  const currentTempC = document.createElement("div");
  currentTempC.classList.add("currentTempC");
  currentTempC.textContent = "10C";

  const currentTempF = document.createElement("div");
  currentTempF.classList.add("currentTempF");
  currentTempF.classList.add("active");
  currentTempF.textContent = "50";

  const currentWeatherMoreDetails = document.createElement("div");
  currentWeatherMoreDetails.classList.add("currentWeatherMoreDetails");

  const feelsLikeBox = document.createElement("div");
  feelsLikeBox.classList.add("feelsLike");

  const feelsLikeC = document.createElement("div");
  feelsLikeC.classList.add("feelsLikeC");
  feelsLikeC.classList.add("moreDetails");
  feelsLikeC.textContent = "FEELS LIKE: 10C";

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
  currentWeatherDetails.appendChild(currentTempBox);
  currentTempBox.appendChild(currentTempC);
  currentTempBox.appendChild(currentTempF);
  currentWeatherDetails.appendChild(currentWeatherMoreDetails);
  currentWeatherMoreDetails.appendChild(feelsLikeBox);
  feelsLikeBox.appendChild(feelsLikeC);
  feelsLikeBox.appendChild(feelsLikeF);
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

  const TodayHighBox = document.createElement("div");
  TodayHighBox.classList.add("threeDayForecastHigh");

  const todayHighC = document.createElement("div");
  todayHighC.classList.add("todayHighC");
  todayHighC.textContent = "10C";

  const todayHighF = document.createElement("div");
  todayHighF.classList.add("todayHighF");
  todayHighF.classList.add("active");
  todayHighF.textContent = "60F";

  const todayLowBox = document.createElement("div");
  todayLowBox.classList.add("threeDayForecastLow");

  const todayLowC = document.createElement("div");
  todayLowC.classList.add("todayLowC");
  todayLowC.textContent = "10C";

  const todayLowF = document.createElement("div");
  todayLowF.classList.add("todayLowF");
  todayLowF.classList.add("active");
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

  const tomorrowHighBox = document.createElement("div");
  tomorrowHighBox.classList.add("threeDayForecastHigh");

  const tomorrowHighC = document.createElement("div");
  tomorrowHighC.classList.add("tomorrowHighC");
  tomorrowHighC.textContent = "16C";

  const tomorrowHighF = document.createElement("div");
  tomorrowHighF.classList.add("tomorrowHighF");
  tomorrowHighF.classList.add("active");
  tomorrowHighF.textContent = "61F";

  const tomorrowLowBox = document.createElement("div");
  tomorrowLowBox.classList.add("threeDayForecastLow");

  const tomorrowLowC = document.createElement("div");
  tomorrowLowC.classList.add("tomorrowLowC");
  tomorrowLowC.textContent = "10C";

  const tomorrowLowF = document.createElement("div");
  tomorrowLowF.classList.add("tomorrowLowF");
  tomorrowLowF.classList.add("active");
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

  const inTwoDaysHighBox = document.createElement("div");
  inTwoDaysHighBox.classList.add("threeDayForecastHigh");

  const inTwoDaysHighC = document.createElement("div");
  inTwoDaysHighC.classList.add("inTwoDaysHighC");
  inTwoDaysHighC.textContent = "17C";

  const inTwoDaysHighF = document.createElement("div");
  inTwoDaysHighF.classList.add("inTwoDaysHighF");
  inTwoDaysHighF.classList.add("active");
  inTwoDaysHighF.textContent = "62F";

  const inTwoDaysLowBox = document.createElement("div");
  inTwoDaysLowBox.classList.add("threeDayForecastLow");

  const inTwoDaysLowC = document.createElement("div");
  inTwoDaysLowC.classList.add("inTwoDaysLowC");
  inTwoDaysLowC.textContent = "10C";

  const inTwoDaysLowF = document.createElement("div");
  inTwoDaysLowF.classList.add("inTwoDaysLowF");
  inTwoDaysLowF.classList.add("active");
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
  todaysForecast.appendChild(TodayHighBox);
  TodayHighBox.appendChild(todayHighC);
  TodayHighBox.appendChild(todayHighF);
  todaysForecast.appendChild(todayLowBox);
  todayLowBox.appendChild(todayLowC);
  todayLowBox.appendChild(todayLowF);
  todaysForecast.appendChild(todayWeatherIcon);
  tomorrowsForecast.appendChild(tomorrow);
  tomorrowsForecast.appendChild(tomorrowHighBox);
  tomorrowHighBox.appendChild(tomorrowHighC);
  tomorrowHighBox.appendChild(tomorrowHighF);
  tomorrowsForecast.appendChild(tomorrowLowBox);
  tomorrowLowBox.appendChild(tomorrowLowC);
  tomorrowLowBox.appendChild(tomorrowLowF);
  tomorrowsForecast.appendChild(tomorrowWeatherIcon);
  inTwoDaysForecast.appendChild(inTwoDays);
  inTwoDaysForecast.appendChild(inTwoDaysHighBox);
  inTwoDaysHighBox.appendChild(inTwoDaysHighC);
  inTwoDaysHighBox.appendChild(inTwoDaysHighF);
  inTwoDaysForecast.appendChild(inTwoDaysLowBox);
  inTwoDaysLowBox.appendChild(inTwoDaysLowC);
  inTwoDaysLowBox.appendChild(inTwoDaysLowF);
  inTwoDaysForecast.appendChild(inTwoDaysWeatherIcon);

  return threeDayForecastWidget;
}

function createHourlyForecastWidget() {
  const hourlyForecastWidget = document.createElement("div");
  hourlyForecastWidget.classList.add("hourlyForecastWidget");

  const hourlyForecastIndexZero = document.createElement("div");
  hourlyForecastIndexZero.setAttribute("id", "hourlyForecastIndexZero");
  hourlyForecastIndexZero.classList.add("hourlyForecastIndex");
  hourlyForecastIndexZero.classList.add("active");

  const zeroHourForecast = document.createElement("div");
  zeroHourForecast.classList.add("hourlyForecastBox");
  zeroHourForecast.setAttribute("id", "zeroHourForecast");

  const zeroHour = document.createElement("div");
  zeroHour.classList.add("hourlyForecastHour");
  zeroHour.setAttribute("id", "zeroHour");
  zeroHour.textContent = "Now";

  const zeroHourTempBox = document.createElement("div");
  zeroHourTempBox.classList.add("hourlyForecastTemp");

  const zeroHourTempC = document.createElement("div");
  zeroHourTempC.classList.add("hourlyForecastTemp");
  zeroHourTempC.setAttribute("id", "zeroHourTempC");
  zeroHourTempC.classList.add("inactive");
  zeroHourTempC.textContent = "15C";

  const zeroHourTempF = document.createElement("div");
  zeroHourTempF.classList.add("hourlyForecastTemp");
  zeroHourTempF.classList.add("active");
  zeroHourTempF.setAttribute("id", "zeroHourTempF");
  zeroHourTempF.textContent = "60F";

  const zeroHourWeatherIcon = document.createElement("img");
  zeroHourWeatherIcon.classList.add("hourlyForecastIcon");
  zeroHourWeatherIcon.setAttribute("id", "zeroHourWeatherIcon");
  let imagePointer = getImagePointer("113");
  zeroHourWeatherIcon.src = imagePointer;

  const oneHourForecast = document.createElement("div");
  oneHourForecast.classList.add("hourlyForecastBox");
  oneHourForecast.setAttribute("id", "oneHourForecast");

  const oneHour = document.createElement("div");
  oneHour.classList.add("hourlyForecastHour");
  oneHour.setAttribute("id", "oneHour");
  oneHour.textContent = "1";

  const oneHourTempBox = document.createElement("div");
  oneHourTempBox.classList.add("hourlyForecastTemp");

  const oneHourTempC = document.createElement("div");
  oneHourTempC.classList.add("hourlyForecastTemp");
  oneHourTempC.setAttribute("id", "oneHourTempC");
  oneHourTempC.classList.add("inactive");
  oneHourTempC.textContent = "16C";

  const oneHourTempF = document.createElement("div");
  oneHourTempF.classList.add("hourlyForecastTemp");
  oneHourTempF.setAttribute("id", "oneHourTempF");
  oneHourTempF.classList.add("active");
  oneHourTempF.textContent = "61F";

  const oneHourWeatherIcon = document.createElement("img");
  oneHourWeatherIcon.classList.add("hourlyForecastIcon");
  oneHourWeatherIcon.setAttribute("id", "oneHourWeatherIcon");
  imagePointer = getImagePointer("116");
  oneHourWeatherIcon.src = imagePointer;

  const twoHourForecast = document.createElement("div");
  twoHourForecast.classList.add("hourlyForecastBox");
  twoHourForecast.setAttribute("id", "twoHourForecast");

  const twoHour = document.createElement("div");
  twoHour.classList.add("hourlyForecastHour");
  twoHour.setAttribute("id", "twoHour");
  twoHour.textContent = "2";

  const twoHourTempBox = document.createElement("div");
  twoHourTempBox.classList.add("hourlyForecastTemp");

  const twoHourTempC = document.createElement("div");
  twoHourTempC.classList.add("hourlyForecastTemp");
  twoHourTempC.setAttribute("id", "twoHourTempC");
  twoHourTempC.classList.add("inactive");
  twoHourTempC.textContent = "17C";

  const twoHourTempF = document.createElement("div");
  twoHourTempF.classList.add("hourlyForecastTemp");
  twoHourTempF.classList.add("active");
  twoHourTempF.setAttribute("id", "twoHourTempF");
  twoHourTempF.textContent = "62F";

  const twoHourWeatherIcon = document.createElement("img");
  twoHourWeatherIcon.classList.add("hourlyForecastIcon");
  twoHourWeatherIcon.setAttribute("id", "twoHourWeatherIcon");
  imagePointer = getImagePointer("119");
  twoHourWeatherIcon.src = imagePointer;

  const threeHourForecast = document.createElement("div");
  threeHourForecast.classList.add("hourlyForecastBox");
  threeHourForecast.setAttribute("id", "threeHourForecast");

  const threeHour = document.createElement("div");
  threeHour.classList.add("hourlyForecastHour");
  threeHour.setAttribute("id", "threeHour");
  threeHour.textContent = "3";

  const threeHourTempBox = document.createElement("div");
  threeHourTempBox.classList.add("hourlyForecastTemp");

  const threeHourTempC = document.createElement("div");
  threeHourTempC.classList.add("hourlyForecastTemp");
  threeHourTempC.setAttribute("id", "threeHourTempC");
  threeHourTempC.classList.add("inactive");
  threeHourTempC.textContent = "18C";

  const threeHourTempF = document.createElement("div");
  threeHourTempF.classList.add("hourlyForecastTemp");
  threeHourTempF.classList.add("active");
  threeHourTempF.setAttribute("id", "threeHourTempF");
  threeHourTempF.textContent = "63F";

  const threeHourWeatherIcon = document.createElement("img");
  threeHourWeatherIcon.classList.add("hourlyForecastIcon");
  threeHourWeatherIcon.setAttribute("id", "threeHourWeatherIcon");
  imagePointer = getImagePointer("122");
  threeHourWeatherIcon.src = imagePointer;

  const hourlyForecastIndexOne = document.createElement("div");
  hourlyForecastIndexOne.setAttribute("id", "hourlyForecastIndexOne");
  hourlyForecastIndexOne.classList.add("hourlyForecastIndex");
  hourlyForecastIndexOne.classList.add("inactive-right");

  const fourHourForecast = document.createElement("div");
  fourHourForecast.classList.add("hourlyForecastBox");
  fourHourForecast.setAttribute("id", "fourHourForecast");

  const fourHour = document.createElement("div");
  fourHour.classList.add("hourlyForecastHour");
  fourHour.setAttribute("id", "fourHour");
  fourHour.textContent = "4";

  const fourHourTempBox = document.createElement("div");
  fourHourTempBox.classList.add("hourlyForecastTemp");

  const fourHourTempC = document.createElement("div");
  fourHourTempC.classList.add("hourlyForecastTemp");
  fourHourTempC.setAttribute("id", "fourHourTempC");
  fourHourTempC.classList.add("inactive");
  fourHourTempC.textContent = "18C";

  const fourHourTempF = document.createElement("div");
  fourHourTempF.classList.add("hourlyForecastTemp");
  fourHourTempF.classList.add("active");
  fourHourTempF.setAttribute("id", "fourHourTempF");
  fourHourTempF.textContent = "64F";

  const fourHourWeatherIcon = document.createElement("img");
  fourHourWeatherIcon.classList.add("hourlyForecastIcon");
  fourHourWeatherIcon.setAttribute("id", "fourHourWeatherIcon");
  imagePointer = getImagePointer("143");
  fourHourWeatherIcon.src = imagePointer;

  const fiveHourForecast = document.createElement("div");
  fiveHourForecast.classList.add("hourlyForecastBox");
  fiveHourForecast.setAttribute("id", "fiveHourForecast");

  const fiveHour = document.createElement("div");
  fiveHour.classList.add("hourlyForecastHour");
  fiveHour.setAttribute("id", "fiveHour");
  fiveHour.textContent = "5";

  const fiveHourTempBox = document.createElement("div");
  fiveHourTempBox.classList.add("hourlyForecastTemp");

  const fiveHourTempC = document.createElement("div");
  fiveHourTempC.classList.add("hourlyForecastTemp");
  fiveHourTempC.setAttribute("id", "fiveHourTempC");
  fiveHourTempC.classList.add("inactive");
  fiveHourTempC.textContent = "18C";

  const fiveHourTempF = document.createElement("div");
  fiveHourTempF.classList.add("hourlyForecastTemp");
  fiveHourTempF.classList.add("active");
  fiveHourTempF.setAttribute("id", "fiveHourTempF");
  fiveHourTempF.textContent = "65F";

  const fiveHourWeatherIcon = document.createElement("img");
  fiveHourWeatherIcon.classList.add("hourlyForecastIcon");
  fiveHourWeatherIcon.setAttribute("id", "fiveHourWeatherIcon");
  imagePointer = getImagePointer("176");
  fiveHourWeatherIcon.src = imagePointer;

  const sixHourForecast = document.createElement("div");
  sixHourForecast.classList.add("hourlyForecastBox");
  sixHourForecast.setAttribute("id", "sixHourForecast");

  const sixHour = document.createElement("div");
  sixHour.classList.add("hourlyForecastHour");
  sixHour.setAttribute("id", "sixHour");
  sixHour.textContent = "6";

  const sixHourTempBox = document.createElement("div");
  sixHourTempBox.classList.add("hourlyForecastTemp");

  const sixHourTempC = document.createElement("div");
  sixHourTempC.classList.add("hourlyForecastTemp");
  sixHourTempC.setAttribute("id", "sixHourTempC");
  sixHourTempC.classList.add("inactive");
  sixHourTempC.textContent = "18C";

  const sixHourTempF = document.createElement("div");
  sixHourTempF.classList.add("hourlyForecastTemp");
  sixHourTempF.classList.add("active");
  sixHourTempF.setAttribute("id", "sixHourTempF");
  sixHourTempF.textContent = "66F";

  const sixHourWeatherIcon = document.createElement("img");
  sixHourWeatherIcon.classList.add("hourlyForecastIcon");
  sixHourWeatherIcon.setAttribute("id", "sixHourWeatherIcon");
  imagePointer = getImagePointer("200");
  sixHourWeatherIcon.src = imagePointer;

  const sevenHourForecast = document.createElement("div");
  sevenHourForecast.classList.add("hourlyForecastBox");
  sevenHourForecast.setAttribute("id", "sevenHourForecast");

  const sevenHour = document.createElement("div");
  sevenHour.classList.add("hourlyForecastHour");
  sevenHour.setAttribute("id", "sevenHour");
  sevenHour.textContent = "7";

  const sevenHourTempBox = document.createElement("div");
  sevenHourTempBox.classList.add("hourlyForecastTemp");

  const sevenHourTempC = document.createElement("div");
  sevenHourTempC.classList.add("hourlyForecastTemp");
  sevenHourTempC.setAttribute("id", "sevenHourTempC");
  sevenHourTempC.classList.add("inactive");
  sevenHourTempC.textContent = "18C";

  const sevenHourTempF = document.createElement("div");
  sevenHourTempF.classList.add("hourlyForecastTemp");
  sevenHourTempF.classList.add("active");
  sevenHourTempF.setAttribute("id", "sevenHourTempF");
  sevenHourTempF.textContent = "67F";

  const sevenHourWeatherIcon = document.createElement("img");
  sevenHourWeatherIcon.classList.add("hourlyForecastIcon");
  sevenHourWeatherIcon.setAttribute("id", "sevenHourWeatherIcon");
  imagePointer = getImagePointer("227");
  sevenHourWeatherIcon.src = imagePointer;

  const hourlyForecastIndexTwo = document.createElement("div");
  hourlyForecastIndexTwo.setAttribute("id", "hourlyForecastIndexTwo");
  hourlyForecastIndexTwo.classList.add("hourlyForecastIndex");
  hourlyForecastIndexTwo.classList.add("inactive-right");

  const eightHourForecast = document.createElement("div");
  eightHourForecast.classList.add("hourlyForecastBox");
  eightHourForecast.setAttribute("id", "eightHourForecast");

  const eightHour = document.createElement("div");
  eightHour.classList.add("hourlyForecastHour");
  eightHour.setAttribute("id", "eightHour");
  eightHour.textContent = "8";

  const eightHourTempBox = document.createElement("div");
  eightHourTempBox.classList.add("hourlyForecastTemp");

  const eightHourTempC = document.createElement("div");
  eightHourTempC.classList.add("hourlyForecastTemp");
  eightHourTempC.setAttribute("id", "eightHourTempC");
  eightHourTempC.classList.add("inactive");
  eightHourTempC.textContent = "18C";

  const eightHourTempF = document.createElement("div");
  eightHourTempF.classList.add("hourlyForecastTemp");
  eightHourTempF.classList.add("active");
  eightHourTempF.setAttribute("id", "eightHourTempF");
  eightHourTempF.textContent = "68F";

  const eightHourWeatherIcon = document.createElement("img");
  eightHourWeatherIcon.classList.add("hourlyForecastIcon");
  eightHourWeatherIcon.setAttribute("id", "eightHourWeatherIcon");
  imagePointer = getImagePointer("248");
  eightHourWeatherIcon.src = imagePointer;

  const nineHourForecast = document.createElement("div");
  nineHourForecast.classList.add("hourlyForecastBox");
  nineHourForecast.setAttribute("id", "nineHourForecast");

  const nineHour = document.createElement("div");
  nineHour.classList.add("hourlyForecastHour");
  nineHour.setAttribute("id", "nineHour");
  nineHour.textContent = "9";

  const nineHourTempBox = document.createElement("div");
  nineHourTempBox.classList.add("hourlyForecastTemp");

  const nineHourTempC = document.createElement("div");
  nineHourTempC.classList.add("hourlyForecastTemp");
  nineHourTempC.setAttribute("id", "nineHourTempC");
  nineHourTempC.classList.add("inactive");
  nineHourTempC.textContent = "18C";

  const nineHourTempF = document.createElement("div");
  nineHourTempF.classList.add("hourlyForecastTemp");
  nineHourTempF.classList.add("active");
  nineHourTempF.setAttribute("id", "nineHourTempF");
  nineHourTempF.textContent = "69F";

  const nineHourWeatherIcon = document.createElement("img");
  nineHourWeatherIcon.classList.add("hourlyForecastIcon");
  nineHourWeatherIcon.setAttribute("id", "nineHourWeatherIcon");
  imagePointer = getImagePointer("296");
  nineHourWeatherIcon.src = imagePointer;

  const tenHourForecast = document.createElement("div");
  tenHourForecast.classList.add("hourlyForecastBox");
  tenHourForecast.setAttribute("id", "tenHourForecast");

  const tenHour = document.createElement("div");
  tenHour.classList.add("hourlyForecastHour");
  tenHour.setAttribute("id", "tenHour");
  tenHour.textContent = "10";

  const tenHourTempBox = document.createElement("div");
  tenHourTempBox.classList.add("hourlyForecastTemp");

  const tenHourTempC = document.createElement("div");
  tenHourTempC.classList.add("hourlyForecastTemp");
  tenHourTempC.setAttribute("id", "tenHourTempC");
  tenHourTempC.classList.add("inactive");
  tenHourTempC.textContent = "18C";

  const tenHourTempF = document.createElement("div");
  tenHourTempF.classList.add("hourlyForecastTemp");
  tenHourTempF.classList.add("active");
  tenHourTempF.setAttribute("id", "tenHourTempF");
  tenHourTempF.textContent = "70F";

  const tenHourWeatherIcon = document.createElement("img");
  tenHourWeatherIcon.classList.add("hourlyForecastIcon");
  tenHourWeatherIcon.setAttribute("id", "tenHourWeatherIcon");
  imagePointer = getImagePointer("353");
  tenHourWeatherIcon.src = imagePointer;

  const elevenHourForecast = document.createElement("div");
  elevenHourForecast.classList.add("hourlyForecastBox");
  elevenHourForecast.setAttribute("id", "elevenHourForecast");

  const elevenHour = document.createElement("div");
  elevenHour.classList.add("hourlyForecastHour");
  elevenHour.setAttribute("id", "elevenHour");
  elevenHour.textContent = "11";

  const elevenHourTempBox = document.createElement("div");
  elevenHourTempBox.classList.add("hourlyForecastTemp");

  const elevenHourTempC = document.createElement("div");
  elevenHourTempC.classList.add("hourlyForecastTemp");
  elevenHourTempC.setAttribute("id", "elevenHourTempC");
  elevenHourTempC.classList.add("inactive");
  elevenHourTempC.textContent = "18C";

  const elevenHourTempF = document.createElement("div");
  elevenHourTempF.classList.add("hourlyForecastTemp");
  elevenHourTempF.classList.add("active");
  elevenHourTempF.setAttribute("id", "elevenHourTempF");
  elevenHourTempF.textContent = "71F";

  const elevenHourWeatherIcon = document.createElement("img");
  elevenHourWeatherIcon.classList.add("hourlyForecastIcon");
  elevenHourWeatherIcon.setAttribute("id", "elevenHourWeatherIcon");
  imagePointer = getImagePointer("356");
  elevenHourWeatherIcon.src = imagePointer;

  const scrollbar = document.createElement("div");
  scrollbar.classList.add("scrollbar");

  const scrollbarLeft = document.createElement("img");
  scrollbarLeft.classList.add("scrollbarLeft");
  scrollbarLeft.src = _images_chevron_left_svg__WEBPACK_IMPORTED_MODULE_98__;

  const navDot0 = document.createElement("div");
  navDot0.classList.add("navDot");
  navDot0.setAttribute("id", "navDot0");
  navDot0.classList.add("navActive");

  const navDot1 = document.createElement("div");
  navDot1.classList.add("navDot");
  navDot1.setAttribute("id", "navDot1");

  const navDot2 = document.createElement("div");
  navDot2.classList.add("navDot");
  navDot2.setAttribute("id", "navDot2");

  const scrollbarRight = document.createElement("img");
  scrollbarRight.classList.add("scrollbarRight");
  scrollbarRight.src = _images_chevron_right_svg__WEBPACK_IMPORTED_MODULE_99__;

  hourlyForecastWidget.appendChild(hourlyForecastIndexZero);
  hourlyForecastWidget.appendChild(hourlyForecastIndexOne);
  hourlyForecastWidget.appendChild(hourlyForecastIndexTwo);
  hourlyForecastWidget.appendChild(scrollbar);
  hourlyForecastIndexZero.appendChild(zeroHourForecast);
  hourlyForecastIndexZero.appendChild(oneHourForecast);
  hourlyForecastIndexZero.appendChild(twoHourForecast);
  hourlyForecastIndexZero.appendChild(threeHourForecast);
  hourlyForecastIndexOne.appendChild(fourHourForecast);
  hourlyForecastIndexOne.appendChild(fiveHourForecast);
  hourlyForecastIndexOne.appendChild(sixHourForecast);
  hourlyForecastIndexOne.appendChild(sevenHourForecast);
  hourlyForecastIndexTwo.appendChild(eightHourForecast);
  hourlyForecastIndexTwo.appendChild(nineHourForecast);
  hourlyForecastIndexTwo.appendChild(tenHourForecast);
  hourlyForecastIndexTwo.appendChild(elevenHourForecast);
  zeroHourForecast.appendChild(zeroHour);
  zeroHourForecast.appendChild(zeroHourTempBox);
  zeroHourTempBox.appendChild(zeroHourTempF);
  zeroHourTempBox.appendChild(zeroHourTempC);
  zeroHourForecast.appendChild(zeroHourWeatherIcon);
  oneHourForecast.appendChild(oneHour);
  oneHourForecast.appendChild(oneHourTempBox);
  oneHourTempBox.appendChild(oneHourTempF);
  oneHourTempBox.appendChild(oneHourTempC);
  oneHourForecast.appendChild(oneHourWeatherIcon);
  twoHourForecast.appendChild(twoHour);
  twoHourForecast.appendChild(twoHourTempBox);
  twoHourTempBox.appendChild(twoHourTempF);
  twoHourTempBox.appendChild(twoHourTempC);
  twoHourForecast.appendChild(twoHourWeatherIcon);
  threeHourForecast.appendChild(threeHour);
  threeHourForecast.appendChild(threeHourTempBox);
  threeHourTempBox.appendChild(threeHourTempF);
  threeHourTempBox.appendChild(threeHourTempC);
  threeHourForecast.appendChild(threeHourWeatherIcon);
  fourHourForecast.appendChild(fourHour);
  fourHourForecast.appendChild(fourHourTempBox);
  fourHourTempBox.appendChild(fourHourTempC);
  fourHourTempBox.appendChild(fourHourTempF);
  fourHourForecast.appendChild(fourHourWeatherIcon);
  fiveHourForecast.appendChild(fiveHour);
  fiveHourForecast.appendChild(fiveHourTempBox);
  fiveHourTempBox.appendChild(fiveHourTempC);
  fiveHourTempBox.appendChild(fiveHourTempF);
  fiveHourForecast.appendChild(fiveHourWeatherIcon);
  sixHourForecast.appendChild(sixHour);
  sixHourForecast.appendChild(sixHourTempBox);
  sixHourTempBox.appendChild(sixHourTempC);
  sixHourTempBox.appendChild(sixHourTempF);
  sixHourForecast.appendChild(sixHourWeatherIcon);
  sevenHourForecast.appendChild(sevenHour);
  sevenHourForecast.appendChild(sevenHourTempBox);
  sevenHourTempBox.appendChild(sevenHourTempC);
  sevenHourTempBox.appendChild(sevenHourTempF);
  sevenHourForecast.appendChild(sevenHourWeatherIcon);
  eightHourForecast.appendChild(eightHour);
  eightHourForecast.appendChild(eightHourTempBox);
  eightHourTempBox.appendChild(eightHourTempF);
  eightHourTempBox.appendChild(eightHourTempC);
  eightHourForecast.appendChild(eightHourWeatherIcon);
  nineHourForecast.appendChild(nineHour);
  nineHourForecast.appendChild(nineHourTempBox);
  nineHourTempBox.appendChild(nineHourTempF);
  nineHourTempBox.appendChild(nineHourTempC);
  nineHourForecast.appendChild(nineHourWeatherIcon);
  tenHourForecast.appendChild(tenHour);
  tenHourForecast.appendChild(tenHourTempBox);
  tenHourTempBox.appendChild(tenHourTempF);
  tenHourTempBox.appendChild(tenHourTempC);
  tenHourForecast.appendChild(tenHourWeatherIcon);
  elevenHourForecast.appendChild(elevenHour);
  elevenHourForecast.appendChild(elevenHourTempBox);
  elevenHourTempBox.appendChild(elevenHourTempF);
  elevenHourTempBox.appendChild(elevenHourTempC);
  elevenHourForecast.appendChild(elevenHourWeatherIcon);
  scrollbar.appendChild(scrollbarLeft);
  scrollbar.appendChild(navDot0);
  scrollbar.appendChild(navDot1);
  scrollbar.appendChild(navDot2);
  scrollbar.appendChild(scrollbarRight);

  return hourlyForecastWidget;
}

function getImageVariable(ImageURL) {
  const splitURL = ImageURL.split("/");
  const DayOrNightVariable = splitURL[splitURL.length - 2];
  const imageNumber = ImageURL.slice(
    ImageURL.lastIndexOf("/"),
    ImageURL.lastIndexOf(".")
  ).slice(-3);
  const imageVariable = DayOrNightVariable + imageNumber;
  return imageVariable;
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
  const currentConditionIcon = getImageVariable(
    currentDayForecast["day"]["condition"]["icon"]
  );
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
  const tomorrowConditionIcon = getImageVariable(
    tomorrowForecast["day"]["condition"]["icon"]
  );
  const twoDayForecast = weatherData["forecast"]["forecastday"]["2"];
  const twoDayHighCelsius = twoDayForecast["day"]["maxtemp_c"];
  const twoDayHighFarenheit = twoDayForecast["day"]["maxtemp_f"];
  const twoDayLowCelsius = twoDayForecast["day"]["mintemp_c"];
  const twoDayLowFarenheit = twoDayForecast["day"]["mintemp_f"];
  const twoDayConditionIcon = getImageVariable(
    twoDayForecast["day"]["condition"]["icon"]
  );
  const localTime = Number(weatherData["location"]["localtime"].slice(11, 13));
  let dayCounter = 0;
  let hourCounter = localTime;
  let hourArr = [];
  let tempFArr = [];
  let tempCArr = [];
  let iconArr = [];

  for (let i = 0; i < 12; i++) {
    if (hourCounter > 23) {
      hourCounter = 0;
      dayCounter++;
    }
    hourArr.push(hourCounter);
    tempFArr.push(
      weatherData["forecast"]["forecastday"][dayCounter]["hour"][hourCounter][
        "temp_f"
      ]
    );
    tempCArr.push(
      weatherData["forecast"]["forecastday"][dayCounter]["hour"][hourCounter][
        "temp_c"
      ]
    );
    iconArr.push(
      getImageVariable(
        weatherData["forecast"]["forecastday"][dayCounter]["hour"][hourCounter][
          "condition"
        ]["icon"]
      )
    );
    hourCounter++;
  }

  const zeroHourVar = hourArr[0];
  const zeroHourTempFVar = tempFArr[0];
  const zeroHourTempCVar = tempCArr[0];
  const zeroHourIconVar = iconArr[0];
  const oneHourVar = hourArr[1];
  const oneHourTempFVar = tempFArr[1];
  const oneHourTempCVar = tempCArr[1];
  const oneHourIconVar = iconArr[1];
  const twoHourVar = hourArr[2];
  const twoHourTempFVar = tempFArr[2];
  const twoHourTempCVar = tempCArr[2];
  const twoHourIconVar = iconArr[2];
  const threeHourVar = hourArr[3];
  const threeHourTempFVar = tempFArr[3];
  const threeHourTempCVar = tempCArr[3];
  const threeHourIconVar = iconArr[3];
  const fourHourVar = hourArr[4];
  const fourHourTempFVar = tempFArr[4];
  const fourHourTempCVar = tempCArr[4];
  const fourHourIconVar = iconArr[4];
  const fiveHourVar = hourArr[5];
  const fiveHourTempFVar = tempFArr[5];
  const fiveHourTempCVar = tempCArr[5];
  const fiveHourIconVar = iconArr[5];
  const sixHourVar = hourArr[6];
  const sixHourTempFVar = tempFArr[6];
  const sixHourTempCVar = tempCArr[6];
  const sixHourIconVar = iconArr[6];
  const sevenHourVar = hourArr[7];
  const sevenHourTempFVar = tempFArr[7];
  const sevenHourTempCVar = tempCArr[7];
  const sevenHourIconVar = iconArr[7];
  const eightHourVar = hourArr[8];
  const eightHourTempFVar = tempFArr[8];
  const eightHourTempCVar = tempCArr[8];
  const eightHourIconVar = iconArr[8];
  const nineHourVar = hourArr[9];
  const nineHourTempFVar = tempFArr[9];
  const nineHourTempCVar = tempCArr[9];
  const nineHourIconVar = iconArr[9];
  const tenHourVar = hourArr[10];
  const tenHourTempFVar = tempFArr[10];
  const tenHourTempCVar = tempCArr[10];
  const tenHourIconVar = iconArr[10];
  const elevenHourVar = hourArr[11];
  const elevenHourTempFVar = tempFArr[11];
  const elevenHourTempCVar = tempCArr[11];
  const elevenHourIconVar = iconArr[11];

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
    localTime,
    zeroHourVar,
    zeroHourTempFVar,
    zeroHourTempCVar,
    zeroHourIconVar,
    oneHourVar,
    oneHourTempFVar,
    oneHourTempCVar,
    oneHourIconVar,
    twoHourVar,
    twoHourTempFVar,
    twoHourTempCVar,
    twoHourIconVar,
    threeHourVar,
    threeHourTempFVar,
    threeHourTempCVar,
    threeHourIconVar,
    fourHourVar,
    fourHourTempFVar,
    fourHourTempCVar,
    fourHourIconVar,
    fiveHourVar,
    fiveHourTempFVar,
    fiveHourTempCVar,
    fiveHourIconVar,
    sixHourVar,
    sixHourTempFVar,
    sixHourTempCVar,
    sixHourIconVar,
    sevenHourVar,
    sevenHourTempFVar,
    sevenHourTempCVar,
    sevenHourIconVar,
    eightHourVar,
    eightHourTempFVar,
    eightHourTempCVar,
    eightHourIconVar,
    nineHourVar,
    nineHourTempFVar,
    nineHourTempCVar,
    nineHourIconVar,
    tenHourVar,
    tenHourTempFVar,
    tenHourTempCVar,
    tenHourIconVar,
    elevenHourVar,
    elevenHourTempFVar,
    elevenHourTempCVar,
    elevenHourIconVar,
  };

  updateDashboard(sparsedWeatherData);
}

function updateDashboard(weatherData) {
  const background = document.querySelector(".wrapper");
  background.setAttribute(
    "style",
    "background-image: url(" +
      setBackgroundImage(weatherData.currentCondition) +
      ")"
  );
  const locationParameter = document.querySelector(".location");
  locationParameter.textContent =
    weatherData.locationName + ", " + weatherData.regionName;
  const conditionParameter = document.querySelector(".condition");
  conditionParameter.textContent = weatherData.currentCondition;
  const currentTempFParameter = document.querySelector(".currentTempF");
  currentTempFParameter.textContent =
    Math.round(weatherData.currentTempFarenheit) + "F";
  const currentTempCParameter = document.querySelector(".currentTempC");
  currentTempCParameter.textContent =
    Math.round(weatherData.currentTempCelsius) + "C";
  const feelsLikeFParameter = document.querySelector(".feelsLikeF");
  feelsLikeFParameter.textContent =
    "FEELS LIKE: " + Math.round(weatherData.currentFeelsLikeFarenheit) + "F";
  const feelsLikeCParameter = document.querySelector(".feelsLikeC");
  feelsLikeCParameter.textContent =
    "FEELS LIKE: " + Math.round(weatherData.currentFeelsLikeCelsius) + "C";
  const windSpeedParameter = document.querySelector(".windSpeed");
  windSpeedParameter.textContent =
    "WIND: " + weatherData.currentWindSpeed + " MPH";
  const humidityParameter = document.querySelector(".humidity");
  humidityParameter.textContent =
    "HUMIDITY: " + weatherData.currentHumidity + "%";
  const todayHighFParameter = document.querySelector(".todayHighF");
  todayHighFParameter.textContent =
    Math.round(weatherData.currentHighFarenheit) + "F";
  const todayHighCParameter = document.querySelector(".todayHighC");
  todayHighCParameter.textContent =
    Math.round(weatherData.currentHighCelsius) + "C";
  const todayLowFParameter = document.querySelector(".todayLowF");
  todayLowFParameter.textContent =
    Math.round(weatherData.currentLowFarenheit) + "F";
  const todayLowCParameter = document.querySelector(".todayLowC");
  todayLowCParameter.textContent =
    Math.round(weatherData.currentLowCelsius) + "C";
  const todayWeatherIconParameter = document.querySelector(".todayWeatherIcon");
  let imageNumber = weatherData.currentConditionIcon;
  todayWeatherIconParameter.src = getImagePointer(imageNumber);
  const tomorrowHighFParameter = document.querySelector(".tomorrowHighF");
  tomorrowHighFParameter.textContent =
    Math.round(weatherData.tomorrowHighFarenheit) + "F";
  const tomorrowHighCParameter = document.querySelector(".tomorrowHighC");
  tomorrowHighCParameter.textContent =
    Math.round(weatherData.tomorrowHighCelsius) + "C";
  const tomorrowLowFParameter = document.querySelector(".tomorrowLowF");
  tomorrowLowFParameter.textContent =
    Math.round(weatherData.tomorrowLowFarenheit) + "F";
  const tomorrowLowCParameter = document.querySelector(".tomorrowLowC");
  tomorrowLowCParameter.textContent =
    Math.round(weatherData.tomorrowLowCelsius) + "C";
  const tomorrowWeatherIconParameter = document.querySelector(
    ".tomorrowWeatherIcon"
  );
  imageNumber = weatherData.tomorrowConditionIcon;
  tomorrowWeatherIconParameter.src = getImagePointer(imageNumber);
  const twoDayHighFParameter = document.querySelector(".inTwoDaysHighF");
  twoDayHighFParameter.textContent =
    Math.round(weatherData.twoDayHighFarenheit) + "F";
  const twoDayHighCParameter = document.querySelector(".inTwoDaysHighC");
  twoDayHighCParameter.textContent =
    Math.round(weatherData.twoDayHighCelsius) + "C";
  const twoDayLowFParameter = document.querySelector(".inTwoDaysLowF");
  twoDayLowFParameter.textContent =
    Math.round(weatherData.twoDayLowFarenheit) + "F";
  const twoDayLowCParameter = document.querySelector(".inTwoDaysLowC");
  twoDayLowCParameter.textContent =
    Math.round(weatherData.twoDayLowCelsius) + "C";
  const twoDayWeatherIconParameter = document.querySelector(
    ".inTwoDaysWeatherIcon"
  );
  imageNumber = weatherData.twoDayConditionIcon;
  twoDayWeatherIconParameter.src = getImagePointer(imageNumber);
  const zeroHourParameter = document.getElementById("zeroHour");
  zeroHourParameter.textContent = weatherData.zeroHourVar;
  const zeroHourTempFParameter = document.getElementById("zeroHourTempF");
  zeroHourTempFParameter.textContent =
    Math.round(weatherData.zeroHourTempFVar) + "F";
  const zeroHourTempCParameter = document.getElementById("zeroHourTempC");
  zeroHourTempCParameter.textContent =
    Math.round(weatherData.zeroHourTempCVar) + "C";
  const zeroHourIconParameter = document.getElementById("zeroHourWeatherIcon");
  imageNumber = weatherData.zeroHourIconVar;
  zeroHourIconParameter.src = getImagePointer(imageNumber);
  const oneHourParameter = document.getElementById("oneHour");
  oneHourParameter.textContent = weatherData.oneHourVar;
  const oneHourTempFParameter = document.getElementById("oneHourTempF");
  oneHourTempFParameter.textContent =
    Math.round(weatherData.oneHourTempFVar) + "F";
  const oneHourTempCParameter = document.getElementById("oneHourTempC");
  oneHourTempCParameter.textContent =
    Math.round(weatherData.oneHourTempCVar) + "C";
  const oneHourIconParameter = document.getElementById("oneHourWeatherIcon");
  imageNumber = weatherData.oneHourIconVar;
  oneHourIconParameter.src = getImagePointer(imageNumber);
  const twoHourParameter = document.getElementById("twoHour");
  twoHourParameter.textContent = weatherData.twoHourVar;
  const twoHourTempFParameter = document.getElementById("twoHourTempF");
  twoHourTempFParameter.textContent =
    Math.round(weatherData.twoHourTempFVar) + "F";
  const twoHourTempCParameter = document.getElementById("twoHourTempC");
  twoHourTempCParameter.textContent =
    Math.round(weatherData.twoHourTempCVar) + "C";
  const twoHourIconParameter = document.getElementById("twoHourWeatherIcon");
  imageNumber = weatherData.twoHourIconVar;
  twoHourIconParameter.src = getImagePointer(imageNumber);
  const threeHourParameter = document.getElementById("threeHour");
  threeHourParameter.textContent = weatherData.threeHourVar;
  const threeHourTempFParameter = document.getElementById("threeHourTempF");
  threeHourTempFParameter.textContent =
    Math.round(weatherData.threeHourTempFVar) + "F";
  const threeHourTempCParameter = document.getElementById("threeHourTempC");
  threeHourTempCParameter.textContent =
    Math.round(weatherData.threeHourTempCVar) + "C";
  const threeHourIconParameter = document.getElementById(
    "threeHourWeatherIcon"
  );
  imageNumber = weatherData.threeHourIconVar;
  threeHourIconParameter.src = getImagePointer(imageNumber);
  const fourHourParameter = document.getElementById("fourHour");
  fourHourParameter.textContent = weatherData.fourHourVar;
  const fourHourTempFParameter = document.getElementById("fourHourTempF");
  fourHourTempFParameter.textContent =
    Math.round(weatherData.fourHourTempFVar) + "F";
  const fourHourTempCParameter = document.getElementById("fourHourTempC");
  fourHourTempCParameter.textContent =
    Math.round(weatherData.fourHourTempCVar) + "C";
  const fourHourIconParameter = document.getElementById("fourHourWeatherIcon");
  imageNumber = weatherData.fourHourIconVar;
  fourHourIconParameter.src = getImagePointer(imageNumber);
  const fiveHourParameter = document.getElementById("fiveHour");
  fiveHourParameter.textContent = weatherData.fiveHourVar;
  const fiveHourTempFParameter = document.getElementById("fiveHourTempF");
  fiveHourTempFParameter.textContent =
    Math.round(weatherData.fiveHourTempFVar) + "F";
  const fiveHourTempCParameter = document.getElementById("fiveHourTempC");
  fiveHourTempCParameter.textContent =
    Math.round(weatherData.fiveHourTempCVar) + "C";
  const fiveHourIconParameter = document.getElementById("fiveHourWeatherIcon");
  imageNumber = weatherData.fiveHourIconVar;
  fiveHourIconParameter.src = getImagePointer(imageNumber);
  const sixHourParameter = document.getElementById("sixHour");
  sixHourParameter.textContent = weatherData.sixHourVar;
  const sixHourTempFParameter = document.getElementById("sixHourTempF");
  sixHourTempFParameter.textContent =
    Math.round(weatherData.sixHourTempFVar) + "F";
  const sixHourTempCParameter = document.getElementById("sixHourTempC");
  sixHourTempCParameter.textContent =
    Math.round(weatherData.sixHourTempCVar) + "C";
  const sixHourIconParameter = document.getElementById("sixHourWeatherIcon");
  imageNumber = weatherData.sixHourIconVar;
  sixHourIconParameter.src = getImagePointer(imageNumber);
  const sevenHourParameter = document.getElementById("sevenHour");
  sevenHourParameter.textContent = weatherData.sevenHourVar;
  const sevenHourTempFParameter = document.getElementById("sevenHourTempF");
  sevenHourTempFParameter.textContent =
    Math.round(weatherData.sevenHourTempFVar) + "F";
  const sevenHourTempCParameter = document.getElementById("sevenHourTempC");
  sevenHourTempCParameter.textContent =
    Math.round(weatherData.sevenHourTempCVar) + "C";
  const sevenHourIconParameter = document.getElementById(
    "sevenHourWeatherIcon"
  );
  imageNumber = weatherData.sevenHourIconVar;
  sevenHourIconParameter.src = getImagePointer(imageNumber);
  const eightHourParameter = document.getElementById("eightHour");
  eightHourParameter.textContent = weatherData.eightHourVar;
  const eightHourTempFParameter = document.getElementById("eightHourTempF");
  eightHourTempFParameter.textContent =
    Math.round(weatherData.eightHourTempFVar) + "F";
  const eightHourTempCParameter = document.getElementById("eightHourTempC");
  eightHourTempCParameter.textContent =
    Math.round(weatherData.eightHourTempCVar) + "C";
  const eightHourIconParameter = document.getElementById(
    "eightHourWeatherIcon"
  );
  imageNumber = weatherData.eightHourIconVar;
  eightHourIconParameter.src = getImagePointer(imageNumber);
  const nineHourParameter = document.getElementById("nineHour");
  nineHourParameter.textContent = weatherData.nineHourVar;
  const nineHourTempFParameter = document.getElementById("nineHourTempF");
  nineHourTempFParameter.textContent =
    Math.round(weatherData.nineHourTempFVar) + "F";
  const nineHourTempCParameter = document.getElementById("nineHourTempC");
  nineHourTempCParameter.textContent =
    Math.round(weatherData.nineHourTempCVar) + "C";
  const nineHourIconParameter = document.getElementById("nineHourWeatherIcon");
  imageNumber = weatherData.nineHourIconVar;
  nineHourIconParameter.src = getImagePointer(imageNumber);
  const tenHourParameter = document.getElementById("tenHour");
  tenHourParameter.textContent = weatherData.tenHourVar;
  const tenHourTempFParameter = document.getElementById("tenHourTempF");
  tenHourTempFParameter.textContent =
    Math.round(weatherData.tenHourTempFVar) + "F";
  const tenHourTempCParameter = document.getElementById("tenHourTempC");
  tenHourTempCParameter.textContent =
    Math.round(weatherData.tenHourTempCVar) + "C";
  const tenHourIconParameter = document.getElementById("tenHourWeatherIcon");
  imageNumber = weatherData.tenHourIconVar;
  tenHourIconParameter.src = getImagePointer(imageNumber);
  const elevenHourParameter = document.getElementById("elevenHour");
  elevenHourParameter.textContent = weatherData.elevenHourVar;
  const elevenHourTempFParameter = document.getElementById("elevenHourTempF");
  elevenHourTempFParameter.textContent =
    Math.round(weatherData.elevenHourTempFVar) + "F";
  const elevenHourTempCParameter = document.getElementById("elevenHourTempC");
  elevenHourTempCParameter.textContent =
    Math.round(weatherData.elevenHourTempCVar) + "C";
  const elevenHourIconParameter = document.getElementById(
    "elevenHourWeatherIcon"
  );
  imageNumber = weatherData.elevenHourIconVar;
  elevenHourIconParameter.src = getImagePointer(imageNumber);
}

function handleSubmit(e) {
  e.preventDefault();
  let location = document.getElementById("areaInput").value;
  getWeather(location);
  document.getElementById("areaInput").value = "";
}

function getImagePointer(imageVariable) {
  const imageDayorNight = imageVariable.slice(0, -3);
  const imageNumber = imageVariable.slice(-3);
  if (imageDayorNight == "day") {
    if (imageNumber == "113") {
      return _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_2__;
    }
    if (imageNumber == "116") {
      return _images_weather_64x64_day_116_png__WEBPACK_IMPORTED_MODULE_3__;
    }
    if (imageNumber == "119") {
      return _images_weather_64x64_day_119_png__WEBPACK_IMPORTED_MODULE_4__;
    }
    if (imageNumber == "122") {
      return _images_weather_64x64_day_122_png__WEBPACK_IMPORTED_MODULE_5__;
    }
    if (imageNumber == "143") {
      return _images_weather_64x64_day_143_png__WEBPACK_IMPORTED_MODULE_6__;
    }
    if (imageNumber == "176") {
      return _images_weather_64x64_day_176_png__WEBPACK_IMPORTED_MODULE_7__;
    }
    if (imageNumber == "179") {
      return _images_weather_64x64_day_179_png__WEBPACK_IMPORTED_MODULE_8__;
    }
    if (imageNumber == "182") {
      return _images_weather_64x64_day_182_png__WEBPACK_IMPORTED_MODULE_9__;
    }
    if (imageNumber == "185") {
      return _images_weather_64x64_day_185_png__WEBPACK_IMPORTED_MODULE_10__;
    }
    if (imageNumber == "200") {
      return _images_weather_64x64_day_200_png__WEBPACK_IMPORTED_MODULE_11__;
    }
    if (imageNumber == "227") {
      return _images_weather_64x64_day_227_png__WEBPACK_IMPORTED_MODULE_12__;
    }
    if (imageNumber == "230") {
      return _images_weather_64x64_day_230_png__WEBPACK_IMPORTED_MODULE_13__;
    }
    if (imageNumber == "248") {
      return _images_weather_64x64_day_248_png__WEBPACK_IMPORTED_MODULE_14__;
    }
    if (imageNumber == "260") {
      return _images_weather_64x64_day_260_png__WEBPACK_IMPORTED_MODULE_15__;
    }
    if (imageNumber == "263") {
      return _images_weather_64x64_day_263_png__WEBPACK_IMPORTED_MODULE_16__;
    }
    if (imageNumber == "266") {
      return _images_weather_64x64_day_266_png__WEBPACK_IMPORTED_MODULE_17__;
    }
    if (imageNumber == "281") {
      return _images_weather_64x64_day_281_png__WEBPACK_IMPORTED_MODULE_18__;
    }
    if (imageNumber == "284") {
      return _images_weather_64x64_day_284_png__WEBPACK_IMPORTED_MODULE_19__;
    }
    if (imageNumber == "293") {
      return _images_weather_64x64_day_293_png__WEBPACK_IMPORTED_MODULE_20__;
    }
    if (imageNumber == "296") {
      return _images_weather_64x64_day_296_png__WEBPACK_IMPORTED_MODULE_21__;
    }
    if (imageNumber == "299") {
      return _images_weather_64x64_day_299_png__WEBPACK_IMPORTED_MODULE_22__;
    }
    if (imageNumber == "302") {
      return _images_weather_64x64_day_302_png__WEBPACK_IMPORTED_MODULE_23__;
    }
    if (imageNumber == "305") {
      return _images_weather_64x64_day_305_png__WEBPACK_IMPORTED_MODULE_24__;
    }
    if (imageNumber == "308") {
      return _images_weather_64x64_day_308_png__WEBPACK_IMPORTED_MODULE_25__;
    }
    if (imageNumber == "311") {
      return _images_weather_64x64_day_311_png__WEBPACK_IMPORTED_MODULE_26__;
    }
    if (imageNumber == "314") {
      return _images_weather_64x64_day_314_png__WEBPACK_IMPORTED_MODULE_27__;
    }
    if (imageNumber == "317") {
      return _images_weather_64x64_day_317_png__WEBPACK_IMPORTED_MODULE_28__;
    }
    if (imageNumber == "320") {
      return _images_weather_64x64_day_320_png__WEBPACK_IMPORTED_MODULE_29__;
    }
    if (imageNumber == "323") {
      return _images_weather_64x64_day_323_png__WEBPACK_IMPORTED_MODULE_30__;
    }
    if (imageNumber == "326") {
      return _images_weather_64x64_day_326_png__WEBPACK_IMPORTED_MODULE_31__;
    }
    if (imageNumber == "329") {
      return _images_weather_64x64_day_329_png__WEBPACK_IMPORTED_MODULE_32__;
    }
    if (imageNumber == "332") {
      return _images_weather_64x64_day_332_png__WEBPACK_IMPORTED_MODULE_33__;
    }
    if (imageNumber == "335") {
      return _images_weather_64x64_day_335_png__WEBPACK_IMPORTED_MODULE_34__;
    }
    if (imageNumber == "338") {
      return _images_weather_64x64_day_338_png__WEBPACK_IMPORTED_MODULE_35__;
    }
    if (imageNumber == "350") {
      return _images_weather_64x64_day_350_png__WEBPACK_IMPORTED_MODULE_36__;
    }
    if (imageNumber == "353") {
      return _images_weather_64x64_day_353_png__WEBPACK_IMPORTED_MODULE_37__;
    }
    if (imageNumber == "356") {
      return _images_weather_64x64_day_356_png__WEBPACK_IMPORTED_MODULE_38__;
    }
    if (imageNumber == "359") {
      return _images_weather_64x64_day_359_png__WEBPACK_IMPORTED_MODULE_39__;
    }
    if (imageNumber == "362") {
      return _images_weather_64x64_day_362_png__WEBPACK_IMPORTED_MODULE_40__;
    }
    if (imageNumber == "365") {
      return _images_weather_64x64_day_365_png__WEBPACK_IMPORTED_MODULE_41__;
    }
    if (imageNumber == "368") {
      return _images_weather_64x64_day_368_png__WEBPACK_IMPORTED_MODULE_42__;
    }
    if (imageNumber == "371") {
      return _images_weather_64x64_day_371_png__WEBPACK_IMPORTED_MODULE_43__;
    }
    if (imageNumber == "374") {
      return _images_weather_64x64_day_374_png__WEBPACK_IMPORTED_MODULE_44__;
    }
    if (imageNumber == "377") {
      return _images_weather_64x64_day_377_png__WEBPACK_IMPORTED_MODULE_45__;
    }
    if (imageNumber == "386") {
      return _images_weather_64x64_day_386_png__WEBPACK_IMPORTED_MODULE_46__;
    }
    if (imageNumber == "389") {
      return _images_weather_64x64_day_389_png__WEBPACK_IMPORTED_MODULE_47__;
    }
    if (imageNumber == "392") {
      return _images_weather_64x64_day_392_png__WEBPACK_IMPORTED_MODULE_48__;
    }
    if (imageNumber == "395") {
      return _images_weather_64x64_day_395_png__WEBPACK_IMPORTED_MODULE_49__;
    } else {
      return _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_2__;
    }
  }
  if (imageDayorNight == "night") {
    if (imageNumber == "113") {
      return _images_weather_64x64_night_113_png__WEBPACK_IMPORTED_MODULE_50__;
    }
    if (imageNumber == "116") {
      return _images_weather_64x64_night_116_png__WEBPACK_IMPORTED_MODULE_51__;
    }
    if (imageNumber == "119") {
      return _images_weather_64x64_night_119_png__WEBPACK_IMPORTED_MODULE_52__;
    }
    if (imageNumber == "122") {
      return _images_weather_64x64_night_122_png__WEBPACK_IMPORTED_MODULE_53__;
    }
    if (imageNumber == "143") {
      return _images_weather_64x64_night_143_png__WEBPACK_IMPORTED_MODULE_54__;
    }
    if (imageNumber == "176") {
      return _images_weather_64x64_night_176_png__WEBPACK_IMPORTED_MODULE_55__;
    }
    if (imageNumber == "179") {
      return _images_weather_64x64_night_179_png__WEBPACK_IMPORTED_MODULE_56__;
    }
    if (imageNumber == "182") {
      return _images_weather_64x64_night_182_png__WEBPACK_IMPORTED_MODULE_57__;
    }
    if (imageNumber == "185") {
      return _images_weather_64x64_night_185_png__WEBPACK_IMPORTED_MODULE_58__;
    }
    if (imageNumber == "200") {
      return _images_weather_64x64_night_200_png__WEBPACK_IMPORTED_MODULE_59__;
    }
    if (imageNumber == "227") {
      return _images_weather_64x64_night_227_png__WEBPACK_IMPORTED_MODULE_60__;
    }
    if (imageNumber == "230") {
      return _images_weather_64x64_night_230_png__WEBPACK_IMPORTED_MODULE_61__;
    }
    if (imageNumber == "248") {
      return _images_weather_64x64_night_248_png__WEBPACK_IMPORTED_MODULE_62__;
    }
    if (imageNumber == "260") {
      return _images_weather_64x64_night_260_png__WEBPACK_IMPORTED_MODULE_63__;
    }
    if (imageNumber == "263") {
      return _images_weather_64x64_night_263_png__WEBPACK_IMPORTED_MODULE_64__;
    }
    if (imageNumber == "266") {
      return _images_weather_64x64_night_266_png__WEBPACK_IMPORTED_MODULE_65__;
    }
    if (imageNumber == "281") {
      return _images_weather_64x64_night_281_png__WEBPACK_IMPORTED_MODULE_66__;
    }
    if (imageNumber == "284") {
      return _images_weather_64x64_night_284_png__WEBPACK_IMPORTED_MODULE_67__;
    }
    if (imageNumber == "293") {
      return _images_weather_64x64_night_293_png__WEBPACK_IMPORTED_MODULE_68__;
    }
    if (imageNumber == "296") {
      return _images_weather_64x64_night_296_png__WEBPACK_IMPORTED_MODULE_69__;
    }
    if (imageNumber == "299") {
      return _images_weather_64x64_night_299_png__WEBPACK_IMPORTED_MODULE_70__;
    }
    if (imageNumber == "302") {
      return _images_weather_64x64_night_302_png__WEBPACK_IMPORTED_MODULE_71__;
    }
    if (imageNumber == "305") {
      return _images_weather_64x64_night_305_png__WEBPACK_IMPORTED_MODULE_72__;
    }
    if (imageNumber == "308") {
      return _images_weather_64x64_night_308_png__WEBPACK_IMPORTED_MODULE_73__;
    }
    if (imageNumber == "311") {
      return _images_weather_64x64_night_311_png__WEBPACK_IMPORTED_MODULE_74__;
    }
    if (imageNumber == "314") {
      return _images_weather_64x64_night_314_png__WEBPACK_IMPORTED_MODULE_75__;
    }
    if (imageNumber == "317") {
      return _images_weather_64x64_night_317_png__WEBPACK_IMPORTED_MODULE_76__;
    }
    if (imageNumber == "320") {
      return _images_weather_64x64_night_320_png__WEBPACK_IMPORTED_MODULE_77__;
    }
    if (imageNumber == "323") {
      return _images_weather_64x64_night_323_png__WEBPACK_IMPORTED_MODULE_78__;
    }
    if (imageNumber == "326") {
      return _images_weather_64x64_night_326_png__WEBPACK_IMPORTED_MODULE_79__;
    }
    if (imageNumber == "329") {
      return _images_weather_64x64_night_329_png__WEBPACK_IMPORTED_MODULE_80__;
    }
    if (imageNumber == "332") {
      return _images_weather_64x64_night_332_png__WEBPACK_IMPORTED_MODULE_81__;
    }
    if (imageNumber == "335") {
      return _images_weather_64x64_night_335_png__WEBPACK_IMPORTED_MODULE_82__;
    }
    if (imageNumber == "338") {
      return _images_weather_64x64_night_338_png__WEBPACK_IMPORTED_MODULE_83__;
    }
    if (imageNumber == "350") {
      return _images_weather_64x64_night_350_png__WEBPACK_IMPORTED_MODULE_84__;
    }
    if (imageNumber == "353") {
      return _images_weather_64x64_night_353_png__WEBPACK_IMPORTED_MODULE_85__;
    }
    if (imageNumber == "356") {
      return _images_weather_64x64_night_356_png__WEBPACK_IMPORTED_MODULE_86__;
    }
    if (imageNumber == "359") {
      return _images_weather_64x64_night_359_png__WEBPACK_IMPORTED_MODULE_87__;
    }
    if (imageNumber == "362") {
      return _images_weather_64x64_night_362_png__WEBPACK_IMPORTED_MODULE_88__;
    }
    if (imageNumber == "365") {
      return _images_weather_64x64_night_365_png__WEBPACK_IMPORTED_MODULE_89__;
    }
    if (imageNumber == "368") {
      return _images_weather_64x64_night_368_png__WEBPACK_IMPORTED_MODULE_90__;
    }
    if (imageNumber == "371") {
      return _images_weather_64x64_night_371_png__WEBPACK_IMPORTED_MODULE_91__;
    }
    if (imageNumber == "374") {
      return _images_weather_64x64_night_374_png__WEBPACK_IMPORTED_MODULE_92__;
    }
    if (imageNumber == "377") {
      return _images_weather_64x64_night_377_png__WEBPACK_IMPORTED_MODULE_93__;
    }
    if (imageNumber == "386") {
      return _images_weather_64x64_night_386_png__WEBPACK_IMPORTED_MODULE_94__;
    }
    if (imageNumber == "389") {
      return _images_weather_64x64_night_389_png__WEBPACK_IMPORTED_MODULE_95__;
    }
    if (imageNumber == "392") {
      return _images_weather_64x64_night_392_png__WEBPACK_IMPORTED_MODULE_96__;
    }
    if (imageNumber == "395") {
      return _images_weather_64x64_night_395_png__WEBPACK_IMPORTED_MODULE_97__;
    } else {
      return _images_weather_64x64_night_113_png__WEBPACK_IMPORTED_MODULE_50__;
    }
  } else {
    return _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_2__;
  }
}

function handleLeftClick() {
  if (scrollCounter == 0) {
    return;
  }
  if (scrollCounter == 1) {
    scrollCounter--;
    infobox1.classList.remove("active");
    infobox1.classList.add("inactive-right");
    infobox0.classList.remove("inactive-left");
    infobox0.classList.add("active");
    navDotOne.classList.remove("navActive");
    navDotZero.classList.add("navActive");
  }
  if (scrollCounter == 2) {
    scrollCounter--;
    infobox2.classList.remove("active");
    infobox2.classList.add("inactive-right");
    infobox1.classList.remove("inactive-left");
    infobox1.classList.add("active");
    navDotTwo.classList.remove("navActive");
    navDotOne.classList.add("navActive");
  }
}

function handleRightClick() {
  if (scrollCounter == 2) {
    return;
  }
  if (scrollCounter == 1) {
    scrollCounter++;
    infobox1.classList.remove("active");
    infobox1.classList.add("inactive-left");
    infobox2.classList.remove("inactive-right");
    infobox2.classList.add("active");
    navDotOne.classList.remove("navActive");
    navDotTwo.classList.add("navActive");
  }
  if (scrollCounter == 0) {
    scrollCounter++;
    infobox0.classList.remove("active");
    infobox0.classList.add("inactive-left");
    infobox1.classList.remove("inactive-right");
    infobox1.classList.add("active");
    navDotZero.classList.remove("navActive");
    navDotOne.classList.add("navActive");
  }
}

function setBackgroundImage(currentCondition) {
  console.log(currentCondition);
  const wrapperText = document.querySelector(".wrapper");
  const github = document.querySelector(".github");
  if (currentCondition == "Sunny") {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_sunny_jpg__WEBPACK_IMPORTED_MODULE_100__;
  }
  if (currentCondition == "Clear") {
    wrapperText.classList.remove("blackText");
    wrapperText.classList.add("whiteText");
    github.classList.add("white");
    return _images_weather_backgrounds_clearNight_jpg__WEBPACK_IMPORTED_MODULE_107__;
  }
  if (
    currentCondition == "Partly cloudy" ||
    currentCondition == "Cloudy" ||
    currentCondition == "Overcast" ||
    currentCondition == "Patchy rain possible"
  ) {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_cloudy_jpg__WEBPACK_IMPORTED_MODULE_101__;
  }
  if (
    currentCondition == "Mist" ||
    currentCondition == "Fog" ||
    currentCondition == "Freezing fog"
  ) {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_foggy_jpg__WEBPACK_IMPORTED_MODULE_104__;
  }
  if (
    currentCondition == "Patchy snow possible" ||
    currentCondition == "Patchy sleet possible" ||
    currentCondition == "Patchy freezing drizzle possible" ||
    currentCondition == "Blowing snow" ||
    currentCondition == "Blizzard" ||
    currentCondition == "Patchy light snow" ||
    currentCondition == "Light snow" ||
    currentCondition == "Patchy moderate snow" ||
    currentCondition == "Moderate snow" ||
    currentCondition == "Patchy heavy snow" ||
    currentCondition == "Heavy snow" ||
    currentCondition == "Ice pellets" ||
    currentCondition == "Light sleet" ||
    currentCondition == "Moderate or heavy sleet" ||
    currentCondition == "Patchy light snow with thunder" ||
    currentCondition == "Moderate or heavy snow with thunder" ||
    currentCondition == "Light snow showers" ||
    currentCondition == "Moderate or heavy snow showers" ||
    currentCondition == "Light showers of ice pellets" ||
    currentCondition == "Moderate or heavy showers of ice pellets" ||
    currentCondition == "Freezing drizzle" ||
    currentCondition == "Heavy freezing drizzle" ||
    currentCondition == "Light freezing rain" ||
    currentCondition == "Moderate or heavy freezing rain" ||
    currentCondition == "Light sleet showers" ||
    currentCondition == "Moderate or heavy sleet showers"
  ) {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_snow_jpg__WEBPACK_IMPORTED_MODULE_105__;
  }
  if (
    currentCondition == "Thundery outbreaks possible" ||
    currentCondition == "Moderate rain at times" ||
    currentCondition == "Patchy light rain with thunder" ||
    currentCondition == "Patchy light drizzle" ||
    currentCondition == "Light drizzle" ||
    currentCondition == "Patchy light rain"
  ) {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_overcast_jpg__WEBPACK_IMPORTED_MODULE_102__;
  }
  if (
    currentCondition == "Light rain" ||
    currentCondition == "Light rain shower" ||
    currentCondition == "Moderate rain" ||
    currentCondition == "Heavy rain at Times" ||
    currentCondition == "Heavy rain" ||
    currentCondition == "Moderate or heavy rain shower"
  ) {
    wrapperText.classList.remove("blackText");
    wrapperText.classList.add("whiteText");
    github.classList.add("white");
    return _images_weather_backgrounds_rainy_jpg__WEBPACK_IMPORTED_MODULE_106__;
  }
  if (
    currentCondition == "Torrential rain shower" ||
    currentCondition == "Moderate or heavy rain with thunder"
  ) {
    wrapperText.classList.remove("blackText");
    wrapperText.classList.add("whiteText");
    github.classList.add("white");
    return _images_weather_backgrounds_lightning_jpg__WEBPACK_IMPORTED_MODULE_103__;
  } else {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    github.classList.remove("white");
    return _images_weather_backgrounds_sunny_jpg__WEBPACK_IMPORTED_MODULE_100__;
  }
}

function toggleCAndF() {
  const checkbox = document.querySelector(".input");
  const currentTempF = document.querySelector(".currentTempF");
  const currentTempC = document.querySelector(".currentTempC");
  const feelsLikeF = document.querySelector(".feelsLikeF");
  const feelsLikeC = document.querySelector(".feelsLikeC");
  const todayHighF = document.querySelector(".todayHighF");
  const todayHighC = document.querySelector(".todayHighC");
  const todayLowF = document.querySelector(".todayLowF");
  const todayLowC = document.querySelector(".todayLowC");
  const tomorrowHighF = document.querySelector(".tomorrowHighF");
  const tomorrowHighC = document.querySelector(".tomorrowHighC");
  const tomorrowLowF = document.querySelector(".tomorrowLowF");
  const tomorrowLowC = document.querySelector(".tomorrowLowC");
  const inTwoDaysHighF = document.querySelector(".inTwoDaysHighF");
  const inTwoDaysHighC = document.querySelector(".inTwoDaysHighC");
  const inTwoDaysLowF = document.querySelector(".inTwoDaysLowF");
  const inTwoDaysLowC = document.querySelector(".inTwoDaysLowC");
  const zeroHourTempC = document.getElementById("zeroHourTempC");
  const zeroHourTempF = document.getElementById("zeroHourTempF");
  const oneHourTempC = document.getElementById("oneHourTempC");
  const oneHourTempF = document.getElementById("oneHourTempF");
  const twoHourTempC = document.getElementById("twoHourTempC");
  const twoHourTempF = document.getElementById("twoHourTempF");
  const threeHourTempC = document.getElementById("threeHourTempC");
  const threeHourTempF = document.getElementById("threeHourTempF");
  const fourHourTempC = document.getElementById("fourHourTempC");
  const fourHourTempF = document.getElementById("fourHourTempF");
  const fiveHourTempC = document.getElementById("fiveHourTempC");
  const fiveHourTempF = document.getElementById("fiveHourTempF");
  const sixHourTempC = document.getElementById("sixHourTempC");
  const sixHourTempF = document.getElementById("sixHourTempF");
  const sevenHourTempC = document.getElementById("sevenHourTempC");
  const sevenHourTempF = document.getElementById("sevenHourTempF");
  const eightHourTempC = document.getElementById("eightHourTempC");
  const eightHourTempF = document.getElementById("eightHourTempF");
  const nineHourTempC = document.getElementById("nineHourTempC");
  const nineHourTempF = document.getElementById("nineHourTempF");
  const tenHourTempC = document.getElementById("tenHourTempC");
  const tenHourTempF = document.getElementById("tenHourTempF");
  const elevenHourTempC = document.getElementById("elevenHourTempC");
  const elevenHourTempF = document.getElementById("elevenHourTempF");

  if (checkbox.checked == true) {
    currentTempF.classList.remove("active");
    currentTempC.classList.add("active");
    feelsLikeF.classList.remove("active");
    feelsLikeC.classList.add("active");
    todayHighF.classList.remove("active");
    todayHighC.classList.add("active");
    todayLowF.classList.remove("active");
    todayLowC.classList.add("active");
    tomorrowHighF.classList.remove("active");
    tomorrowHighC.classList.add("active");
    tomorrowLowF.classList.remove("active");
    tomorrowLowC.classList.add("active");
    inTwoDaysHighF.classList.remove("active");
    inTwoDaysHighC.classList.add("active");
    inTwoDaysLowF.classList.remove("active");
    inTwoDaysLowC.classList.add("active");
    zeroHourTempF.classList.remove("active");
    zeroHourTempF.classList.add("inactive");
    zeroHourTempC.classList.remove("inactive");
    zeroHourTempC.classList.add("active");
    oneHourTempF.classList.remove("active");
    oneHourTempF.classList.add("inactive");
    oneHourTempC.classList.remove("inactive");
    oneHourTempC.classList.add("active");
    twoHourTempF.classList.remove("active");
    twoHourTempF.classList.add("inactive");
    twoHourTempC.classList.remove("inactive");
    twoHourTempC.classList.add("active");
    threeHourTempF.classList.remove("active");
    threeHourTempF.classList.add("inactive");
    threeHourTempC.classList.remove("inactive");
    threeHourTempC.classList.add("active");
    fourHourTempF.classList.remove("active");
    fourHourTempF.classList.add("inactive");
    fourHourTempC.classList.remove("inactive");
    fourHourTempC.classList.add("active");
    fiveHourTempF.classList.remove("active");
    fiveHourTempF.classList.add("inactive");
    fiveHourTempC.classList.remove("inactive");
    fiveHourTempC.classList.add("active");
    sixHourTempF.classList.remove("active");
    sixHourTempF.classList.add("inactive");
    sixHourTempC.classList.remove("inactive");
    sixHourTempC.classList.add("active");
    sevenHourTempF.classList.remove("active");
    sevenHourTempF.classList.add("inactive");
    sevenHourTempC.classList.remove("inactive");
    sevenHourTempC.classList.add("active");
    eightHourTempF.classList.remove("active");
    eightHourTempF.classList.add("inactive");
    eightHourTempC.classList.remove("inactive");
    eightHourTempC.classList.add("active");
    nineHourTempF.classList.remove("active");
    nineHourTempF.classList.add("inactive");
    nineHourTempC.classList.remove("inactive");
    nineHourTempC.classList.add("active");
    tenHourTempF.classList.remove("active");
    tenHourTempF.classList.add("inactive");
    tenHourTempC.classList.remove("inactive");
    tenHourTempC.classList.add("active");
    elevenHourTempF.classList.remove("active");
    elevenHourTempF.classList.add("inactive");
    elevenHourTempC.classList.remove("inactive");
    elevenHourTempC.classList.add("active");
  } else {
    currentTempC.classList.remove("active");
    currentTempF.classList.add("active");
    feelsLikeC.classList.remove("active");
    feelsLikeF.classList.add("active");
    todayHighC.classList.remove("active");
    todayHighF.classList.add("active");
    todayLowC.classList.remove("active");
    todayLowF.classList.add("active");
    tomorrowHighC.classList.remove("active");
    tomorrowHighF.classList.add("active");
    tomorrowLowC.classList.remove("active");
    tomorrowLowF.classList.add("active");
    inTwoDaysHighC.classList.remove("active");
    inTwoDaysHighF.classList.add("active");
    inTwoDaysLowC.classList.remove("active");
    inTwoDaysLowF.classList.add("active");
    zeroHourTempC.classList.remove("active");
    zeroHourTempC.classList.add("inactive");
    zeroHourTempF.classList.remove("inactive");
    zeroHourTempF.classList.add("active");
    oneHourTempC.classList.remove("active");
    oneHourTempC.classList.add("inactive");
    oneHourTempF.classList.remove("inactive");
    oneHourTempF.classList.add("active");
    twoHourTempC.classList.remove("active");
    twoHourTempC.classList.add("inactive");
    twoHourTempF.classList.remove("inactive");
    twoHourTempF.classList.add("active");
    threeHourTempC.classList.remove("active");
    threeHourTempC.classList.add("inactive");
    threeHourTempF.classList.remove("inactive");
    threeHourTempF.classList.add("active");
    fourHourTempC.classList.remove("active");
    fourHourTempC.classList.add("inactive");
    fourHourTempF.classList.remove("inactive");
    fourHourTempF.classList.add("active");
    fiveHourTempC.classList.remove("active");
    fiveHourTempC.classList.add("inactive");
    fiveHourTempF.classList.remove("inactive");
    fiveHourTempF.classList.add("active");
    sixHourTempC.classList.remove("active");
    sixHourTempC.classList.add("inactive");
    sixHourTempF.classList.remove("inactive");
    sixHourTempF.classList.add("active");
    sevenHourTempC.classList.remove("active");
    sevenHourTempC.classList.add("inactive");
    sevenHourTempF.classList.remove("inactive");
    sevenHourTempF.classList.add("active");
    eightHourTempC.classList.remove("active");
    eightHourTempC.classList.add("inactive");
    eightHourTempF.classList.remove("inactive");
    eightHourTempF.classList.add("active");
    nineHourTempC.classList.remove("active");
    nineHourTempC.classList.add("inactive");
    nineHourTempF.classList.remove("inactive");
    nineHourTempF.classList.add("active");
    tenHourTempC.classList.remove("active");
    tenHourTempC.classList.add("inactive");
    tenHourTempF.classList.remove("inactive");
    tenHourTempF.classList.add("active");
    elevenHourTempC.classList.remove("active");
    elevenHourTempC.classList.add("inactive");
    elevenHourTempF.classList.remove("inactive");
    elevenHourTempF.classList.add("active");
  }
}

let scrollCounter = 0;
document.body.appendChild(createLayout());
let location = "Denver, Colorado";
getWeather(location);
const infobox0 = document.getElementById("hourlyForecastIndexZero");
const infobox1 = document.getElementById("hourlyForecastIndexOne");
const infobox2 = document.getElementById("hourlyForecastIndexTwo");
const navDotZero = document.getElementById("navDot0");
const navDotOne = document.getElementById("navDot1");
const navDotTwo = document.getElementById("navDot2");
const leftArrow = document.querySelector(".scrollbarLeft");
const rightArrow = document.querySelector(".scrollbarRight");
leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);


/***/ }),

/***/ "./src/images/chevron-left.svg":
/*!*************************************!*\
  !*** ./src/images/chevron-left.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "982a40d4f9e3cf9fdaea.svg";

/***/ }),

/***/ "./src/images/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/images/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d45fd2f46e93f5c3aa0a.svg";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7ab8675a2cbadea548c.svg";

/***/ }),

/***/ "./src/images/weather/64x64/day/113.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/113.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17608b0baa1391eb05a0.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/116.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/116.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ea9e73debaf4c25a8cf.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/119.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/119.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e740cebbccd7be04d824.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/122.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/122.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "036a7f4b9402e1d74535.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/143.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/143.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a93c5cdce8f09616fc0e.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/176.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/176.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/179.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/179.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/182.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/182.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/185.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/185.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/200.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/200.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/227.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/227.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b129e818f96bfd5302e9.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/230.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/230.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8b0bf9be35bccc67ed8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/248.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/248.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a1d4434712ee44f9ba.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/260.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/260.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e24a5eb9c1903d153a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/263.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/263.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/266.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/266.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/281.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/281.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/284.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/284.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56ec9edb8b4e68fe86cd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/293.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/293.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/296.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/296.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/299.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/299.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/302.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/302.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/305.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/305.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/308.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/308.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abccde130cb90d6b8d28.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/311.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/311.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/314.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/314.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/317.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/317.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/320.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/320.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/323.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/323.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/326.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/326.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/329.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/329.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/332.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/332.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/335.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/335.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/338.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/338.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33ecc25ad9b9bcdead64.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/350.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/350.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2ffeba8f660e868882d.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/353.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/353.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/356.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/356.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/359.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/359.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4e620fd4749c3b4e4e0.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/362.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/362.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/365.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/365.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de693c69934c56d7621b.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/368.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/368.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/371.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/371.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/374.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/374.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbb2a9027eb47dd6fc81.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/377.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/377.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5b7ec94bf807ad7a1f5.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/386.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/386.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/389.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/389.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f01fba5ae744838fbf95.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/392.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/392.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "654b4a200e85db363fc9.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/395.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/395.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/113.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/113.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a181351a22b54059f46.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/116.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/116.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "337f58255916e54ea1e1.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/119.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/119.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "877a68f87ae89bb957ef.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/122.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/122.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe1ad0ff1820050f573a.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/143.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/143.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a38774211eb11741b54.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/176.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/176.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/179.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/179.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/182.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/182.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/185.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/185.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/200.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/200.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/227.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/227.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a417dc841fb787a3121e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/230.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/230.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af63c80cb02f1b88520b.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/248.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/248.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360b1cd2a1b3bf3eccf0.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/260.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/260.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb1570c9ecb894bc1087.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/263.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/263.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/266.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/266.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/281.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/281.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/284.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/284.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf216d4d2f4aa9d2a734.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/293.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/293.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/296.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/296.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/299.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/299.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/302.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/302.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/305.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/305.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/308.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/308.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b4d7dcbbedd8be85713.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/311.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/311.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/314.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/314.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/317.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/317.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/320.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/320.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/323.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/323.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/326.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/326.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/329.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/329.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/332.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/332.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/335.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/335.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/338.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/338.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68e33fb0d2d3d215a5fe.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/350.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/350.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c33e3dd2cb58a8c51b7.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/353.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/353.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/356.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/356.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/359.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/359.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0ea4e443a205a9cfbbf.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/362.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/362.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/365.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/365.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3b2a1ad34b9471b980.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/368.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/368.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/371.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/371.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c7b41d4dea564886958.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/374.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/374.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42f4df0e587e14e2ec2d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/377.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/377.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2821934c72b0870a790d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/386.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/386.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/389.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/389.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "815a9988eef459cc98c3.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/392.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/392.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "972cf01edfd40c105c6c.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/395.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/395.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/images/weather/backgrounds/clearNight.jpg":
/*!*******************************************************!*\
  !*** ./src/images/weather/backgrounds/clearNight.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dc7b586d3a40f9b9acb.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/cloudy.jpg":
/*!***************************************************!*\
  !*** ./src/images/weather/backgrounds/cloudy.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee1e9971c14f8de6f4bd.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/foggy.jpg":
/*!**************************************************!*\
  !*** ./src/images/weather/backgrounds/foggy.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd92582c0925249edf93.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/lightning.jpg":
/*!******************************************************!*\
  !*** ./src/images/weather/backgrounds/lightning.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68f685ab292bca38d8ac.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/overcast.jpg":
/*!*****************************************************!*\
  !*** ./src/images/weather/backgrounds/overcast.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b3dca0177a0eb092035.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/rainy.jpg":
/*!**************************************************!*\
  !*** ./src/images/weather/backgrounds/rainy.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4c73abbbfa6eeb7f744.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/snow.jpg":
/*!*************************************************!*\
  !*** ./src/images/weather/backgrounds/snow.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee2c9f70792ee5bcb47.jpg";

/***/ }),

/***/ "./src/images/weather/backgrounds/sunny.jpg":
/*!**************************************************!*\
  !*** ./src/images/weather/backgrounds/sunny.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e569307dc2ee2a9d3f2.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNMO0FBQ0U7QUFDUztBQUNFO0FBQ0k7QUFDRDtBQUNMO0FBQ0Q7QUFDQztBQUNPOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQVc7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLCtEQUFJO0FBQ2pCLE1BQU07QUFDTixhQUFhLDhEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxpRUFBSTtBQUNqQixNQUFNO0FBQ04sYUFBYSxpRUFBSTtBQUNqQjtBQUNBLElBQUk7QUFDSixXQUFXLDhEQUFJO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0VBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0VBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUVBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1RUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdFQUFTO0FBQ3BCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLndoaXRlVGV4dCB7XFxuICBjb2xvcjogI2YzZjNmMztcXG59XFxuXFxuLmJsYWNrVGV4dCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLndyYXBwZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmFyZWFJbnB1dCB7XFxuICB3aWR0aDogMTZyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgcGFkZGluZzogMCAwIDAuM3JlbSA0LjVyZW07XFxuICBjb2xvcjogI2YzZjNmMztcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2xpZGVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZhcmVuaGVpdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4uY2Vsc2l1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjY2NjO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW5Cb2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtODBweDtcXG59XFxuXFxuLmN1cnJlbnREYXlXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXRvcDogMjAlO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJEZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmN1cnJlbnRUZW1wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3VycmVudFRlbXBGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wQyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50VGVtcEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLmZlZWxzTGlrZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uZmVlbHNMaWtlRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mZWVsc0xpa2VGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmZlZWxzTGlrZUMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmVlbHNMaWtlQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5tb3JlRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJpZ2h0Qm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGdhcDogMjUlO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0RGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0SGlnaCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RMb3cge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnRvZGF5SGlnaEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kYXlIaWdoRi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RheUhpZ2hDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZGF5SGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9kYXlMb3dGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZGF5TG93Ri5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RheUxvd0Mge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kYXlMb3dDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvbW9ycm93SGlnaEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoRi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0hpZ2hDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvbW9ycm93SGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvbW9ycm93TG93Ri5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0xvd0Mge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0xvd0Yge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93Ri5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5pblR3b0RheXNMb3dDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluVHdvRGF5c0xvd0MuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguaW5hY3RpdmUtcmlnaHQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguaW5hY3RpdmUtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RIb3VyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RUZW1wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAuaW5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkRvdCB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLm5hdkRvdC5uYXZBY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG59XFxuXFxuLnNjcm9sbGJhckxlZnQsXFxuLnNjcm9sbGJhclJpZ2h0IHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgyMDElKSBodWUtcm90YXRlKDIwMmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCg5MSUpO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXFxuLmdpdGh1Yi53aGl0ZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDIwMSUpIGh1ZS1yb3RhdGUoMjAyZGVnKVxcbiAgICBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDkxJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrREFBa0Q7RUFDbEQsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO2tDQUNnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ud2hpdGVUZXh0IHtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uYmxhY2tUZXh0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zbGlkZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmFyZW5oZWl0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5jZWxzaXVzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICNjY2M7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbkJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC04MHB4O1xcbn1cXG5cXG4uY3VycmVudERheVdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIHBhZGRpbmctdG9wOiAyMCU7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlckRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFRlbXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmN1cnJlbnRUZW1wRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50VGVtcEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uY3VycmVudFRlbXBDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1cnJlbnRUZW1wQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uZmVlbHNMaWtlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5mZWVsc0xpa2VGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZlZWxzTGlrZUYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uZmVlbHNMaWtlQyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mZWVsc0xpa2VDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvdyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4udG9kYXlIaWdoRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RheUhpZ2hGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZGF5SGlnaEMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kYXlIaWdoQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RheUxvd0Yge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kYXlMb3dGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZGF5TG93QyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RheUxvd0MuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b21vcnJvd0hpZ2hGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvbW9ycm93SGlnaEMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0xvd0Yge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvbW9ycm93TG93QyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b21vcnJvd0xvd0MuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93RiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pblR3b0RheXNMb3dGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0xvd0Mge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93Qy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEluZGV4IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5pbmFjdGl2ZS1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5pbmFjdGl2ZS1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEhvdXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcC5pbmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2RG90IHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmF2RG90Lm5hdkFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uc2Nyb2xsYmFyTGVmdCxcXG4uc2Nyb2xsYmFyUmlnaHQge1xcbiAgZmlsdGVyOiBpbnZlcnQoOTclKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDIwMSUpIGh1ZS1yb3RhdGUoMjAyZGVnKVxcbiAgICBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDkxJSk7XFxufVxcblxcbmZvb3RlciAud3JhcHBlcjphZnRlciB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5naXRodWIge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uZ2l0aHViLndoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoMjAxJSkgaHVlLXJvdGF0ZSgyMDJkZWcpXFxuICAgIGJyaWdodG5lc3MoMTE4JSkgY29udHJhc3QoOTElKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2l0aHViU1ZHIGZyb20gXCIuL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgRDExMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZ1wiO1xuaW1wb3J0IEQxMTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzExNi5wbmdcIjtcbmltcG9ydCBEMTE5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMTkucG5nXCI7XG5pbXBvcnQgRDEyMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTIyLnBuZ1wiO1xuaW1wb3J0IEQxNDMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE0My5wbmdcIjtcbmltcG9ydCBEMTc2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xNzYucG5nXCI7XG5pbXBvcnQgRDE3OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTc5LnBuZ1wiO1xuaW1wb3J0IEQxODIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE4Mi5wbmdcIjtcbmltcG9ydCBEMTg1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xODUucG5nXCI7XG5pbXBvcnQgRDIwMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjAwLnBuZ1wiO1xuaW1wb3J0IEQyMjcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzIyNy5wbmdcIjtcbmltcG9ydCBEMjMwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yMzAucG5nXCI7XG5pbXBvcnQgRDI0OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjQ4LnBuZ1wiO1xuaW1wb3J0IEQyNjAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI2MC5wbmdcIjtcbmltcG9ydCBEMjYzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNjMucG5nXCI7XG5pbXBvcnQgRDI2NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjY2LnBuZ1wiO1xuaW1wb3J0IEQyODEgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI4MS5wbmdcIjtcbmltcG9ydCBEMjg0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yODQucG5nXCI7XG5pbXBvcnQgRDI5MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjkzLnBuZ1wiO1xuaW1wb3J0IEQyOTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI5Ni5wbmdcIjtcbmltcG9ydCBEMjk5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yOTkucG5nXCI7XG5pbXBvcnQgRDMwMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzAyLnBuZ1wiO1xuaW1wb3J0IEQzMDUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMwNS5wbmdcIjtcbmltcG9ydCBEMzA4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMDgucG5nXCI7XG5pbXBvcnQgRDMxMSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzExLnBuZ1wiO1xuaW1wb3J0IEQzMTQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMxNC5wbmdcIjtcbmltcG9ydCBEMzE3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMTcucG5nXCI7XG5pbXBvcnQgRDMyMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzIwLnBuZ1wiO1xuaW1wb3J0IEQzMjMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyMy5wbmdcIjtcbmltcG9ydCBEMzI2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjYucG5nXCI7XG5pbXBvcnQgRDMyOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzI5LnBuZ1wiO1xuaW1wb3J0IEQzMzIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMzMi5wbmdcIjtcbmltcG9ydCBEMzM1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMzUucG5nXCI7XG5pbXBvcnQgRDMzOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzM4LnBuZ1wiO1xuaW1wb3J0IEQzNTAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1MC5wbmdcIjtcbmltcG9ydCBEMzUzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTMucG5nXCI7XG5pbXBvcnQgRDM1NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzU2LnBuZ1wiO1xuaW1wb3J0IEQzNTkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1OS5wbmdcIjtcbmltcG9ydCBEMzYyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNjIucG5nXCI7XG5pbXBvcnQgRDM2NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzY1LnBuZ1wiO1xuaW1wb3J0IEQzNjggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM2OC5wbmdcIjtcbmltcG9ydCBEMzcxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNzEucG5nXCI7XG5pbXBvcnQgRDM3NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzc0LnBuZ1wiO1xuaW1wb3J0IEQzNzcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM3Ny5wbmdcIjtcbmltcG9ydCBEMzg2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zODYucG5nXCI7XG5pbXBvcnQgRDM4OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzg5LnBuZ1wiO1xuaW1wb3J0IEQzOTIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM5Mi5wbmdcIjtcbmltcG9ydCBEMzk1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zOTUucG5nXCI7XG5pbXBvcnQgTjExMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTMucG5nXCI7XG5pbXBvcnQgTjExNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTYucG5nXCI7XG5pbXBvcnQgTjExOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTkucG5nXCI7XG5pbXBvcnQgTjEyMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMjIucG5nXCI7XG5pbXBvcnQgTjE0MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNDMucG5nXCI7XG5pbXBvcnQgTjE3NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNzYucG5nXCI7XG5pbXBvcnQgTjE3OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNzkucG5nXCI7XG5pbXBvcnQgTjE4MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xODIucG5nXCI7XG5pbXBvcnQgTjE4NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xODUucG5nXCI7XG5pbXBvcnQgTjIwMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMDAucG5nXCI7XG5pbXBvcnQgTjIyNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMjcucG5nXCI7XG5pbXBvcnQgTjIzMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMzAucG5nXCI7XG5pbXBvcnQgTjI0OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNDgucG5nXCI7XG5pbXBvcnQgTjI2MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjAucG5nXCI7XG5pbXBvcnQgTjI2MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjMucG5nXCI7XG5pbXBvcnQgTjI2NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjYucG5nXCI7XG5pbXBvcnQgTjI4MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yODEucG5nXCI7XG5pbXBvcnQgTjI4NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yODQucG5nXCI7XG5pbXBvcnQgTjI5MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTMucG5nXCI7XG5pbXBvcnQgTjI5NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTYucG5nXCI7XG5pbXBvcnQgTjI5OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTkucG5nXCI7XG5pbXBvcnQgTjMwMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDIucG5nXCI7XG5pbXBvcnQgTjMwNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDUucG5nXCI7XG5pbXBvcnQgTjMwOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDgucG5nXCI7XG5pbXBvcnQgTjMxMSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTEucG5nXCI7XG5pbXBvcnQgTjMxNCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTQucG5nXCI7XG5pbXBvcnQgTjMxNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTcucG5nXCI7XG5pbXBvcnQgTjMyMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjAucG5nXCI7XG5pbXBvcnQgTjMyMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjMucG5nXCI7XG5pbXBvcnQgTjMyNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjYucG5nXCI7XG5pbXBvcnQgTjMyOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjkucG5nXCI7XG5pbXBvcnQgTjMzMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzIucG5nXCI7XG5pbXBvcnQgTjMzNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzUucG5nXCI7XG5pbXBvcnQgTjMzOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzgucG5nXCI7XG5pbXBvcnQgTjM1MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTAucG5nXCI7XG5pbXBvcnQgTjM1MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTMucG5nXCI7XG5pbXBvcnQgTjM1NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTYucG5nXCI7XG5pbXBvcnQgTjM1OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTkucG5nXCI7XG5pbXBvcnQgTjM2MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjIucG5nXCI7XG5pbXBvcnQgTjM2NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjUucG5nXCI7XG5pbXBvcnQgTjM2OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjgucG5nXCI7XG5pbXBvcnQgTjM3MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzEucG5nXCI7XG5pbXBvcnQgTjM3NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzQucG5nXCI7XG5pbXBvcnQgTjM3NyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzcucG5nXCI7XG5pbXBvcnQgTjM4NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zODYucG5nXCI7XG5pbXBvcnQgTjM4OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zODkucG5nXCI7XG5pbXBvcnQgTjM5MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zOTIucG5nXCI7XG5pbXBvcnQgTjM5NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zOTUucG5nXCI7XG5pbXBvcnQgc2Nyb2xsTGVmdCBmcm9tIFwiLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Z1wiO1xuaW1wb3J0IHNjcm9sbFJpZ2h0IGZyb20gXCIuL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Z1wiO1xuaW1wb3J0IHN1bm55RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL3N1bm55LmpwZ1wiO1xuaW1wb3J0IGNsb3VkeURheSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci9iYWNrZ3JvdW5kcy9jbG91ZHkuanBnXCI7XG5pbXBvcnQgb3ZlcmNhc3REYXkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvYmFja2dyb3VuZHMvb3ZlcmNhc3QuanBnXCI7XG5pbXBvcnQgc3Rvcm15RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL2xpZ2h0bmluZy5qcGdcIjtcbmltcG9ydCBmb2dneURheSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci9iYWNrZ3JvdW5kcy9mb2dneS5qcGdcIjtcbmltcG9ydCBzbm93eURheSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci9iYWNrZ3JvdW5kcy9zbm93LmpwZ1wiO1xuaW1wb3J0IHJhaW55RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL3JhaW55LmpwZ1wiO1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvYmFja2dyb3VuZHMvY2xlYXJOaWdodC5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGF5b3V0KCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaENvbnRhaW5lclwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG5cbiAgY29uc3QgYXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBhcmVhSW5wdXQuY2xhc3NMaXN0LmFkZChcImFyZWFJbnB1dFwiKTtcbiAgYXJlYUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXJlYUlucHV0XCIpO1xuICBhcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaCBjaXR5XCIpO1xuXG4gIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZhcmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZhcmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiZmFyZW5oZWl0XCIpO1xuICBmYXJlbmhlaXQudGV4dENvbnRlbnQgPSBcIkZcIjtcblxuICBjb25zdCBjQW5kRlN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY0FuZEZTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcbiAgY0FuZEZTd2l0Y2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzd2l0Y2hcIik7XG5cbiAgY29uc3QgY0FuZEZJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY0FuZEZJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gIGNBbmRGSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIGNvbnN0IGNBbmRGU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNBbmRGU2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG4gIGNBbmRGU2xpZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2xpZGVyIHJvdW5kXCIpO1xuXG4gIGNvbnN0IENlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBDZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJjZWxzaXVzXCIpO1xuICBDZWxzaXVzLnRleHRDb250ZW50ID0gXCJDXCI7XG5cbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKFwibWFpbkJvZHlcIik7XG5cbiAgY29uc3QgbGVmdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRCb3guY2xhc3NMaXN0LmFkZChcImxlZnRCb3hcIik7XG5cbiAgY29uc3QgcmlnaHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodEJveC5jbGFzc0xpc3QuYWRkKFwicmlnaHRCb3hcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyVGV4dFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBDb2xlIEJ1cmNoXCI7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vQ29sZUJ1cmNoXCIpO1xuXG4gIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWIuc3JjID0gZ2l0aHViU1ZHO1xuICBnaXRodWIuY2xhc3NMaXN0LmFkZChcImdpdGh1YlwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChhcmVhSW5wdXQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udGFpbmVyKTtcbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhcmVuaGVpdCk7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjQW5kRlN3aXRjaCk7XG4gIGNBbmRGU3dpdGNoLmFwcGVuZENoaWxkKGNBbmRGSW5wdXQpO1xuICBjQW5kRlN3aXRjaC5hcHBlbmRDaGlsZChjQW5kRlNsaWRlcik7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChDZWxzaXVzKTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICBtYWluQm9keS5hcHBlbmRDaGlsZChsZWZ0Qm94KTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocmlnaHRCb3gpO1xuICBsZWZ0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnREYXlXaWRnZXQoKSk7XG4gIHJpZ2h0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZVRocmVlRGF5Rm9yZWNhc3RXaWRnZXQoKSk7XG4gIHJpZ2h0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJseUZvcmVjYXN0V2lkZ2V0KCkpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG4gIGNBbmRGSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVDQW5kRik7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnREYXlXaWRnZXQoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXlXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50RGF5V2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50RGF5V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uQW5kQ29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uQW5kQ29uZGl0aW9uXCIpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIpO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBcIkNvbmRpdGlvblwiO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRXZWF0aGVyRGV0YWlsc1wiKTtcblxuICBjb25zdCBjdXJyZW50VGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGN1cnJlbnRUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcFwiKTtcblxuICBjb25zdCBjdXJyZW50VGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50VGVtcEMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUZW1wQ1wiKTtcbiAgY3VycmVudFRlbXBDLnRleHRDb250ZW50ID0gXCIxMENcIjtcblxuICBjb25zdCBjdXJyZW50VGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50VGVtcEYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUZW1wRlwiKTtcbiAgY3VycmVudFRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGN1cnJlbnRUZW1wRi50ZXh0Q29udGVudCA9IFwiNTBcIjtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFdlYXRoZXJNb3JlRGV0YWlsc1wiKTtcblxuICBjb25zdCBmZWVsc0xpa2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWVsc0xpa2VCb3guY2xhc3NMaXN0LmFkZChcImZlZWxzTGlrZVwiKTtcblxuICBjb25zdCBmZWVsc0xpa2VDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlQy5jbGFzc0xpc3QuYWRkKFwiZmVlbHNMaWtlQ1wiKTtcbiAgZmVlbHNMaWtlQy5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIGZlZWxzTGlrZUMudGV4dENvbnRlbnQgPSBcIkZFRUxTIExJS0U6IDEwQ1wiO1xuXG4gIGNvbnN0IGZlZWxzTGlrZUYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWVsc0xpa2VGLmNsYXNzTGlzdC5hZGQoXCJmZWVsc0xpa2VGXCIpO1xuICBmZWVsc0xpa2VGLmNsYXNzTGlzdC5hZGQoXCJtb3JlRGV0YWlsc1wiKTtcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBmZWVsc0xpa2VGLnRleHRDb250ZW50ID0gXCJGRUVMUyBMSUtFOiA1NVwiO1xuXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwid2luZFNwZWVkXCIpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBcIldJTkQ6IDEwIE1QSFwiO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gXCJIVU1JRElUWTogMTAlXCI7XG5cbiAgY3VycmVudERheVdpZGdldC5hcHBlbmRDaGlsZChsb2NhdGlvbkFuZENvbmRpdGlvbik7XG4gIGxvY2F0aW9uQW5kQ29uZGl0aW9uLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG4gIGxvY2F0aW9uQW5kQ29uZGl0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgY3VycmVudERheVdpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRldGFpbHMpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBCb3gpO1xuICBjdXJyZW50VGVtcEJveC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcEMpO1xuICBjdXJyZW50VGVtcEJveC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcEYpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyk7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlQm94KTtcbiAgZmVlbHNMaWtlQm94LmFwcGVuZENoaWxkKGZlZWxzTGlrZUMpO1xuICBmZWVsc0xpa2VCb3guYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXlXaWRnZXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRocmVlRGF5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3REYXlcIik7XG4gIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gIGNvbnN0IFRvZGF5SGlnaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFRvZGF5SGlnaEJveC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEhpZ2hcIik7XG5cbiAgY29uc3QgdG9kYXlIaWdoQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5SGlnaEMuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaENcIik7XG4gIHRvZGF5SGlnaEMudGV4dENvbnRlbnQgPSBcIjEwQ1wiO1xuXG4gIGNvbnN0IHRvZGF5SGlnaEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheUhpZ2hGLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUhpZ2hGXCIpO1xuICB0b2RheUhpZ2hGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHRvZGF5SGlnaEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHRvZGF5TG93Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlMb3dCb3guY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RMb3dcIik7XG5cbiAgY29uc3QgdG9kYXlMb3dDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlMb3dDLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUxvd0NcIik7XG4gIHRvZGF5TG93Qy50ZXh0Q29udGVudCA9IFwiMTBDXCI7XG5cbiAgY29uc3QgdG9kYXlMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUxvd0ZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0b2RheUxvd0YudGV4dENvbnRlbnQgPSBcIjUwRlwiO1xuXG4gIGNvbnN0IHRvZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0b2RheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidG9kYXlXZWF0aGVySWNvblwiKTtcbiAgbGV0IGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExM1wiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdG9tb3Jyb3dzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RCb3hcIik7XG5cbiAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvdy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgdG9tb3Jyb3cudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dIaWdoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dIaWdoQm94LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SGlnaFwiKTtcblxuICBjb25zdCB0b21vcnJvd0hpZ2hDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dIaWdoQy5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dIaWdoQ1wiKTtcbiAgdG9tb3Jyb3dIaWdoQy50ZXh0Q29udGVudCA9IFwiMTZDXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dIaWdoRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93SGlnaEYuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93SGlnaEZcIik7XG4gIHRvbW9ycm93SGlnaEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdG9tb3Jyb3dIaWdoRi50ZXh0Q29udGVudCA9IFwiNjFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dMb3dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0xvd0JveC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdExvd1wiKTtcblxuICBjb25zdCB0b21vcnJvd0xvd0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0xvd0MuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TG93Q1wiKTtcbiAgdG9tb3Jyb3dMb3dDLnRleHRDb250ZW50ID0gXCIxMENcIjtcblxuICBjb25zdCB0b21vcnJvd0xvd0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0xvd0YuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHRvbW9ycm93TG93Ri50ZXh0Q29udGVudCA9IFwiNTFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RJY29uXCIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGluVHdvRGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IGluVHdvRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5cy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgaW5Ud29EYXlzLnRleHRDb250ZW50ID0gXCJJbiBUd28gRGF5c1wiO1xuXG4gIGNvbnN0IGluVHdvRGF5c0hpZ2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXNIaWdoQm94LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SGlnaFwiKTtcblxuICBjb25zdCBpblR3b0RheXNIaWdoQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0hpZ2hDLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNIaWdoQ1wiKTtcbiAgaW5Ud29EYXlzSGlnaEMudGV4dENvbnRlbnQgPSBcIjE3Q1wiO1xuXG4gIGNvbnN0IGluVHdvRGF5c0hpZ2hGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c0hpZ2hGXCIpO1xuICBpblR3b0RheXNIaWdoRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBpblR3b0RheXNIaWdoRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzTG93Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzTG93Qm94LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0TG93XCIpO1xuXG4gIGNvbnN0IGluVHdvRGF5c0xvd0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXNMb3dDLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNMb3dDXCIpO1xuICBpblR3b0RheXNMb3dDLnRleHRDb250ZW50ID0gXCIxMENcIjtcblxuICBjb25zdCBpblR3b0RheXNMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzTG93Ri5jbGFzc0xpc3QuYWRkKFwiaW5Ud29EYXlzTG93RlwiKTtcbiAgaW5Ud29EYXlzTG93Ri5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBpblR3b0RheXNMb3dGLnRleHRDb250ZW50ID0gXCI1MkZcIjtcblxuICBjb25zdCBpblR3b0RheXNXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgaW5Ud29EYXlzV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTlcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKHRvZGF5c0ZvcmVjYXN0KTtcbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZCh0b21vcnJvd3NGb3JlY2FzdCk7XG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzRm9yZWNhc3QpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKFRvZGF5SGlnaEJveCk7XG4gIFRvZGF5SGlnaEJveC5hcHBlbmRDaGlsZCh0b2RheUhpZ2hDKTtcbiAgVG9kYXlIaWdoQm94LmFwcGVuZENoaWxkKHRvZGF5SGlnaEYpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheUxvd0JveCk7XG4gIHRvZGF5TG93Qm94LmFwcGVuZENoaWxkKHRvZGF5TG93Qyk7XG4gIHRvZGF5TG93Qm94LmFwcGVuZENoaWxkKHRvZGF5TG93Rik7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlckljb24pO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvdyk7XG4gIHRvbW9ycm93c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93SGlnaEJveCk7XG4gIHRvbW9ycm93SGlnaEJveC5hcHBlbmRDaGlsZCh0b21vcnJvd0hpZ2hDKTtcbiAgdG9tb3Jyb3dIaWdoQm94LmFwcGVuZENoaWxkKHRvbW9ycm93SGlnaEYpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0xvd0JveCk7XG4gIHRvbW9ycm93TG93Qm94LmFwcGVuZENoaWxkKHRvbW9ycm93TG93Qyk7XG4gIHRvbW9ycm93TG93Qm94LmFwcGVuZENoaWxkKHRvbW9ycm93TG93Rik7XG4gIHRvbW9ycm93c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93V2VhdGhlckljb24pO1xuICBpblR3b0RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChpblR3b0RheXMpO1xuICBpblR3b0RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChpblR3b0RheXNIaWdoQm94KTtcbiAgaW5Ud29EYXlzSGlnaEJveC5hcHBlbmRDaGlsZChpblR3b0RheXNIaWdoQyk7XG4gIGluVHdvRGF5c0hpZ2hCb3guYXBwZW5kQ2hpbGQoaW5Ud29EYXlzSGlnaEYpO1xuICBpblR3b0RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChpblR3b0RheXNMb3dCb3gpO1xuICBpblR3b0RheXNMb3dCb3guYXBwZW5kQ2hpbGQoaW5Ud29EYXlzTG93Qyk7XG4gIGluVHdvRGF5c0xvd0JveC5hcHBlbmRDaGlsZChpblR3b0RheXNMb3dGKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzV2VhdGhlckljb24pO1xuXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0V2lkZ2V0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlGb3JlY2FzdFdpZGdldCgpIHtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RXaWRnZXRcIik7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJseUZvcmVjYXN0SW5kZXhaZXJvXCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBjb25zdCB6ZXJvSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHplcm9Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHplcm9Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgemVyb0hvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91clwiKTtcbiAgemVyb0hvdXIudGV4dENvbnRlbnQgPSBcIk5vd1wiO1xuXG4gIGNvbnN0IHplcm9Ib3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IHplcm9Ib3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB6ZXJvSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHplcm9Ib3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91clRlbXBDXCIpO1xuICB6ZXJvSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgemVyb0hvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMTVDXCI7XG5cbiAgY29uc3QgemVyb0hvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgemVyb0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB6ZXJvSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJUZW1wRlwiKTtcbiAgemVyb0hvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjBGXCI7XG5cbiAgY29uc3QgemVyb0hvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgemVyb0hvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInplcm9Ib3VyV2VhdGhlckljb25cIik7XG4gIGxldCBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTNcIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IG9uZUhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIG9uZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBvbmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb25lSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBvbmVIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91clwiKTtcbiAgb25lSG91ci50ZXh0Q29udGVudCA9IFwiMVwiO1xuXG4gIGNvbnN0IG9uZUhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb25lSG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCBvbmVIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgb25lSG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91clRlbXBDXCIpO1xuICBvbmVIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBvbmVIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE2Q1wiO1xuXG4gIGNvbnN0IG9uZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBvbmVIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyVGVtcEZcIik7XG4gIG9uZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBvbmVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYxRlwiO1xuXG4gIGNvbnN0IG9uZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG9uZUhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBvbmVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExNlwiKTtcbiAgb25lSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCB0d29Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0d29Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdHdvSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHR3b0hvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgdHdvSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJcIik7XG4gIHR3b0hvdXIudGV4dENvbnRlbnQgPSBcIjJcIjtcblxuICBjb25zdCB0d29Ib3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHR3b0hvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgdHdvSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHR3b0hvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJUZW1wQ1wiKTtcbiAgdHdvSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgdHdvSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxN0NcIjtcblxuICBjb25zdCB0d29Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgdHdvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHR3b0hvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJUZW1wRlwiKTtcbiAgdHdvSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2MkZcIjtcblxuICBjb25zdCB0d29Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0d29Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdHdvSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHdvSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTlcIik7XG4gIHR3b0hvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdGhyZWVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHRocmVlSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdGhyZWVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHRocmVlSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91clwiKTtcbiAgdGhyZWVIb3VyLnRleHRDb250ZW50ID0gXCIzXCI7XG5cbiAgY29uc3QgdGhyZWVIb3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCB0aHJlZUhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHRocmVlSG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyVGVtcENcIik7XG4gIHRocmVlSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgdGhyZWVIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IHRocmVlSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJUZW1wRlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYzRlwiO1xuXG4gIGNvbnN0IHRocmVlSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTIyXCIpO1xuICB0aHJlZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RJbmRleE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4T25lXCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEluZGV4XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZS1yaWdodFwiKTtcblxuICBjb25zdCBmb3VySG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGZvdXJIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGZvdXJIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZm91ckhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91clwiKTtcbiAgZm91ckhvdXIudGV4dENvbnRlbnQgPSBcIjRcIjtcblxuICBjb25zdCBmb3VySG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3VySG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCBmb3VySG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBmb3VySG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm91ckhvdXJUZW1wQ1wiKTtcbiAgZm91ckhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGZvdXJIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IGZvdXJIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3VySG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGZvdXJIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZm91ckhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyVGVtcEZcIik7XG4gIGZvdXJIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY0RlwiO1xuXG4gIGNvbnN0IGZvdXJIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb3VySG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxNDNcIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGZpdmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZml2ZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBmaXZlSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyXCIpO1xuICBmaXZlSG91ci50ZXh0Q29udGVudCA9IFwiNVwiO1xuXG4gIGNvbnN0IGZpdmVIb3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpdmVIb3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IGZpdmVIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGZpdmVIb3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXZlSG91clRlbXBDXCIpO1xuICBmaXZlSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgZml2ZUhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3QgZml2ZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpdmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgZml2ZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBmaXZlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJUZW1wRlwiKTtcbiAgZml2ZUhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjVGXCI7XG5cbiAgY29uc3QgZml2ZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZpdmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjE3NlwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3Qgc2l4SG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNpeEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHNpeEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyXCIpO1xuICBzaXhIb3VyLnRleHRDb250ZW50ID0gXCI2XCI7XG5cbiAgY29uc3Qgc2l4SG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IHNpeEhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpeEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBzaXhIb3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyVGVtcENcIik7XG4gIHNpeEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHNpeEhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3Qgc2l4SG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHNpeEhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBzaXhIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyVGVtcEZcIik7XG4gIHNpeEhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjZGXCI7XG5cbiAgY29uc3Qgc2l4SG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2l4SG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNpeEhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjAwXCIpO1xuICBzaXhIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHNldmVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNldmVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBzZXZlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJcIik7XG4gIHNldmVuSG91ci50ZXh0Q29udGVudCA9IFwiN1wiO1xuXG4gIGNvbnN0IHNldmVuSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBzZXZlbkhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91clRlbXBDXCIpO1xuICBzZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHNldmVuSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCBzZXZlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHNldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHNldmVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyVGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2N0ZcIjtcblxuICBjb25zdCBzZXZlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjIyN1wiKTtcbiAgc2V2ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleFR3b1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtcmlnaHRcIik7XG5cbiAgY29uc3QgZWlnaHRIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlaWdodEhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZWlnaHRIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWlnaHRIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIGVpZ2h0SG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91clwiKTtcbiAgZWlnaHRIb3VyLnRleHRDb250ZW50ID0gXCI4XCI7XG5cbiAgY29uc3QgZWlnaHRIb3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCBlaWdodEhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGVpZ2h0SG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyVGVtcENcIik7XG4gIGVpZ2h0SG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgZWlnaHRIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IGVpZ2h0SG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWlnaHRIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgZWlnaHRIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZWlnaHRIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJUZW1wRlwiKTtcbiAgZWlnaHRIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY4RlwiO1xuXG4gIGNvbnN0IGVpZ2h0SG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWlnaHRIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZWlnaHRIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjQ4XCIpO1xuICBlaWdodEhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgbmluZUhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pbmVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBuaW5lSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmluZUhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBuaW5lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pbmVIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIG5pbmVIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmluZUhvdXJcIik7XG4gIG5pbmVIb3VyLnRleHRDb250ZW50ID0gXCI5XCI7XG5cbiAgY29uc3QgbmluZUhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgbmluZUhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pbmVIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgbmluZUhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyVGVtcENcIik7XG4gIG5pbmVIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBuaW5lSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCBuaW5lSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBuaW5lSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG5pbmVIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91clRlbXBGXCIpO1xuICBuaW5lSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2OUZcIjtcblxuICBjb25zdCBuaW5lSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbmluZUhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBuaW5lSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmluZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjk2XCIpO1xuICBuaW5lSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCB0ZW5Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0ZW5Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdGVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgdGVuSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJcIik7XG4gIHRlbkhvdXIudGV4dENvbnRlbnQgPSBcIjEwXCI7XG5cbiAgY29uc3QgdGVuSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IHRlbkhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICB0ZW5Ib3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyVGVtcENcIik7XG4gIHRlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHRlbkhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3QgdGVuSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHRlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0ZW5Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyVGVtcEZcIik7XG4gIHRlbkhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNzBGXCI7XG5cbiAgY29uc3QgdGVuSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHRlbkhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMzUzXCIpO1xuICB0ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGVsZXZlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBlbGV2ZW5Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBlbGV2ZW5Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91clwiKTtcbiAgZWxldmVuSG91ci50ZXh0Q29udGVudCA9IFwiMTFcIjtcblxuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgZWxldmVuSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGVsZXZlbkhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJUZW1wQ1wiKTtcbiAgZWxldmVuSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgZWxldmVuSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgZWxldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJUZW1wRlwiKTtcbiAgZWxldmVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI3MUZcIjtcblxuICBjb25zdCBlbGV2ZW5Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbGV2ZW5Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZWxldmVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIzNTZcIik7XG4gIGVsZXZlbkhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3Qgc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2Nyb2xsYmFyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxiYXJcIik7XG5cbiAgY29uc3Qgc2Nyb2xsYmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNjcm9sbGJhckxlZnQuY2xhc3NMaXN0LmFkZChcInNjcm9sbGJhckxlZnRcIik7XG4gIHNjcm9sbGJhckxlZnQuc3JjID0gc2Nyb2xsTGVmdDtcblxuICBjb25zdCBuYXZEb3QwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2RG90MC5jbGFzc0xpc3QuYWRkKFwibmF2RG90XCIpO1xuICBuYXZEb3QwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2RG90MFwiKTtcbiAgbmF2RG90MC5jbGFzc0xpc3QuYWRkKFwibmF2QWN0aXZlXCIpO1xuXG4gIGNvbnN0IG5hdkRvdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZEb3QxLmNsYXNzTGlzdC5hZGQoXCJuYXZEb3RcIik7XG4gIG5hdkRvdDEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZEb3QxXCIpO1xuXG4gIGNvbnN0IG5hdkRvdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZEb3QyLmNsYXNzTGlzdC5hZGQoXCJuYXZEb3RcIik7XG4gIG5hdkRvdDIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZEb3QyXCIpO1xuXG4gIGNvbnN0IHNjcm9sbGJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2Nyb2xsYmFyUmlnaHQuY2xhc3NMaXN0LmFkZChcInNjcm9sbGJhclJpZ2h0XCIpO1xuICBzY3JvbGxiYXJSaWdodC5zcmMgPSBzY3JvbGxSaWdodDtcblxuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEluZGV4WmVybyk7XG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhPbmUpO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEluZGV4VHdvKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQoemVyb0hvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKG9uZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKHR3b0hvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKHRocmVlSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChmb3VySG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChmaXZlSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChzaXhIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKHNldmVuSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChlaWdodEhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQobmluZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQodGVuSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyRm9yZWNhc3QpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh6ZXJvSG91clRlbXBCb3gpO1xuICB6ZXJvSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoemVyb0hvdXJUZW1wRik7XG4gIHplcm9Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZCh6ZXJvSG91clRlbXBDKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh6ZXJvSG91cldlYXRoZXJJY29uKTtcbiAgb25lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG9uZUhvdXIpO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91clRlbXBCb3gpO1xuICBvbmVIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChvbmVIb3VyVGVtcEYpO1xuICBvbmVIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChvbmVIb3VyVGVtcEMpO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91cldlYXRoZXJJY29uKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXIpO1xuICB0d29Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodHdvSG91clRlbXBCb3gpO1xuICB0d29Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZCh0d29Ib3VyVGVtcEYpO1xuICB0d29Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZCh0d29Ib3VyVGVtcEMpO1xuICB0d29Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodHdvSG91cldlYXRoZXJJY29uKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVIb3VyKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVIb3VyVGVtcEJveCk7XG4gIHRocmVlSG91clRlbXBCb3guYXBwZW5kQ2hpbGQodGhyZWVIb3VyVGVtcEYpO1xuICB0aHJlZUhvdXJUZW1wQm94LmFwcGVuZENoaWxkKHRocmVlSG91clRlbXBDKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVIb3VyV2VhdGhlckljb24pO1xuICBmb3VySG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZvdXJIb3VyKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91clRlbXBCb3gpO1xuICBmb3VySG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZm91ckhvdXJUZW1wQyk7XG4gIGZvdXJIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChmb3VySG91clRlbXBGKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91cldlYXRoZXJJY29uKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmaXZlSG91cik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJUZW1wQm94KTtcbiAgZml2ZUhvdXJUZW1wQm94LmFwcGVuZENoaWxkKGZpdmVIb3VyVGVtcEMpO1xuICBmaXZlSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZml2ZUhvdXJUZW1wRik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJXZWF0aGVySWNvbik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyKTtcbiAgc2l4SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNpeEhvdXJUZW1wQm94KTtcbiAgc2l4SG91clRlbXBCb3guYXBwZW5kQ2hpbGQoc2l4SG91clRlbXBDKTtcbiAgc2l4SG91clRlbXBCb3guYXBwZW5kQ2hpbGQoc2l4SG91clRlbXBGKTtcbiAgc2l4SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNpeEhvdXJXZWF0aGVySWNvbik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNldmVuSG91cik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNldmVuSG91clRlbXBCb3gpO1xuICBzZXZlbkhvdXJUZW1wQm94LmFwcGVuZENoaWxkKHNldmVuSG91clRlbXBDKTtcbiAgc2V2ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZChzZXZlbkhvdXJUZW1wRik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNldmVuSG91cldlYXRoZXJJY29uKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyVGVtcEJveCk7XG4gIGVpZ2h0SG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZWlnaHRIb3VyVGVtcEYpO1xuICBlaWdodEhvdXJUZW1wQm94LmFwcGVuZENoaWxkKGVpZ2h0SG91clRlbXBDKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyV2VhdGhlckljb24pO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChuaW5lSG91clRlbXBCb3gpO1xuICBuaW5lSG91clRlbXBCb3guYXBwZW5kQ2hpbGQobmluZUhvdXJUZW1wRik7XG4gIG5pbmVIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChuaW5lSG91clRlbXBDKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChuaW5lSG91cldlYXRoZXJJY29uKTtcbiAgdGVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbkhvdXIpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91clRlbXBCb3gpO1xuICB0ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZCh0ZW5Ib3VyVGVtcEYpO1xuICB0ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZCh0ZW5Ib3VyVGVtcEMpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91cldlYXRoZXJJY29uKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWxldmVuSG91clRlbXBCb3gpO1xuICBlbGV2ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyVGVtcEYpO1xuICBlbGV2ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyVGVtcEMpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWxldmVuSG91cldlYXRoZXJJY29uKTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKHNjcm9sbGJhckxlZnQpO1xuICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQobmF2RG90MCk7XG4gIHNjcm9sbGJhci5hcHBlbmRDaGlsZChuYXZEb3QxKTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKG5hdkRvdDIpO1xuICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyUmlnaHQpO1xuXG4gIHJldHVybiBob3VybHlGb3JlY2FzdFdpZGdldDtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VWYXJpYWJsZShJbWFnZVVSTCkge1xuICBjb25zdCBzcGxpdFVSTCA9IEltYWdlVVJMLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgRGF5T3JOaWdodFZhcmlhYmxlID0gc3BsaXRVUkxbc3BsaXRVUkwubGVuZ3RoIC0gMl07XG4gIGNvbnN0IGltYWdlTnVtYmVyID0gSW1hZ2VVUkwuc2xpY2UoXG4gICAgSW1hZ2VVUkwubGFzdEluZGV4T2YoXCIvXCIpLFxuICAgIEltYWdlVVJMLmxhc3RJbmRleE9mKFwiLlwiKVxuICApLnNsaWNlKC0zKTtcbiAgY29uc3QgaW1hZ2VWYXJpYWJsZSA9IERheU9yTmlnaHRWYXJpYWJsZSArIGltYWdlTnVtYmVyO1xuICByZXR1cm4gaW1hZ2VWYXJpYWJsZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT04M2ViOWU4YTVjZWY0ZjU0OWYxMTQ2MzYyMzE3MDQmcT1cIiArXG4gICAgbG9jYXRpb24gK1xuICAgIFwiJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXCI7XG4gIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgbG9jYXRpb25OYW1lID0gd2VhdGhlckRhdGFbXCJsb2NhdGlvblwiXVtcIm5hbWVcIl07XG4gIGNvbnN0IHJlZ2lvbk5hbWUgPSB3ZWF0aGVyRGF0YVtcImxvY2F0aW9uXCJdW1wicmVnaW9uXCJdO1xuICBjb25zdCBjdXJyZW50RGF5Rm9yZWNhc3QgPSB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIwXCJdO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbkljb24gPSBnZXRJbWFnZVZhcmlhYmxlKFxuICAgIGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl1cbiAgKTtcbiAgY29uc3QgY3VycmVudEhpZ2hDZWxzaXVzID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWF4dGVtcF9jXCJdO1xuICBjb25zdCBjdXJyZW50SGlnaEZhcmVuaGVpdCA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgY3VycmVudExvd0NlbHNpdXMgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRMb3dGYXJlbmhlaXQgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRUZW1wQ2Vsc2l1cyA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcInRlbXBfY1wiXTtcbiAgY29uc3QgY3VycmVudFRlbXBGYXJlbmhlaXQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDZWxzaXVzID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiZmVlbHNsaWtlX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VGYXJlbmhlaXQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJmZWVsc2xpa2VfZlwiXTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiaHVtaWRpdHlcIl07XG4gIGNvbnN0IGN1cnJlbnRXaW5kU3BlZWQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ3aW5kX21waFwiXTtcbiAgY29uc3QgY3VycmVudFJhaW5DaGFuY2UgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJkYWlseV93aWxsX2l0X3JhaW5cIl07XG4gIGNvbnN0IHRvbW9ycm93Rm9yZWNhc3QgPSB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdO1xuICBjb25zdCB0b21vcnJvd0hpZ2hDZWxzaXVzID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoRmFyZW5oZWl0ID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgdG9tb3Jyb3dMb3dDZWxzaXVzID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfY1wiXTtcbiAgY29uc3QgdG9tb3Jyb3dMb3dGYXJlbmhlaXQgPSB0b21vcnJvd0ZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbkljb24gPSBnZXRJbWFnZVZhcmlhYmxlKFxuICAgIHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdXG4gICk7XG4gIGNvbnN0IHR3b0RheUZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMlwiXTtcbiAgY29uc3QgdHdvRGF5SGlnaENlbHNpdXMgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgdHdvRGF5SGlnaEZhcmVuaGVpdCA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWF4dGVtcF9mXCJdO1xuICBjb25zdCB0d29EYXlMb3dDZWxzaXVzID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IHR3b0RheUxvd0ZhcmVuaGVpdCA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCB0d29EYXlDb25kaXRpb25JY29uID0gZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl1cbiAgKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gTnVtYmVyKHdlYXRoZXJEYXRhW1wibG9jYXRpb25cIl1bXCJsb2NhbHRpbWVcIl0uc2xpY2UoMTEsIDEzKSk7XG4gIGxldCBkYXlDb3VudGVyID0gMDtcbiAgbGV0IGhvdXJDb3VudGVyID0gbG9jYWxUaW1lO1xuICBsZXQgaG91ckFyciA9IFtdO1xuICBsZXQgdGVtcEZBcnIgPSBbXTtcbiAgbGV0IHRlbXBDQXJyID0gW107XG4gIGxldCBpY29uQXJyID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgaWYgKGhvdXJDb3VudGVyID4gMjMpIHtcbiAgICAgIGhvdXJDb3VudGVyID0gMDtcbiAgICAgIGRheUNvdW50ZXIrKztcbiAgICB9XG4gICAgaG91ckFyci5wdXNoKGhvdXJDb3VudGVyKTtcbiAgICB0ZW1wRkFyci5wdXNoKFxuICAgICAgd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW2RheUNvdW50ZXJdW1wiaG91clwiXVtob3VyQ291bnRlcl1bXG4gICAgICAgIFwidGVtcF9mXCJcbiAgICAgIF1cbiAgICApO1xuICAgIHRlbXBDQXJyLnB1c2goXG4gICAgICB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bZGF5Q291bnRlcl1bXCJob3VyXCJdW2hvdXJDb3VudGVyXVtcbiAgICAgICAgXCJ0ZW1wX2NcIlxuICAgICAgXVxuICAgICk7XG4gICAgaWNvbkFyci5wdXNoKFxuICAgICAgZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICAgICAgd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW2RheUNvdW50ZXJdW1wiaG91clwiXVtob3VyQ291bnRlcl1bXG4gICAgICAgICAgXCJjb25kaXRpb25cIlxuICAgICAgICBdW1wiaWNvblwiXVxuICAgICAgKVxuICAgICk7XG4gICAgaG91ckNvdW50ZXIrKztcbiAgfVxuXG4gIGNvbnN0IHplcm9Ib3VyVmFyID0gaG91ckFyclswXTtcbiAgY29uc3QgemVyb0hvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzBdO1xuICBjb25zdCB6ZXJvSG91clRlbXBDVmFyID0gdGVtcENBcnJbMF07XG4gIGNvbnN0IHplcm9Ib3VySWNvblZhciA9IGljb25BcnJbMF07XG4gIGNvbnN0IG9uZUhvdXJWYXIgPSBob3VyQXJyWzFdO1xuICBjb25zdCBvbmVIb3VyVGVtcEZWYXIgPSB0ZW1wRkFyclsxXTtcbiAgY29uc3Qgb25lSG91clRlbXBDVmFyID0gdGVtcENBcnJbMV07XG4gIGNvbnN0IG9uZUhvdXJJY29uVmFyID0gaWNvbkFyclsxXTtcbiAgY29uc3QgdHdvSG91clZhciA9IGhvdXJBcnJbMl07XG4gIGNvbnN0IHR3b0hvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzJdO1xuICBjb25zdCB0d29Ib3VyVGVtcENWYXIgPSB0ZW1wQ0FyclsyXTtcbiAgY29uc3QgdHdvSG91ckljb25WYXIgPSBpY29uQXJyWzJdO1xuICBjb25zdCB0aHJlZUhvdXJWYXIgPSBob3VyQXJyWzNdO1xuICBjb25zdCB0aHJlZUhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzNdO1xuICBjb25zdCB0aHJlZUhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzNdO1xuICBjb25zdCB0aHJlZUhvdXJJY29uVmFyID0gaWNvbkFyclszXTtcbiAgY29uc3QgZm91ckhvdXJWYXIgPSBob3VyQXJyWzRdO1xuICBjb25zdCBmb3VySG91clRlbXBGVmFyID0gdGVtcEZBcnJbNF07XG4gIGNvbnN0IGZvdXJIb3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls0XTtcbiAgY29uc3QgZm91ckhvdXJJY29uVmFyID0gaWNvbkFycls0XTtcbiAgY29uc3QgZml2ZUhvdXJWYXIgPSBob3VyQXJyWzVdO1xuICBjb25zdCBmaXZlSG91clRlbXBGVmFyID0gdGVtcEZBcnJbNV07XG4gIGNvbnN0IGZpdmVIb3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls1XTtcbiAgY29uc3QgZml2ZUhvdXJJY29uVmFyID0gaWNvbkFycls1XTtcbiAgY29uc3Qgc2l4SG91clZhciA9IGhvdXJBcnJbNl07XG4gIGNvbnN0IHNpeEhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzZdO1xuICBjb25zdCBzaXhIb3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls2XTtcbiAgY29uc3Qgc2l4SG91ckljb25WYXIgPSBpY29uQXJyWzZdO1xuICBjb25zdCBzZXZlbkhvdXJWYXIgPSBob3VyQXJyWzddO1xuICBjb25zdCBzZXZlbkhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzddO1xuICBjb25zdCBzZXZlbkhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzddO1xuICBjb25zdCBzZXZlbkhvdXJJY29uVmFyID0gaWNvbkFycls3XTtcbiAgY29uc3QgZWlnaHRIb3VyVmFyID0gaG91ckFycls4XTtcbiAgY29uc3QgZWlnaHRIb3VyVGVtcEZWYXIgPSB0ZW1wRkFycls4XTtcbiAgY29uc3QgZWlnaHRIb3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls4XTtcbiAgY29uc3QgZWlnaHRIb3VySWNvblZhciA9IGljb25BcnJbOF07XG4gIGNvbnN0IG5pbmVIb3VyVmFyID0gaG91ckFycls5XTtcbiAgY29uc3QgbmluZUhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzldO1xuICBjb25zdCBuaW5lSG91clRlbXBDVmFyID0gdGVtcENBcnJbOV07XG4gIGNvbnN0IG5pbmVIb3VySWNvblZhciA9IGljb25BcnJbOV07XG4gIGNvbnN0IHRlbkhvdXJWYXIgPSBob3VyQXJyWzEwXTtcbiAgY29uc3QgdGVuSG91clRlbXBGVmFyID0gdGVtcEZBcnJbMTBdO1xuICBjb25zdCB0ZW5Ib3VyVGVtcENWYXIgPSB0ZW1wQ0FyclsxMF07XG4gIGNvbnN0IHRlbkhvdXJJY29uVmFyID0gaWNvbkFyclsxMF07XG4gIGNvbnN0IGVsZXZlbkhvdXJWYXIgPSBob3VyQXJyWzExXTtcbiAgY29uc3QgZWxldmVuSG91clRlbXBGVmFyID0gdGVtcEZBcnJbMTFdO1xuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcENWYXIgPSB0ZW1wQ0FyclsxMV07XG4gIGNvbnN0IGVsZXZlbkhvdXJJY29uVmFyID0gaWNvbkFyclsxMV07XG5cbiAgY29uc3Qgc3BhcnNlZFdlYXRoZXJEYXRhID0ge1xuICAgIGxvY2F0aW9uTmFtZSxcbiAgICByZWdpb25OYW1lLFxuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY3VycmVudENvbmRpdGlvbkljb24sXG4gICAgY3VycmVudEhpZ2hDZWxzaXVzLFxuICAgIGN1cnJlbnRIaWdoRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRMb3dDZWxzaXVzLFxuICAgIGN1cnJlbnRMb3dGYXJlbmhlaXQsXG4gICAgY3VycmVudFRlbXBDZWxzaXVzLFxuICAgIGN1cnJlbnRUZW1wRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDZWxzaXVzLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGYXJlbmhlaXQsXG4gICAgY3VycmVudFdpbmRTcGVlZCxcbiAgICBjdXJyZW50SHVtaWRpdHksXG4gICAgY3VycmVudFJhaW5DaGFuY2UsXG4gICAgdG9tb3Jyb3dIaWdoQ2Vsc2l1cyxcbiAgICB0b21vcnJvd0hpZ2hGYXJlbmhlaXQsXG4gICAgdG9tb3Jyb3dMb3dDZWxzaXVzLFxuICAgIHRvbW9ycm93TG93RmFyZW5oZWl0LFxuICAgIHRvbW9ycm93Q29uZGl0aW9uSWNvbixcbiAgICB0d29EYXlIaWdoQ2Vsc2l1cyxcbiAgICB0d29EYXlIaWdoRmFyZW5oZWl0LFxuICAgIHR3b0RheUxvd0NlbHNpdXMsXG4gICAgdHdvRGF5TG93RmFyZW5oZWl0LFxuICAgIHR3b0RheUNvbmRpdGlvbkljb24sXG4gICAgbG9jYWxUaW1lLFxuICAgIHplcm9Ib3VyVmFyLFxuICAgIHplcm9Ib3VyVGVtcEZWYXIsXG4gICAgemVyb0hvdXJUZW1wQ1ZhcixcbiAgICB6ZXJvSG91ckljb25WYXIsXG4gICAgb25lSG91clZhcixcbiAgICBvbmVIb3VyVGVtcEZWYXIsXG4gICAgb25lSG91clRlbXBDVmFyLFxuICAgIG9uZUhvdXJJY29uVmFyLFxuICAgIHR3b0hvdXJWYXIsXG4gICAgdHdvSG91clRlbXBGVmFyLFxuICAgIHR3b0hvdXJUZW1wQ1ZhcixcbiAgICB0d29Ib3VySWNvblZhcixcbiAgICB0aHJlZUhvdXJWYXIsXG4gICAgdGhyZWVIb3VyVGVtcEZWYXIsXG4gICAgdGhyZWVIb3VyVGVtcENWYXIsXG4gICAgdGhyZWVIb3VySWNvblZhcixcbiAgICBmb3VySG91clZhcixcbiAgICBmb3VySG91clRlbXBGVmFyLFxuICAgIGZvdXJIb3VyVGVtcENWYXIsXG4gICAgZm91ckhvdXJJY29uVmFyLFxuICAgIGZpdmVIb3VyVmFyLFxuICAgIGZpdmVIb3VyVGVtcEZWYXIsXG4gICAgZml2ZUhvdXJUZW1wQ1ZhcixcbiAgICBmaXZlSG91ckljb25WYXIsXG4gICAgc2l4SG91clZhcixcbiAgICBzaXhIb3VyVGVtcEZWYXIsXG4gICAgc2l4SG91clRlbXBDVmFyLFxuICAgIHNpeEhvdXJJY29uVmFyLFxuICAgIHNldmVuSG91clZhcixcbiAgICBzZXZlbkhvdXJUZW1wRlZhcixcbiAgICBzZXZlbkhvdXJUZW1wQ1ZhcixcbiAgICBzZXZlbkhvdXJJY29uVmFyLFxuICAgIGVpZ2h0SG91clZhcixcbiAgICBlaWdodEhvdXJUZW1wRlZhcixcbiAgICBlaWdodEhvdXJUZW1wQ1ZhcixcbiAgICBlaWdodEhvdXJJY29uVmFyLFxuICAgIG5pbmVIb3VyVmFyLFxuICAgIG5pbmVIb3VyVGVtcEZWYXIsXG4gICAgbmluZUhvdXJUZW1wQ1ZhcixcbiAgICBuaW5lSG91ckljb25WYXIsXG4gICAgdGVuSG91clZhcixcbiAgICB0ZW5Ib3VyVGVtcEZWYXIsXG4gICAgdGVuSG91clRlbXBDVmFyLFxuICAgIHRlbkhvdXJJY29uVmFyLFxuICAgIGVsZXZlbkhvdXJWYXIsXG4gICAgZWxldmVuSG91clRlbXBGVmFyLFxuICAgIGVsZXZlbkhvdXJUZW1wQ1ZhcixcbiAgICBlbGV2ZW5Ib3VySWNvblZhcixcbiAgfTtcblxuICB1cGRhdGVEYXNoYm9hcmQoc3BhcnNlZFdlYXRoZXJEYXRhKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGFzaGJvYXJkKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArXG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2Uod2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbikgK1xuICAgICAgXCIpXCJcbiAgKTtcbiAgY29uc3QgbG9jYXRpb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuICBsb2NhdGlvblBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlckRhdGEubG9jYXRpb25OYW1lICsgXCIsIFwiICsgd2VhdGhlckRhdGEucmVnaW9uTmFtZTtcbiAgY29uc3QgY29uZGl0aW9uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25cIik7XG4gIGNvbmRpdGlvblBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb247XG4gIGNvbnN0IGN1cnJlbnRUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFRlbXBGXCIpO1xuICBjdXJyZW50VGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudFRlbXBGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IGN1cnJlbnRUZW1wQ1BhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFRlbXBDXCIpO1xuICBjdXJyZW50VGVtcENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudFRlbXBDZWxzaXVzKSArIFwiQ1wiO1xuICBjb25zdCBmZWVsc0xpa2VGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VGXCIpO1xuICBmZWVsc0xpa2VGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkZFRUxTIExJS0U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCBmZWVsc0xpa2VDUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VDXCIpO1xuICBmZWVsc0xpa2VDUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkZFRUxTIExJS0U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cykgKyBcIkNcIjtcbiAgY29uc3Qgd2luZFNwZWVkUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kU3BlZWRcIik7XG4gIHdpbmRTcGVlZFBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJXSU5EOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnRXaW5kU3BlZWQgKyBcIiBNUEhcIjtcbiAgY29uc3QgaHVtaWRpdHlQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBodW1pZGl0eVBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJIVU1JRElUWTogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50SHVtaWRpdHkgKyBcIiVcIjtcbiAgY29uc3QgdG9kYXlIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9kYXlIaWdoQ1BhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlIaWdoQ1wiKTtcbiAgdG9kYXlIaWdoQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50SGlnaENlbHNpdXMpICsgXCJDXCI7XG4gIGNvbnN0IHRvZGF5TG93RlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlMb3dGXCIpO1xuICB0b2RheUxvd0ZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudExvd0ZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9kYXlMb3dDUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheUxvd0NcIik7XG4gIHRvZGF5TG93Q1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50TG93Q2Vsc2l1cykgKyBcIkNcIjtcbiAgY29uc3QgdG9kYXlXZWF0aGVySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlXZWF0aGVySWNvblwiKTtcbiAgbGV0IGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbkljb247XG4gIHRvZGF5V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50b21vcnJvd0hpZ2hGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHRvbW9ycm93SGlnaENQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93SGlnaENcIik7XG4gIHRvbW9ycm93SGlnaENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudG9tb3Jyb3dIaWdoQ2Vsc2l1cykgKyBcIkNcIjtcbiAgY29uc3QgdG9tb3Jyb3dMb3dGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd0xvd0ZcIik7XG4gIHRvbW9ycm93TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50b21vcnJvd0xvd0ZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9tb3Jyb3dMb3dDUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd0xvd0NcIik7XG4gIHRvbW9ycm93TG93Q1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50b21vcnJvd0xvd0NlbHNpdXMpICsgXCJDXCI7XG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnRvbW9ycm93V2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnRvbW9ycm93Q29uZGl0aW9uSWNvbjtcbiAgdG9tb3Jyb3dXZWF0aGVySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB0d29EYXlIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzSGlnaEZcIik7XG4gIHR3b0RheUhpZ2hGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0RheUhpZ2hGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHR3b0RheUhpZ2hDUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNIaWdoQ1wiKTtcbiAgdHdvRGF5SGlnaENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvRGF5SGlnaENlbHNpdXMpICsgXCJDXCI7XG4gIGNvbnN0IHR3b0RheUxvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluVHdvRGF5c0xvd0ZcIik7XG4gIHR3b0RheUxvd0ZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvRGF5TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0d29EYXlMb3dDUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNMb3dDXCIpO1xuICB0d29EYXlMb3dDUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0RheUxvd0NlbHNpdXMpICsgXCJDXCI7XG4gIGNvbnN0IHR3b0RheVdlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pblR3b0RheXNXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudHdvRGF5Q29uZGl0aW9uSWNvbjtcbiAgdHdvRGF5V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgemVyb0hvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm9Ib3VyXCIpO1xuICB6ZXJvSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnplcm9Ib3VyVmFyO1xuICBjb25zdCB6ZXJvSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvSG91clRlbXBGXCIpO1xuICB6ZXJvSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnplcm9Ib3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IHplcm9Ib3VyVGVtcENQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm9Ib3VyVGVtcENcIik7XG4gIHplcm9Ib3VyVGVtcENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuemVyb0hvdXJUZW1wQ1ZhcikgKyBcIkNcIjtcbiAgY29uc3QgemVyb0hvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnplcm9Ib3VySWNvblZhcjtcbiAgemVyb0hvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IG9uZUhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZUhvdXJcIik7XG4gIG9uZUhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5vbmVIb3VyVmFyO1xuICBjb25zdCBvbmVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZUhvdXJUZW1wRlwiKTtcbiAgb25lSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm9uZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3Qgb25lSG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyVGVtcENcIik7XG4gIG9uZUhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5vbmVIb3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IG9uZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEub25lSG91ckljb25WYXI7XG4gIG9uZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHR3b0hvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJcIik7XG4gIHR3b0hvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50d29Ib3VyVmFyO1xuICBjb25zdCB0d29Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJUZW1wRlwiKTtcbiAgdHdvSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0hvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgdHdvSG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0d29Ib3VyVGVtcENcIik7XG4gIHR3b0hvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50d29Ib3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IHR3b0hvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0d29Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudHdvSG91ckljb25WYXI7XG4gIHR3b0hvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHRocmVlSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhyZWVIb3VyXCIpO1xuICB0aHJlZUhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50aHJlZUhvdXJWYXI7XG4gIGNvbnN0IHRocmVlSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZUhvdXJUZW1wRlwiKTtcbiAgdGhyZWVIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudGhyZWVIb3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IHRocmVlSG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZUhvdXJUZW1wQ1wiKTtcbiAgdGhyZWVIb3VyVGVtcENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudGhyZWVIb3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IHRocmVlSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInRocmVlSG91cldlYXRoZXJJY29uXCJcbiAgKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50aHJlZUhvdXJJY29uVmFyO1xuICB0aHJlZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IGZvdXJIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91clwiKTtcbiAgZm91ckhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3VySG91clZhcjtcbiAgY29uc3QgZm91ckhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91ckhvdXJUZW1wRlwiKTtcbiAgZm91ckhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5mb3VySG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBmb3VySG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91clRlbXBDXCIpO1xuICBmb3VySG91clRlbXBDUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmZvdXJIb3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IGZvdXJIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91ckhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5mb3VySG91ckljb25WYXI7XG4gIGZvdXJIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBmaXZlSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZUhvdXJcIik7XG4gIGZpdmVIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZml2ZUhvdXJWYXI7XG4gIGNvbnN0IGZpdmVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVIb3VyVGVtcEZcIik7XG4gIGZpdmVIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuZml2ZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZml2ZUhvdXJUZW1wQ1BhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZUhvdXJUZW1wQ1wiKTtcbiAgZml2ZUhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5maXZlSG91clRlbXBDVmFyKSArIFwiQ1wiO1xuICBjb25zdCBmaXZlSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuZml2ZUhvdXJJY29uVmFyO1xuICBmaXZlSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3Qgc2l4SG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l4SG91clwiKTtcbiAgc2l4SG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnNpeEhvdXJWYXI7XG4gIGNvbnN0IHNpeEhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l4SG91clRlbXBGXCIpO1xuICBzaXhIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuc2l4SG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBzaXhIb3VyVGVtcENQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJUZW1wQ1wiKTtcbiAgc2l4SG91clRlbXBDUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnNpeEhvdXJUZW1wQ1ZhcikgKyBcIkNcIjtcbiAgY29uc3Qgc2l4SG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5zaXhIb3VySWNvblZhcjtcbiAgc2l4SG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3Qgc2V2ZW5Ib3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXZlbkhvdXJcIik7XG4gIHNldmVuSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnNldmVuSG91clZhcjtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldmVuSG91clRlbXBGXCIpO1xuICBzZXZlbkhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5zZXZlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcENQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldmVuSG91clRlbXBDXCIpO1xuICBzZXZlbkhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5zZXZlbkhvdXJUZW1wQ1ZhcikgKyBcIkNcIjtcbiAgY29uc3Qgc2V2ZW5Ib3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwic2V2ZW5Ib3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnNldmVuSG91ckljb25WYXI7XG4gIHNldmVuSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgZWlnaHRIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlaWdodEhvdXJcIik7XG4gIGVpZ2h0SG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmVpZ2h0SG91clZhcjtcbiAgY29uc3QgZWlnaHRIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVpZ2h0SG91clRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5laWdodEhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZWlnaHRIb3VyVGVtcENQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVpZ2h0SG91clRlbXBDXCIpO1xuICBlaWdodEhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5laWdodEhvdXJUZW1wQ1ZhcikgKyBcIkNcIjtcbiAgY29uc3QgZWlnaHRIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZWlnaHRIb3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmVpZ2h0SG91ckljb25WYXI7XG4gIGVpZ2h0SG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgbmluZUhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pbmVIb3VyXCIpO1xuICBuaW5lSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm5pbmVIb3VyVmFyO1xuICBjb25zdCBuaW5lSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaW5lSG91clRlbXBGXCIpO1xuICBuaW5lSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm5pbmVIb3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IG5pbmVIb3VyVGVtcENQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pbmVIb3VyVGVtcENcIik7XG4gIG5pbmVIb3VyVGVtcENQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEubmluZUhvdXJUZW1wQ1ZhcikgKyBcIkNcIjtcbiAgY29uc3QgbmluZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaW5lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLm5pbmVIb3VySWNvblZhcjtcbiAgbmluZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHRlbkhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbkhvdXJcIik7XG4gIHRlbkhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50ZW5Ib3VyVmFyO1xuICBjb25zdCB0ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbkhvdXJUZW1wRlwiKTtcbiAgdGVuSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgdGVuSG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyVGVtcENcIik7XG4gIHRlbkhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50ZW5Ib3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IHRlbkhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudGVuSG91ckljb25WYXI7XG4gIHRlbkhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IGVsZXZlbkhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZXZlbkhvdXJcIik7XG4gIGVsZXZlbkhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5lbGV2ZW5Ib3VyVmFyO1xuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZXZlbkhvdXJUZW1wRlwiKTtcbiAgZWxldmVuSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmVsZXZlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZWxldmVuSG91clRlbXBDUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGV2ZW5Ib3VyVGVtcENcIik7XG4gIGVsZXZlbkhvdXJUZW1wQ1BhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5lbGV2ZW5Ib3VyVGVtcENWYXIpICsgXCJDXCI7XG4gIGNvbnN0IGVsZXZlbkhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJlbGV2ZW5Ib3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmVsZXZlbkhvdXJJY29uVmFyO1xuICBlbGV2ZW5Ib3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYUlucHV0XCIpLnZhbHVlO1xuICBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcmVhSW5wdXRcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VWYXJpYWJsZSkge1xuICBjb25zdCBpbWFnZURheW9yTmlnaHQgPSBpbWFnZVZhcmlhYmxlLnNsaWNlKDAsIC0zKTtcbiAgY29uc3QgaW1hZ2VOdW1iZXIgPSBpbWFnZVZhcmlhYmxlLnNsaWNlKC0zKTtcbiAgaWYgKGltYWdlRGF5b3JOaWdodCA9PSBcImRheVwiKSB7XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTEzXCIpIHtcbiAgICAgIHJldHVybiBEMTEzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTZcIikge1xuICAgICAgcmV0dXJuIEQxMTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExOVwiKSB7XG4gICAgICByZXR1cm4gRDExOTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTIyXCIpIHtcbiAgICAgIHJldHVybiBEMTIyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNDNcIikge1xuICAgICAgcmV0dXJuIEQxNDM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE3NlwiKSB7XG4gICAgICByZXR1cm4gRDE3NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTc5XCIpIHtcbiAgICAgIHJldHVybiBEMTc5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODJcIikge1xuICAgICAgcmV0dXJuIEQxODI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE4NVwiKSB7XG4gICAgICByZXR1cm4gRDE4NTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjAwXCIpIHtcbiAgICAgIHJldHVybiBEMjAwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMjdcIikge1xuICAgICAgcmV0dXJuIEQyMjc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIzMFwiKSB7XG4gICAgICByZXR1cm4gRDIzMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjQ4XCIpIHtcbiAgICAgIHJldHVybiBEMjQ4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjBcIikge1xuICAgICAgcmV0dXJuIEQyNjA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2M1wiKSB7XG4gICAgICByZXR1cm4gRDI2MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjY2XCIpIHtcbiAgICAgIHJldHVybiBEMjY2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODFcIikge1xuICAgICAgcmV0dXJuIEQyODE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI4NFwiKSB7XG4gICAgICByZXR1cm4gRDI4NDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjkzXCIpIHtcbiAgICAgIHJldHVybiBEMjkzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTZcIikge1xuICAgICAgcmV0dXJuIEQyOTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5OVwiKSB7XG4gICAgICByZXR1cm4gRDI5OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzAyXCIpIHtcbiAgICAgIHJldHVybiBEMzAyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDVcIikge1xuICAgICAgcmV0dXJuIEQzMDU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwOFwiKSB7XG4gICAgICByZXR1cm4gRDMwODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzExXCIpIHtcbiAgICAgIHJldHVybiBEMzExO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTRcIikge1xuICAgICAgcmV0dXJuIEQzMTQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxN1wiKSB7XG4gICAgICByZXR1cm4gRDMxNztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIwXCIpIHtcbiAgICAgIHJldHVybiBEMzIwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjNcIikge1xuICAgICAgcmV0dXJuIEQzMjM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyNlwiKSB7XG4gICAgICByZXR1cm4gRDMyNjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzI5XCIpIHtcbiAgICAgIHJldHVybiBEMzI5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzJcIikge1xuICAgICAgcmV0dXJuIEQzMzI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzNVwiKSB7XG4gICAgICByZXR1cm4gRDMzNTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzM4XCIpIHtcbiAgICAgIHJldHVybiBEMzM4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTBcIikge1xuICAgICAgcmV0dXJuIEQzNTA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1M1wiKSB7XG4gICAgICByZXR1cm4gRDM1MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU2XCIpIHtcbiAgICAgIHJldHVybiBEMzU2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTlcIikge1xuICAgICAgcmV0dXJuIEQzNTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2MlwiKSB7XG4gICAgICByZXR1cm4gRDM2MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY1XCIpIHtcbiAgICAgIHJldHVybiBEMzY1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjhcIikge1xuICAgICAgcmV0dXJuIEQzNjg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3MVwiKSB7XG4gICAgICByZXR1cm4gRDM3MTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc0XCIpIHtcbiAgICAgIHJldHVybiBEMzc0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzdcIikge1xuICAgICAgcmV0dXJuIEQzNzc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM4NlwiKSB7XG4gICAgICByZXR1cm4gRDM4NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzg5XCIpIHtcbiAgICAgIHJldHVybiBEMzg5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTJcIikge1xuICAgICAgcmV0dXJuIEQzOTI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM5NVwiKSB7XG4gICAgICByZXR1cm4gRDM5NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEQxMTM7XG4gICAgfVxuICB9XG4gIGlmIChpbWFnZURheW9yTmlnaHQgPT0gXCJuaWdodFwiKSB7XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTEzXCIpIHtcbiAgICAgIHJldHVybiBOMTEzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTZcIikge1xuICAgICAgcmV0dXJuIE4xMTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExOVwiKSB7XG4gICAgICByZXR1cm4gTjExOTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTIyXCIpIHtcbiAgICAgIHJldHVybiBOMTIyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNDNcIikge1xuICAgICAgcmV0dXJuIE4xNDM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE3NlwiKSB7XG4gICAgICByZXR1cm4gTjE3NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTc5XCIpIHtcbiAgICAgIHJldHVybiBOMTc5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODJcIikge1xuICAgICAgcmV0dXJuIE4xODI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE4NVwiKSB7XG4gICAgICByZXR1cm4gTjE4NTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjAwXCIpIHtcbiAgICAgIHJldHVybiBOMjAwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMjdcIikge1xuICAgICAgcmV0dXJuIE4yMjc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIzMFwiKSB7XG4gICAgICByZXR1cm4gTjIzMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjQ4XCIpIHtcbiAgICAgIHJldHVybiBOMjQ4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjBcIikge1xuICAgICAgcmV0dXJuIE4yNjA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2M1wiKSB7XG4gICAgICByZXR1cm4gTjI2MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjY2XCIpIHtcbiAgICAgIHJldHVybiBOMjY2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODFcIikge1xuICAgICAgcmV0dXJuIE4yODE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI4NFwiKSB7XG4gICAgICByZXR1cm4gTjI4NDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjkzXCIpIHtcbiAgICAgIHJldHVybiBOMjkzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTZcIikge1xuICAgICAgcmV0dXJuIE4yOTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5OVwiKSB7XG4gICAgICByZXR1cm4gTjI5OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzAyXCIpIHtcbiAgICAgIHJldHVybiBOMzAyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDVcIikge1xuICAgICAgcmV0dXJuIE4zMDU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwOFwiKSB7XG4gICAgICByZXR1cm4gTjMwODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzExXCIpIHtcbiAgICAgIHJldHVybiBOMzExO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTRcIikge1xuICAgICAgcmV0dXJuIE4zMTQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxN1wiKSB7XG4gICAgICByZXR1cm4gTjMxNztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIwXCIpIHtcbiAgICAgIHJldHVybiBOMzIwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjNcIikge1xuICAgICAgcmV0dXJuIE4zMjM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyNlwiKSB7XG4gICAgICByZXR1cm4gTjMyNjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzI5XCIpIHtcbiAgICAgIHJldHVybiBOMzI5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzJcIikge1xuICAgICAgcmV0dXJuIE4zMzI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzNVwiKSB7XG4gICAgICByZXR1cm4gTjMzNTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzM4XCIpIHtcbiAgICAgIHJldHVybiBOMzM4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTBcIikge1xuICAgICAgcmV0dXJuIE4zNTA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1M1wiKSB7XG4gICAgICByZXR1cm4gTjM1MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU2XCIpIHtcbiAgICAgIHJldHVybiBOMzU2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTlcIikge1xuICAgICAgcmV0dXJuIE4zNTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2MlwiKSB7XG4gICAgICByZXR1cm4gTjM2MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY1XCIpIHtcbiAgICAgIHJldHVybiBOMzY1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjhcIikge1xuICAgICAgcmV0dXJuIE4zNjg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3MVwiKSB7XG4gICAgICByZXR1cm4gTjM3MTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc0XCIpIHtcbiAgICAgIHJldHVybiBOMzc0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzdcIikge1xuICAgICAgcmV0dXJuIE4zNzc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM4NlwiKSB7XG4gICAgICByZXR1cm4gTjM4NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzg5XCIpIHtcbiAgICAgIHJldHVybiBOMzg5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTJcIikge1xuICAgICAgcmV0dXJuIE4zOTI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM5NVwiKSB7XG4gICAgICByZXR1cm4gTjM5NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE4xMTM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBEMTEzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxlZnRDbGljaygpIHtcbiAgaWYgKHNjcm9sbENvdW50ZXIgPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAxKSB7XG4gICAgc2Nyb2xsQ291bnRlci0tO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLXJpZ2h0XCIpO1xuICAgIGluZm9ib3gwLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZS1sZWZ0XCIpO1xuICAgIGluZm9ib3gwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbmF2RG90T25lLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZBY3RpdmVcIik7XG4gICAgbmF2RG90WmVyby5jbGFzc0xpc3QuYWRkKFwibmF2QWN0aXZlXCIpO1xuICB9XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDIpIHtcbiAgICBzY3JvbGxDb3VudGVyLS07XG4gICAgaW5mb2JveDIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbmZvYm94Mi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtcmlnaHRcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlLWxlZnRcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZEb3RUd28uY2xhc3NMaXN0LnJlbW92ZShcIm5hdkFjdGl2ZVwiKTtcbiAgICBuYXZEb3RPbmUuY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSaWdodENsaWNrKCkge1xuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDEpIHtcbiAgICBzY3JvbGxDb3VudGVyKys7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbmZvYm94MS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtbGVmdFwiKTtcbiAgICBpbmZvYm94Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmUtcmlnaHRcIik7XG4gICAgaW5mb2JveDIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZEb3RPbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdkFjdGl2ZVwiKTtcbiAgICBuYXZEb3RUd28uY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAwKSB7XG4gICAgc2Nyb2xsQ291bnRlcisrO1xuICAgIGluZm9ib3gwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5mb2JveDAuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLWxlZnRcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlLXJpZ2h0XCIpO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbmF2RG90WmVyby5jbGFzc0xpc3QucmVtb3ZlKFwibmF2QWN0aXZlXCIpO1xuICAgIG5hdkRvdE9uZS5jbGFzc0xpc3QuYWRkKFwibmF2QWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmRJbWFnZShjdXJyZW50Q29uZGl0aW9uKSB7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRDb25kaXRpb24pO1xuICBjb25zdCB3cmFwcGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naXRodWJcIik7XG4gIGlmIChjdXJyZW50Q29uZGl0aW9uID09IFwiU3VubnlcIikge1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVRleHRcIik7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LmFkZChcImJsYWNrVGV4dFwiKTtcbiAgICBnaXRodWIuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlXCIpO1xuICAgIHJldHVybiBzdW5ueURheTtcbiAgfVxuICBpZiAoY3VycmVudENvbmRpdGlvbiA9PSBcIkNsZWFyXCIpIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVRleHRcIik7XG4gICAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgICByZXR1cm4gY2xlYXJOaWdodDtcbiAgfVxuICBpZiAoXG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhcnRseSBjbG91ZHlcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJDbG91ZHlcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJPdmVyY2FzdFwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCJcbiAgKSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmxhY2tUZXh0XCIpO1xuICAgIGdpdGh1Yi5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVcIik7XG4gICAgcmV0dXJuIGNsb3VkeURheTtcbiAgfVxuICBpZiAoXG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1pc3RcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJGb2dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJGcmVlemluZyBmb2dcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJibGFja1RleHRcIik7XG4gICAgZ2l0aHViLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVwiKTtcbiAgICByZXR1cm4gZm9nZ3lEYXk7XG4gIH1cbiAgaWYgKFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiQmxvd2luZyBzbm93XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiQmxpenphcmRcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgbGlnaHQgc25vd1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1vZGVyYXRlIHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgaGVhdnkgc25vd1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkhlYXZ5IHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJJY2UgcGVsbGV0c1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHNsZWV0XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiRnJlZXppbmcgZHJpenpsZVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBmcmVlemluZyByYWluXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCJcbiAgKSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmxhY2tUZXh0XCIpO1xuICAgIGdpdGh1Yi5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVcIik7XG4gICAgcmV0dXJuIHNub3d5RGF5O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTGlnaHQgZHJpenpsZVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIlBhdGNoeSBsaWdodCByYWluXCJcbiAgKSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmxhY2tUZXh0XCIpO1xuICAgIGdpdGh1Yi5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVcIik7XG4gICAgcmV0dXJuIG92ZXJjYXN0RGF5O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTGlnaHQgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkhlYXZ5IHJhaW4gYXQgVGltZXNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJIZWF2eSByYWluXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVRleHRcIik7XG4gICAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgICByZXR1cm4gcmFpbnlEYXk7XG4gIH1cbiAgaWYgKFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVRleHRcIik7XG4gICAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgICByZXR1cm4gc3Rvcm15RGF5O1xuICB9IGVsc2Uge1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVRleHRcIik7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LmFkZChcImJsYWNrVGV4dFwiKTtcbiAgICBnaXRodWIuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlXCIpO1xuICAgIHJldHVybiBzdW5ueURheTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVDQW5kRigpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRUZW1wRlwiKTtcbiAgY29uc3QgY3VycmVudFRlbXBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50VGVtcENcIik7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZUZcIik7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZUNcIik7XG4gIGNvbnN0IHRvZGF5SGlnaEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5SGlnaEZcIik7XG4gIGNvbnN0IHRvZGF5SGlnaEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5SGlnaENcIik7XG4gIGNvbnN0IHRvZGF5TG93RiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlMb3dGXCIpO1xuICBjb25zdCB0b2RheUxvd0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5TG93Q1wiKTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dIaWdoRlwiKTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dIaWdoQ1wiKTtcbiAgY29uc3QgdG9tb3Jyb3dMb3dGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd0xvd0ZcIik7XG4gIGNvbnN0IHRvbW9ycm93TG93QyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dMb3dDXCIpO1xuICBjb25zdCBpblR3b0RheXNIaWdoRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzSGlnaEZcIik7XG4gIGNvbnN0IGluVHdvRGF5c0hpZ2hDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNIaWdoQ1wiKTtcbiAgY29uc3QgaW5Ud29EYXlzTG93RiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzTG93RlwiKTtcbiAgY29uc3QgaW5Ud29EYXlzTG93QyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzTG93Q1wiKTtcbiAgY29uc3QgemVyb0hvdXJUZW1wQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyb0hvdXJUZW1wQ1wiKTtcbiAgY29uc3QgemVyb0hvdXJUZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyb0hvdXJUZW1wRlwiKTtcbiAgY29uc3Qgb25lSG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyVGVtcENcIik7XG4gIGNvbnN0IG9uZUhvdXJUZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lSG91clRlbXBGXCIpO1xuICBjb25zdCB0d29Ib3VyVGVtcEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJUZW1wQ1wiKTtcbiAgY29uc3QgdHdvSG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0d29Ib3VyVGVtcEZcIik7XG4gIGNvbnN0IHRocmVlSG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZUhvdXJUZW1wQ1wiKTtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcEYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRocmVlSG91clRlbXBGXCIpO1xuICBjb25zdCBmb3VySG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91clRlbXBDXCIpO1xuICBjb25zdCBmb3VySG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91clRlbXBGXCIpO1xuICBjb25zdCBmaXZlSG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlSG91clRlbXBDXCIpO1xuICBjb25zdCBmaXZlSG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlSG91clRlbXBGXCIpO1xuICBjb25zdCBzaXhIb3VyVGVtcEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJUZW1wQ1wiKTtcbiAgY29uc3Qgc2l4SG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaXhIb3VyVGVtcEZcIik7XG4gIGNvbnN0IHNldmVuSG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXZlbkhvdXJUZW1wQ1wiKTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldmVuSG91clRlbXBGXCIpO1xuICBjb25zdCBlaWdodEhvdXJUZW1wQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWlnaHRIb3VyVGVtcENcIik7XG4gIGNvbnN0IGVpZ2h0SG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlaWdodEhvdXJUZW1wRlwiKTtcbiAgY29uc3QgbmluZUhvdXJUZW1wQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmluZUhvdXJUZW1wQ1wiKTtcbiAgY29uc3QgbmluZUhvdXJUZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmluZUhvdXJUZW1wRlwiKTtcbiAgY29uc3QgdGVuSG91clRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyVGVtcENcIik7XG4gIGNvbnN0IHRlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVuSG91clRlbXBGXCIpO1xuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZXZlbkhvdXJUZW1wQ1wiKTtcbiAgY29uc3QgZWxldmVuSG91clRlbXBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGV2ZW5Ib3VyVGVtcEZcIik7XG5cbiAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgIGN1cnJlbnRUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGN1cnJlbnRUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGZlZWxzTGlrZUYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBmZWVsc0xpa2VDLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdG9kYXlIaWdoRi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRvZGF5SGlnaEMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB0b2RheUxvd0YuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0b2RheUxvd0MuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB0b21vcnJvd0hpZ2hGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdG9tb3Jyb3dIaWdoQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHRvbW9ycm93TG93Ri5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRvbW9ycm93TG93Qy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGluVHdvRGF5c0hpZ2hGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5Ud29EYXlzSGlnaEMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBpblR3b0RheXNMb3dGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5Ud29EYXlzTG93Qy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHplcm9Ib3VyVGVtcEYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB6ZXJvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB6ZXJvSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICB6ZXJvSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb25lSG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgb25lSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBvbmVIb3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIG9uZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHR3b0hvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHR3b0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgdHdvSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICB0d29Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB0aHJlZUhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRocmVlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB0aHJlZUhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgdGhyZWVIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBmb3VySG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZm91ckhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZm91ckhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgZm91ckhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGZpdmVIb3VyVGVtcEYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBmaXZlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBmaXZlSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBmaXZlSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBzaXhIb3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIHNpeEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNldmVuSG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgc2V2ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIHNldmVuSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGVpZ2h0SG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZWlnaHRIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGVpZ2h0SG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBlaWdodEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5pbmVIb3VyVGVtcEYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBuaW5lSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBuaW5lSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBuaW5lSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGVuSG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB0ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIHRlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZWxldmVuSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBlbGV2ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBjdXJyZW50VGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBmZWVsc0xpa2VDLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHRvZGF5SGlnaEMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0b2RheUhpZ2hGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdG9kYXlMb3dDLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdG9kYXlMb3dGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdG9tb3Jyb3dIaWdoQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRvbW9ycm93SGlnaEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB0b21vcnJvd0xvd0MuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0b21vcnJvd0xvd0YuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBpblR3b0RheXNIaWdoQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGluVHdvRGF5c0hpZ2hGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgaW5Ud29EYXlzTG93Qy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB6ZXJvSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgemVyb0hvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgemVyb0hvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgemVyb0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG9uZUhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG9uZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgb25lSG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBvbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB0d29Ib3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0d29Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIHR3b0hvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgdHdvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGhyZWVIb3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aHJlZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgdGhyZWVIb3VyVGVtcEYuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIHRocmVlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgZm91ckhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGZvdXJIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGZvdXJIb3VyVGVtcEYuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIGZvdXJIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBmaXZlSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZml2ZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZml2ZUhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgZml2ZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNpeEhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNpeEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzaXhIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNldmVuSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgc2V2ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBlaWdodEhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGVpZ2h0SG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBlaWdodEhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgZWlnaHRIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuaW5lSG91clRlbXBDLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbmluZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHRlbkhvdXJUZW1wQy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgdGVuSG91clRlbXBGLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICB0ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBlbGV2ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBlbGV2ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgZWxldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxubGV0IHNjcm9sbENvdW50ZXIgPSAwO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVMYXlvdXQoKSk7XG5sZXQgbG9jYXRpb24gPSBcIkRlbnZlciwgQ29sb3JhZG9cIjtcbmdldFdlYXRoZXIobG9jYXRpb24pO1xuY29uc3QgaW5mb2JveDAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdXJseUZvcmVjYXN0SW5kZXhaZXJvXCIpO1xuY29uc3QgaW5mb2JveDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdXJseUZvcmVjYXN0SW5kZXhPbmVcIik7XG5jb25zdCBpbmZvYm94MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFR3b1wiKTtcbmNvbnN0IG5hdkRvdFplcm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkRvdDBcIik7XG5jb25zdCBuYXZEb3RPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkRvdDFcIik7XG5jb25zdCBuYXZEb3RUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkRvdDJcIik7XG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbGJhckxlZnRcIik7XG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JvbGxiYXJSaWdodFwiKTtcbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVmdENsaWNrKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJpZ2h0Q2xpY2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9