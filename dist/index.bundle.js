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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,0BAA0B;EAC1B,cAAc;EACd,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kDAAkD;EAClD,YAAY;EACZ,oBAAoB;EACpB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,wBAAwB;EACxB,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.scrollbar {\n  display: flex;\n  justify-content: center;\n}\n\n.navDot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #f3f3f3;\n  margin: 0 5px;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.navDot.navActive {\n  background-color: #f3f3f3;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n"],"sourceRoot":""}]);
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

  const zeroHourTempF = document.createElement("div");
  zeroHourTempF.classList.add("hourlyForecastTempF");
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

  const oneHourTempF = document.createElement("div");
  oneHourTempF.classList.add("hourlyForecastTempF");
  oneHourTempF.setAttribute("id", "oneHourTempF");
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

  const twoHourTempF = document.createElement("div");
  twoHourTempF.classList.add("hourlyForecastTempF");
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

  const threeHourTempF = document.createElement("div");
  threeHourTempF.classList.add("hourlyForecastTempF");
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

  const fourHourForecast = document.createElement("div");
  fourHourForecast.classList.add("hourlyForecastBox");
  fourHourForecast.setAttribute("id", "fourHourForecast");

  const fourHour = document.createElement("div");
  fourHour.classList.add("hourlyForecastHour");
  fourHour.setAttribute("id", "fourHour");
  fourHour.textContent = "4";

  const fourHourTempF = document.createElement("div");
  fourHourTempF.classList.add("hourlyForecastTempF");
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

  const fiveHourTempF = document.createElement("div");
  fiveHourTempF.classList.add("hourlyForecastTempF");
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

  const sixHourTempF = document.createElement("div");
  sixHourTempF.classList.add("hourlyForecastTempF");
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

  const sevenHourTempF = document.createElement("div");
  sevenHourTempF.classList.add("hourlyForecastTempF");
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

  const eightHourForecast = document.createElement("div");
  eightHourForecast.classList.add("hourlyForecastBox");
  eightHourForecast.setAttribute("id", "eightHourForecast");

  const eightHour = document.createElement("div");
  eightHour.classList.add("hourlyForecastHour");
  eightHour.setAttribute("id", "eightHour");
  eightHour.textContent = "8";

  const eightHourTempF = document.createElement("div");
  eightHourTempF.classList.add("hourlyForecastTempF");
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

  const nineHourTempF = document.createElement("div");
  nineHourTempF.classList.add("hourlyForecastTempF");
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

  const tenHourTempF = document.createElement("div");
  tenHourTempF.classList.add("hourlyForecastTempF");
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

  const elevenHourTempF = document.createElement("div");
  elevenHourTempF.classList.add("hourlyForecastTempF");
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
  zeroHourForecast.appendChild(zeroHourTempF);
  zeroHourForecast.appendChild(zeroHourWeatherIcon);
  oneHourForecast.appendChild(oneHour);
  oneHourForecast.appendChild(oneHourTempF);
  oneHourForecast.appendChild(oneHourWeatherIcon);
  twoHourForecast.appendChild(twoHour);
  twoHourForecast.appendChild(twoHourTempF);
  twoHourForecast.appendChild(twoHourWeatherIcon);
  threeHourForecast.appendChild(threeHour);
  threeHourForecast.appendChild(threeHourTempF);
  threeHourForecast.appendChild(threeHourWeatherIcon);
  fourHourForecast.appendChild(fourHour);
  fourHourForecast.appendChild(fourHourTempF);
  fourHourForecast.appendChild(fourHourWeatherIcon);
  fiveHourForecast.appendChild(fiveHour);
  fiveHourForecast.appendChild(fiveHourTempF);
  fiveHourForecast.appendChild(fiveHourWeatherIcon);
  sixHourForecast.appendChild(sixHour);
  sixHourForecast.appendChild(sixHourTempF);
  sixHourForecast.appendChild(sixHourWeatherIcon);
  sevenHourForecast.appendChild(sevenHour);
  sevenHourForecast.appendChild(sevenHourTempF);
  sevenHourForecast.appendChild(sevenHourWeatherIcon);
  eightHourForecast.appendChild(eightHour);
  eightHourForecast.appendChild(eightHourTempF);
  eightHourForecast.appendChild(eightHourWeatherIcon);
  nineHourForecast.appendChild(nineHour);
  nineHourForecast.appendChild(nineHourTempF);
  nineHourForecast.appendChild(nineHourWeatherIcon);
  tenHourForecast.appendChild(tenHour);
  tenHourForecast.appendChild(tenHourTempF);
  tenHourForecast.appendChild(tenHourWeatherIcon);
  elevenHourForecast.appendChild(elevenHour);
  elevenHourForecast.appendChild(elevenHourTempF);
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
    infobox0.classList.add("active");
    navDotOne.classList.remove("navActive");
    navDotZero.classList.add("navActive");
  }
  if (scrollCounter == 2) {
    scrollCounter--;
    infobox2.classList.remove("active");
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
    infobox2.classList.add("active");
    navDotOne.classList.remove("navActive");
    navDotTwo.classList.add("navActive");
  }
  if (scrollCounter == 0) {
    scrollCounter++;
    infobox0.classList.remove("active");
    infobox1.classList.add("active");
    navDotZero.classList.remove("navActive");
    navDotOne.classList.add("navActive");
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxnQkFBZ0IsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsY0FBYyxxQkFBcUIseUJBQXlCLGtCQUFrQixpQ0FBaUMsOEJBQThCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsR0FBRyxhQUFhLGtCQUFrQix5QkFBeUIsc0JBQXNCLHdCQUF3QixlQUFlLEdBQUcsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsK0JBQStCLG1CQUFtQixzQkFBc0IsMEJBQTBCLEdBQUcsZUFBZSxrQkFBa0IsbUNBQW1DLDRCQUE0Qix3QkFBd0Isc0JBQXNCLEdBQUcsdUJBQXVCLGtCQUFrQixnQ0FBZ0MscUJBQXFCLHFCQUFxQixHQUFHLDRCQUE0QixrQkFBa0IsbUNBQW1DLEdBQUcsZ0JBQWdCLG9CQUFvQiwyQkFBMkIseUJBQXlCLEdBQUcsZUFBZSxzQkFBc0Isd0JBQXdCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQixxQkFBcUIscUJBQXFCLHdDQUF3Qyx1QkFBdUIsd0JBQXdCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsdURBQXVELGlCQUFpQix5QkFBeUIsbUNBQW1DLHNCQUFzQixHQUFHLGtCQUFrQixzQkFBc0IscUJBQXFCLDJCQUEyQix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQixnQ0FBZ0Msc0JBQXNCLGFBQWEsR0FBRyw2QkFBNkIsa0JBQWtCLHVDQUF1Qyx3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3QixHQUFHLDBCQUEwQixzQkFBc0IsMkJBQTJCLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0Isd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLEdBQUcsMkJBQTJCLHNCQUFzQix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsa0JBQWtCLCtCQUErQiw0QkFBNEIsd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQ0FBMkMsd0JBQXdCLDZCQUE2Qix3Q0FBd0MsaUNBQWlDLEdBQUcsaUNBQWlDLHdDQUF3QyxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLGNBQWMsd0JBQXdCLEdBQUcseUJBQXlCLHNCQUFzQix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0Isd0JBQXdCLEdBQUcsMEJBQTBCLHNCQUFzQixxQkFBcUIsMkJBQTJCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1Q0FBdUMsOEJBQThCLGtCQUFrQixvQkFBb0Isb0JBQW9CLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLDJCQUEyQixpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQix1QkFBdUIsdUJBQXVCLGNBQWMsWUFBWSxnQkFBZ0IsNEJBQTRCLGNBQWMsR0FBRyxhQUFhLGlCQUFpQixHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSw0QkFBNEIsZ0JBQWdCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLGNBQWMscUJBQXFCLHlCQUF5QixrQkFBa0IsaUNBQWlDLDhCQUE4QixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLEdBQUcsYUFBYSxrQkFBa0IseUJBQXlCLHNCQUFzQix3QkFBd0IsZUFBZSxHQUFHLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixrQkFBa0IseUNBQXlDLCtCQUErQixtQkFBbUIsc0JBQXNCLDBCQUEwQixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLHVCQUF1QixrQkFBa0IsZ0NBQWdDLHFCQUFxQixxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLG1DQUFtQyxHQUFHLGdCQUFnQixvQkFBb0IsMkJBQTJCLHlCQUF5QixHQUFHLGVBQWUsc0JBQXNCLHdCQUF3Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsR0FBRyxtQkFBbUIscUJBQXFCLHFCQUFxQix3Q0FBd0MsdUJBQXVCLHdCQUF3QixHQUFHLGdDQUFnQyxrQkFBa0IsMkJBQTJCLHVEQUF1RCxpQkFBaUIseUJBQXlCLG1DQUFtQyxzQkFBc0IsR0FBRyxrQkFBa0Isc0JBQXNCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsZ0NBQWdDLHNCQUFzQixhQUFhLEdBQUcsNkJBQTZCLGtCQUFrQix1Q0FBdUMsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsY0FBYyx3QkFBd0IsR0FBRywwQkFBMEIsc0JBQXNCLDJCQUEyQix3QkFBd0IsR0FBRyw0QkFBNEIsb0JBQW9CLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QixHQUFHLDJCQUEyQixzQkFBc0Isd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQiwrQkFBK0IsNEJBQTRCLHdCQUF3QixHQUFHLDBCQUEwQixrQkFBa0IsMkNBQTJDLHdCQUF3Qiw2QkFBNkIsd0NBQXdDLGlDQUFpQyxHQUFHLGlDQUFpQyx3Q0FBd0MsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3QixHQUFHLHlCQUF5QixzQkFBc0Isd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLHdCQUF3QixHQUFHLDBCQUEwQixzQkFBc0IscUJBQXFCLDJCQUEyQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixHQUFHLGFBQWEsZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUNBQXVDLDhCQUE4QixrQkFBa0Isb0JBQW9CLG9CQUFvQixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRywyQkFBMkIsaUJBQWlCLEdBQUcsWUFBWSxrQkFBa0IsdUJBQXVCLHVCQUF1QixjQUFjLFlBQVksZ0JBQWdCLDRCQUE0QixjQUFjLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDeitTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQ3VCO0FBQ1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0w7QUFDRTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwrQ0FBUztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzREFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakI7QUFDQTtBQUNBLGFBQWEsK0RBQUk7QUFDakIsTUFBTTtBQUNOLGFBQWEsOERBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLGlFQUFJO0FBQ2pCLE1BQU07QUFDTixhQUFhLGlFQUFJO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKLFdBQVcsOERBQUk7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxufVxcblxcbi5jdXJyZW50RGF5V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoRiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvd0Yge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEhvdXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcEYge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2RG90IHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmF2RG90Lm5hdkFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrREFBa0Q7RUFDbEQsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxufVxcblxcbi5jdXJyZW50RGF5V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoRiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvd0Yge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEhvdXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0VGVtcEYge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2RG90IHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmF2RG90Lm5hdkFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2l0aHViU1ZHIGZyb20gXCIuL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgRDExMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZ1wiO1xuaW1wb3J0IEQxMTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzExNi5wbmdcIjtcbmltcG9ydCBEMTE5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMTkucG5nXCI7XG5pbXBvcnQgRDEyMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTIyLnBuZ1wiO1xuaW1wb3J0IEQxNDMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE0My5wbmdcIjtcbmltcG9ydCBEMTc2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xNzYucG5nXCI7XG5pbXBvcnQgRDE3OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTc5LnBuZ1wiO1xuaW1wb3J0IEQxODIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE4Mi5wbmdcIjtcbmltcG9ydCBEMTg1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xODUucG5nXCI7XG5pbXBvcnQgRDIwMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjAwLnBuZ1wiO1xuaW1wb3J0IEQyMjcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzIyNy5wbmdcIjtcbmltcG9ydCBEMjMwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yMzAucG5nXCI7XG5pbXBvcnQgRDI0OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjQ4LnBuZ1wiO1xuaW1wb3J0IEQyNjAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI2MC5wbmdcIjtcbmltcG9ydCBEMjYzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNjMucG5nXCI7XG5pbXBvcnQgRDI2NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjY2LnBuZ1wiO1xuaW1wb3J0IEQyODEgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI4MS5wbmdcIjtcbmltcG9ydCBEMjg0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yODQucG5nXCI7XG5pbXBvcnQgRDI5MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjkzLnBuZ1wiO1xuaW1wb3J0IEQyOTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI5Ni5wbmdcIjtcbmltcG9ydCBEMjk5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yOTkucG5nXCI7XG5pbXBvcnQgRDMwMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzAyLnBuZ1wiO1xuaW1wb3J0IEQzMDUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMwNS5wbmdcIjtcbmltcG9ydCBEMzA4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMDgucG5nXCI7XG5pbXBvcnQgRDMxMSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzExLnBuZ1wiO1xuaW1wb3J0IEQzMTQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMxNC5wbmdcIjtcbmltcG9ydCBEMzE3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMTcucG5nXCI7XG5pbXBvcnQgRDMyMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzIwLnBuZ1wiO1xuaW1wb3J0IEQzMjMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyMy5wbmdcIjtcbmltcG9ydCBEMzI2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjYucG5nXCI7XG5pbXBvcnQgRDMyOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzI5LnBuZ1wiO1xuaW1wb3J0IEQzMzIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMzMi5wbmdcIjtcbmltcG9ydCBEMzM1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMzUucG5nXCI7XG5pbXBvcnQgRDMzOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzM4LnBuZ1wiO1xuaW1wb3J0IEQzNTAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1MC5wbmdcIjtcbmltcG9ydCBEMzUzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTMucG5nXCI7XG5pbXBvcnQgRDM1NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzU2LnBuZ1wiO1xuaW1wb3J0IEQzNTkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1OS5wbmdcIjtcbmltcG9ydCBEMzYyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNjIucG5nXCI7XG5pbXBvcnQgRDM2NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzY1LnBuZ1wiO1xuaW1wb3J0IEQzNjggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM2OC5wbmdcIjtcbmltcG9ydCBEMzcxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNzEucG5nXCI7XG5pbXBvcnQgRDM3NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzc0LnBuZ1wiO1xuaW1wb3J0IEQzNzcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM3Ny5wbmdcIjtcbmltcG9ydCBEMzg2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zODYucG5nXCI7XG5pbXBvcnQgRDM4OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzg5LnBuZ1wiO1xuaW1wb3J0IEQzOTIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM5Mi5wbmdcIjtcbmltcG9ydCBEMzk1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zOTUucG5nXCI7XG5pbXBvcnQgTjExMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTMucG5nXCI7XG5pbXBvcnQgTjExNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTYucG5nXCI7XG5pbXBvcnQgTjExOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMTkucG5nXCI7XG5pbXBvcnQgTjEyMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xMjIucG5nXCI7XG5pbXBvcnQgTjE0MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNDMucG5nXCI7XG5pbXBvcnQgTjE3NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNzYucG5nXCI7XG5pbXBvcnQgTjE3OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xNzkucG5nXCI7XG5pbXBvcnQgTjE4MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xODIucG5nXCI7XG5pbXBvcnQgTjE4NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8xODUucG5nXCI7XG5pbXBvcnQgTjIwMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMDAucG5nXCI7XG5pbXBvcnQgTjIyNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMjcucG5nXCI7XG5pbXBvcnQgTjIzMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yMzAucG5nXCI7XG5pbXBvcnQgTjI0OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNDgucG5nXCI7XG5pbXBvcnQgTjI2MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjAucG5nXCI7XG5pbXBvcnQgTjI2MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjMucG5nXCI7XG5pbXBvcnQgTjI2NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yNjYucG5nXCI7XG5pbXBvcnQgTjI4MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yODEucG5nXCI7XG5pbXBvcnQgTjI4NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yODQucG5nXCI7XG5pbXBvcnQgTjI5MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTMucG5nXCI7XG5pbXBvcnQgTjI5NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTYucG5nXCI7XG5pbXBvcnQgTjI5OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8yOTkucG5nXCI7XG5pbXBvcnQgTjMwMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDIucG5nXCI7XG5pbXBvcnQgTjMwNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDUucG5nXCI7XG5pbXBvcnQgTjMwOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMDgucG5nXCI7XG5pbXBvcnQgTjMxMSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTEucG5nXCI7XG5pbXBvcnQgTjMxNCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTQucG5nXCI7XG5pbXBvcnQgTjMxNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMTcucG5nXCI7XG5pbXBvcnQgTjMyMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjAucG5nXCI7XG5pbXBvcnQgTjMyMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjMucG5nXCI7XG5pbXBvcnQgTjMyNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjYucG5nXCI7XG5pbXBvcnQgTjMyOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMjkucG5nXCI7XG5pbXBvcnQgTjMzMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzIucG5nXCI7XG5pbXBvcnQgTjMzNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzUucG5nXCI7XG5pbXBvcnQgTjMzOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zMzgucG5nXCI7XG5pbXBvcnQgTjM1MCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTAucG5nXCI7XG5pbXBvcnQgTjM1MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTMucG5nXCI7XG5pbXBvcnQgTjM1NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTYucG5nXCI7XG5pbXBvcnQgTjM1OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNTkucG5nXCI7XG5pbXBvcnQgTjM2MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjIucG5nXCI7XG5pbXBvcnQgTjM2NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjUucG5nXCI7XG5pbXBvcnQgTjM2OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNjgucG5nXCI7XG5pbXBvcnQgTjM3MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzEucG5nXCI7XG5pbXBvcnQgTjM3NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzQucG5nXCI7XG5pbXBvcnQgTjM3NyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zNzcucG5nXCI7XG5pbXBvcnQgTjM4NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zODYucG5nXCI7XG5pbXBvcnQgTjM4OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zODkucG5nXCI7XG5pbXBvcnQgTjM5MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zOTIucG5nXCI7XG5pbXBvcnQgTjM5NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9uaWdodC8zOTUucG5nXCI7XG5pbXBvcnQgc2Nyb2xsTGVmdCBmcm9tIFwiLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Z1wiO1xuaW1wb3J0IHNjcm9sbFJpZ2h0IGZyb20gXCIuL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXlvdXQoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBhcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFyZWFJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYXJlYUlucHV0XCIpO1xuICBhcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcmVhSW5wdXRcIik7XG4gIGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgYXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIGNpdHlcIik7XG5cbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKFwibWFpbkJvZHlcIik7XG5cbiAgY29uc3QgbGVmdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRCb3guY2xhc3NMaXN0LmFkZChcImxlZnRCb3hcIik7XG5cbiAgY29uc3QgcmlnaHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodEJveC5jbGFzc0xpc3QuYWRkKFwicmlnaHRCb3hcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyVGV4dFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBDb2xlIEJ1cmNoXCI7XG5cbiAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Yi5zcmMgPSBnaXRodWJTVkc7XG4gIGdpdGh1Yi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYUlucHV0KTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHJpZ2h0Qm94KTtcbiAgbGVmdEJveC5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVUaHJlZURheUZvcmVjYXN0V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlGb3JlY2FzdFdpZGdldCgpKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkge1xuICBjb25zdCBjdXJyZW50RGF5V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudERheVdpZGdldC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudERheVdpZGdldFwiKTtcblxuICBjb25zdCBsb2NhdGlvbkFuZENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uQW5kQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkFuZENvbmRpdGlvblwiKTtcblxuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gXCJDb25kaXRpb25cIjtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50V2VhdGhlckRldGFpbHNcIik7XG5cbiAgY29uc3QgY3VycmVudFRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXBGLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcEZcIik7XG4gIGN1cnJlbnRUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBjdXJyZW50VGVtcEYudGV4dENvbnRlbnQgPSBcIjUwXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHNcIik7XG5cbiAgY29uc3QgZmVlbHNMaWtlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcImZlZWxzTGlrZUZcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICBmZWVsc0xpa2VGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGZlZWxzTGlrZUYudGV4dENvbnRlbnQgPSBcIkZFRUxTIExJS0U6IDU1XCI7XG5cbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ3aW5kU3BlZWRcIik7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IFwiV0lORDogMTAgTVBIXCI7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJtb3JlRGV0YWlsc1wiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIkhVTUlESVRZOiAxMCVcIjtcblxuICBjdXJyZW50RGF5V2lkZ2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uQW5kQ29uZGl0aW9uKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBjdXJyZW50RGF5V2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscyk7XG4gIGN1cnJlbnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChjdXJyZW50VGVtcEYpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyk7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXlXaWRnZXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRocmVlRGF5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3REYXlcIik7XG4gIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gIGNvbnN0IHRvZGF5SGlnaEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheUhpZ2hGLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SGlnaEZcIik7XG4gIHRvZGF5SGlnaEYuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaEZcIik7XG4gIHRvZGF5SGlnaEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHRvZGF5TG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdExvd0ZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwidG9kYXlMb3dGXCIpO1xuICB0b2RheUxvd0YudGV4dENvbnRlbnQgPSBcIjUwRlwiO1xuXG4gIGNvbnN0IHRvZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0b2RheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidG9kYXlXZWF0aGVySWNvblwiKTtcbiAgbGV0IGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExM1wiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdG9tb3Jyb3dzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RCb3hcIik7XG5cbiAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvdy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgdG9tb3Jyb3cudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dIaWdoRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93SGlnaEYuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRi50ZXh0Q29udGVudCA9IFwiNjFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0xvd0ZcIik7XG4gIHRvbW9ycm93TG93Ri50ZXh0Q29udGVudCA9IFwiNTFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RJY29uXCIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGluVHdvRGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IGluVHdvRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5cy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgaW5Ud29EYXlzLnRleHRDb250ZW50ID0gXCJJbiBUd28gRGF5c1wiO1xuXG4gIGNvbnN0IGluVHdvRGF5c0hpZ2hGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoRlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c0hpZ2hGXCIpO1xuICBpblR3b0RheXNIaWdoRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzTG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RMb3dGXCIpO1xuICBpblR3b0RheXNMb3dGLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNMb3dGXCIpO1xuICBpblR3b0RheXNMb3dGLnRleHRDb250ZW50ID0gXCI1MkZcIjtcblxuICBjb25zdCBpblR3b0RheXNXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgaW5Ud29EYXlzV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTlcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKHRvZGF5c0ZvcmVjYXN0KTtcbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZCh0b21vcnJvd3NGb3JlY2FzdCk7XG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzRm9yZWNhc3QpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5SGlnaEYpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheUxvd0YpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0hpZ2hGKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dMb3dGKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dXZWF0aGVySWNvbik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5cyk7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5c0hpZ2hGKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzTG93Rik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5c1dlYXRoZXJJY29uKTtcblxuICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdFdpZGdldDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4WmVyb1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SW5kZXhcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgemVyb0hvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB6ZXJvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCB6ZXJvSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHplcm9Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJcIik7XG4gIHplcm9Ib3VyLnRleHRDb250ZW50ID0gXCJOb3dcIjtcblxuICBjb25zdCB6ZXJvSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgemVyb0hvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInplcm9Ib3VyVGVtcEZcIik7XG4gIHplcm9Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHplcm9Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91cldlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTEzXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBvbmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBvbmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3Qgb25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgb25lSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJcIik7XG4gIG9uZUhvdXIudGV4dENvbnRlbnQgPSBcIjFcIjtcblxuICBjb25zdCBvbmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIG9uZUhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJUZW1wRlwiKTtcbiAgb25lSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2MUZcIjtcblxuICBjb25zdCBvbmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBvbmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgb25lSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIG9uZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdHdvSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHdvSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHR3b0hvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHR3b0hvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyXCIpO1xuICB0d29Ib3VyLnRleHRDb250ZW50ID0gXCIyXCI7XG5cbiAgY29uc3QgdHdvSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICB0d29Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyVGVtcEZcIik7XG4gIHR3b0hvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgdHdvSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdHdvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHR3b0hvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTE5XCIpO1xuICB0d29Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRocmVlSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHRocmVlSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICB0aHJlZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJcIik7XG4gIHRocmVlSG91ci50ZXh0Q29udGVudCA9IFwiM1wiO1xuXG4gIGNvbnN0IHRocmVlSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyVGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2M0ZcIjtcblxuICBjb25zdCB0aHJlZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjEyMlwiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleE9uZVwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcblxuICBjb25zdCBmb3VySG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGZvdXJIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGZvdXJIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZm91ckhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91clwiKTtcbiAgZm91ckhvdXIudGV4dENvbnRlbnQgPSBcIjRcIjtcblxuICBjb25zdCBmb3VySG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgZm91ckhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyVGVtcEZcIik7XG4gIGZvdXJIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY0RlwiO1xuXG4gIGNvbnN0IGZvdXJIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb3VySG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxNDNcIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGZpdmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZml2ZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBmaXZlSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyXCIpO1xuICBmaXZlSG91ci50ZXh0Q29udGVudCA9IFwiNVwiO1xuXG4gIGNvbnN0IGZpdmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBmaXZlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJUZW1wRlwiKTtcbiAgZml2ZUhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjVGXCI7XG5cbiAgY29uc3QgZml2ZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZpdmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjE3NlwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3Qgc2l4SG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNpeEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHNpeEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyXCIpO1xuICBzaXhIb3VyLnRleHRDb250ZW50ID0gXCI2XCI7XG5cbiAgY29uc3Qgc2l4SG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBzaXhIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyVGVtcEZcIik7XG4gIHNpeEhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjZGXCI7XG5cbiAgY29uc3Qgc2l4SG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2l4SG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNpeEhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjAwXCIpO1xuICBzaXhIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHNldmVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNldmVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBzZXZlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJcIik7XG4gIHNldmVuSG91ci50ZXh0Q29udGVudCA9IFwiN1wiO1xuXG4gIGNvbnN0IHNldmVuSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyVGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2N0ZcIjtcblxuICBjb25zdCBzZXZlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjIyN1wiKTtcbiAgc2V2ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleFR3b1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcblxuICBjb25zdCBlaWdodEhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBlaWdodEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlaWdodEhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZWlnaHRIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyXCIpO1xuICBlaWdodEhvdXIudGV4dENvbnRlbnQgPSBcIjhcIjtcblxuICBjb25zdCBlaWdodEhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91clRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjhGXCI7XG5cbiAgY29uc3QgZWlnaHRIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlaWdodEhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBlaWdodEhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyNDhcIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBuaW5lSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIG5pbmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IG5pbmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgbmluZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91clwiKTtcbiAgbmluZUhvdXIudGV4dENvbnRlbnQgPSBcIjlcIjtcblxuICBjb25zdCBuaW5lSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgbmluZUhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyVGVtcEZcIik7XG4gIG5pbmVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY5RlwiO1xuXG4gIGNvbnN0IG5pbmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBuaW5lSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyOTZcIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRlbkhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHRlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCB0ZW5Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICB0ZW5Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91clwiKTtcbiAgdGVuSG91ci50ZXh0Q29udGVudCA9IFwiMTBcIjtcblxuICBjb25zdCB0ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHRlbkhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJUZW1wRlwiKTtcbiAgdGVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI3MEZcIjtcblxuICBjb25zdCB0ZW5Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0ZW5Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdGVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIzNTNcIik7XG4gIHRlbkhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgZWxldmVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIGVsZXZlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyXCIpO1xuICBlbGV2ZW5Ib3VyLnRleHRDb250ZW50ID0gXCIxMVwiO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgZWxldmVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91clRlbXBGXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjcxRlwiO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZXZlbkhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBlbGV2ZW5Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjM1NlwiKTtcbiAgZWxldmVuSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGJhclwiKTtcblxuICBjb25zdCBzY3JvbGxiYXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2Nyb2xsYmFyTGVmdC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsYmFyTGVmdFwiKTtcbiAgc2Nyb2xsYmFyTGVmdC5zcmMgPSBzY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IG5hdkRvdDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZEb3QwLmNsYXNzTGlzdC5hZGQoXCJuYXZEb3RcIik7XG4gIG5hdkRvdDAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZEb3QwXCIpO1xuICBuYXZEb3QwLmNsYXNzTGlzdC5hZGQoXCJuYXZBY3RpdmVcIik7XG5cbiAgY29uc3QgbmF2RG90MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkRvdDEuY2xhc3NMaXN0LmFkZChcIm5hdkRvdFwiKTtcbiAgbmF2RG90MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdkRvdDFcIik7XG5cbiAgY29uc3QgbmF2RG90MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkRvdDIuY2xhc3NMaXN0LmFkZChcIm5hdkRvdFwiKTtcbiAgbmF2RG90Mi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdkRvdDJcIik7XG5cbiAgY29uc3Qgc2Nyb2xsYmFyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzY3JvbGxiYXJSaWdodC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsYmFyUmlnaHRcIik7XG4gIHNjcm9sbGJhclJpZ2h0LnNyYyA9IHNjcm9sbFJpZ2h0O1xuXG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJbmRleE9uZSk7XG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhUd28pO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChzY3JvbGxiYXIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5hcHBlbmRDaGlsZCh6ZXJvSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQob25lSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQodHdvSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQodGhyZWVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKGZvdXJIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKGZpdmVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKHNpeEhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuYXBwZW5kQ2hpbGQoc2V2ZW5Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKGVpZ2h0SG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChuaW5lSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZCh0ZW5Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKGVsZXZlbkhvdXJGb3JlY2FzdCk7XG4gIHplcm9Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoemVyb0hvdXIpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyVGVtcEYpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyV2VhdGhlckljb24pO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91cik7XG4gIG9uZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChvbmVIb3VyVGVtcEYpO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91cldlYXRoZXJJY29uKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXIpO1xuICB0d29Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodHdvSG91clRlbXBGKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXJXZWF0aGVySWNvbik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91cik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91clRlbXBGKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVIb3VyV2VhdGhlckljb24pO1xuICBmb3VySG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZvdXJIb3VyKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91clRlbXBGKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91cldlYXRoZXJJY29uKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmaXZlSG91cik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJUZW1wRik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJXZWF0aGVySWNvbik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyKTtcbiAgc2l4SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNpeEhvdXJUZW1wRik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyV2VhdGhlckljb24pO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXJUZW1wRik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNldmVuSG91cldlYXRoZXJJY29uKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyVGVtcEYpO1xuICBlaWdodEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChlaWdodEhvdXJXZWF0aGVySWNvbik7XG4gIG5pbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQobmluZUhvdXIpO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyVGVtcEYpO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyV2VhdGhlckljb24pO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91cik7XG4gIHRlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0ZW5Ib3VyVGVtcEYpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91cldlYXRoZXJJY29uKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWxldmVuSG91clRlbXBGKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXJXZWF0aGVySWNvbik7XG4gIHNjcm9sbGJhci5hcHBlbmRDaGlsZChzY3JvbGxiYXJMZWZ0KTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKG5hdkRvdDApO1xuICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQobmF2RG90MSk7XG4gIHNjcm9sbGJhci5hcHBlbmRDaGlsZChuYXZEb3QyKTtcbiAgc2Nyb2xsYmFyLmFwcGVuZENoaWxkKHNjcm9sbGJhclJpZ2h0KTtcblxuICByZXR1cm4gaG91cmx5Rm9yZWNhc3RXaWRnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlVmFyaWFibGUoSW1hZ2VVUkwpIHtcbiAgY29uc3Qgc3BsaXRVUkwgPSBJbWFnZVVSTC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IERheU9yTmlnaHRWYXJpYWJsZSA9IHNwbGl0VVJMW3NwbGl0VVJMLmxlbmd0aCAtIDJdO1xuICBjb25zdCBpbWFnZU51bWJlciA9IEltYWdlVVJMLnNsaWNlKFxuICAgIEltYWdlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSxcbiAgICBJbWFnZVVSTC5sYXN0SW5kZXhPZihcIi5cIilcbiAgKS5zbGljZSgtMyk7XG4gIGNvbnN0IGltYWdlVmFyaWFibGUgPSBEYXlPck5pZ2h0VmFyaWFibGUgKyBpbWFnZU51bWJlcjtcbiAgcmV0dXJuIGltYWdlVmFyaWFibGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3QgdXJsID1cbiAgICBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODNlYjllOGE1Y2VmNGY1NDlmMTE0NjM2MjMxNzA0JnE9XCIgK1xuICAgIGxvY2F0aW9uICtcbiAgICBcIiZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1wiO1xuICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHdlYXRoZXJEYXRhW1wibG9jYXRpb25cIl1bXCJuYW1lXCJdO1xuICBjb25zdCByZWdpb25OYW1lID0gd2VhdGhlckRhdGFbXCJsb2NhdGlvblwiXVtcInJlZ2lvblwiXTtcbiAgY29uc3QgY3VycmVudERheUZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl07XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRIaWdoQ2Vsc2l1cyA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgY3VycmVudEhpZ2hGYXJlbmhlaXQgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRMb3dDZWxzaXVzID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9jXCJdO1xuICBjb25zdCBjdXJyZW50TG93RmFyZW5oZWl0ID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50VGVtcENlbHNpdXMgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRUZW1wRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1widGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImZlZWxzbGlrZV9jXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiZmVlbHNsaWtlX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImh1bWlkaXR5XCJdO1xuICBjb25zdCBjdXJyZW50V2luZFNwZWVkID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wid2luZF9tcGhcIl07XG4gIGNvbnN0IGN1cnJlbnRSYWluQ2hhbmNlID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wiZGFpbHlfd2lsbF9pdF9yYWluXCJdO1xuICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoQ2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93SGlnaEZhcmVuaGVpdCA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93Q2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93RmFyZW5oZWl0ID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfZlwiXTtcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25JY29uID0gZ2V0SW1hZ2VWYXJpYWJsZShcbiAgICB0b21vcnJvd0ZvcmVjYXN0W1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1wiaWNvblwiXVxuICApO1xuICBjb25zdCB0d29EYXlGb3JlY2FzdCA9IHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjJcIl07XG4gIGNvbnN0IHR3b0RheUhpZ2hDZWxzaXVzID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2NcIl07XG4gIGNvbnN0IHR3b0RheUhpZ2hGYXJlbmhlaXQgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgdHdvRGF5TG93Q2Vsc2l1cyA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9jXCJdO1xuICBjb25zdCB0d29EYXlMb3dGYXJlbmhlaXQgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfZlwiXTtcbiAgY29uc3QgdHdvRGF5Q29uZGl0aW9uSWNvbiA9IGdldEltYWdlVmFyaWFibGUoXG4gICAgdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdXG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IE51bWJlcih3ZWF0aGVyRGF0YVtcImxvY2F0aW9uXCJdW1wibG9jYWx0aW1lXCJdLnNsaWNlKDExLCAxMykpO1xuICBsZXQgZGF5Q291bnRlciA9IDA7XG4gIGxldCBob3VyQ291bnRlciA9IGxvY2FsVGltZTtcbiAgbGV0IGhvdXJBcnIgPSBbXTtcbiAgbGV0IHRlbXBGQXJyID0gW107XG4gIGxldCB0ZW1wQ0FyciA9IFtdO1xuICBsZXQgaWNvbkFyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgIGlmIChob3VyQ291bnRlciA+IDIzKSB7XG4gICAgICBob3VyQ291bnRlciA9IDA7XG4gICAgICBkYXlDb3VudGVyKys7XG4gICAgfVxuICAgIGhvdXJBcnIucHVzaChob3VyQ291bnRlcik7XG4gICAgdGVtcEZBcnIucHVzaChcbiAgICAgIHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtkYXlDb3VudGVyXVtcImhvdXJcIl1baG91ckNvdW50ZXJdW1xuICAgICAgICBcInRlbXBfZlwiXG4gICAgICBdXG4gICAgKTtcbiAgICB0ZW1wQ0Fyci5wdXNoKFxuICAgICAgd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW2RheUNvdW50ZXJdW1wiaG91clwiXVtob3VyQ291bnRlcl1bXG4gICAgICAgIFwidGVtcF9jXCJcbiAgICAgIF1cbiAgICApO1xuICAgIGljb25BcnIucHVzaChcbiAgICAgIGdldEltYWdlVmFyaWFibGUoXG4gICAgICAgIHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtkYXlDb3VudGVyXVtcImhvdXJcIl1baG91ckNvdW50ZXJdW1xuICAgICAgICAgIFwiY29uZGl0aW9uXCJcbiAgICAgICAgXVtcImljb25cIl1cbiAgICAgIClcbiAgICApO1xuICAgIGhvdXJDb3VudGVyKys7XG4gIH1cblxuICBjb25zdCB6ZXJvSG91clZhciA9IGhvdXJBcnJbMF07XG4gIGNvbnN0IHplcm9Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFyclswXTtcbiAgY29uc3QgemVyb0hvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzBdO1xuICBjb25zdCB6ZXJvSG91ckljb25WYXIgPSBpY29uQXJyWzBdO1xuICBjb25zdCBvbmVIb3VyVmFyID0gaG91ckFyclsxXTtcbiAgY29uc3Qgb25lSG91clRlbXBGVmFyID0gdGVtcEZBcnJbMV07XG4gIGNvbnN0IG9uZUhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzFdO1xuICBjb25zdCBvbmVIb3VySWNvblZhciA9IGljb25BcnJbMV07XG4gIGNvbnN0IHR3b0hvdXJWYXIgPSBob3VyQXJyWzJdO1xuICBjb25zdCB0d29Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFyclsyXTtcbiAgY29uc3QgdHdvSG91clRlbXBDVmFyID0gdGVtcENBcnJbMl07XG4gIGNvbnN0IHR3b0hvdXJJY29uVmFyID0gaWNvbkFyclsyXTtcbiAgY29uc3QgdGhyZWVIb3VyVmFyID0gaG91ckFyclszXTtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcEZWYXIgPSB0ZW1wRkFyclszXTtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcENWYXIgPSB0ZW1wQ0FyclszXTtcbiAgY29uc3QgdGhyZWVIb3VySWNvblZhciA9IGljb25BcnJbM107XG4gIGNvbnN0IGZvdXJIb3VyVmFyID0gaG91ckFycls0XTtcbiAgY29uc3QgZm91ckhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzRdO1xuICBjb25zdCBmb3VySG91clRlbXBDVmFyID0gdGVtcENBcnJbNF07XG4gIGNvbnN0IGZvdXJIb3VySWNvblZhciA9IGljb25BcnJbNF07XG4gIGNvbnN0IGZpdmVIb3VyVmFyID0gaG91ckFycls1XTtcbiAgY29uc3QgZml2ZUhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzVdO1xuICBjb25zdCBmaXZlSG91clRlbXBDVmFyID0gdGVtcENBcnJbNV07XG4gIGNvbnN0IGZpdmVIb3VySWNvblZhciA9IGljb25BcnJbNV07XG4gIGNvbnN0IHNpeEhvdXJWYXIgPSBob3VyQXJyWzZdO1xuICBjb25zdCBzaXhIb3VyVGVtcEZWYXIgPSB0ZW1wRkFycls2XTtcbiAgY29uc3Qgc2l4SG91clRlbXBDVmFyID0gdGVtcENBcnJbNl07XG4gIGNvbnN0IHNpeEhvdXJJY29uVmFyID0gaWNvbkFycls2XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVmFyID0gaG91ckFycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEZWYXIgPSB0ZW1wRkFycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcENWYXIgPSB0ZW1wQ0Fycls3XTtcbiAgY29uc3Qgc2V2ZW5Ib3VySWNvblZhciA9IGljb25BcnJbN107XG4gIGNvbnN0IGVpZ2h0SG91clZhciA9IGhvdXJBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91clRlbXBGVmFyID0gdGVtcEZBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91clRlbXBDVmFyID0gdGVtcENBcnJbOF07XG4gIGNvbnN0IGVpZ2h0SG91ckljb25WYXIgPSBpY29uQXJyWzhdO1xuICBjb25zdCBuaW5lSG91clZhciA9IGhvdXJBcnJbOV07XG4gIGNvbnN0IG5pbmVIb3VyVGVtcEZWYXIgPSB0ZW1wRkFycls5XTtcbiAgY29uc3QgbmluZUhvdXJUZW1wQ1ZhciA9IHRlbXBDQXJyWzldO1xuICBjb25zdCBuaW5lSG91ckljb25WYXIgPSBpY29uQXJyWzldO1xuICBjb25zdCB0ZW5Ib3VyVmFyID0gaG91ckFyclsxMF07XG4gIGNvbnN0IHRlbkhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzEwXTtcbiAgY29uc3QgdGVuSG91clRlbXBDVmFyID0gdGVtcENBcnJbMTBdO1xuICBjb25zdCB0ZW5Ib3VySWNvblZhciA9IGljb25BcnJbMTBdO1xuICBjb25zdCBlbGV2ZW5Ib3VyVmFyID0gaG91ckFyclsxMV07XG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wRlZhciA9IHRlbXBGQXJyWzExXTtcbiAgY29uc3QgZWxldmVuSG91clRlbXBDVmFyID0gdGVtcENBcnJbMTFdO1xuICBjb25zdCBlbGV2ZW5Ib3VySWNvblZhciA9IGljb25BcnJbMTFdO1xuXG4gIGNvbnN0IHNwYXJzZWRXZWF0aGVyRGF0YSA9IHtcbiAgICBsb2NhdGlvbk5hbWUsXG4gICAgcmVnaW9uTmFtZSxcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgIGN1cnJlbnRIaWdoQ2Vsc2l1cyxcbiAgICBjdXJyZW50SGlnaEZhcmVuaGVpdCxcbiAgICBjdXJyZW50TG93Q2Vsc2l1cyxcbiAgICBjdXJyZW50TG93RmFyZW5oZWl0LFxuICAgIGN1cnJlbnRUZW1wQ2Vsc2l1cyxcbiAgICBjdXJyZW50VGVtcEZhcmVuaGVpdCxcbiAgICBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyxcbiAgICBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRXaW5kU3BlZWQsXG4gICAgY3VycmVudEh1bWlkaXR5LFxuICAgIGN1cnJlbnRSYWluQ2hhbmNlLFxuICAgIHRvbW9ycm93SGlnaENlbHNpdXMsXG4gICAgdG9tb3Jyb3dIaWdoRmFyZW5oZWl0LFxuICAgIHRvbW9ycm93TG93Q2Vsc2l1cyxcbiAgICB0b21vcnJvd0xvd0ZhcmVuaGVpdCxcbiAgICB0b21vcnJvd0NvbmRpdGlvbkljb24sXG4gICAgdHdvRGF5SGlnaENlbHNpdXMsXG4gICAgdHdvRGF5SGlnaEZhcmVuaGVpdCxcbiAgICB0d29EYXlMb3dDZWxzaXVzLFxuICAgIHR3b0RheUxvd0ZhcmVuaGVpdCxcbiAgICB0d29EYXlDb25kaXRpb25JY29uLFxuICAgIGxvY2FsVGltZSxcbiAgICB6ZXJvSG91clZhcixcbiAgICB6ZXJvSG91clRlbXBGVmFyLFxuICAgIHplcm9Ib3VyVGVtcENWYXIsXG4gICAgemVyb0hvdXJJY29uVmFyLFxuICAgIG9uZUhvdXJWYXIsXG4gICAgb25lSG91clRlbXBGVmFyLFxuICAgIG9uZUhvdXJUZW1wQ1ZhcixcbiAgICBvbmVIb3VySWNvblZhcixcbiAgICB0d29Ib3VyVmFyLFxuICAgIHR3b0hvdXJUZW1wRlZhcixcbiAgICB0d29Ib3VyVGVtcENWYXIsXG4gICAgdHdvSG91ckljb25WYXIsXG4gICAgdGhyZWVIb3VyVmFyLFxuICAgIHRocmVlSG91clRlbXBGVmFyLFxuICAgIHRocmVlSG91clRlbXBDVmFyLFxuICAgIHRocmVlSG91ckljb25WYXIsXG4gICAgZm91ckhvdXJWYXIsXG4gICAgZm91ckhvdXJUZW1wRlZhcixcbiAgICBmb3VySG91clRlbXBDVmFyLFxuICAgIGZvdXJIb3VySWNvblZhcixcbiAgICBmaXZlSG91clZhcixcbiAgICBmaXZlSG91clRlbXBGVmFyLFxuICAgIGZpdmVIb3VyVGVtcENWYXIsXG4gICAgZml2ZUhvdXJJY29uVmFyLFxuICAgIHNpeEhvdXJWYXIsXG4gICAgc2l4SG91clRlbXBGVmFyLFxuICAgIHNpeEhvdXJUZW1wQ1ZhcixcbiAgICBzaXhIb3VySWNvblZhcixcbiAgICBzZXZlbkhvdXJWYXIsXG4gICAgc2V2ZW5Ib3VyVGVtcEZWYXIsXG4gICAgc2V2ZW5Ib3VyVGVtcENWYXIsXG4gICAgc2V2ZW5Ib3VySWNvblZhcixcbiAgICBlaWdodEhvdXJWYXIsXG4gICAgZWlnaHRIb3VyVGVtcEZWYXIsXG4gICAgZWlnaHRIb3VyVGVtcENWYXIsXG4gICAgZWlnaHRIb3VySWNvblZhcixcbiAgICBuaW5lSG91clZhcixcbiAgICBuaW5lSG91clRlbXBGVmFyLFxuICAgIG5pbmVIb3VyVGVtcENWYXIsXG4gICAgbmluZUhvdXJJY29uVmFyLFxuICAgIHRlbkhvdXJWYXIsXG4gICAgdGVuSG91clRlbXBGVmFyLFxuICAgIHRlbkhvdXJUZW1wQ1ZhcixcbiAgICB0ZW5Ib3VySWNvblZhcixcbiAgICBlbGV2ZW5Ib3VyVmFyLFxuICAgIGVsZXZlbkhvdXJUZW1wRlZhcixcbiAgICBlbGV2ZW5Ib3VyVGVtcENWYXIsXG4gICAgZWxldmVuSG91ckljb25WYXIsXG4gIH07XG5cbiAgdXBkYXRlRGFzaGJvYXJkKHNwYXJzZWRXZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhc2hib2FyZCh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBsb2NhdGlvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gIGxvY2F0aW9uUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5sb2NhdGlvbk5hbWUgKyBcIiwgXCIgKyB3ZWF0aGVyRGF0YS5yZWdpb25OYW1lO1xuICBjb25zdCBjb25kaXRpb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvblwiKTtcbiAgY29uZGl0aW9uUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudFRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50VGVtcEZcIik7XG4gIGN1cnJlbnRUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgZmVlbHNMaWtlRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNMaWtlRlwiKTtcbiAgZmVlbHNMaWtlRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJGRUVMUyBMSUtFOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudEZlZWxzTGlrZUZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3Qgd2luZFNwZWVkUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kU3BlZWRcIik7XG4gIHdpbmRTcGVlZFBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJXSU5EOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnRXaW5kU3BlZWQgKyBcIiBNUEhcIjtcbiAgY29uc3QgaHVtaWRpdHlQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBodW1pZGl0eVBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJIVU1JRElUWTogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50SHVtaWRpdHkgKyBcIiVcIjtcbiAgY29uc3QgdG9kYXlIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9kYXlMb3dGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheUxvd0ZcIik7XG4gIHRvZGF5TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b2RheVdlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVdlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9uSWNvbjtcbiAgdG9kYXlXZWF0aGVySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB0b21vcnJvd0hpZ2hGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd0hpZ2hGXCIpO1xuICB0b21vcnJvd0hpZ2hGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRvbW9ycm93SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9tb3Jyb3dMb3dGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd0xvd0ZcIik7XG4gIHRvbW9ycm93TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50b21vcnJvd0xvd0ZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9tb3Jyb3dXZWF0aGVySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIudG9tb3Jyb3dXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudG9tb3Jyb3dDb25kaXRpb25JY29uO1xuICB0b21vcnJvd1dlYXRoZXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHR3b0RheUhpZ2hGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNIaWdoRlwiKTtcbiAgdHdvRGF5SGlnaEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvRGF5SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdHdvRGF5TG93RlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzTG93RlwiKTtcbiAgdHdvRGF5TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50d29EYXlMb3dGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHR3b0RheVdlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pblR3b0RheXNXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudHdvRGF5Q29uZGl0aW9uSWNvbjtcbiAgdHdvRGF5V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgemVyb0hvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm9Ib3VyXCIpO1xuICB6ZXJvSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnplcm9Ib3VyVmFyO1xuICBjb25zdCB6ZXJvSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvSG91clRlbXBGXCIpO1xuICB6ZXJvSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnplcm9Ib3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IHplcm9Ib3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyb0hvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS56ZXJvSG91ckljb25WYXI7XG4gIHplcm9Ib3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBvbmVIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyXCIpO1xuICBvbmVIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEub25lSG91clZhcjtcbiAgY29uc3Qgb25lSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyVGVtcEZcIik7XG4gIG9uZUhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5vbmVIb3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IG9uZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEub25lSG91ckljb25WYXI7XG4gIG9uZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHR3b0hvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJcIik7XG4gIHR3b0hvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50d29Ib3VyVmFyO1xuICBjb25zdCB0d29Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJUZW1wRlwiKTtcbiAgdHdvSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0hvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgdHdvSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b0hvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50d29Ib3VySWNvblZhcjtcbiAgdHdvSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgdGhyZWVIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZUhvdXJcIik7XG4gIHRocmVlSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnRocmVlSG91clZhcjtcbiAgY29uc3QgdGhyZWVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRocmVlSG91clRlbXBGXCIpO1xuICB0aHJlZUhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50aHJlZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgdGhyZWVIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwidGhyZWVIb3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnRocmVlSG91ckljb25WYXI7XG4gIHRocmVlSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgZm91ckhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvdXJIb3VyXCIpO1xuICBmb3VySG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvdXJIb3VyVmFyO1xuICBjb25zdCBmb3VySG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VySG91clRlbXBGXCIpO1xuICBmb3VySG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmZvdXJIb3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IGZvdXJIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91ckhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5mb3VySG91ckljb25WYXI7XG4gIGZvdXJIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCBmaXZlSG91clBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZUhvdXJcIik7XG4gIGZpdmVIb3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZml2ZUhvdXJWYXI7XG4gIGNvbnN0IGZpdmVIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVIb3VyVGVtcEZcIik7XG4gIGZpdmVIb3VyVGVtcEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEuZml2ZUhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZml2ZUhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmZpdmVIb3VySWNvblZhcjtcbiAgZml2ZUhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHNpeEhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJcIik7XG4gIHNpeEhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5zaXhIb3VyVmFyO1xuICBjb25zdCBzaXhIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJUZW1wRlwiKTtcbiAgc2l4SG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnNpeEhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3Qgc2l4SG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpeEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5zaXhIb3VySWNvblZhcjtcbiAgc2l4SG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3Qgc2V2ZW5Ib3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXZlbkhvdXJcIik7XG4gIHNldmVuSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnNldmVuSG91clZhcjtcbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldmVuSG91clRlbXBGXCIpO1xuICBzZXZlbkhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5zZXZlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3Qgc2V2ZW5Ib3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwic2V2ZW5Ib3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnNldmVuSG91ckljb25WYXI7XG4gIHNldmVuSG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgZWlnaHRIb3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlaWdodEhvdXJcIik7XG4gIGVpZ2h0SG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmVpZ2h0SG91clZhcjtcbiAgY29uc3QgZWlnaHRIb3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVpZ2h0SG91clRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5laWdodEhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZWlnaHRIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZWlnaHRIb3VyV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmVpZ2h0SG91ckljb25WYXI7XG4gIGVpZ2h0SG91ckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgbmluZUhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pbmVIb3VyXCIpO1xuICBuaW5lSG91clBhcmFtZXRlci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm5pbmVIb3VyVmFyO1xuICBjb25zdCBuaW5lSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaW5lSG91clRlbXBGXCIpO1xuICBuaW5lSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm5pbmVIb3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IG5pbmVIb3VySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmluZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5uaW5lSG91ckljb25WYXI7XG4gIG5pbmVIb3VySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB0ZW5Ib3VyUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyXCIpO1xuICB0ZW5Ib3VyUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEudGVuSG91clZhcjtcbiAgY29uc3QgdGVuSG91clRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyVGVtcEZcIik7XG4gIHRlbkhvdXJUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50ZW5Ib3VyVGVtcEZWYXIpICsgXCJGXCI7XG4gIGNvbnN0IHRlbkhvdXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudGVuSG91ckljb25WYXI7XG4gIHRlbkhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IGVsZXZlbkhvdXJQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZXZlbkhvdXJcIik7XG4gIGVsZXZlbkhvdXJQYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5lbGV2ZW5Ib3VyVmFyO1xuICBjb25zdCBlbGV2ZW5Ib3VyVGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZXZlbkhvdXJUZW1wRlwiKTtcbiAgZWxldmVuSG91clRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmVsZXZlbkhvdXJUZW1wRlZhcikgKyBcIkZcIjtcbiAgY29uc3QgZWxldmVuSG91ckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImVsZXZlbkhvdXJXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEuZWxldmVuSG91ckljb25WYXI7XG4gIGVsZXZlbkhvdXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcmVhSW5wdXRcIikudmFsdWU7XG4gIGdldFdlYXRoZXIobG9jYXRpb24pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyZWFJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlUG9pbnRlcihpbWFnZVZhcmlhYmxlKSB7XG4gIGNvbnN0IGltYWdlRGF5b3JOaWdodCA9IGltYWdlVmFyaWFibGUuc2xpY2UoMCwgLTMpO1xuICBjb25zdCBpbWFnZU51bWJlciA9IGltYWdlVmFyaWFibGUuc2xpY2UoLTMpO1xuICBpZiAoaW1hZ2VEYXlvck5pZ2h0ID09IFwiZGF5XCIpIHtcbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTNcIikge1xuICAgICAgcmV0dXJuIEQxMTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExNlwiKSB7XG4gICAgICByZXR1cm4gRDExNjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTE5XCIpIHtcbiAgICAgIHJldHVybiBEMTE5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMjJcIikge1xuICAgICAgcmV0dXJuIEQxMjI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE0M1wiKSB7XG4gICAgICByZXR1cm4gRDE0MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTc2XCIpIHtcbiAgICAgIHJldHVybiBEMTc2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNzlcIikge1xuICAgICAgcmV0dXJuIEQxNzk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE4MlwiKSB7XG4gICAgICByZXR1cm4gRDE4MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTg1XCIpIHtcbiAgICAgIHJldHVybiBEMTg1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMDBcIikge1xuICAgICAgcmV0dXJuIEQyMDA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIyN1wiKSB7XG4gICAgICByZXR1cm4gRDIyNztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjMwXCIpIHtcbiAgICAgIHJldHVybiBEMjMwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNDhcIikge1xuICAgICAgcmV0dXJuIEQyNDg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2MFwiKSB7XG4gICAgICByZXR1cm4gRDI2MDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjYzXCIpIHtcbiAgICAgIHJldHVybiBEMjYzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjZcIikge1xuICAgICAgcmV0dXJuIEQyNjY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI4MVwiKSB7XG4gICAgICByZXR1cm4gRDI4MTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjg0XCIpIHtcbiAgICAgIHJldHVybiBEMjg0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTNcIikge1xuICAgICAgcmV0dXJuIEQyOTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5NlwiKSB7XG4gICAgICByZXR1cm4gRDI5NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjk5XCIpIHtcbiAgICAgIHJldHVybiBEMjk5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDJcIikge1xuICAgICAgcmV0dXJuIEQzMDI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwNVwiKSB7XG4gICAgICByZXR1cm4gRDMwNTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzA4XCIpIHtcbiAgICAgIHJldHVybiBEMzA4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTFcIikge1xuICAgICAgcmV0dXJuIEQzMTE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxNFwiKSB7XG4gICAgICByZXR1cm4gRDMxNDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzE3XCIpIHtcbiAgICAgIHJldHVybiBEMzE3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjBcIikge1xuICAgICAgcmV0dXJuIEQzMjA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyM1wiKSB7XG4gICAgICByZXR1cm4gRDMyMztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzI2XCIpIHtcbiAgICAgIHJldHVybiBEMzI2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjlcIikge1xuICAgICAgcmV0dXJuIEQzMjk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzMlwiKSB7XG4gICAgICByZXR1cm4gRDMzMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzM1XCIpIHtcbiAgICAgIHJldHVybiBEMzM1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzhcIikge1xuICAgICAgcmV0dXJuIEQzMzg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1MFwiKSB7XG4gICAgICByZXR1cm4gRDM1MDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzUzXCIpIHtcbiAgICAgIHJldHVybiBEMzUzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTZcIikge1xuICAgICAgcmV0dXJuIEQzNTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1OVwiKSB7XG4gICAgICByZXR1cm4gRDM1OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzYyXCIpIHtcbiAgICAgIHJldHVybiBEMzYyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjVcIikge1xuICAgICAgcmV0dXJuIEQzNjU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2OFwiKSB7XG4gICAgICByZXR1cm4gRDM2ODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzcxXCIpIHtcbiAgICAgIHJldHVybiBEMzcxO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzRcIikge1xuICAgICAgcmV0dXJuIEQzNzQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3N1wiKSB7XG4gICAgICByZXR1cm4gRDM3NztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzg2XCIpIHtcbiAgICAgIHJldHVybiBEMzg2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzODlcIikge1xuICAgICAgcmV0dXJuIEQzODk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM5MlwiKSB7XG4gICAgICByZXR1cm4gRDM5MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzk1XCIpIHtcbiAgICAgIHJldHVybiBEMzk1O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRDExMztcbiAgICB9XG4gIH1cbiAgaWYgKGltYWdlRGF5b3JOaWdodCA9PSBcIm5pZ2h0XCIpIHtcbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTNcIikge1xuICAgICAgcmV0dXJuIE4xMTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjExNlwiKSB7XG4gICAgICByZXR1cm4gTjExNjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTE5XCIpIHtcbiAgICAgIHJldHVybiBOMTE5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMjJcIikge1xuICAgICAgcmV0dXJuIE4xMjI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE0M1wiKSB7XG4gICAgICByZXR1cm4gTjE0MztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTc2XCIpIHtcbiAgICAgIHJldHVybiBOMTc2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNzlcIikge1xuICAgICAgcmV0dXJuIE4xNzk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjE4MlwiKSB7XG4gICAgICByZXR1cm4gTjE4MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMTg1XCIpIHtcbiAgICAgIHJldHVybiBOMTg1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMDBcIikge1xuICAgICAgcmV0dXJuIE4yMDA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjIyN1wiKSB7XG4gICAgICByZXR1cm4gTjIyNztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjMwXCIpIHtcbiAgICAgIHJldHVybiBOMjMwO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNDhcIikge1xuICAgICAgcmV0dXJuIE4yNDg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI2MFwiKSB7XG4gICAgICByZXR1cm4gTjI2MDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjYzXCIpIHtcbiAgICAgIHJldHVybiBOMjYzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjZcIikge1xuICAgICAgcmV0dXJuIE4yNjY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI4MVwiKSB7XG4gICAgICByZXR1cm4gTjI4MTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjg0XCIpIHtcbiAgICAgIHJldHVybiBOMjg0O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTNcIikge1xuICAgICAgcmV0dXJuIE4yOTM7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjI5NlwiKSB7XG4gICAgICByZXR1cm4gTjI5NjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMjk5XCIpIHtcbiAgICAgIHJldHVybiBOMjk5O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDJcIikge1xuICAgICAgcmV0dXJuIE4zMDI7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMwNVwiKSB7XG4gICAgICByZXR1cm4gTjMwNTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzA4XCIpIHtcbiAgICAgIHJldHVybiBOMzA4O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTFcIikge1xuICAgICAgcmV0dXJuIE4zMTE7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMxNFwiKSB7XG4gICAgICByZXR1cm4gTjMxNDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzE3XCIpIHtcbiAgICAgIHJldHVybiBOMzE3O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjBcIikge1xuICAgICAgcmV0dXJuIE4zMjA7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMyM1wiKSB7XG4gICAgICByZXR1cm4gTjMyMztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzI2XCIpIHtcbiAgICAgIHJldHVybiBOMzI2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjlcIikge1xuICAgICAgcmV0dXJuIE4zMjk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjMzMlwiKSB7XG4gICAgICByZXR1cm4gTjMzMjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzM1XCIpIHtcbiAgICAgIHJldHVybiBOMzM1O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzhcIikge1xuICAgICAgcmV0dXJuIE4zMzg7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1MFwiKSB7XG4gICAgICByZXR1cm4gTjM1MDtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzUzXCIpIHtcbiAgICAgIHJldHVybiBOMzUzO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTZcIikge1xuICAgICAgcmV0dXJuIE4zNTY7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM1OVwiKSB7XG4gICAgICByZXR1cm4gTjM1OTtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzYyXCIpIHtcbiAgICAgIHJldHVybiBOMzYyO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjVcIikge1xuICAgICAgcmV0dXJuIE4zNjU7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM2OFwiKSB7XG4gICAgICByZXR1cm4gTjM2ODtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzcxXCIpIHtcbiAgICAgIHJldHVybiBOMzcxO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzRcIikge1xuICAgICAgcmV0dXJuIE4zNzQ7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM3N1wiKSB7XG4gICAgICByZXR1cm4gTjM3NztcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzg2XCIpIHtcbiAgICAgIHJldHVybiBOMzg2O1xuICAgIH1cbiAgICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzODlcIikge1xuICAgICAgcmV0dXJuIE4zODk7XG4gICAgfVxuICAgIGlmIChpbWFnZU51bWJlciA9PSBcIjM5MlwiKSB7XG4gICAgICByZXR1cm4gTjM5MjtcbiAgICB9XG4gICAgaWYgKGltYWdlTnVtYmVyID09IFwiMzk1XCIpIHtcbiAgICAgIHJldHVybiBOMzk1O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTjExMztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEQxMTM7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTGVmdENsaWNrKCkge1xuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDEpIHtcbiAgICBzY3JvbGxDb3VudGVyLS07XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbmZvYm94MC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5hdkRvdE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2QWN0aXZlXCIpO1xuICAgIG5hdkRvdFplcm8uY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAyKSB7XG4gICAgc2Nyb2xsQ291bnRlci0tO1xuICAgIGluZm9ib3gyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZEb3RUd28uY2xhc3NMaXN0LnJlbW92ZShcIm5hdkFjdGl2ZVwiKTtcbiAgICBuYXZEb3RPbmUuY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSaWdodENsaWNrKCkge1xuICBpZiAoc2Nyb2xsQ291bnRlciA9PSAyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDEpIHtcbiAgICBzY3JvbGxDb3VudGVyKys7XG4gICAgaW5mb2JveDEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbmZvYm94Mi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5hdkRvdE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2QWN0aXZlXCIpO1xuICAgIG5hdkRvdFR3by5jbGFzc0xpc3QuYWRkKFwibmF2QWN0aXZlXCIpO1xuICB9XG4gIGlmIChzY3JvbGxDb3VudGVyID09IDApIHtcbiAgICBzY3JvbGxDb3VudGVyKys7XG4gICAgaW5mb2JveDAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbmZvYm94MS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5hdkRvdFplcm8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdkFjdGl2ZVwiKTtcbiAgICBuYXZEb3RPbmUuY2xhc3NMaXN0LmFkZChcIm5hdkFjdGl2ZVwiKTtcbiAgfVxufVxuXG5sZXQgc2Nyb2xsQ291bnRlciA9IDA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUxheW91dCgpKTtcbmxldCBsb2NhdGlvbiA9IFwiRGVudmVyLCBDb2xvcmFkb1wiO1xuZ2V0V2VhdGhlcihsb2NhdGlvbik7XG5jb25zdCBpbmZvYm94MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFplcm9cIik7XG5jb25zdCBpbmZvYm94MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5Rm9yZWNhc3RJbmRleE9uZVwiKTtcbmNvbnN0IGluZm9ib3gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3VybHlGb3JlY2FzdEluZGV4VHdvXCIpO1xuY29uc3QgbmF2RG90WmVybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MFwiKTtcbmNvbnN0IG5hdkRvdE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MVwiKTtcbmNvbnN0IG5hdkRvdFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2RG90MlwiKTtcbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsYmFyTGVmdFwiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbGJhclJpZ2h0XCIpO1xubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWZ0Q2xpY2spO1xucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmlnaHRDbGljayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=