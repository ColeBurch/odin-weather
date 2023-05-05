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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 1s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,0BAA0B;EAC1B,cAAc;EACd,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kDAAkD;EAClD,YAAY;EACZ,oBAAoB;EACpB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,wBAAwB;EACxB,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n  z-index: 1;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n  margin-top: -80px;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 1s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n"],"sourceRoot":""}]);
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

  hourlyForecastWidget.appendChild(hourlyForecastIndexZero);
  hourlyForecastWidget.appendChild(hourlyForecastIndexOne);
  hourlyForecastWidget.appendChild(hourlyForecastIndexTwo);
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

  return hourlyForecastWidget;
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

document.body.appendChild(createLayout());
let location = "Golden, Colorado";
getWeather(location);


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQ3VCO0FBQ1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmLElBQUk7QUFDSixXQUFXLDhEQUFJO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxufVxcblxcbi5jdXJyZW50RGF5V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoRiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvd0Yge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RIb3VyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXBGIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrREFBa0Q7RUFDbEQsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xcbn1cXG5cXG4ud3JhcHBlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxufVxcblxcbi5jdXJyZW50RGF5V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJyZW50VGVtcEYge1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLm1vcmVEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmlnaHRCb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZ2FwOiAyNSU7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RIaWdoRiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdExvd0Yge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RXaWRnZXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RJbmRleCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXguYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RIb3VyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdFRlbXBGIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5mb290ZXIgLndyYXBwZXI6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2l0aHViU1ZHIGZyb20gXCIuL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgSTExMyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZ1wiO1xuaW1wb3J0IEkxMTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzExNi5wbmdcIjtcbmltcG9ydCBJMTE5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMTkucG5nXCI7XG5pbXBvcnQgSTEyMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTIyLnBuZ1wiO1xuaW1wb3J0IEkxNDMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE0My5wbmdcIjtcbmltcG9ydCBJMTc2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xNzYucG5nXCI7XG5pbXBvcnQgSTE3OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTc5LnBuZ1wiO1xuaW1wb3J0IEkxODIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE4Mi5wbmdcIjtcbmltcG9ydCBJMTg1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xODUucG5nXCI7XG5pbXBvcnQgSTIwMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjAwLnBuZ1wiO1xuaW1wb3J0IEkyMjcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzIyNy5wbmdcIjtcbmltcG9ydCBJMjMwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yMzAucG5nXCI7XG5pbXBvcnQgSTI0OCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjQ4LnBuZ1wiO1xuaW1wb3J0IEkyNjAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI2MC5wbmdcIjtcbmltcG9ydCBJMjYzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNjMucG5nXCI7XG5pbXBvcnQgSTI2NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjY2LnBuZ1wiO1xuaW1wb3J0IEkyODEgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI4MS5wbmdcIjtcbmltcG9ydCBJMjg0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yODQucG5nXCI7XG5pbXBvcnQgSTI5MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjkzLnBuZ1wiO1xuaW1wb3J0IEkyOTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI5Ni5wbmdcIjtcbmltcG9ydCBJMjk5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yOTkucG5nXCI7XG5pbXBvcnQgSTMwMiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzAyLnBuZ1wiO1xuaW1wb3J0IEkzMDUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMwNS5wbmdcIjtcbmltcG9ydCBJMzA4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMDgucG5nXCI7XG5pbXBvcnQgSTMxMSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzExLnBuZ1wiO1xuaW1wb3J0IEkzMTQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMxNC5wbmdcIjtcbmltcG9ydCBJMzE3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMTcucG5nXCI7XG5pbXBvcnQgSTMyMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzIwLnBuZ1wiO1xuaW1wb3J0IEkzMjMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyMy5wbmdcIjtcbmltcG9ydCBJMzI2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjYucG5nXCI7XG5pbXBvcnQgSTMyOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzI5LnBuZ1wiO1xuaW1wb3J0IEkzMzIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMzMi5wbmdcIjtcbmltcG9ydCBJMzM1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMzUucG5nXCI7XG5pbXBvcnQgSTMzOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzM4LnBuZ1wiO1xuaW1wb3J0IEkzNTAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1MC5wbmdcIjtcbmltcG9ydCBJMzUzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTMucG5nXCI7XG5pbXBvcnQgSTM1NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzU2LnBuZ1wiO1xuaW1wb3J0IEkzNTkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1OS5wbmdcIjtcbmltcG9ydCBJMzYyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNjIucG5nXCI7XG5pbXBvcnQgSTM2NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzY1LnBuZ1wiO1xuaW1wb3J0IEkzNjggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM2OC5wbmdcIjtcbmltcG9ydCBJMzcxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNzEucG5nXCI7XG5pbXBvcnQgSTM3NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzc0LnBuZ1wiO1xuaW1wb3J0IEkzNzcgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM3Ny5wbmdcIjtcbmltcG9ydCBJMzg2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zODYucG5nXCI7XG5pbXBvcnQgSTM4OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzg5LnBuZ1wiO1xuaW1wb3J0IEkzOTIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM5Mi5wbmdcIjtcbmltcG9ydCBJMzk1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zOTUucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxheW91dCgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hDb250YWluZXJcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IGFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYXJlYUlucHV0LmNsYXNzTGlzdC5hZGQoXCJhcmVhSW5wdXRcIik7XG4gIGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFyZWFJbnB1dFwiKTtcbiAgYXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBhcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2ggY2l0eVwiKTtcblxuICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoXCJtYWluQm9keVwiKTtcblxuICBjb25zdCBsZWZ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdEJveC5jbGFzc0xpc3QuYWRkKFwibGVmdEJveFwiKTtcblxuICBjb25zdCByaWdodEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0Qm94LmNsYXNzTGlzdC5hZGQoXCJyaWdodEJveFwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJUZXh0XCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCJNYWRlIGJ5IENvbGUgQnVyY2hcIjtcblxuICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViLnNyYyA9IGdpdGh1YlNWRztcbiAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoXCJnaXRodWJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChhcmVhSW5wdXQpO1xuICBtYWluQm9keS5hcHBlbmRDaGlsZChsZWZ0Qm94KTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocmlnaHRCb3gpO1xuICBsZWZ0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnREYXlXaWRnZXQoKSk7XG4gIHJpZ2h0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZVRocmVlRGF5Rm9yZWNhc3RXaWRnZXQoKSk7XG4gIHJpZ2h0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJseUZvcmVjYXN0V2lkZ2V0KCkpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnREYXlXaWRnZXQoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXlXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50RGF5V2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50RGF5V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uQW5kQ29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uQW5kQ29uZGl0aW9uXCIpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIpO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBcIkNvbmRpdGlvblwiO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRXZWF0aGVyRGV0YWlsc1wiKTtcblxuICBjb25zdCBjdXJyZW50VGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50VGVtcEYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUZW1wRlwiKTtcbiAgY3VycmVudFRlbXBGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGN1cnJlbnRUZW1wRi50ZXh0Q29udGVudCA9IFwiNTBcIjtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFdlYXRoZXJNb3JlRGV0YWlsc1wiKTtcblxuICBjb25zdCBmZWVsc0xpa2VGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwiZmVlbHNMaWtlRlwiKTtcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZmVlbHNMaWtlRi50ZXh0Q29udGVudCA9IFwiRkVFTFMgTElLRTogNTVcIjtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmRTcGVlZFwiKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJtb3JlRGV0YWlsc1wiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gXCJXSU5EOiAxMCBNUEhcIjtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IFwiSFVNSURJVFk6IDEwJVwiO1xuXG4gIGN1cnJlbnREYXlXaWRnZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25BbmRDb25kaXRpb24pO1xuICBsb2NhdGlvbkFuZENvbmRpdGlvbi5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICBsb2NhdGlvbkFuZENvbmRpdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIGN1cnJlbnREYXlXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEZXRhaWxzKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRik7XG4gIGN1cnJlbnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5hcHBlbmRDaGlsZChmZWVsc0xpa2VGKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICBjdXJyZW50V2VhdGhlck1vcmVEZXRhaWxzLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICByZXR1cm4gY3VycmVudERheVdpZGdldDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhyZWVEYXlGb3JlY2FzdFdpZGdldCgpIHtcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdFdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RXaWRnZXRcIik7XG5cbiAgY29uc3QgdG9kYXlzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheXNGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RCb3hcIik7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgY29uc3QgdG9kYXlIaWdoRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5SGlnaEYuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRi5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRi50ZXh0Q29udGVudCA9IFwiNjBGXCI7XG5cbiAgY29uc3QgdG9kYXlMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0TG93RlwiKTtcbiAgdG9kYXlMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUxvd0ZcIik7XG4gIHRvZGF5TG93Ri50ZXh0Q29udGVudCA9IFwiNTBGXCI7XG5cbiAgY29uc3QgdG9kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRvZGF5V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RJY29uXCIpO1xuICB0b2RheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVdlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTEzXCIpO1xuICB0b2RheVdlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCB0b21vcnJvd3NGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93c0ZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEJveFwiKTtcblxuICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0RGF5XCIpO1xuICB0b21vcnJvdy50ZXh0Q29udGVudCA9IFwiVG9tb3Jyb3dcIjtcblxuICBjb25zdCB0b21vcnJvd0hpZ2hGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dIaWdoRi5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEhpZ2hGXCIpO1xuICB0b21vcnJvd0hpZ2hGLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0hpZ2hGXCIpO1xuICB0b21vcnJvd0hpZ2hGLnRleHRDb250ZW50ID0gXCI2MUZcIjtcblxuICBjb25zdCB0b21vcnJvd0xvd0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0xvd0YuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RMb3dGXCIpO1xuICB0b21vcnJvd0xvd0YuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGLnRleHRDb250ZW50ID0gXCI1MUZcIjtcblxuICBjb25zdCB0b21vcnJvd1dlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdG9tb3Jyb3dXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEljb25cIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93V2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExNlwiKTtcbiAgdG9tb3Jyb3dXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgaW5Ud29EYXlzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXNGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RCb3hcIik7XG5cbiAgY29uc3QgaW5Ud29EYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0RGF5XCIpO1xuICBpblR3b0RheXMudGV4dENvbnRlbnQgPSBcIkluIFR3byBEYXlzXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzSGlnaEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpblR3b0RheXNIaWdoRi5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdEhpZ2hGXCIpO1xuICBpblR3b0RheXNIaWdoRi5jbGFzc0xpc3QuYWRkKFwiaW5Ud29EYXlzSGlnaEZcIik7XG4gIGluVHdvRGF5c0hpZ2hGLnRleHRDb250ZW50ID0gXCI2MkZcIjtcblxuICBjb25zdCBpblR3b0RheXNMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzTG93Ri5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdExvd0ZcIik7XG4gIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c0xvd0ZcIik7XG4gIGluVHdvRGF5c0xvd0YudGV4dENvbnRlbnQgPSBcIjUyRlwiO1xuXG4gIGNvbnN0IGluVHdvRGF5c1dlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW5Ud29EYXlzV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RJY29uXCIpO1xuICBpblR3b0RheXNXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaW5Ud29EYXlzV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExOVwiKTtcbiAgaW5Ud29EYXlzV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQodG9kYXlzRm9yZWNhc3QpO1xuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKHRvbW9ycm93c0ZvcmVjYXN0KTtcbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChpblR3b0RheXNGb3JlY2FzdCk7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgdG9kYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9kYXlIaWdoRik7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5TG93Rik7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlckljb24pO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvdyk7XG4gIHRvbW9ycm93c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvbW9ycm93SGlnaEYpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0xvd0YpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd1dlYXRoZXJJY29uKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzSGlnaEYpO1xuICBpblR3b0RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChpblR3b0RheXNMb3dGKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzV2VhdGhlckljb24pO1xuXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0V2lkZ2V0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlGb3JlY2FzdFdpZGdldCgpIHtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RXaWRnZXRcIik7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJseUZvcmVjYXN0SW5kZXhaZXJvXCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBjb25zdCB6ZXJvSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHplcm9Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHplcm9Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgemVyb0hvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91clwiKTtcbiAgemVyb0hvdXIudGV4dENvbnRlbnQgPSBcIk5vd1wiO1xuXG4gIGNvbnN0IHplcm9Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB6ZXJvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICB6ZXJvSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJUZW1wRlwiKTtcbiAgemVyb0hvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjBGXCI7XG5cbiAgY29uc3QgemVyb0hvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgemVyb0hvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInplcm9Ib3VyV2VhdGhlckljb25cIik7XG4gIGxldCBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTNcIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IG9uZUhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIG9uZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBvbmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb25lSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBvbmVIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91clwiKTtcbiAgb25lSG91ci50ZXh0Q29udGVudCA9IFwiMVwiO1xuXG4gIGNvbnN0IG9uZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgb25lSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91clRlbXBGXCIpO1xuICBvbmVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYxRlwiO1xuXG4gIGNvbnN0IG9uZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG9uZUhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBvbmVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExNlwiKTtcbiAgb25lSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCB0d29Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0d29Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdHdvSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHR3b0hvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgdHdvSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJcIik7XG4gIHR3b0hvdXIudGV4dENvbnRlbnQgPSBcIjJcIjtcblxuICBjb25zdCB0d29Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHR3b0hvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJUZW1wRlwiKTtcbiAgdHdvSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2MkZcIjtcblxuICBjb25zdCB0d29Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0d29Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdHdvSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHdvSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTlcIik7XG4gIHR3b0hvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdGhyZWVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHRocmVlSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdGhyZWVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHRocmVlSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91clwiKTtcbiAgdGhyZWVIb3VyLnRleHRDb250ZW50ID0gXCIzXCI7XG5cbiAgY29uc3QgdGhyZWVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJUZW1wRlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYzRlwiO1xuXG4gIGNvbnN0IHRocmVlSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTIyXCIpO1xuICB0aHJlZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RJbmRleE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4T25lXCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEluZGV4XCIpO1xuXG4gIGNvbnN0IGZvdXJIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3VySG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZm91ckhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3VySG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBmb3VySG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyXCIpO1xuICBmb3VySG91ci50ZXh0Q29udGVudCA9IFwiNFwiO1xuXG4gIGNvbnN0IGZvdXJIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3VySG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBmb3VySG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm91ckhvdXJUZW1wRlwiKTtcbiAgZm91ckhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjRGXCI7XG5cbiAgY29uc3QgZm91ckhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZm91ckhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjE0M1wiKTtcbiAgZm91ckhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgZml2ZUhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBmaXZlSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBmaXZlSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpdmVIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIGZpdmVIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJcIik7XG4gIGZpdmVIb3VyLnRleHRDb250ZW50ID0gXCI1XCI7XG5cbiAgY29uc3QgZml2ZUhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpdmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIGZpdmVIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXZlSG91clRlbXBGXCIpO1xuICBmaXZlSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2NUZcIjtcblxuICBjb25zdCBmaXZlSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBmaXZlSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTc2XCIpO1xuICBmaXZlSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBzaXhIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBzaXhIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3Qgc2l4SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpeEhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgc2l4SG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJcIik7XG4gIHNpeEhvdXIudGV4dENvbnRlbnQgPSBcIjZcIjtcblxuICBjb25zdCBzaXhIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHNpeEhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJUZW1wRlwiKTtcbiAgc2l4SG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2NkZcIjtcblxuICBjb25zdCBzaXhIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzaXhIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgc2l4SG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyMDBcIik7XG4gIHNpeEhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHNldmVuSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHNldmVuSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91clwiKTtcbiAgc2V2ZW5Ib3VyLnRleHRDb250ZW50ID0gXCI3XCI7XG5cbiAgY29uc3Qgc2V2ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJUZW1wRlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY3RlwiO1xuXG4gIGNvbnN0IHNldmVuSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2V2ZW5Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgc2V2ZW5Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjI3XCIpO1xuICBzZXZlbkhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RJbmRleFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4VHdvXCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEluZGV4XCIpO1xuXG4gIGNvbnN0IGVpZ2h0SG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBlaWdodEhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGVpZ2h0SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBlaWdodEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJcIik7XG4gIGVpZ2h0SG91ci50ZXh0Q29udGVudCA9IFwiOFwiO1xuXG4gIGNvbnN0IGVpZ2h0SG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWlnaHRIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIGVpZ2h0SG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyVGVtcEZcIik7XG4gIGVpZ2h0SG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2OEZcIjtcblxuICBjb25zdCBlaWdodEhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjI0OFwiKTtcbiAgZWlnaHRIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IG5pbmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgbmluZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBuaW5lSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyXCIpO1xuICBuaW5lSG91ci50ZXh0Q29udGVudCA9IFwiOVwiO1xuXG4gIGNvbnN0IG5pbmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuaW5lSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBuaW5lSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmluZUhvdXJUZW1wRlwiKTtcbiAgbmluZUhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjlGXCI7XG5cbiAgY29uc3QgbmluZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgbmluZUhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjI5NlwiKTtcbiAgbmluZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdGVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgdGVuSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHRlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHRlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyXCIpO1xuICB0ZW5Ib3VyLnRleHRDb250ZW50ID0gXCIxMFwiO1xuXG4gIGNvbnN0IHRlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgdGVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91clRlbXBGXCIpO1xuICB0ZW5Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjcwRlwiO1xuXG4gIGNvbnN0IHRlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRlbkhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICB0ZW5Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjM1M1wiKTtcbiAgdGVuSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBlbGV2ZW5Ib3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZWxldmVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZWxldmVuSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJcIik7XG4gIGVsZXZlbkhvdXIudGV4dENvbnRlbnQgPSBcIjExXCI7XG5cbiAgY29uc3QgZWxldmVuSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyVGVtcEZcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNzFGXCI7XG5cbiAgY29uc3QgZWxldmVuSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWxldmVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGVsZXZlbkhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVsZXZlbkhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMzU2XCIpO1xuICBlbGV2ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJbmRleE9uZSk7XG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhUd28pO1xuICBob3VybHlGb3JlY2FzdEluZGV4WmVyby5hcHBlbmRDaGlsZCh6ZXJvSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQob25lSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQodHdvSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQodGhyZWVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKGZvdXJIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKGZpdmVIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKHNpeEhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhPbmUuYXBwZW5kQ2hpbGQoc2V2ZW5Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKGVpZ2h0SG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChuaW5lSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZCh0ZW5Ib3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLmFwcGVuZENoaWxkKGVsZXZlbkhvdXJGb3JlY2FzdCk7XG4gIHplcm9Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoemVyb0hvdXIpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyVGVtcEYpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyV2VhdGhlckljb24pO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91cik7XG4gIG9uZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChvbmVIb3VyVGVtcEYpO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91cldlYXRoZXJJY29uKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXIpO1xuICB0d29Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodHdvSG91clRlbXBGKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXJXZWF0aGVySWNvbik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91cik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91clRlbXBGKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVIb3VyV2VhdGhlckljb24pO1xuICBmb3VySG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZvdXJIb3VyKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91clRlbXBGKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91cldlYXRoZXJJY29uKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmaXZlSG91cik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJUZW1wRik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXJXZWF0aGVySWNvbik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyKTtcbiAgc2l4SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNpeEhvdXJUZW1wRik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyV2VhdGhlckljb24pO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXJUZW1wRik7XG4gIHNldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHNldmVuSG91cldlYXRoZXJJY29uKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyVGVtcEYpO1xuICBlaWdodEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChlaWdodEhvdXJXZWF0aGVySWNvbik7XG4gIG5pbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQobmluZUhvdXIpO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyVGVtcEYpO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyV2VhdGhlckljb24pO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91cik7XG4gIHRlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0ZW5Ib3VyVGVtcEYpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91cldlYXRoZXJJY29uKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXIpO1xuICBlbGV2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWxldmVuSG91clRlbXBGKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXJXZWF0aGVySWNvbik7XG5cbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0V2lkZ2V0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHVybCA9XG4gICAgXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTgzZWI5ZThhNWNlZjRmNTQ5ZjExNDYzNjIzMTcwNCZxPVwiICtcbiAgICBsb2NhdGlvbiArXG4gICAgXCImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cIjtcbiAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHdlYXRoZXJEYXRhW1wibG9jYXRpb25cIl1bXCJuYW1lXCJdO1xuICBjb25zdCByZWdpb25OYW1lID0gd2VhdGhlckRhdGFbXCJsb2NhdGlvblwiXVtcInJlZ2lvblwiXTtcbiAgY29uc3QgY3VycmVudERheUZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl07XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1wiaWNvblwiXTtcbiAgY29uc3QgY3VycmVudEhpZ2hDZWxzaXVzID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWF4dGVtcF9jXCJdO1xuICBjb25zdCBjdXJyZW50SGlnaEZhcmVuaGVpdCA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgY3VycmVudExvd0NlbHNpdXMgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRMb3dGYXJlbmhlaXQgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRUZW1wQ2Vsc2l1cyA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcInRlbXBfY1wiXTtcbiAgY29uc3QgY3VycmVudFRlbXBGYXJlbmhlaXQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDZWxzaXVzID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiZmVlbHNsaWtlX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VGYXJlbmhlaXQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJmZWVsc2xpa2VfZlwiXTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiaHVtaWRpdHlcIl07XG4gIGNvbnN0IGN1cnJlbnRXaW5kU3BlZWQgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ3aW5kX21waFwiXTtcbiAgY29uc3QgY3VycmVudFJhaW5DaGFuY2UgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJkYWlseV93aWxsX2l0X3JhaW5cIl07XG4gIGNvbnN0IHRvbW9ycm93Rm9yZWNhc3QgPSB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdO1xuICBjb25zdCB0b21vcnJvd0hpZ2hDZWxzaXVzID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoRmFyZW5oZWl0ID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfZlwiXTtcbiAgY29uc3QgdG9tb3Jyb3dMb3dDZWxzaXVzID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfY1wiXTtcbiAgY29uc3QgdG9tb3Jyb3dMb3dGYXJlbmhlaXQgPSB0b21vcnJvd0ZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbkljb24gPSB0b21vcnJvd0ZvcmVjYXN0W1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1wiaWNvblwiXTtcbiAgY29uc3QgdHdvRGF5Rm9yZWNhc3QgPSB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIyXCJdO1xuICBjb25zdCB0d29EYXlIaWdoQ2Vsc2l1cyA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWF4dGVtcF9jXCJdO1xuICBjb25zdCB0d29EYXlIaWdoRmFyZW5oZWl0ID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IHR3b0RheUxvd0NlbHNpdXMgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfY1wiXTtcbiAgY29uc3QgdHdvRGF5TG93RmFyZW5oZWl0ID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2ZcIl07XG4gIGNvbnN0IHR3b0RheUNvbmRpdGlvbkljb24gPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl07XG5cbiAgY29uc3Qgc3BhcnNlZFdlYXRoZXJEYXRhID0ge1xuICAgIGxvY2F0aW9uTmFtZSxcbiAgICByZWdpb25OYW1lLFxuICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgY3VycmVudENvbmRpdGlvbkljb24sXG4gICAgY3VycmVudEhpZ2hDZWxzaXVzLFxuICAgIGN1cnJlbnRIaWdoRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRMb3dDZWxzaXVzLFxuICAgIGN1cnJlbnRMb3dGYXJlbmhlaXQsXG4gICAgY3VycmVudFRlbXBDZWxzaXVzLFxuICAgIGN1cnJlbnRUZW1wRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRGZWVsc0xpa2VDZWxzaXVzLFxuICAgIGN1cnJlbnRGZWVsc0xpa2VGYXJlbmhlaXQsXG4gICAgY3VycmVudFdpbmRTcGVlZCxcbiAgICBjdXJyZW50SHVtaWRpdHksXG4gICAgY3VycmVudFJhaW5DaGFuY2UsXG4gICAgdG9tb3Jyb3dIaWdoQ2Vsc2l1cyxcbiAgICB0b21vcnJvd0hpZ2hGYXJlbmhlaXQsXG4gICAgdG9tb3Jyb3dMb3dDZWxzaXVzLFxuICAgIHRvbW9ycm93TG93RmFyZW5oZWl0LFxuICAgIHRvbW9ycm93Q29uZGl0aW9uSWNvbixcbiAgICB0d29EYXlIaWdoQ2Vsc2l1cyxcbiAgICB0d29EYXlIaWdoRmFyZW5oZWl0LFxuICAgIHR3b0RheUxvd0NlbHNpdXMsXG4gICAgdHdvRGF5TG93RmFyZW5oZWl0LFxuICAgIHR3b0RheUNvbmRpdGlvbkljb24sXG4gIH07XG5cbiAgdXBkYXRlRGFzaGJvYXJkKHNwYXJzZWRXZWF0aGVyRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhc2hib2FyZCh3ZWF0aGVyRGF0YSkge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGxvY2F0aW9uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgbG9jYXRpb25QYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uTmFtZSArIFwiLCBcIiArIHdlYXRoZXJEYXRhLnJlZ2lvbk5hbWU7XG4gIGNvbnN0IGNvbmRpdGlvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuICBjb25kaXRpb25QYXJhbWV0ZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9uO1xuICBjb25zdCBjdXJyZW50VGVtcEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRUZW1wRlwiKTtcbiAgY3VycmVudFRlbXBGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRUZW1wRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCBmZWVsc0xpa2VGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VGXCIpO1xuICBmZWVsc0xpa2VGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkZFRUxTIExJS0U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB3aW5kU3BlZWRQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRTcGVlZFwiKTtcbiAgd2luZFNwZWVkUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIldJTkQ6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudFdpbmRTcGVlZCArIFwiIE1QSFwiO1xuICBjb25zdCBodW1pZGl0eVBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5UGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBcIkhVTUlESVRZOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnRIdW1pZGl0eSArIFwiJVwiO1xuICBjb25zdCB0b2RheUhpZ2hGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheUhpZ2hGXCIpO1xuICB0b2RheUhpZ2hGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRIaWdoRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b2RheUxvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5TG93RlwiKTtcbiAgdG9kYXlMb3dGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRMb3dGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHRvZGF5V2VhdGhlckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5V2VhdGhlckljb25cIik7XG4gIGxldCBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25JY29uLnNsaWNlKDM5LCA0Mik7XG4gIHRvZGF5V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50b21vcnJvd0hpZ2hGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHRvbW9ycm93TG93RlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dMb3dGXCIpO1xuICB0b21vcnJvd0xvd0ZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudG9tb3Jyb3dMb3dGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlckljb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnRvbW9ycm93V2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnRvbW9ycm93Q29uZGl0aW9uSWNvbi5zbGljZSgzOSwgNDIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHR3b0RheUhpZ2hGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblR3b0RheXNIaWdoRlwiKTtcbiAgdHdvRGF5SGlnaEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvRGF5SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdHdvRGF5TG93RlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzTG93RlwiKTtcbiAgdHdvRGF5TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50d29EYXlMb3dGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHR3b0RheVdlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pblR3b0RheXNXZWF0aGVySWNvblwiXG4gICk7XG4gIGltYWdlTnVtYmVyID0gd2VhdGhlckRhdGEudHdvRGF5Q29uZGl0aW9uSWNvbi5zbGljZSgzOSwgNDIpO1xuICB0d29EYXlXZWF0aGVySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYUlucHV0XCIpLnZhbHVlO1xuICBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcmVhSW5wdXRcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpIHtcbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTEzXCIpIHtcbiAgICByZXR1cm4gSTExMztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTZcIikge1xuICAgIHJldHVybiBJMTE2O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjExOVwiKSB7XG4gICAgcmV0dXJuIEkxMTk7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTIyXCIpIHtcbiAgICByZXR1cm4gSTEyMjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNDNcIikge1xuICAgIHJldHVybiBJMTQzO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjE3NlwiKSB7XG4gICAgcmV0dXJuIEkxNzY7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTc5XCIpIHtcbiAgICByZXR1cm4gSTE3OTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODJcIikge1xuICAgIHJldHVybiBJMTgyO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjE4NVwiKSB7XG4gICAgcmV0dXJuIEkxODU7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjAwXCIpIHtcbiAgICByZXR1cm4gSTIwMDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMjdcIikge1xuICAgIHJldHVybiBJMjI3O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjIzMFwiKSB7XG4gICAgcmV0dXJuIEkyMzA7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjQ4XCIpIHtcbiAgICByZXR1cm4gSTI0ODtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjBcIikge1xuICAgIHJldHVybiBJMjYwO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI2M1wiKSB7XG4gICAgcmV0dXJuIEkyNjM7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjY2XCIpIHtcbiAgICByZXR1cm4gSTI2NjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODFcIikge1xuICAgIHJldHVybiBJMjgxO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI4NFwiKSB7XG4gICAgcmV0dXJuIEkyODQ7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjkzXCIpIHtcbiAgICByZXR1cm4gSTI5MztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTZcIikge1xuICAgIHJldHVybiBJMjk2O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI5OVwiKSB7XG4gICAgcmV0dXJuIEkyOTk7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzAyXCIpIHtcbiAgICByZXR1cm4gSTMwMjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDVcIikge1xuICAgIHJldHVybiBJMzA1O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMwOFwiKSB7XG4gICAgcmV0dXJuIEkzMDg7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzExXCIpIHtcbiAgICByZXR1cm4gSTMxMTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTRcIikge1xuICAgIHJldHVybiBJMzE0O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMxN1wiKSB7XG4gICAgcmV0dXJuIEkzMTc7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIwXCIpIHtcbiAgICByZXR1cm4gSTMyMDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjNcIikge1xuICAgIHJldHVybiBJMzIzO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMyNlwiKSB7XG4gICAgcmV0dXJuIEkzMjY7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzI5XCIpIHtcbiAgICByZXR1cm4gSTMyOTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzJcIikge1xuICAgIHJldHVybiBJMzMyO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMzNVwiKSB7XG4gICAgcmV0dXJuIEkzMzU7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzM4XCIpIHtcbiAgICByZXR1cm4gSTMzODtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTBcIikge1xuICAgIHJldHVybiBJMzUwO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM1M1wiKSB7XG4gICAgcmV0dXJuIEkzNTM7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU2XCIpIHtcbiAgICByZXR1cm4gSTM1NjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTlcIikge1xuICAgIHJldHVybiBJMzU5O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM2MlwiKSB7XG4gICAgcmV0dXJuIEkzNjI7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY1XCIpIHtcbiAgICByZXR1cm4gSTM2NTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjhcIikge1xuICAgIHJldHVybiBJMzY4O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM3MVwiKSB7XG4gICAgcmV0dXJuIEkzNzE7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc0XCIpIHtcbiAgICByZXR1cm4gSTM3NDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzdcIikge1xuICAgIHJldHVybiBJMzc3O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM4NlwiKSB7XG4gICAgcmV0dXJuIEkzODY7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzg5XCIpIHtcbiAgICByZXR1cm4gSTM4OTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTJcIikge1xuICAgIHJldHVybiBJMzkyO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM5NVwiKSB7XG4gICAgcmV0dXJuIEkzOTU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEkxMTM7XG4gIH1cbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVMYXlvdXQoKSk7XG5sZXQgbG9jYXRpb24gPSBcIkdvbGRlbiwgQ29sb3JhZG9cIjtcbmdldFdlYXRoZXIobG9jYXRpb24pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9