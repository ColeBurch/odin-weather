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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.whiteText {\n  color: #f3f3f3;\n}\n\n.blackText {\n  color: #000000;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTemp {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.currentTempF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentTempC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.currentTempC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.feelsLike {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.feelsLikeF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.feelsLikeF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.feelsLikeC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.feelsLikeC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHigh {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.threeDayForecastLow {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.todayHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.inactive-right {\n  transform: translate(50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.inactive-left {\n  transform: translate(-50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTemp {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.hourlyForecastTemp {\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastTemp.inactive {\n  transform: translate(0, 0) scale(0);\n}\n\n.hourlyForecastTemp.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\n.scrollbarLeft,\n.scrollbarRight {\n  filter: invert(97%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.whiteText {\n  color: #f3f3f3;\n}\n\n.blackText {\n  color: #000000;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTemp {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.currentTempF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentTempC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.currentTempC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.feelsLike {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.feelsLikeF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.feelsLikeF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.feelsLikeC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.feelsLikeC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHigh {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.threeDayForecastLow {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.todayHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.todayLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.todayLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.tomorrowLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.tomorrowLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysHighF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysHighC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysHighC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowF {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysLowF.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.inTwoDaysLowC {\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n}\n\n.inTwoDaysLowC.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.inactive-right {\n  transform: translate(50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.inactive-left {\n  transform: translate(-50%, 0) scale(0);\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTemp {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  justify-content: start;\n}\n\n.hourlyForecastTemp {\n  grid-area: 1 / 1 / 1 / 1;\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastTemp.inactive {\n  transform: translate(0, 0) scale(0);\n}\n\n.hourlyForecastTemp.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\n.scrollbarLeft,\n.scrollbarRight {\n  filter: invert(97%) sepia(12%) saturate(201%) hue-rotate(202deg)\n    brightness(118%) contrast(91%);\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n"],"sourceRoot":""}]);
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

  const github = new Image();
  github.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_1__;
  github.classList.add("github");

  header.appendChild(searchContainer);
  searchContainer.appendChild(form);
  form.appendChild(areaInput);
  mainBody.appendChild(leftBox);
  mainBody.appendChild(rightBox);
  leftBox.appendChild(createCurrentDayWidget());
  rightBox.appendChild(createThreeDayForecastWidget());
  rightBox.appendChild(createHourlyForecastWidget());
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
  let imageNumber = weatherData.currentConditionIcon;
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
  imageNumber = weatherData.tomorrowConditionIcon;
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
  imageNumber = weatherData.twoDayConditionIcon;
  twoDayWeatherIconParameter.src = getImagePointer(imageNumber);
  const zeroHourParameter = document.getElementById("zeroHour");
  zeroHourParameter.textContent = weatherData.zeroHourVar;
  const zeroHourTempFParameter = document.getElementById("zeroHourTempF");
  zeroHourTempFParameter.textContent =
    Math.round(weatherData.zeroHourTempFVar) + "F";
  const zeroHourIconParameter = document.getElementById("zeroHourWeatherIcon");
  imageNumber = weatherData.zeroHourIconVar;
  zeroHourIconParameter.src = getImagePointer(imageNumber);
  const oneHourParameter = document.getElementById("oneHour");
  oneHourParameter.textContent = weatherData.oneHourVar;
  const oneHourTempFParameter = document.getElementById("oneHourTempF");
  oneHourTempFParameter.textContent =
    Math.round(weatherData.oneHourTempFVar) + "F";
  const oneHourIconParameter = document.getElementById("oneHourWeatherIcon");
  imageNumber = weatherData.oneHourIconVar;
  oneHourIconParameter.src = getImagePointer(imageNumber);
  const twoHourParameter = document.getElementById("twoHour");
  twoHourParameter.textContent = weatherData.twoHourVar;
  const twoHourTempFParameter = document.getElementById("twoHourTempF");
  twoHourTempFParameter.textContent =
    Math.round(weatherData.twoHourTempFVar) + "F";
  const twoHourIconParameter = document.getElementById("twoHourWeatherIcon");
  imageNumber = weatherData.twoHourIconVar;
  twoHourIconParameter.src = getImagePointer(imageNumber);
  const threeHourParameter = document.getElementById("threeHour");
  threeHourParameter.textContent = weatherData.threeHourVar;
  const threeHourTempFParameter = document.getElementById("threeHourTempF");
  threeHourTempFParameter.textContent =
    Math.round(weatherData.threeHourTempFVar) + "F";
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
  const fourHourIconParameter = document.getElementById("fourHourWeatherIcon");
  imageNumber = weatherData.fourHourIconVar;
  fourHourIconParameter.src = getImagePointer(imageNumber);
  const fiveHourParameter = document.getElementById("fiveHour");
  fiveHourParameter.textContent = weatherData.fiveHourVar;
  const fiveHourTempFParameter = document.getElementById("fiveHourTempF");
  fiveHourTempFParameter.textContent =
    Math.round(weatherData.fiveHourTempFVar) + "F";
  const fiveHourIconParameter = document.getElementById("fiveHourWeatherIcon");
  imageNumber = weatherData.fiveHourIconVar;
  fiveHourIconParameter.src = getImagePointer(imageNumber);
  const sixHourParameter = document.getElementById("sixHour");
  sixHourParameter.textContent = weatherData.sixHourVar;
  const sixHourTempFParameter = document.getElementById("sixHourTempF");
  sixHourTempFParameter.textContent =
    Math.round(weatherData.sixHourTempFVar) + "F";
  const sixHourIconParameter = document.getElementById("sixHourWeatherIcon");
  imageNumber = weatherData.sixHourIconVar;
  sixHourIconParameter.src = getImagePointer(imageNumber);
  const sevenHourParameter = document.getElementById("sevenHour");
  sevenHourParameter.textContent = weatherData.sevenHourVar;
  const sevenHourTempFParameter = document.getElementById("sevenHourTempF");
  sevenHourTempFParameter.textContent =
    Math.round(weatherData.sevenHourTempFVar) + "F";
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
  const nineHourIconParameter = document.getElementById("nineHourWeatherIcon");
  imageNumber = weatherData.nineHourIconVar;
  nineHourIconParameter.src = getImagePointer(imageNumber);
  const tenHourParameter = document.getElementById("tenHour");
  tenHourParameter.textContent = weatherData.tenHourVar;
  const tenHourTempFParameter = document.getElementById("tenHourTempF");
  tenHourTempFParameter.textContent =
    Math.round(weatherData.tenHourTempFVar) + "F";
  const tenHourIconParameter = document.getElementById("tenHourWeatherIcon");
  imageNumber = weatherData.tenHourIconVar;
  tenHourIconParameter.src = getImagePointer(imageNumber);
  const elevenHourParameter = document.getElementById("elevenHour");
  elevenHourParameter.textContent = weatherData.elevenHourVar;
  const elevenHourTempFParameter = document.getElementById("elevenHourTempF");
  elevenHourTempFParameter.textContent =
    Math.round(weatherData.elevenHourTempFVar) + "F";
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
  if (currentCondition == "Sunny") {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    return _images_weather_backgrounds_sunny_jpg__WEBPACK_IMPORTED_MODULE_100__;
  }
  if (currentCondition == "Clear") {
    wrapperText.classList.remove("blackText");
    wrapperText.classList.add("whiteText");
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
    return _images_weather_backgrounds_cloudy_jpg__WEBPACK_IMPORTED_MODULE_101__;
  }
  if (
    currentCondition == "Mist" ||
    currentCondition == "Fog" ||
    currentCondition == "Freezing fog"
  ) {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
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
    return _images_weather_backgrounds_rainy_jpg__WEBPACK_IMPORTED_MODULE_106__;
  }
  if (
    currentCondition == "Torrential rain shower" ||
    currentCondition == "Moderate or heavy rain with thunder"
  ) {
    wrapperText.classList.remove("blackText");
    wrapperText.classList.add("whiteText");
    return _images_weather_backgrounds_lightning_jpg__WEBPACK_IMPORTED_MODULE_103__;
  } else {
    wrapperText.classList.remove("whiteText");
    wrapperText.classList.add("blackText");
    return _images_weather_backgrounds_sunny_jpg__WEBPACK_IMPORTED_MODULE_100__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNMO0FBQ0U7QUFDUztBQUNFO0FBQ0k7QUFDRDtBQUNMO0FBQ0Q7QUFDQztBQUNPOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix1REFBVzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakIsTUFBTTtBQUNOLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCLE1BQU07QUFDTixhQUFhLGlFQUFJO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKLFdBQVcsOERBQUk7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5RUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtRUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1RUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvRUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0VBQVM7QUFDcEIsSUFBSTtBQUNKO0FBQ0E7QUFDQSxXQUFXLG9FQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ud2hpdGVUZXh0IHtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uYmxhY2tUZXh0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxufVxcblxcbi5jdXJyZW50RGF5V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFRlbXBGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uY3VycmVudFRlbXBGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wQyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uZmVlbHNMaWtlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5mZWVsc0xpa2VGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uZmVlbHNMaWtlRi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5mZWVsc0xpa2VDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uZmVlbHNMaWtlQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5tb3JlRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJpZ2h0Qm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGdhcDogMjUlO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0RGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0SGlnaCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RMb3cge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnRvZGF5SGlnaEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi50b2RheUhpZ2hGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZGF5SGlnaEMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi50b2RheUhpZ2hDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZGF5TG93RiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZGF5TG93Ri5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b2RheUxvd0Mge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi50b2RheUxvd0MuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvbW9ycm93SGlnaEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoQyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvbW9ycm93SGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvbW9ycm93TG93QyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvbW9ycm93TG93Qy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5pblR3b0RheXNIaWdoRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93RiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmluVHdvRGF5c0xvd0YuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93QyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmluVHdvRGF5c0xvd0MuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguaW5hY3RpdmUtcmlnaHQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguaW5hY3RpdmUtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RIb3VyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RUZW1wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAuaW5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkRvdCB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLm5hdkRvdC5uYXZBY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG59XFxuXFxuLnNjcm9sbGJhckxlZnQsXFxuLnNjcm9sbGJhclJpZ2h0IHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgyMDElKSBodWUtcm90YXRlKDIwMmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCg5MSUpO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VB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ekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTtrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi53aGl0ZVRleHQge1xcbiAgY29sb3I6ICNmM2YzZjM7XFxufVxcblxcbi5ibGFja1RleHQge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi53cmFwcGVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5hcmVhSW5wdXQge1xcbiAgd2lkdGg6IDE2cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmc6IDAgMCAwLjNyZW0gNC41cmVtO1xcbiAgY29sb3I6ICNmM2YzZjM7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1haW5Cb2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtODBweDtcXG59XFxuXFxuLmN1cnJlbnREYXlXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXRvcDogMjAlO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJEZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmN1cnJlbnRUZW1wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5jdXJyZW50VGVtcEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uY3VycmVudFRlbXBDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uY3VycmVudFRlbXBDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGhlaWdodDogOHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5mZWVsc0xpa2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmZlZWxzTGlrZUYge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5mZWVsc0xpa2VGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmZlZWxzTGlrZUMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5mZWVsc0xpa2VDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvdyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4udG9kYXlIaWdoRiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZGF5SGlnaEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9kYXlIaWdoQyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZGF5SGlnaEMuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9kYXlMb3dGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4udG9kYXlMb3dGLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZGF5TG93QyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZGF5TG93Qy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0hpZ2hGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoRi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0hpZ2hDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4udG9tb3Jyb3dIaWdoQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi50b21vcnJvd0xvd0Yge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi50b21vcnJvd0xvd0YuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4udG9tb3Jyb3dMb3dDLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmluVHdvRGF5c0hpZ2hGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEYuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaW5Ud29EYXlzSGlnaEMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxufVxcblxcbi5pblR3b0RheXNIaWdoQy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5pblR3b0RheXNMb3dGIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93Ri5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5pblR3b0RheXNMb3dDIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaW5Ud29EYXlzTG93Qy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEluZGV4IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDE7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5pbmFjdGl2ZS1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5pbmFjdGl2ZS1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApIHNjYWxlKDApO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEhvdXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXAge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcC5pbmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2RG90IHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmF2RG90Lm5hdkFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uc2Nyb2xsYmFyTGVmdCxcXG4uc2Nyb2xsYmFyUmlnaHQge1xcbiAgZmlsdGVyOiBpbnZlcnQoOTclKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDIwMSUpIGh1ZS1yb3RhdGUoMjAyZGVnKVxcbiAgICBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDkxJSk7XFxufVxcblxcbmZvb3RlciAud3JhcHBlcjphZnRlciB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5naXRodWIge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnaXRodWJTVkcgZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBEMTEzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMTMucG5nXCI7XG5pbXBvcnQgRDExNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTE2LnBuZ1wiO1xuaW1wb3J0IEQxMTkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzExOS5wbmdcIjtcbmltcG9ydCBEMTIyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMjIucG5nXCI7XG5pbXBvcnQgRDE0MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTQzLnBuZ1wiO1xuaW1wb3J0IEQxNzYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE3Ni5wbmdcIjtcbmltcG9ydCBEMTc5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xNzkucG5nXCI7XG5pbXBvcnQgRDE4MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTgyLnBuZ1wiO1xuaW1wb3J0IEQxODUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE4NS5wbmdcIjtcbmltcG9ydCBEMjAwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yMDAucG5nXCI7XG5pbXBvcnQgRDIyNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjI3LnBuZ1wiO1xuaW1wb3J0IEQyMzAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzIzMC5wbmdcIjtcbmltcG9ydCBEMjQ4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNDgucG5nXCI7XG5pbXBvcnQgRDI2MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjYwLnBuZ1wiO1xuaW1wb3J0IEQyNjMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI2My5wbmdcIjtcbmltcG9ydCBEMjY2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNjYucG5nXCI7XG5pbXBvcnQgRDI4MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjgxLnBuZ1wiO1xuaW1wb3J0IEQyODQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI4NC5wbmdcIjtcbmltcG9ydCBEMjkzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yOTMucG5nXCI7XG5pbXBvcnQgRDI5NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjk2LnBuZ1wiO1xuaW1wb3J0IEQyOTkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI5OS5wbmdcIjtcbmltcG9ydCBEMzAyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMDIucG5nXCI7XG5pbXBvcnQgRDMwNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzA1LnBuZ1wiO1xuaW1wb3J0IEQzMDggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMwOC5wbmdcIjtcbmltcG9ydCBEMzExIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMTEucG5nXCI7XG5pbXBvcnQgRDMxNCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzE0LnBuZ1wiO1xuaW1wb3J0IEQzMTcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMxNy5wbmdcIjtcbmltcG9ydCBEMzIwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjAucG5nXCI7XG5pbXBvcnQgRDMyMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzIzLnBuZ1wiO1xuaW1wb3J0IEQzMjYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyNi5wbmdcIjtcbmltcG9ydCBEMzI5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjkucG5nXCI7XG5pbXBvcnQgRDMzMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzMyLnBuZ1wiO1xuaW1wb3J0IEQzMzUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMzNS5wbmdcIjtcbmltcG9ydCBEMzM4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMzgucG5nXCI7XG5pbXBvcnQgRDM1MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzUwLnBuZ1wiO1xuaW1wb3J0IEQzNTMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1My5wbmdcIjtcbmltcG9ydCBEMzU2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTYucG5nXCI7XG5pbXBvcnQgRDM1OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzU5LnBuZ1wiO1xuaW1wb3J0IEQzNjIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM2Mi5wbmdcIjtcbmltcG9ydCBEMzY1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNjUucG5nXCI7XG5pbXBvcnQgRDM2OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzY4LnBuZ1wiO1xuaW1wb3J0IEQzNzEgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM3MS5wbmdcIjtcbmltcG9ydCBEMzc0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNzQucG5nXCI7XG5pbXBvcnQgRDM3NyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzc3LnBuZ1wiO1xuaW1wb3J0IEQzODYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM4Ni5wbmdcIjtcbmltcG9ydCBEMzg5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zODkucG5nXCI7XG5pbXBvcnQgRDM5MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzkyLnBuZ1wiO1xuaW1wb3J0IEQzOTUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM5NS5wbmdcIjtcbmltcG9ydCBOMTEzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzExMy5wbmdcIjtcbmltcG9ydCBOMTE2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzExNi5wbmdcIjtcbmltcG9ydCBOMTE5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzExOS5wbmdcIjtcbmltcG9ydCBOMTIyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzEyMi5wbmdcIjtcbmltcG9ydCBOMTQzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzE0My5wbmdcIjtcbmltcG9ydCBOMTc2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzE3Ni5wbmdcIjtcbmltcG9ydCBOMTc5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzE3OS5wbmdcIjtcbmltcG9ydCBOMTgyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzE4Mi5wbmdcIjtcbmltcG9ydCBOMTg1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzE4NS5wbmdcIjtcbmltcG9ydCBOMjAwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzIwMC5wbmdcIjtcbmltcG9ydCBOMjI3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzIyNy5wbmdcIjtcbmltcG9ydCBOMjMwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzIzMC5wbmdcIjtcbmltcG9ydCBOMjQ4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI0OC5wbmdcIjtcbmltcG9ydCBOMjYwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI2MC5wbmdcIjtcbmltcG9ydCBOMjYzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI2My5wbmdcIjtcbmltcG9ydCBOMjY2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI2Ni5wbmdcIjtcbmltcG9ydCBOMjgxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI4MS5wbmdcIjtcbmltcG9ydCBOMjg0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI4NC5wbmdcIjtcbmltcG9ydCBOMjkzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI5My5wbmdcIjtcbmltcG9ydCBOMjk2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI5Ni5wbmdcIjtcbmltcG9ydCBOMjk5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzI5OS5wbmdcIjtcbmltcG9ydCBOMzAyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMwMi5wbmdcIjtcbmltcG9ydCBOMzA1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMwNS5wbmdcIjtcbmltcG9ydCBOMzA4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMwOC5wbmdcIjtcbmltcG9ydCBOMzExIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMxMS5wbmdcIjtcbmltcG9ydCBOMzE0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMxNC5wbmdcIjtcbmltcG9ydCBOMzE3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMxNy5wbmdcIjtcbmltcG9ydCBOMzIwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMyMC5wbmdcIjtcbmltcG9ydCBOMzIzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMyMy5wbmdcIjtcbmltcG9ydCBOMzI2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMyNi5wbmdcIjtcbmltcG9ydCBOMzI5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMyOS5wbmdcIjtcbmltcG9ydCBOMzMyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMzMi5wbmdcIjtcbmltcG9ydCBOMzM1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMzNS5wbmdcIjtcbmltcG9ydCBOMzM4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzMzOC5wbmdcIjtcbmltcG9ydCBOMzUwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM1MC5wbmdcIjtcbmltcG9ydCBOMzUzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM1My5wbmdcIjtcbmltcG9ydCBOMzU2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM1Ni5wbmdcIjtcbmltcG9ydCBOMzU5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM1OS5wbmdcIjtcbmltcG9ydCBOMzYyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM2Mi5wbmdcIjtcbmltcG9ydCBOMzY1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM2NS5wbmdcIjtcbmltcG9ydCBOMzY4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM2OC5wbmdcIjtcbmltcG9ydCBOMzcxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM3MS5wbmdcIjtcbmltcG9ydCBOMzc0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM3NC5wbmdcIjtcbmltcG9ydCBOMzc3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM3Ny5wbmdcIjtcbmltcG9ydCBOMzg2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM4Ni5wbmdcIjtcbmltcG9ydCBOMzg5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM4OS5wbmdcIjtcbmltcG9ydCBOMzkyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM5Mi5wbmdcIjtcbmltcG9ydCBOMzk1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L25pZ2h0LzM5NS5wbmdcIjtcbmltcG9ydCBzY3JvbGxMZWZ0IGZyb20gXCIuL2ltYWdlcy9jaGV2cm9uLWxlZnQuc3ZnXCI7XG5pbXBvcnQgc2Nyb2xsUmlnaHQgZnJvbSBcIi4vaW1hZ2VzL2NoZXZyb24tcmlnaHQuc3ZnXCI7XG5pbXBvcnQgc3VubnlEYXkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvYmFja2dyb3VuZHMvc3VubnkuanBnXCI7XG5pbXBvcnQgY2xvdWR5RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL2Nsb3VkeS5qcGdcIjtcbmltcG9ydCBvdmVyY2FzdERheSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci9iYWNrZ3JvdW5kcy9vdmVyY2FzdC5qcGdcIjtcbmltcG9ydCBzdG9ybXlEYXkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvYmFja2dyb3VuZHMvbGlnaHRuaW5nLmpwZ1wiO1xuaW1wb3J0IGZvZ2d5RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL2ZvZ2d5LmpwZ1wiO1xuaW1wb3J0IHNub3d5RGF5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyL2JhY2tncm91bmRzL3Nub3cuanBnXCI7XG5pbXBvcnQgcmFpbnlEYXkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvYmFja2dyb3VuZHMvcmFpbnkuanBnXCI7XG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci9iYWNrZ3JvdW5kcy9jbGVhck5pZ2h0LmpwZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXlvdXQoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBhcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFyZWFJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYXJlYUlucHV0XCIpO1xuICBhcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcmVhSW5wdXRcIik7XG4gIGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgYXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIGNpdHlcIik7XG5cbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKFwibWFpbkJvZHlcIik7XG5cbiAgY29uc3QgbGVmdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRCb3guY2xhc3NMaXN0LmFkZChcImxlZnRCb3hcIik7XG5cbiAgY29uc3QgcmlnaHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodEJveC5jbGFzc0xpc3QuYWRkKFwicmlnaHRCb3hcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyVGV4dFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBDb2xlIEJ1cmNoXCI7XG5cbiAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Yi5zcmMgPSBnaXRodWJTVkc7XG4gIGdpdGh1Yi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYUlucHV0KTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHJpZ2h0Qm94KTtcbiAgbGVmdEJveC5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVUaHJlZURheUZvcmVjYXN0V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlGb3JlY2FzdFdpZGdldCgpKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkge1xuICBjb25zdCBjdXJyZW50RGF5V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudERheVdpZGdldC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudERheVdpZGdldFwiKTtcblxuICBjb25zdCBsb2NhdGlvbkFuZENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uQW5kQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkFuZENvbmRpdGlvblwiKTtcblxuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gXCJDb25kaXRpb25cIjtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50V2VhdGhlckRldGFpbHNcIik7XG5cbiAgY29uc3QgY3VycmVudFRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50VGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRlbXBcIik7XG5cbiAgY29uc3QgY3VycmVudFRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXBDLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcENcIik7XG4gIGN1cnJlbnRUZW1wQy50ZXh0Q29udGVudCA9IFwiMTBDXCI7XG5cbiAgY29uc3QgY3VycmVudFRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXBGLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcEZcIik7XG4gIGN1cnJlbnRUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBjdXJyZW50VGVtcEYudGV4dENvbnRlbnQgPSBcIjUwXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHNcIik7XG5cbiAgY29uc3QgZmVlbHNMaWtlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlQm94LmNsYXNzTGlzdC5hZGQoXCJmZWVsc0xpa2VcIik7XG5cbiAgY29uc3QgZmVlbHNMaWtlQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlZWxzTGlrZUMuY2xhc3NMaXN0LmFkZChcImZlZWxzTGlrZUNcIik7XG4gIGZlZWxzTGlrZUMuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICBmZWVsc0xpa2VDLnRleHRDb250ZW50ID0gXCJGRUVMUyBMSUtFOiAxMENcIjtcblxuICBjb25zdCBmZWVsc0xpa2VGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwiZmVlbHNMaWtlRlwiKTtcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZmVlbHNMaWtlRi50ZXh0Q29udGVudCA9IFwiRkVFTFMgTElLRTogNTVcIjtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmRTcGVlZFwiKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJtb3JlRGV0YWlsc1wiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gXCJXSU5EOiAxMCBNUEhcIjtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IFwiSFVNSURJVFk6IDEwJVwiO1xuXG4gIGN1cnJlbnREYXlXaWRnZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25BbmRDb25kaXRpb24pO1xuICBsb2NhdGlvbkFuZENvbmRpdGlvbi5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICBsb2NhdGlvbkFuZENvbmRpdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIGN1cnJlbnREYXlXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wQm94KTtcbiAgY3VycmVudFRlbXBCb3guYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBDKTtcbiAgY3VycmVudFRlbXBCb3guYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBGKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMpO1xuICBjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzLmFwcGVuZENoaWxkKGZlZWxzTGlrZUJveCk7XG4gIGZlZWxzTGlrZUJveC5hcHBlbmRDaGlsZChmZWVsc0xpa2VDKTtcbiAgZmVlbHNMaWtlQm94LmFwcGVuZENoaWxkKGZlZWxzTGlrZUYpO1xuICBjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gIHJldHVybiBjdXJyZW50RGF5V2lkZ2V0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaHJlZURheUZvcmVjYXN0V2lkZ2V0KCkge1xuICBjb25zdCB0aHJlZURheUZvcmVjYXN0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdFdpZGdldFwiKTtcblxuICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5c0ZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEJveFwiKTtcblxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0RGF5XCIpO1xuICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICBjb25zdCBUb2RheUhpZ2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBUb2RheUhpZ2hCb3guY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoXCIpO1xuXG4gIGNvbnN0IHRvZGF5SGlnaEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheUhpZ2hDLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUhpZ2hDXCIpO1xuICB0b2RheUhpZ2hDLnRleHRDb250ZW50ID0gXCIxMENcIjtcblxuICBjb25zdCB0b2RheUhpZ2hGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlIaWdoRi5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0b2RheUhpZ2hGLnRleHRDb250ZW50ID0gXCI2MEZcIjtcblxuICBjb25zdCB0b2RheUxvd0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TG93Qm94LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0TG93XCIpO1xuXG4gIGNvbnN0IHRvZGF5TG93QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TG93Qy5jbGFzc0xpc3QuYWRkKFwidG9kYXlMb3dDXCIpO1xuICB0b2RheUxvd0MudGV4dENvbnRlbnQgPSBcIjEwQ1wiO1xuXG4gIGNvbnN0IHRvZGF5TG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwidG9kYXlMb3dGXCIpO1xuICB0b2RheUxvd0YuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdG9kYXlMb3dGLnRleHRDb250ZW50ID0gXCI1MEZcIjtcblxuICBjb25zdCB0b2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEljb25cIik7XG4gIHRvZGF5V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRvZGF5V2VhdGhlckljb25cIik7XG4gIGxldCBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTNcIik7XG4gIHRvZGF5V2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRvbW9ycm93c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3cuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3REYXlcIik7XG4gIHRvbW9ycm93LnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuXG4gIGNvbnN0IHRvbW9ycm93SGlnaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93SGlnaEJveC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEhpZ2hcIik7XG5cbiAgY29uc3QgdG9tb3Jyb3dIaWdoQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93SGlnaEMuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93SGlnaENcIik7XG4gIHRvbW9ycm93SGlnaEMudGV4dENvbnRlbnQgPSBcIjE2Q1wiO1xuXG4gIGNvbnN0IHRvbW9ycm93SGlnaEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0hpZ2hGLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0hpZ2hGXCIpO1xuICB0b21vcnJvd0hpZ2hGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHRvbW9ycm93SGlnaEYudGV4dENvbnRlbnQgPSBcIjYxRlwiO1xuXG4gIGNvbnN0IHRvbW9ycm93TG93Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dMb3dCb3guY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RMb3dcIik7XG5cbiAgY29uc3QgdG9tb3Jyb3dMb3dDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dMb3dDLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0xvd0NcIik7XG4gIHRvbW9ycm93TG93Qy50ZXh0Q29udGVudCA9IFwiMTBDXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0xvd0ZcIik7XG4gIHRvbW9ycm93TG93Ri5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0b21vcnJvd0xvd0YudGV4dENvbnRlbnQgPSBcIjUxRlwiO1xuXG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgdG9tb3Jyb3dXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTE2XCIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBpblR3b0RheXNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEJveFwiKTtcblxuICBjb25zdCBpblR3b0RheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXMuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3REYXlcIik7XG4gIGluVHdvRGF5cy50ZXh0Q29udGVudCA9IFwiSW4gVHdvIERheXNcIjtcblxuICBjb25zdCBpblR3b0RheXNIaWdoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzSGlnaEJveC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEhpZ2hcIik7XG5cbiAgY29uc3QgaW5Ud29EYXlzSGlnaEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXNIaWdoQy5jbGFzc0xpc3QuYWRkKFwiaW5Ud29EYXlzSGlnaENcIik7XG4gIGluVHdvRGF5c0hpZ2hDLnRleHRDb250ZW50ID0gXCIxN0NcIjtcblxuICBjb25zdCBpblR3b0RheXNIaWdoRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0hpZ2hGLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNIaWdoRlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgaW5Ud29EYXlzSGlnaEYudGV4dENvbnRlbnQgPSBcIjYyRlwiO1xuXG4gIGNvbnN0IGluVHdvRGF5c0xvd0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0xvd0JveC5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdExvd1wiKTtcblxuICBjb25zdCBpblR3b0RheXNMb3dDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzTG93Qy5jbGFzc0xpc3QuYWRkKFwiaW5Ud29EYXlzTG93Q1wiKTtcbiAgaW5Ud29EYXlzTG93Qy50ZXh0Q29udGVudCA9IFwiMTBDXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzTG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c0xvd0ZcIik7XG4gIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgaW5Ud29EYXlzTG93Ri50ZXh0Q29udGVudCA9IFwiNTJGXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpblR3b0RheXNXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEljb25cIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTE5XCIpO1xuICBpblR3b0RheXNXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZCh0b2RheXNGb3JlY2FzdCk7XG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dzRm9yZWNhc3QpO1xuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGluVHdvRGF5c0ZvcmVjYXN0KTtcbiAgdG9kYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChUb2RheUhpZ2hCb3gpO1xuICBUb2RheUhpZ2hCb3guYXBwZW5kQ2hpbGQodG9kYXlIaWdoQyk7XG4gIFRvZGF5SGlnaEJveC5hcHBlbmRDaGlsZCh0b2RheUhpZ2hGKTtcbiAgdG9kYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9kYXlMb3dCb3gpO1xuICB0b2RheUxvd0JveC5hcHBlbmRDaGlsZCh0b2RheUxvd0MpO1xuICB0b2RheUxvd0JveC5hcHBlbmRDaGlsZCh0b2RheUxvd0YpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0hpZ2hCb3gpO1xuICB0b21vcnJvd0hpZ2hCb3guYXBwZW5kQ2hpbGQodG9tb3Jyb3dIaWdoQyk7XG4gIHRvbW9ycm93SGlnaEJveC5hcHBlbmRDaGlsZCh0b21vcnJvd0hpZ2hGKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dMb3dCb3gpO1xuICB0b21vcnJvd0xvd0JveC5hcHBlbmRDaGlsZCh0b21vcnJvd0xvd0MpO1xuICB0b21vcnJvd0xvd0JveC5hcHBlbmRDaGlsZCh0b21vcnJvd0xvd0YpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd1dlYXRoZXJJY29uKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzSGlnaEJveCk7XG4gIGluVHdvRGF5c0hpZ2hCb3guYXBwZW5kQ2hpbGQoaW5Ud29EYXlzSGlnaEMpO1xuICBpblR3b0RheXNIaWdoQm94LmFwcGVuZENoaWxkKGluVHdvRGF5c0hpZ2hGKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzTG93Qm94KTtcbiAgaW5Ud29EYXlzTG93Qm94LmFwcGVuZENoaWxkKGluVHdvRGF5c0xvd0MpO1xuICBpblR3b0RheXNMb3dCb3guYXBwZW5kQ2hpbGQoaW5Ud29EYXlzTG93Rik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5c1dlYXRoZXJJY29uKTtcblxuICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdFdpZGdldDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4WmVyb1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SW5kZXhcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgemVyb0hvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB6ZXJvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCB6ZXJvSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHplcm9Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJcIik7XG4gIHplcm9Ib3VyLnRleHRDb250ZW50ID0gXCJOb3dcIjtcblxuICBjb25zdCB6ZXJvSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB6ZXJvSG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCB6ZXJvSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICB6ZXJvSG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJUZW1wQ1wiKTtcbiAgemVyb0hvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHplcm9Ib3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE1Q1wiO1xuXG4gIGNvbnN0IHplcm9Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB6ZXJvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHplcm9Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgemVyb0hvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInplcm9Ib3VyVGVtcEZcIik7XG4gIHplcm9Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHplcm9Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91cldlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTEzXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBvbmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBvbmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3Qgb25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgb25lSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJcIik7XG4gIG9uZUhvdXIudGV4dENvbnRlbnQgPSBcIjFcIjtcblxuICBjb25zdCBvbmVIb3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3Qgb25lSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb25lSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIG9uZUhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJUZW1wQ1wiKTtcbiAgb25lSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgb25lSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxNkNcIjtcblxuICBjb25zdCBvbmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgb25lSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91clRlbXBGXCIpO1xuICBvbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgb25lSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2MUZcIjtcblxuICBjb25zdCBvbmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBvbmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgb25lSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIG9uZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdHdvSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHdvSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHR3b0hvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHR3b0hvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyXCIpO1xuICB0d29Ib3VyLnRleHRDb250ZW50ID0gXCIyXCI7XG5cbiAgY29uc3QgdHdvSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IHR3b0hvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHR3b0hvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICB0d29Ib3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyVGVtcENcIik7XG4gIHR3b0hvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHR3b0hvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMTdDXCI7XG5cbiAgY29uc3QgdHdvSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHR3b0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0d29Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyVGVtcEZcIik7XG4gIHR3b0hvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgdHdvSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdHdvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHR3b0hvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTE5XCIpO1xuICB0d29Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRocmVlSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHRocmVlSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICB0aHJlZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJcIik7XG4gIHRocmVlSG91ci50ZXh0Q29udGVudCA9IFwiM1wiO1xuXG4gIGNvbnN0IHRocmVlSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZUhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgdGhyZWVIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICB0aHJlZUhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91clRlbXBDXCIpO1xuICB0aHJlZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHRocmVlSG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCB0aHJlZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIHRocmVlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHRocmVlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyVGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2M0ZcIjtcblxuICBjb25zdCB0aHJlZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjEyMlwiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleE9uZVwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtcmlnaHRcIik7XG5cbiAgY29uc3QgZm91ckhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvdXJIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBmb3VySG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm91ckhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBmb3VySG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvdXJIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIGZvdXJIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm91ckhvdXJcIik7XG4gIGZvdXJIb3VyLnRleHRDb250ZW50ID0gXCI0XCI7XG5cbiAgY29uc3QgZm91ckhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgZm91ckhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvdXJIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgZm91ckhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyVGVtcENcIik7XG4gIGZvdXJIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBmb3VySG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCBmb3VySG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBmb3VySG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGZvdXJIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91clRlbXBGXCIpO1xuICBmb3VySG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2NEZcIjtcblxuICBjb25zdCBmb3VySG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm91ckhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBmb3VySG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm91ckhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTQzXCIpO1xuICBmb3VySG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBmaXZlSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGZpdmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXZlSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGZpdmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZml2ZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZml2ZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXZlSG91clwiKTtcbiAgZml2ZUhvdXIudGV4dENvbnRlbnQgPSBcIjVcIjtcblxuICBjb25zdCBmaXZlSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCBmaXZlSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZml2ZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBmaXZlSG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJUZW1wQ1wiKTtcbiAgZml2ZUhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGZpdmVIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IGZpdmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGZpdmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZml2ZUhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyVGVtcEZcIik7XG4gIGZpdmVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY1RlwiO1xuXG4gIGNvbnN0IGZpdmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmaXZlSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGZpdmVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXZlSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxNzZcIik7XG4gIGZpdmVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHNpeEhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpeEhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHNpeEhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBzaXhIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBzaXhIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91clwiKTtcbiAgc2l4SG91ci50ZXh0Q29udGVudCA9IFwiNlwiO1xuXG4gIGNvbnN0IHNpeEhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCBzaXhIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgc2l4SG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91clRlbXBDXCIpO1xuICBzaXhIb3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBzaXhIb3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IHNpeEhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpeEhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBzaXhIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgc2l4SG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91clRlbXBGXCIpO1xuICBzaXhIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY2RlwiO1xuXG4gIGNvbnN0IHNpeEhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNpeEhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBzaXhIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjIwMFwiKTtcbiAgc2l4SG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBzZXZlbkhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBzZXZlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgc2V2ZW5Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyXCIpO1xuICBzZXZlbkhvdXIudGV4dENvbnRlbnQgPSBcIjdcIjtcblxuICBjb25zdCBzZXZlbkhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IHNldmVuSG91clRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJUZW1wQ1wiKTtcbiAgc2V2ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBzZXZlbkhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBzZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBzZXZlbkhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91clRlbXBGXCIpO1xuICBzZXZlbkhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjdGXCI7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzZXZlbkhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBzZXZlbkhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyMjdcIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBob3VybHlGb3JlY2FzdEluZGV4VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJseUZvcmVjYXN0SW5kZXhUd29cIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SW5kZXhcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLXJpZ2h0XCIpO1xuXG4gIGNvbnN0IGVpZ2h0SG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBlaWdodEhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGVpZ2h0SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBlaWdodEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJcIik7XG4gIGVpZ2h0SG91ci50ZXh0Q29udGVudCA9IFwiOFwiO1xuXG4gIGNvbnN0IGVpZ2h0SG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlaWdodEhvdXJUZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG5cbiAgY29uc3QgZWlnaHRIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlaWdodEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBlaWdodEhvdXJUZW1wQy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91clRlbXBDXCIpO1xuICBlaWdodEhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGVpZ2h0SG91clRlbXBDLnRleHRDb250ZW50ID0gXCIxOENcIjtcblxuICBjb25zdCBlaWdodEhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGVpZ2h0SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGVpZ2h0SG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyVGVtcEZcIik7XG4gIGVpZ2h0SG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2OEZcIjtcblxuICBjb25zdCBlaWdodEhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjI0OFwiKTtcbiAgZWlnaHRIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IG5pbmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgbmluZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBuaW5lSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyXCIpO1xuICBuaW5lSG91ci50ZXh0Q29udGVudCA9IFwiOVwiO1xuXG4gIGNvbnN0IG5pbmVIb3VyVGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pbmVIb3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IG5pbmVIb3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIG5pbmVIb3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91clRlbXBDXCIpO1xuICBuaW5lSG91clRlbXBDLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgbmluZUhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3QgbmluZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5pbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBuaW5lSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmluZUhvdXJUZW1wRlwiKTtcbiAgbmluZUhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjlGXCI7XG5cbiAgY29uc3QgbmluZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgbmluZUhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjI5NlwiKTtcbiAgbmluZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdGVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgdGVuSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHRlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHRlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyXCIpO1xuICB0ZW5Ib3VyLnRleHRDb250ZW50ID0gXCIxMFwiO1xuXG4gIGNvbnN0IHRlbkhvdXJUZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91clRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcblxuICBjb25zdCB0ZW5Ib3VyVGVtcEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcFwiKTtcbiAgdGVuSG91clRlbXBDLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91clRlbXBDXCIpO1xuICB0ZW5Ib3VyVGVtcEMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB0ZW5Ib3VyVGVtcEMudGV4dENvbnRlbnQgPSBcIjE4Q1wiO1xuXG4gIGNvbnN0IHRlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICB0ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdGVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91clRlbXBGXCIpO1xuICB0ZW5Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjcwRlwiO1xuXG4gIGNvbnN0IHRlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRlbkhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICB0ZW5Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjM1M1wiKTtcbiAgdGVuSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBlbGV2ZW5Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZWxldmVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZWxldmVuSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJcIik7XG4gIGVsZXZlbkhvdXIudGV4dENvbnRlbnQgPSBcIjExXCI7XG5cbiAgY29uc3QgZWxldmVuSG91clRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyVGVtcENcIik7XG4gIGVsZXZlbkhvdXJUZW1wQy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGVsZXZlbkhvdXJUZW1wQy50ZXh0Q29udGVudCA9IFwiMThDXCI7XG5cbiAgY29uc3QgZWxldmVuSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyVGVtcEZcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNzFGXCI7XG5cbiAgY29uc3QgZWxldmVuSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWxldmVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGVsZXZlbkhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMzU2XCIpO1xuICBlbGV2ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsYmFyXCIpO1xuXG4gIGNvbnN0IHNjcm9sbGJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzY3JvbGxiYXJMZWZ0LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxiYXJMZWZ0XCIpO1xuICBzY3JvbGxiYXJMZWZ0LnNyYyA9IHNjcm9sbExlZnQ7XG5cbiAgY29uc3QgbmF2RG90MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkRvdDAuY2xhc3NMaXN0LmFkZChcIm5hdkRvdFwiKTtcbiAgbmF2RG90MC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdkRvdDBcIik7XG4gIG5hdkRvdDAuY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcblxuICBjb25zdCBuYXZEb3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2RG90MS5jbGFzc0xpc3QuYWRkKFwibmF2RG90XCIpO1xuICBuYXZEb3QxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2RG90MVwiKTtcblxuICBjb25zdCBuYXZEb3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2RG90Mi5jbGFzc0xpc3QuYWRkKFwibmF2RG90XCIpO1xuICBuYXZEb3QyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2RG90MlwiKTtcblxuICBjb25zdCBzY3JvbGxiYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNjcm9sbGJhclJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxiYXJSaWdodFwiKTtcbiAgc2Nyb2xsYmFyUmlnaHQuc3JjID0gc2Nyb2xsUmlnaHQ7XG5cbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJbmRleFplcm8pO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEluZGV4T25lKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJbmRleFR3byk7XG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKHNjcm9sbGJhcik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKHplcm9Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5hcHBlbmRDaGlsZChvbmVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5hcHBlbmRDaGlsZCh0d29Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5hcHBlbmRDaGlsZCh0aHJlZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuYXBwZW5kQ2hpbGQoZm91ckhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuYXBwZW5kQ2hpbGQoZml2ZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuYXBwZW5kQ2hpbGQoc2l4SG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChzZXZlbkhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQoZWlnaHRIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKG5pbmVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKHRlbkhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQoZWxldmVuSG91ckZvcmVjYXN0KTtcbiAgemVyb0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh6ZXJvSG91cik7XG4gIHplcm9Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoemVyb0hvdXJUZW1wQm94KTtcbiAgemVyb0hvdXJUZW1wQm94LmFwcGVuZENoaWxkKHplcm9Ib3VyVGVtcEYpO1xuICB6ZXJvSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoemVyb0hvdXJUZW1wQyk7XG4gIHplcm9Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoemVyb0hvdXJXZWF0aGVySWNvbik7XG4gIG9uZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChvbmVIb3VyKTtcbiAgb25lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG9uZUhvdXJUZW1wQm94KTtcbiAgb25lSG91clRlbXBCb3guYXBwZW5kQ2hpbGQob25lSG91clRlbXBGKTtcbiAgb25lSG91clRlbXBCb3guYXBwZW5kQ2hpbGQob25lSG91clRlbXBDKTtcbiAgb25lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG9uZUhvdXJXZWF0aGVySWNvbik7XG4gIHR3b0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0d29Ib3VyKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXJUZW1wQm94KTtcbiAgdHdvSG91clRlbXBCb3guYXBwZW5kQ2hpbGQodHdvSG91clRlbXBGKTtcbiAgdHdvSG91clRlbXBCb3guYXBwZW5kQ2hpbGQodHdvSG91clRlbXBDKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXJXZWF0aGVySWNvbik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91cik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91clRlbXBCb3gpO1xuICB0aHJlZUhvdXJUZW1wQm94LmFwcGVuZENoaWxkKHRocmVlSG91clRlbXBGKTtcbiAgdGhyZWVIb3VyVGVtcEJveC5hcHBlbmRDaGlsZCh0aHJlZUhvdXJUZW1wQyk7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91cldlYXRoZXJJY29uKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91cik7XG4gIGZvdXJIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm91ckhvdXJUZW1wQm94KTtcbiAgZm91ckhvdXJUZW1wQm94LmFwcGVuZENoaWxkKGZvdXJIb3VyVGVtcEMpO1xuICBmb3VySG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZm91ckhvdXJUZW1wRik7XG4gIGZvdXJIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm91ckhvdXJXZWF0aGVySWNvbik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXIpO1xuICBmaXZlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZpdmVIb3VyVGVtcEJveCk7XG4gIGZpdmVIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChmaXZlSG91clRlbXBDKTtcbiAgZml2ZUhvdXJUZW1wQm94LmFwcGVuZENoaWxkKGZpdmVIb3VyVGVtcEYpO1xuICBmaXZlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZpdmVIb3VyV2VhdGhlckljb24pO1xuICBzaXhIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoc2l4SG91cik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyVGVtcEJveCk7XG4gIHNpeEhvdXJUZW1wQm94LmFwcGVuZENoaWxkKHNpeEhvdXJUZW1wQyk7XG4gIHNpeEhvdXJUZW1wQm94LmFwcGVuZENoaWxkKHNpeEhvdXJUZW1wRik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyV2VhdGhlckljb24pO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXJUZW1wQm94KTtcbiAgc2V2ZW5Ib3VyVGVtcEJveC5hcHBlbmRDaGlsZChzZXZlbkhvdXJUZW1wQyk7XG4gIHNldmVuSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoc2V2ZW5Ib3VyVGVtcEYpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXJXZWF0aGVySWNvbik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVpZ2h0SG91cik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVpZ2h0SG91clRlbXBCb3gpO1xuICBlaWdodEhvdXJUZW1wQm94LmFwcGVuZENoaWxkKGVpZ2h0SG91clRlbXBGKTtcbiAgZWlnaHRIb3VyVGVtcEJveC5hcHBlbmRDaGlsZChlaWdodEhvdXJUZW1wQyk7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVpZ2h0SG91cldlYXRoZXJJY29uKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChuaW5lSG91cik7XG4gIG5pbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQobmluZUhvdXJUZW1wQm94KTtcbiAgbmluZUhvdXJUZW1wQm94LmFwcGVuZENoaWxkKG5pbmVIb3VyVGVtcEYpO1xuICBuaW5lSG91clRlbXBCb3guYXBwZW5kQ2hpbGQobmluZUhvdXJUZW1wQyk7XG4gIG5pbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQobmluZUhvdXJXZWF0aGVySWNvbik7XG4gIHRlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0ZW5Ib3VyKTtcbiAgdGVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbkhvdXJUZW1wQm94KTtcbiAgdGVuSG91clRlbXBCb3guYXBwZW5kQ2hpbGQodGVuSG91clRlbXBGKTtcbiAgdGVuSG91clRlbXBCb3guYXBwZW5kQ2hpbGQodGVuSG91clRlbXBDKTtcbiAgdGVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbkhvdXJXZWF0aGVySWNvbik7XG4gIGVsZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXJUZW1wQm94KTtcbiAgZWxldmVuSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZWxldmVuSG91clRlbXBGKTtcbiAgZWxldmVuSG91clRlbXBCb3guYXBwZW5kQ2hpbGQoZWxldmVuSG91clRlbXBDKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXJXZWF0aGVySWNvbik7XG4gIHNjcm9sbGJhci5hcHBlbmRDaGlsZChzY3JvbGxiYXJMZWZ0KTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKG5hdkRvdDApO1xuICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQobmF2RG90MSk7XG4gIHNjcm9sbGJhci5hcHBlbmRDaGlsZChuYXZEb3QyKTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKHNjcm9sbGJhclJpZ2h0KTtcblxuICByZXR1cm4gaG91cmx5Rm9yZWNhc3RXaWRnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlVmFyaWFibGUoSW1hZ2VVUkwpIHtcbiAgY29uc3Qgc3BsaXRVUkwgPSBJbWFnZVVSTC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IERheU9yTmlnaHRWYXJpYWJsZSA9IHNwbGl0VVJMW3NwbGl0VVJMLmxlbmd0aCAtIDJdO1xuICBjb25zdCBpbWFnZU51bWJlciA9IEltYWdlVVJMLnNsaWNlKFxuICAgIEltYWdlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSxcbiAgICBJbWFnZVVSTC5sYXN0SW5kZXhPZihcIi5cIilcbiAgKS5zbGljZSgtMyk7XG4gIGNvbnN0IGltYWdlVmFyaWFibGUgPSBEYXlPck5pZ2h0VmFyaWFibGUgKyBpbWFnZU51bWJlcjtcbiAgcmV0dXJuIGltYWdlVmFyaWFibGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3QgdXJsID1cbiAgICBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODNlYjllOGE1Y2VmNGY1NDlmMTE0NjM2MjMxNzA0JnE9XCIgK1xuICAgIGxvY2F0aW9uICtcbiAgICBcIiZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1wiO1xuICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHdlYXRoZXJEYXRhW1wibG9jYXRpb25cIl1bXCJuYW1lXCJdO1xuICBjb25zdCByZWdpb25OYW1lID0gd2VhdGhlckRhdGFbXCJsb2NhdGlvblwiXVtcInJlZ2lvblwiXTtcbiAgY29uc3QgY3VycmVudERheUZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl07XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRIaWdoQ2Vsc2l1cyA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgY3VycmVudEhpZ2hGYXJlbmhlaXQgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRMb3dDZWxzaXVzID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9jXCJdO1xuICBjb25zdCBjdXJyZW50TG93RmFyZW5oZWl0ID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50VGVtcENlbHNpdXMgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRUZW1wRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1widGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImZlZWxzbGlrZV9jXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiZmVlbHNsaWtlX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImh1bWlkaXR5XCJdO1xuICBjb25zdCBjdXJyZW50V2luZFNwZWVkID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wid2luZF9tcGhcIl07XG4gIGNvbnN0IGN1cnJlbnRSYWluQ2hhbmNlID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wiZGFpbHlfd2lsbF9pdF9yYWluXCJdO1xuICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoQ2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93SGlnaEZhcmVuaGVpdCA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93Q2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93RmFyZW5oZWl0ID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfZlwiXTtcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25JY29uID0gZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICB0b21vcnJvd0ZvcmVjYXN0W1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1wiaWNvblwiXVxuICApO1xuICBjb25zdCB0d29EYXlGb3JlY2FzdCA9IHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjJcIl07XG4gIGNvbnN0IHR3b0RheUhpZ2hDZWxzaXVzID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2NcIl07XG4gIGNvbnN0IHR3b0RheUhpZ2hGYXJlbmhlaXQgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgdHdvRGF5TG93Q2Vsc2l1cyA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9jXCJdO1xuICBjb25zdCB0d29EYXlMb3dGYXJlbmhlaXQgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfZlwiXTtcbiAgY29uc3QgdHdvRGF5Q29uZGl0aW9uSWNvbiA9IGdldEltYWdlVmFyaWFibGUoXG4gICAgdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdXG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IE51bWJlcih3ZWF0aGVyRGF0YVtcImxvY2F0aW9uXCJdW1wibG9jYWx0aW1lXCJdLnNsaWNlKDExLCAxMykpO1xuICBsZXQgZGF5Q291bnRlciA9IDA7XG4gIGxldCBob3VyQ291bnRlciA9IGxvY2FsVGltZTtcbiAgbGV0IGhvdXJBcnIgPSBbXTtcbiAgbGV0IHRlbXBGQXJyID0gW107XG4gIGxldCB0ZW1wQ0FyciA9IFtdO1xuICBsZXQgaWNvbkFyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgIGlmIChob3VyQ291bnRlciA+IDIzKSB7XG4gICAgICBob3VyQ291bnRlciA9IDA7XG4gICAgICBkYXlDb3VudGVyKys7XG4gICAgfVxuICAgIGhvdXJBcnIucHVzaChob3VyQ291bnRlcik7XG4gICAgdGVtcEZBcnIucHVzaChcbiAgICAgIHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtkYXlDb3VudGVyXVtcImhvdXJcIl1baG91ckNvdW50ZXJdW1xuICAgICAgICBcInRlbXBfZlwiXG4gICAgICBdXG4gICAgKTtcbiAgICB0ZW1wQ0Fyci5wdXNoKFxuICAgICAgd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW2RheUNvdW50ZXJdW1wiaG91clwiXVtob3VyQ291bnRlcl1bXG4gICAgICAgIFwidGVtcF9jXCJcbiAgICAgIF1cbiAgICApO1xuICAgIGljb25BcnIucHVzaChcbiAgICAgIGdldEltYWdlVmFyaWFibGUoXG4gICAgICAgIHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtkYXlDb3VudGVyXVtcImhvdXJcIl1baG91ckNvdW50ZXJdW1xuICAgICAgICAgIFwiY29uZGl0aW9uXCJcbiAgICAgICAgXVtcImljb25cIl1cbiAgICAgIClcbiAgICApO1xuICAgIGhvdXJDb3VudGVyKys7XG4gIH1cblxuICBjb25zdCB6ZXJvSG91clZhciA9IGhvdXJBcnJbMF07XG4gIGNvbnN0IHplcm9Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFyclswXTtcbiAgY29uc3QgemVyb0hvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzBdO1xuICBjb25zdCB6ZXJvSG91ckljb25WYXIgPSBpY29uQXJyWzBdO1xuICBjb25zdCBvbmVIb3VyVmFyID0gaG91ckFyclsxXTtcbiAgY29uc3Qgb25lSG91clRlbXBGVmFyID0gdGVtcEZBcnJbMV07XG4gIGNvbnN0IG9uZUhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzFdO1xuICBjb25zdCBvbmVIb3VySWNvblZhciA9IGljb25BcnJbMV07XG4gIGNvbnN0IHR3b0hvdXJWYXIgPSBob3VyQXJyWzJdO1xuICBjb25zdCB0d29Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFyclsyXTtcbiAgY29uc3QgdHdvSG91clRlbXBDVmFyID0gdGVtcENBcnJbMl07XG4gIGNvbnN0IHR3b0hvdXJJY29uVmFyID0gaWNvbkFyclsyXTtcbiAgY29uc3QgdGhyZWVIb3VyVmFyID0gaG91ckFyclszXTtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcEZWYXIgPSB0ZW1wRkFyclszXTtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcENWYXIgPSB0ZW1wQ0FyclszXTtcbiAgY29uc3QgdGhyZWVIb3VySWNvblZhciA9IGljb25BcnJbM107XG4gIGNvbnN0IGZvdXJIb3VyVmFyID0gaG91ckFycls0XTtcbiAgY29uc3QgZm91ckhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzRdO1xuICBjb25zdCBmb3VySG91clRlbXBDVmFyID0gdGVtcENBcnJbNF07XG4gIGNvbnN0IGZvdXJIb3VySWNvblZhciA9IGljb25BcnJbNF07XG4gIGNvbnN0IGZpdmVIb3VyVmFyID0gaG91ckFycls1XTtcbiAgY29uc3QgZml2ZUhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzVdO1xuICBjb25zdCBmaXZlSG91clRlbXBDVmFyID0gdGVtcENBcnJbNV07XG4gIGNvbnN0IGZpdmVIb3VySWNvblZhciA9IGljb25BcnJbNV07XG4gIGNvbnN0IHNpeEhvdXJWYXIgPSBob3VyQXJyWzZdO1xuICBjb25zdCBzaXhIb3VyVGVtcEZWYXIgPSB0ZW1wRkFycls2XTtcbiAgY29uc3Qgc2l4SG91clRlbXBDVmFyID0gdGVtcENBcnJbNl07XG4gIGNvbnN0IHNpeEhvdXJJY29uVmFyID0gaWNvbkFycls2XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVmFyID0gaG91ckFycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VySWNvblZhciA9IGljb25BcnJbN107XG4gIGNvbnN0IGVpZ2h0SG91clZhciA9IGhvdXJBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91clRlbXBGVmFyID0gdGVtcEZBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91clRlbXBDVmFyID0gdGVtcENBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91ckljb25WYXIgPSBpY29uQXJyWzhdO1xuICBjb25zdCBuaW5lSG91clZhciA9IGhvdXJBcnJbOV07XG4gIGNvbnN0IG5pbmVIb3VyVGVtcEZWYXIgPSB0ZW1wRkFycls5XTtcbiAgY29uc3QgbmluZUhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzldO1xuICBjb25zdCBuaW5lSG91ckljb25WYXIgPSBpY29uQXJyWzldO1xuICBjb25zdCB0ZW5Ib3VyVmFyID0gaG91ckFyclsxMF07XG4gIGNvbnN0IHRlbkhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzEwXTtcbiAgY29uc3QgdGVuSG91clRlbXBDVmFyID0gdGVtcENBcnJbMTBdO1xuICBjb25zdCB0ZW5Ib3VySWNvblZhciA9IGljb25BcnJbMTBdO1xuICBjb25zdCBlbGV2ZW5Ib3VyVmFyID0gaG91ckFyclsxMV07XG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzExXTtcbiAgY29uc3QgZWxldmVuSG91clRlbXBDVmFyID0gdGVtcENBcnJbMTFdO1xuICBjb25zdCBlbGV2ZW5Ib3VySWNvblZhciA9IGljb25BcnJbMTFdO1xuXG4gIGNvbnN0IHNwYXJzZWRXZWF0aGVyRGF0YSA9IHtcbiAgICBsb2NhdGlvbk5hbWUsXG4gICAgcmVnaW9uTmFtZSxcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgIGN1cnJlbnRIaWdoQ2Vsc2l1cyxcbiAgICBjdXJyZW50SGlnaEZhcmVuaGVpdCxcbiAgICBjdXJyZW50TG93Q2Vsc2l1cyxcbiAgICBjdXJyZW50TG93RmFyZW5oZWl0LFxuICAgIGN1cnJlbnRUZW1wQ2Vsc2l1cyxcbiAgICBjdXJyZW50VGVtcEZhcmVuaGVpdCxcbiAgICBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyxcbiAgICBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRXaW5kU3BlZWQsXG4gICAgY3VycmVudEh1bWlkaXR5LFxuICAgIGN1cnJlbnRSYWluQ2hhbmNlLFxuICAgIHRvbW9ycm93SGlnaENlbHNpdXMsXG4gICAgdG9tb3Jyb3dIaWdoRmFyZW5oZWl0LFxuICAgIHRvbW9ycm93TG93Q2Vsc2l1cyxcbiAgICB0b21vcnJvd0xvd0ZhcmVuaGVpdCxcbiAgICB0b21vcnJvd0NvbmRpdGlvbkljb24sXG4gICAgdHdvRGF5SGlnaENlbHNpdXMsXG4gICAgdHdvRGF5SGlnaEZhcmVuaGVpdCxcbiAgICB0d29EYXlMb3dDZWxzaXVzLFxuICAgIHR3b0RheUxvd0ZhcmVuaGVpdCxcbiAgICB0d29EYXlDb25kaXRpb25JY29uLFxuICAgIGxvY2FsVGltZSxcbiAgICB6ZXJvSG91clZhcixcbiAgICB6ZXJvSG91clRlbXBGVmFyLFxuICAgIHplcm9Ib3VyVGVtcENWYXIsXG4gICAgemVyb0hvdXJJY29uVmFyLFxuICAgIG9uZUhvdXJWYXIsXG4gICAgb25lSG91clRlbXBGVmFyLFxuICAgIG9uZUhvdXJUZW1wQ1ZhcixcbiAgICBvbmVIb3VySWNvblZhcixcbiAgICB0d29Ib3VyVmFyLFxuICAgIHR3b0hvdXJUZW1wRlZhcixcbiAgICB0d29Ib3VyVGVtcENWYXIsXG4gICAgdHdvSG91ckljb25WYXIsXG4gICAgdGhyZWVIb3VyVmFyLFxuICAgIHRocmVlSG91clRlbXBGVmFyLFxuICAgIHRocmVlSG91clRlbXBDVmFyLFxuICAgIHRocmVlSG91ckljb25WYXIsXG4gICAgZm91ckhvdXJWYXIsXG4gICAgZm91ckhvdXJUZW1wRlZhcixcbiAgICBmb3VySG91clRlbXBDVmFyLFxuICAgIGZvdXJIb3VySWNvblZhcixcbiAgICBmaXZlSG91clZhcixcbiAgICBmaXZlSG91clRlbXBGVmFyLFxuICAgIGZpdmVIb3VyVGVtcENWYXIsXG4gICAgZml2ZUhvdXJJY29uVmFyLFxuICAgIHNpeEhvdXJWYXIsXG4gICAgc2l4SG91clRlbXBGVmFyLFxuICAgIHNpeEhvdXJUZW1wQ1ZhcixcbiAgICBzaXhIb3VySWNvblZhcixcbiAgICBzZXZlbkhvdXJWYXIsXG4gICAgc2V2ZW5Ib3VyVGVtcEZWYXIsXG4gICAgc2V2ZW5Ib3VyVGVtcENWYXIsXG4gICAgc2V2ZW5Ib3VySWNvblZhcixcbiAgICBlaWdodEhvdXJWYXIsXG4gICAgZWlnaHRIb3VyVGVtcEZWYXIsXG4gICAgZWlnaHRIb3VyVGVtcENWYXIsXG4gICAgZWlnaHRIb3VySWNvblZhcixcbiAgICBuaW5lSG91clZhcixcbiAgICBuaW5lSG91clRlbXBGVmFyLFxuICAgIG5pbmVIb3VyVGVtcENWYXIsXG4gICAgbmluZUhvdXJJY29uVmFyLFxuICAgIHRlbkhvdXJWYXIsXG4gICAgdGVuSG91clRlbXBGVmFyLFxuICAgIHRlbkhvdXJUZW1wQ1ZhcixcbiAgICB0ZW5Ib3VySWNvblZhcixcbiAgICBlbGV2ZW5Ib3VyVmFyLFxuICAgIGVsZXZlbkhvdXJUZW1wRlZhcixcbiAgICBlbGV2ZW5Ib3VyVGVtcENWYXIsXG4gICAgZWxldmVuSG91ckljb25WYXIsXG4gIH07XG5cbiAgdXBkYXRlRGFzaGJvYXJkKHNwYXJzZWRXZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhc2hib2FyZCh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgK1xuICAgICAgc2V0QmFja2dyb3VuZEltYWdlKHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb24pICtcbiAgICAgIFwiKVwiXG4gICk7XG4gIGNvbnN0IGxvY2F0aW9uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgbG9jYXRpb25QYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uTmFtZSArIFwiLCBcIiArIHdlYXRoZXJEYXRhLnJlZ2lvbk5hbWU7XG4gIGNvbnN0IGNvbmRpdGlvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuICBjb25kaXRpb25QYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9uO1xuICBjb25zdCBjdXJyZW50VGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRUZW1wRlwiKTtcbiAgY3VycmVudFRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRUZW1wRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCBmZWVsc0xpa2VGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VGXCIpO1xuICBmZWVsc0xpa2VGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkZFRUxTIExJS0U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB3aW5kU3BlZWRQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRTcGVlZFwiKTtcbiAgd2luZFNwZWVkUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIldJTkQ6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudFdpbmRTcGVlZCArIFwiIE1QSFwiO1xuICBjb25zdCBodW1pZGl0eVBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5UGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkhVTUlESVRZOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnRIdW1pZGl0eSArIFwiJVwiO1xuICBjb25zdCB0b2RheUhpZ2hGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheUhpZ2hGXCIpO1xuICB0b2RheUhpZ2hGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRIaWdoRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b2RheUxvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5TG93RlwiKTtcbiAgdG9kYXlMb3dGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRMb3dGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHRvZGF5V2VhdGhlckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5V2VhdGhlckljb25cIik7XG4gIGxldCBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25JY29uO1xuICB0b2RheVdlYXRoZXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHRvbW9ycm93SGlnaEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93SGlnaEZcIik7XG4gIHRvbW9ycm93SGlnaEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudG9tb3Jyb3dIaWdoRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b21vcnJvd0xvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRvbW9ycm93TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b21vcnJvd1dlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi50b21vcnJvd1dlYXRoZXJJY29uXCJcbiAgKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50b21vcnJvd0NvbmRpdGlvbkljb247XG4gIHRvbW9ycm93V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgdHdvRGF5SGlnaEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluVHdvRGF5c0hpZ2hGXCIpO1xuICB0d29EYXlIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50d29EYXlIaWdoRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0d29EYXlMb3dGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNMb3dGXCIpO1xuICB0d29EYXlMb3dGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0RheUxvd0ZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdHdvRGF5V2VhdGhlckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmluVHdvRGF5c1dlYXRoZXJJY29uXCJcbiAgKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50d29EYXlDb25kaXRpb25JY29uO1xuICB0d29EYXlXZWF0aGVySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB6ZXJvSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyb0hvdXJcIik7XG4gIHplcm9Ib3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuemVyb0hvdXJWYXI7XG4gIGNvbnN0IHplcm9Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm9Ib3VyVGVtcEZcIik7XG4gIHplcm9Ib3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuemVyb0hvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgemVyb0hvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnplcm9Ib3VySWNvblZhcjtcbiAgemVyb0hvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IG9uZUhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZUhvdXJcIik7XG4gIG9uZUhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5vbmVIb3VyVmFyO1xuICBjb25zdCBvbmVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZUhvdXJUZW1wRlwiKTtcbiAgb25lSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm9uZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3Qgb25lSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5vbmVIb3VySWNvblZhcjtcbiAgb25lSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgdHdvSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdvSG91clwiKTtcbiAgdHdvSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnR3b0hvdXJWYXI7XG4gIGNvbnN0IHR3b0hvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdvSG91clRlbXBGXCIpO1xuICB0d29Ib3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvSG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCB0d29Ib3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdvSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnR3b0hvdXJJY29uVmFyO1xuICB0d29Ib3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB0aHJlZUhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRocmVlSG91clwiKTtcbiAgdGhyZWVIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEudGhyZWVIb3VyVmFyO1xuICBjb25zdCB0aHJlZUhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhyZWVIb3VyVGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRocmVlSG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCB0aHJlZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJ0aHJlZUhvdXJXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudGhyZWVIb3VySWNvblZhcjtcbiAgdGhyZWVIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBmb3VySG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91ckhvdXJcIik7XG4gIGZvdXJIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm91ckhvdXJWYXI7XG4gIGNvbnN0IGZvdXJIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvdXJIb3VyVGVtcEZcIik7XG4gIGZvdXJIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuZm91ckhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZm91ckhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmZvdXJIb3VySWNvblZhcjtcbiAgZm91ckhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IGZpdmVIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlSG91clwiKTtcbiAgZml2ZUhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5maXZlSG91clZhcjtcbiAgY29uc3QgZml2ZUhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZUhvdXJUZW1wRlwiKTtcbiAgZml2ZUhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5maXZlSG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBmaXZlSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuZml2ZUhvdXJJY29uVmFyO1xuICBmaXZlSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3Qgc2l4SG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l4SG91clwiKTtcbiAgc2l4SG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnNpeEhvdXJWYXI7XG4gIGNvbnN0IHNpeEhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l4SG91clRlbXBGXCIpO1xuICBzaXhIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuc2l4SG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBzaXhIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l4SG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnNpeEhvdXJJY29uVmFyO1xuICBzaXhIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBzZXZlbkhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldmVuSG91clwiKTtcbiAgc2V2ZW5Ib3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuc2V2ZW5Ib3VyVmFyO1xuICBjb25zdCBzZXZlbkhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V2ZW5Ib3VyVGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnNldmVuSG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBzZXZlbkhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJzZXZlbkhvdXJXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuc2V2ZW5Ib3VySWNvblZhcjtcbiAgc2V2ZW5Ib3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBlaWdodEhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVpZ2h0SG91clwiKTtcbiAgZWlnaHRIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZWlnaHRIb3VyVmFyO1xuICBjb25zdCBlaWdodEhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWlnaHRIb3VyVGVtcEZcIik7XG4gIGVpZ2h0SG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmVpZ2h0SG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBlaWdodEhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJlaWdodEhvdXJXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuZWlnaHRIb3VySWNvblZhcjtcbiAgZWlnaHRIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBuaW5lSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmluZUhvdXJcIik7XG4gIG5pbmVIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmluZUhvdXJWYXI7XG4gIGNvbnN0IG5pbmVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pbmVIb3VyVGVtcEZcIik7XG4gIG5pbmVIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEubmluZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgbmluZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaW5lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLm5pbmVIb3VySWNvblZhcjtcbiAgbmluZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHRlbkhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbkhvdXJcIik7XG4gIHRlbkhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50ZW5Ib3VyVmFyO1xuICBjb25zdCB0ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbkhvdXJUZW1wRlwiKTtcbiAgdGVuSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgdGVuSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbkhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50ZW5Ib3VySWNvblZhcjtcbiAgdGVuSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgZWxldmVuSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxldmVuSG91clwiKTtcbiAgZWxldmVuSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmVsZXZlbkhvdXJWYXI7XG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wRlBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxldmVuSG91clRlbXBGXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuZWxldmVuSG91clRlbXBGVmFyKSArIFwiRlwiO1xuICBjb25zdCBlbGV2ZW5Ib3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZWxldmVuSG91cldlYXRoZXJJY29uXCJcbiAgKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5lbGV2ZW5Ib3VySWNvblZhcjtcbiAgZWxldmVuSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyZWFJbnB1dFwiKS52YWx1ZTtcbiAgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYUlucHV0XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VQb2ludGVyKGltYWdlVmFyaWFibGUpIHtcbiAgY29uc3QgaW1hZ2VEYXlvck5pZ2h0ID0gaW1hZ2VWYXJpYWJsZS5zbGljZSgwLCAtMyk7XG4gIGNvbnN0IGltYWdlTnVtYmVyID0gaW1hZ2VWYXJpYWJsZS5zbGljZSgtMyk7XG4gIGlmIChpbWFnZURheW9yTmlnaHQgPT0gXCJkYXlcIikge1xuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExM1wiKSB7XG4gICAgICByZXR1cm4gRDExMztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTE2XCIpIHtcbiAgICAgIHJldHVybiBEMTE2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTlcIikge1xuICAgICAgcmV0dXJuIEQxMTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjEyMlwiKSB7XG4gICAgICByZXR1cm4gRDEyMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTQzXCIpIHtcbiAgICAgIHJldHVybiBEMTQzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNzZcIikge1xuICAgICAgcmV0dXJuIEQxNzY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE3OVwiKSB7XG4gICAgICByZXR1cm4gRDE3OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTgyXCIpIHtcbiAgICAgIHJldHVybiBEMTgyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODVcIikge1xuICAgICAgcmV0dXJuIEQxODU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIwMFwiKSB7XG4gICAgICByZXR1cm4gRDIwMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjI3XCIpIHtcbiAgICAgIHJldHVybiBEMjI3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMzBcIikge1xuICAgICAgcmV0dXJuIEQyMzA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI0OFwiKSB7XG4gICAgICByZXR1cm4gRDI0ODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjYwXCIpIHtcbiAgICAgIHJldHVybiBEMjYwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjNcIikge1xuICAgICAgcmV0dXJuIEQyNjM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2NlwiKSB7XG4gICAgICByZXR1cm4gRDI2NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjgxXCIpIHtcbiAgICAgIHJldHVybiBEMjgxO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODRcIikge1xuICAgICAgcmV0dXJuIEQyODQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5M1wiKSB7XG4gICAgICByZXR1cm4gRDI5MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjk2XCIpIHtcbiAgICAgIHJldHVybiBEMjk2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTlcIikge1xuICAgICAgcmV0dXJuIEQyOTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwMlwiKSB7XG4gICAgICByZXR1cm4gRDMwMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzA1XCIpIHtcbiAgICAgIHJldHVybiBEMzA1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDhcIikge1xuICAgICAgcmV0dXJuIEQzMDg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxMVwiKSB7XG4gICAgICByZXR1cm4gRDMxMTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzE0XCIpIHtcbiAgICAgIHJldHVybiBEMzE0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTdcIikge1xuICAgICAgcmV0dXJuIEQzMTc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyMFwiKSB7XG4gICAgICByZXR1cm4gRDMyMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIzXCIpIHtcbiAgICAgIHJldHVybiBEMzIzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjZcIikge1xuICAgICAgcmV0dXJuIEQzMjY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyOVwiKSB7XG4gICAgICByZXR1cm4gRDMyOTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzMyXCIpIHtcbiAgICAgIHJldHVybiBEMzMyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzVcIikge1xuICAgICAgcmV0dXJuIEQzMzU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzOFwiKSB7XG4gICAgICByZXR1cm4gRDMzODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzUwXCIpIHtcbiAgICAgIHJldHVybiBEMzUwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTNcIikge1xuICAgICAgcmV0dXJuIEQzNTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1NlwiKSB7XG4gICAgICByZXR1cm4gRDM1NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU5XCIpIHtcbiAgICAgIHJldHVybiBEMzU5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjJcIikge1xuICAgICAgcmV0dXJuIEQzNjI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2NVwiKSB7XG4gICAgICByZXR1cm4gRDM2NTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY4XCIpIHtcbiAgICAgIHJldHVybiBEMzY4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzFcIikge1xuICAgICAgcmV0dXJuIEQzNzE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3NFwiKSB7XG4gICAgICByZXR1cm4gRDM3NDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc3XCIpIHtcbiAgICAgIHJldHVybiBEMzc3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzODZcIikge1xuICAgICAgcmV0dXJuIEQzODY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM4OVwiKSB7XG4gICAgICByZXR1cm4gRDM4OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzkyXCIpIHtcbiAgICAgIHJldHVybiBEMzkyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTVcIikge1xuICAgICAgcmV0dXJuIEQzOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEMTEzO1xuICAgIH1cbiAgfVxuICBpZiAoaW1hZ2VEYXlvck5pZ2h0ID09IFwibmlnaHRcIikge1xuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExM1wiKSB7XG4gICAgICByZXR1cm4gTjExMztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTE2XCIpIHtcbiAgICAgIHJldHVybiBOMTE2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTlcIikge1xuICAgICAgcmV0dXJuIE4xMTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjEyMlwiKSB7XG4gICAgICByZXR1cm4gTjEyMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTQzXCIpIHtcbiAgICAgIHJldHVybiBOMTQzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNzZcIikge1xuICAgICAgcmV0dXJuIE4xNzY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE3OVwiKSB7XG4gICAgICByZXR1cm4gTjE3OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTgyXCIpIHtcbiAgICAgIHJldHVybiBOMTgyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODVcIikge1xuICAgICAgcmV0dXJuIE4xODU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIwMFwiKSB7XG4gICAgICByZXR1cm4gTjIwMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjI3XCIpIHtcbiAgICAgIHJldHVybiBOMjI3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMzBcIikge1xuICAgICAgcmV0dXJuIE4yMzA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI0OFwiKSB7XG4gICAgICByZXR1cm4gTjI0ODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjYwXCIpIHtcbiAgICAgIHJldHVybiBOMjYwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjNcIikge1xuICAgICAgcmV0dXJuIE4yNjM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2NlwiKSB7XG4gICAgICByZXR1cm4gTjI2NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjgxXCIpIHtcbiAgICAgIHJldHVybiBOMjgxO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODRcIikge1xuICAgICAgcmV0dXJuIE4yODQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5M1wiKSB7XG4gICAgICByZXR1cm4gTjI5MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjk2XCIpIHtcbiAgICAgIHJldHVybiBOMjk2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTlcIikge1xuICAgICAgcmV0dXJuIE4yOTk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwMlwiKSB7XG4gICAgICByZXR1cm4gTjMwMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzA1XCIpIHtcbiAgICAgIHJldHVybiBOMzA1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDhcIikge1xuICAgICAgcmV0dXJuIE4zMDg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxMVwiKSB7XG4gICAgICByZXR1cm4gTjMxMTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzE0XCIpIHtcbiAgICAgIHJldHVybiBOMzE0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTdcIikge1xuICAgICAgcmV0dXJuIE4zMTc7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyMFwiKSB7XG4gICAgICByZXR1cm4gTjMyMDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIzXCIpIHtcbiAgICAgIHJldHVybiBOMzIzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjZcIikge1xuICAgICAgcmV0dXJuIE4zMjY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyOVwiKSB7XG4gICAgICByZXR1cm4gTjMyOTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzMyXCIpIHtcbiAgICAgIHJldHVybiBOMzMyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzVcIikge1xuICAgICAgcmV0dXJuIE4zMzU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzOFwiKSB7XG4gICAgICByZXR1cm4gTjMzODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzUwXCIpIHtcbiAgICAgIHJldHVybiBOMzUwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTNcIikge1xuICAgICAgcmV0dXJuIE4zNTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1NlwiKSB7XG4gICAgICByZXR1cm4gTjM1NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU5XCIpIHtcbiAgICAgIHJldHVybiBOMzU5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjJcIikge1xuICAgICAgcmV0dXJuIE4zNjI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2NVwiKSB7XG4gICAgICByZXR1cm4gTjM2NTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY4XCIpIHtcbiAgICAgIHJldHVybiBOMzY4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzFcIikge1xuICAgICAgcmV0dXJuIE4zNzE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3NFwiKSB7XG4gICAgICByZXR1cm4gTjM3NDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc3XCIpIHtcbiAgICAgIHJldHVybiBOMzc3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzODZcIikge1xuICAgICAgcmV0dXJuIE4zODY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM4OVwiKSB7XG4gICAgICByZXR1cm4gTjM4OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzkyXCIpIHtcbiAgICAgIHJldHVybiBOMzkyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTVcIikge1xuICAgICAgcmV0dXJuIE4zOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOMTEzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRDExMztcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVMZWZ0Q2xpY2soKSB7XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNjcm9sbENvdW50ZXIgPT0gMSkge1xuICAgIHNjcm9sbENvdW50ZXItLTtcbiAgICBpbmZvYm94MS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZS1yaWdodFwiKTtcbiAgICBpbmZvYm94MC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmUtbGVmdFwiKTtcbiAgICBpbmZvYm94MC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5hdkRvdE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2QWN0aXZlXCIpO1xuICAgIG5hdkRvdFplcm8uY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAyKSB7XG4gICAgc2Nyb2xsQ291bnRlci0tO1xuICAgIGluZm9ib3gyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5mb2JveDIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLXJpZ2h0XCIpO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZS1sZWZ0XCIpO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbmF2RG90VHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZBY3RpdmVcIik7XG4gICAgbmF2RG90T25lLmNsYXNzTGlzdC5hZGQoXCJuYXZBY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUmlnaHRDbGljaygpIHtcbiAgaWYgKHNjcm9sbENvdW50ZXIgPT0gMikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAxKSB7XG4gICAgc2Nyb2xsQ291bnRlcisrO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLWxlZnRcIik7XG4gICAgaW5mb2JveDIuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlLXJpZ2h0XCIpO1xuICAgIGluZm9ib3gyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbmF2RG90T25lLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZBY3RpdmVcIik7XG4gICAgbmF2RG90VHdvLmNsYXNzTGlzdC5hZGQoXCJuYXZBY3RpdmVcIik7XG4gIH1cbiAgaWYgKHNjcm9sbENvdW50ZXIgPT0gMCkge1xuICAgIHNjcm9sbENvdW50ZXIrKztcbiAgICBpbmZvYm94MC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGluZm9ib3gwLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZS1sZWZ0XCIpO1xuICAgIGluZm9ib3gxLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZS1yaWdodFwiKTtcbiAgICBpbmZvYm94MS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5hdkRvdFplcm8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdkFjdGl2ZVwiKTtcbiAgICBuYXZEb3RPbmUuY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kSW1hZ2UoY3VycmVudENvbmRpdGlvbikge1xuICBjb25zb2xlLmxvZyhjdXJyZW50Q29uZGl0aW9uKTtcbiAgY29uc3Qgd3JhcHBlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGlmIChjdXJyZW50Q29uZGl0aW9uID09IFwiU3VubnlcIikge1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVRleHRcIik7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LmFkZChcImJsYWNrVGV4dFwiKTtcbiAgICByZXR1cm4gc3VubnlEYXk7XG4gIH1cbiAgaWYgKGN1cnJlbnRDb25kaXRpb24gPT0gXCJDbGVhclwiKSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcImJsYWNrVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwid2hpdGVUZXh0XCIpO1xuICAgIHJldHVybiBjbGVhck5pZ2h0O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGFydGx5IGNsb3VkeVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkNsb3VkeVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk92ZXJjYXN0XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJibGFja1RleHRcIik7XG4gICAgcmV0dXJuIGNsb3VkeURheTtcbiAgfVxuICBpZiAoXG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1pc3RcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJGb2dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJGcmVlemluZyBmb2dcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJibGFja1RleHRcIik7XG4gICAgcmV0dXJuIGZvZ2d5RGF5O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkJsb3dpbmcgc25vd1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkJsaXp6YXJkXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBzbm93XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSBzbm93XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJIZWF2eSBzbm93XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiSWNlIHBlbGxldHNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBzbGVldFwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBzbm93IHNob3dlcnNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkZyZWV6aW5nIGRyaXp6bGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTGlnaHQgZnJlZXppbmcgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBzbGVldCBzaG93ZXJzXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiXG4gICkge1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVRleHRcIik7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LmFkZChcImJsYWNrVGV4dFwiKTtcbiAgICByZXR1cm4gc25vd3lEYXk7XG4gIH1cbiAgaWYgKFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJMaWdodCBkcml6emxlXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJibGFja1RleHRcIik7XG4gICAgcmV0dXJuIG92ZXJjYXN0RGF5O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTGlnaHQgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgcmFpblwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIkhlYXZ5IHJhaW4gYXQgVGltZXNcIiB8fFxuICAgIGN1cnJlbnRDb25kaXRpb24gPT0gXCJIZWF2eSByYWluXCIgfHxcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIlxuICApIHtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tUZXh0XCIpO1xuICAgIHdyYXBwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVRleHRcIik7XG4gICAgcmV0dXJuIHJhaW55RGF5O1xuICB9XG4gIGlmIChcbiAgICBjdXJyZW50Q29uZGl0aW9uID09IFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiIHx8XG4gICAgY3VycmVudENvbmRpdGlvbiA9PSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCJcbiAgKSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcImJsYWNrVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwid2hpdGVUZXh0XCIpO1xuICAgIHJldHVybiBzdG9ybXlEYXk7XG4gIH0gZWxzZSB7XG4gICAgd3JhcHBlclRleHQuY2xhc3NMaXN0LnJlbW92ZShcIndoaXRlVGV4dFwiKTtcbiAgICB3cmFwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmxhY2tUZXh0XCIpO1xuICAgIHJldHVybiBzdW5ueURheTtcbiAgfVxufVxuXG5sZXQgc2Nyb2xsQ291bnRlciA9IDA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUxheW91dCgpKTtcbmxldCBsb2NhdGlvbiA9IFwiRGVudmVyLCBDb2xvcmFkb1wiO1xuZ2V0V2VhdGhlcihsb2NhdGlvbik7XG5jb25zdCBpbmZvYm94MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFplcm9cIik7XG5jb25zdCBpbmZvYm94MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5Rm9yZWNhc3RJbmRleE9uZVwiKTtcbmNvbnN0IGluZm9ib3gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3VybHlGb3JlY2FzdEluZGV4VHdvXCIpO1xuY29uc3QgbmF2RG90WmVybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MFwiKTtcbmNvbnN0IG5hdkRvdE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MVwiKTtcbmNvbnN0IG5hdkRvdFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MlwiKTtcbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsYmFyTGVmdFwiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbGJhclJpZ2h0XCIpO1xubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWZ0Q2xpY2spO1xucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmlnaHRDbGljayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=