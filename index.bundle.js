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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 1px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 1s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,0BAA0B;EAC1B,cAAc;EACd,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kDAAkD;EAClD,YAAY;EACZ,oBAAoB;EACpB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,wBAAwB;EACxB,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\n  margin: 0px;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -40px;\n  display: grid;\n  grid-template-rows: 1px 1fr;\n  background-color: #7c7a7a;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n}\n\n.header {\n  display: flex;\n  justify-content: end;\n  padding-top: 30px;\n  padding-right: 30px;\n}\n\n.areaInput {\n  width: 16rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.3rem 4.5rem;\n  color: #f3f3f3;\n  font-size: 1.6rem;\n  border-radius: 0.5rem;\n}\n\n.mainBody {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.currentDayWidget {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  margin-left: 10%;\n  padding-top: 20%;\n}\n\n.currentWeatherDetails {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.condition {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n}\n\n.location {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.currentTempF {\n  font-size: 10rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n  white-space: nowrap;\n}\n\n.currentWeatherMoreDetails {\n  display: flex;\n  flex-direction: column;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  height: 8rem;\n  padding-left: 3.5rem;\n  justify-content: space-between;\n  margin-left: 30px;\n}\n\n.moreDetails {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.rightBox {\n  display: grid;\n  grid-template-rows: 50% 50%;\n  padding-left: 20%;\n  gap: 25%;\n}\n\n.threeDayForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.forecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.threeDayForecastDay {\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastHighF {\n  font-size: 3rem;\n  line-height: 3.5rem;\n  font-weight: 800;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.threeDayForecastLowF {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\n.hourlyForecastWidget {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.hourlyForecastIndex {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  grid-area: 1 / 1 / 1 / 1;\n  transform: translate(0, 0) scale(0);\n  transition: 1s ease-in-out;\n}\n\n.hourlyForecastIndex.active {\n  transform: translate(0, 0) scale(1);\n}\n\n.hourlyForecastBox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.hourlyForecastHour {\n  font-size: 1.8rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n  margin-bottom: 1rem;\n}\n\n.hourlyForecastTempF {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.1rem;\n  white-space: nowrap;\n}\n\nfooter .wrapper:after {\n  height: 40px;\n}\n\nfooter {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n}\n\n.github {\n  height: 16px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNicUI7QUFDdUI7QUFDVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsK0NBQVM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsK0RBQUk7QUFDZjtBQUNBO0FBQ0EsV0FBVywrREFBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLCtEQUFJO0FBQ2YsSUFBSTtBQUNKLFdBQVcsOERBQUk7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxcHggMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3YTtcXG59XFxuXFxuLndyYXBwZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudERheVdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIHBhZGRpbmctdG9wOiAyMCU7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlckRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFRlbXBGIHtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGhlaWdodDogOHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tb3JlRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJpZ2h0Qm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGdhcDogMjUlO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0RGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0SGlnaEYge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RMb3dGIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXgge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEluZGV4LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SG91ciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RUZW1wRiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuZm9vdGVyIC53cmFwcGVyOmFmdGVyIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdpdGh1YiB7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtEQUFrRDtFQUNsRCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxcHggMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3YTtcXG59XFxuXFxuLndyYXBwZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYXJlYUlucHV0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gIGNvbG9yOiAjZjNmM2YzO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudERheVdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIHBhZGRpbmctdG9wOiAyMCU7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlckRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY3VycmVudFRlbXBGIHtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGhlaWdodDogOHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tb3JlRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJpZ2h0Qm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGdhcDogMjUlO1xcbn1cXG5cXG4udGhyZWVEYXlGb3JlY2FzdFdpZGdldCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0RGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50aHJlZURheUZvcmVjYXN0SGlnaEYge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRocmVlRGF5Rm9yZWNhc3RMb3dGIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0V2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SW5kZXgge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob3VybHlGb3JlY2FzdEluZGV4LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0SG91ciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaG91cmx5Rm9yZWNhc3RUZW1wRiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuZm9vdGVyIC53cmFwcGVyOmFmdGVyIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdpdGh1YiB7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdpdGh1YlNWRyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IEkxMTMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzExMy5wbmdcIjtcbmltcG9ydCBJMTE2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xMTYucG5nXCI7XG5pbXBvcnQgSTExOSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTE5LnBuZ1wiO1xuaW1wb3J0IEkxMjIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzEyMi5wbmdcIjtcbmltcG9ydCBJMTQzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xNDMucG5nXCI7XG5pbXBvcnQgSTE3NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTc2LnBuZ1wiO1xuaW1wb3J0IEkxNzkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzE3OS5wbmdcIjtcbmltcG9ydCBJMTgyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8xODIucG5nXCI7XG5pbXBvcnQgSTE4NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMTg1LnBuZ1wiO1xuaW1wb3J0IEkyMDAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzIwMC5wbmdcIjtcbmltcG9ydCBJMjI3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yMjcucG5nXCI7XG5pbXBvcnQgSTIzMCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjMwLnBuZ1wiO1xuaW1wb3J0IEkyNDggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI0OC5wbmdcIjtcbmltcG9ydCBJMjYwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yNjAucG5nXCI7XG5pbXBvcnQgSTI2MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjYzLnBuZ1wiO1xuaW1wb3J0IEkyNjYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI2Ni5wbmdcIjtcbmltcG9ydCBJMjgxIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yODEucG5nXCI7XG5pbXBvcnQgSTI4NCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjg0LnBuZ1wiO1xuaW1wb3J0IEkyOTMgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzI5My5wbmdcIjtcbmltcG9ydCBJMjk2IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8yOTYucG5nXCI7XG5pbXBvcnQgSTI5OSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMjk5LnBuZ1wiO1xuaW1wb3J0IEkzMDIgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMwMi5wbmdcIjtcbmltcG9ydCBJMzA1IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMDUucG5nXCI7XG5pbXBvcnQgSTMwOCBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzA4LnBuZ1wiO1xuaW1wb3J0IEkzMTEgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMxMS5wbmdcIjtcbmltcG9ydCBJMzE0IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMTQucG5nXCI7XG5pbXBvcnQgSTMxNyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzE3LnBuZ1wiO1xuaW1wb3J0IEkzMjAgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyMC5wbmdcIjtcbmltcG9ydCBJMzIzIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMjMucG5nXCI7XG5pbXBvcnQgSTMyNiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzI2LnBuZ1wiO1xuaW1wb3J0IEkzMjkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMyOS5wbmdcIjtcbmltcG9ydCBJMzMyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zMzIucG5nXCI7XG5pbXBvcnQgSTMzNSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzM1LnBuZ1wiO1xuaW1wb3J0IEkzMzggZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzMzOC5wbmdcIjtcbmltcG9ydCBJMzUwIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTAucG5nXCI7XG5pbXBvcnQgSTM1MyBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzUzLnBuZ1wiO1xuaW1wb3J0IEkzNTYgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM1Ni5wbmdcIjtcbmltcG9ydCBJMzU5IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNTkucG5nXCI7XG5pbXBvcnQgSTM2MiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzYyLnBuZ1wiO1xuaW1wb3J0IEkzNjUgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM2NS5wbmdcIjtcbmltcG9ydCBJMzY4IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNjgucG5nXCI7XG5pbXBvcnQgSTM3MSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzcxLnBuZ1wiO1xuaW1wb3J0IEkzNzQgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM3NC5wbmdcIjtcbmltcG9ydCBJMzc3IGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zNzcucG5nXCI7XG5pbXBvcnQgSTM4NiBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzg2LnBuZ1wiO1xuaW1wb3J0IEkzODkgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXIvNjR4NjQvZGF5LzM4OS5wbmdcIjtcbmltcG9ydCBJMzkyIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLzY0eDY0L2RheS8zOTIucG5nXCI7XG5pbXBvcnQgSTM5NSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlci82NHg2NC9kYXkvMzk1LnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXlvdXQoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBhcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFyZWFJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYXJlYUlucHV0XCIpO1xuICBhcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcmVhSW5wdXRcIik7XG4gIGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgYXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIGNpdHlcIik7XG5cbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKFwibWFpbkJvZHlcIik7XG5cbiAgY29uc3QgbGVmdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRCb3guY2xhc3NMaXN0LmFkZChcImxlZnRCb3hcIik7XG5cbiAgY29uc3QgcmlnaHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodEJveC5jbGFzc0xpc3QuYWRkKFwicmlnaHRCb3hcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyVGV4dFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBDb2xlIEJ1cmNoXCI7XG5cbiAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Yi5zcmMgPSBnaXRodWJTVkc7XG4gIGdpdGh1Yi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYUlucHV0KTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHJpZ2h0Qm94KTtcbiAgbGVmdEJveC5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVUaHJlZURheUZvcmVjYXN0V2lkZ2V0KCkpO1xuICByaWdodEJveC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlGb3JlY2FzdFdpZGdldCgpKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50RGF5V2lkZ2V0KCkge1xuICBjb25zdCBjdXJyZW50RGF5V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudERheVdpZGdldC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudERheVdpZGdldFwiKTtcblxuICBjb25zdCBsb2NhdGlvbkFuZENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uQW5kQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkFuZENvbmRpdGlvblwiKTtcblxuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gXCJDb25kaXRpb25cIjtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFdlYXRoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50V2VhdGhlckRldGFpbHNcIik7XG5cbiAgY29uc3QgY3VycmVudFRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXBGLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcEZcIik7XG4gIGN1cnJlbnRUZW1wRi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBjdXJyZW50VGVtcEYudGV4dENvbnRlbnQgPSBcIjUwXCI7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHNcIik7XG5cbiAgY29uc3QgZmVlbHNMaWtlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcImZlZWxzTGlrZUZcIik7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0LmFkZChcIm1vcmVEZXRhaWxzXCIpO1xuICBmZWVsc0xpa2VGLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGZlZWxzTGlrZUYudGV4dENvbnRlbnQgPSBcIkZFRUxTIExJS0U6IDU1XCI7XG5cbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ3aW5kU3BlZWRcIik7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwibW9yZURldGFpbHNcIik7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IFwiV0lORDogMTAgTVBIXCI7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJtb3JlRGV0YWlsc1wiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIkhVTUlESVRZOiAxMCVcIjtcblxuICBjdXJyZW50RGF5V2lkZ2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uQW5kQ29uZGl0aW9uKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcbiAgbG9jYXRpb25BbmRDb25kaXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBjdXJyZW50RGF5V2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGV0YWlscyk7XG4gIGN1cnJlbnRXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZChjdXJyZW50VGVtcEYpO1xuICBjdXJyZW50V2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscyk7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRik7XG4gIGN1cnJlbnRXZWF0aGVyTW9yZURldGFpbHMuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY3VycmVudFdlYXRoZXJNb3JlRGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXlXaWRnZXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRocmVlRGF5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3REYXlcIik7XG4gIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gIGNvbnN0IHRvZGF5SGlnaEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheUhpZ2hGLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SGlnaEZcIik7XG4gIHRvZGF5SGlnaEYuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaEZcIik7XG4gIHRvZGF5SGlnaEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHRvZGF5TG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdExvd0ZcIik7XG4gIHRvZGF5TG93Ri5jbGFzc0xpc3QuYWRkKFwidG9kYXlMb3dGXCIpO1xuICB0b2RheUxvd0YudGV4dENvbnRlbnQgPSBcIjUwRlwiO1xuXG4gIGNvbnN0IHRvZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0b2RheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwidG9kYXlXZWF0aGVySWNvblwiKTtcbiAgbGV0IGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjExM1wiKTtcbiAgdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdG9tb3Jyb3dzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RCb3hcIik7XG5cbiAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvdy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgdG9tb3Jyb3cudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dIaWdoRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93SGlnaEYuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dIaWdoRlwiKTtcbiAgdG9tb3Jyb3dIaWdoRi50ZXh0Q29udGVudCA9IFwiNjFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dMb3dGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0xvd0ZcIik7XG4gIHRvbW9ycm93TG93Ri50ZXh0Q29udGVudCA9IFwiNTFGXCI7XG5cbiAgY29uc3QgdG9tb3Jyb3dXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RJY29uXCIpO1xuICB0b21vcnJvd1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIHRvbW9ycm93V2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGluVHdvRGF5c0ZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0Qm94XCIpO1xuXG4gIGNvbnN0IGluVHdvRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5cy5jbGFzc0xpc3QuYWRkKFwidGhyZWVEYXlGb3JlY2FzdERheVwiKTtcbiAgaW5Ud29EYXlzLnRleHRDb250ZW50ID0gXCJJbiBUd28gRGF5c1wiO1xuXG4gIGNvbnN0IGluVHdvRGF5c0hpZ2hGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RIaWdoRlwiKTtcbiAgaW5Ud29EYXlzSGlnaEYuY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c0hpZ2hGXCIpO1xuICBpblR3b0RheXNIaWdoRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgaW5Ud29EYXlzTG93RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluVHdvRGF5c0xvd0YuY2xhc3NMaXN0LmFkZChcInRocmVlRGF5Rm9yZWNhc3RMb3dGXCIpO1xuICBpblR3b0RheXNMb3dGLmNsYXNzTGlzdC5hZGQoXCJpblR3b0RheXNMb3dGXCIpO1xuICBpblR3b0RheXNMb3dGLnRleHRDb250ZW50ID0gXCI1MkZcIjtcblxuICBjb25zdCBpblR3b0RheXNXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZURheUZvcmVjYXN0SWNvblwiKTtcbiAgaW5Ud29EYXlzV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImluVHdvRGF5c1dlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTlcIik7XG4gIGluVHdvRGF5c1dlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICB0aHJlZURheUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKHRvZGF5c0ZvcmVjYXN0KTtcbiAgdGhyZWVEYXlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZCh0b21vcnJvd3NGb3JlY2FzdCk7XG4gIHRocmVlRGF5Rm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzRm9yZWNhc3QpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKHRvZGF5SGlnaEYpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheUxvd0YpO1xuICB0b2RheXNGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpO1xuICB0b21vcnJvd3NGb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0hpZ2hGKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dMb3dGKTtcbiAgdG9tb3Jyb3dzRm9yZWNhc3QuYXBwZW5kQ2hpbGQodG9tb3Jyb3dXZWF0aGVySWNvbik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5cyk7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5c0hpZ2hGKTtcbiAgaW5Ud29EYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaW5Ud29EYXlzTG93Rik7XG4gIGluVHdvRGF5c0ZvcmVjYXN0LmFwcGVuZENoaWxkKGluVHdvRGF5c1dlYXRoZXJJY29uKTtcblxuICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdFdpZGdldDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Rm9yZWNhc3RXaWRnZXQoKSB7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RXaWRnZXQuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0V2lkZ2V0XCIpO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlGb3JlY2FzdEluZGV4WmVyb1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SW5kZXhcIik7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgemVyb0hvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB6ZXJvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCB6ZXJvSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHplcm9Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHplcm9Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiemVyb0hvdXJcIik7XG4gIHplcm9Ib3VyLnRleHRDb250ZW50ID0gXCJOb3dcIjtcblxuICBjb25zdCB6ZXJvSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgemVyb0hvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgemVyb0hvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInplcm9Ib3VyVGVtcEZcIik7XG4gIHplcm9Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjYwRlwiO1xuXG4gIGNvbnN0IHplcm9Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHplcm9Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ6ZXJvSG91cldlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTEzXCIpO1xuICB6ZXJvSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBvbmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBvbmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3Qgb25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9uZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgb25lSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJcIik7XG4gIG9uZUhvdXIudGV4dENvbnRlbnQgPSBcIjFcIjtcblxuICBjb25zdCBvbmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvbmVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIG9uZUhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZUhvdXJUZW1wRlwiKTtcbiAgb25lSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2MUZcIjtcblxuICBjb25zdCBvbmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBvbmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgb25lSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxMTZcIik7XG4gIG9uZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgdHdvSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgdHdvSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHdvSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHR3b0hvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0d29Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHR3b0hvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyXCIpO1xuICB0d29Ib3VyLnRleHRDb250ZW50ID0gXCIyXCI7XG5cbiAgY29uc3QgdHdvSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHdvSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICB0d29Ib3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0d29Ib3VyVGVtcEZcIik7XG4gIHR3b0hvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjJGXCI7XG5cbiAgY29uc3QgdHdvSG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdHdvSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHR3b0hvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInR3b0hvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMTE5XCIpO1xuICB0d29Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRocmVlSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRocmVlSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHRocmVlSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRocmVlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICB0aHJlZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aHJlZUhvdXJcIik7XG4gIHRocmVlSG91ci50ZXh0Q29udGVudCA9IFwiM1wiO1xuXG4gIGNvbnN0IHRocmVlSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhyZWVIb3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyVGVtcEZcIik7XG4gIHRocmVlSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2M0ZcIjtcblxuICBjb25zdCB0aHJlZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHRocmVlSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhyZWVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjEyMlwiKTtcbiAgdGhyZWVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleE9uZVwiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcblxuICBjb25zdCBmb3VySG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIGZvdXJIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGZvdXJIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZm91ckhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91clwiKTtcbiAgZm91ckhvdXIudGV4dENvbnRlbnQgPSBcIjRcIjtcblxuICBjb25zdCBmb3VySG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm91ckhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgZm91ckhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvdXJIb3VyVGVtcEZcIik7XG4gIGZvdXJIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY0RlwiO1xuXG4gIGNvbnN0IGZvdXJIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb3VySG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3VySG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIxNDNcIik7XG4gIGZvdXJIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGZpdmVIb3VyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZml2ZUhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyRm9yZWNhc3RcIik7XG5cbiAgY29uc3QgZml2ZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBmaXZlSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyXCIpO1xuICBmaXZlSG91ci50ZXh0Q29udGVudCA9IFwiNVwiO1xuXG4gIGNvbnN0IGZpdmVIb3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXZlSG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBmaXZlSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZml2ZUhvdXJUZW1wRlwiKTtcbiAgZml2ZUhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjVGXCI7XG5cbiAgY29uc3QgZml2ZUhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZpdmVIb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpdmVIb3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjE3NlwiKTtcbiAgZml2ZUhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3Qgc2l4SG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgc2l4SG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l4SG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNpeEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXhIb3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIHNpeEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyXCIpO1xuICBzaXhIb3VyLnRleHRDb250ZW50ID0gXCI2XCI7XG5cbiAgY29uc3Qgc2l4SG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2l4SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBzaXhIb3VyVGVtcEYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXhIb3VyVGVtcEZcIik7XG4gIHNpeEhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjZGXCI7XG5cbiAgY29uc3Qgc2l4SG91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2l4SG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNpeEhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpeEhvdXJXZWF0aGVySWNvblwiKTtcbiAgaW1hZ2VQb2ludGVyID0gZ2V0SW1hZ2VQb2ludGVyKFwiMjAwXCIpO1xuICBzaXhIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHNldmVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0Qm94XCIpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldmVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IHNldmVuSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldmVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICBzZXZlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXZlbkhvdXJcIik7XG4gIHNldmVuSG91ci50ZXh0Q29udGVudCA9IFwiN1wiO1xuXG4gIGNvbnN0IHNldmVuSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V2ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyVGVtcEZcIik7XG4gIHNldmVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI2N0ZcIjtcblxuICBjb25zdCBzZXZlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIHNldmVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V2ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjIyN1wiKTtcbiAgc2V2ZW5Ib3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0SW5kZXhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdEluZGV4VHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cmx5Rm9yZWNhc3RJbmRleFR3b1wiKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJbmRleFwiKTtcblxuICBjb25zdCBlaWdodEhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlaWdodEhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCBlaWdodEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlaWdodEhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgZWlnaHRIb3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWlnaHRIb3VyXCIpO1xuICBlaWdodEhvdXIudGV4dENvbnRlbnQgPSBcIjhcIjtcblxuICBjb25zdCBlaWdodEhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVpZ2h0SG91clRlbXBGLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdFRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91clRlbXBGXCIpO1xuICBlaWdodEhvdXJUZW1wRi50ZXh0Q29udGVudCA9IFwiNjhGXCI7XG5cbiAgY29uc3QgZWlnaHRIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlaWdodEhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBlaWdodEhvdXJXZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVpZ2h0SG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyNDhcIik7XG4gIGVpZ2h0SG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBjb25zdCBuaW5lSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIG5pbmVIb3VyRm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IG5pbmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SG91clwiKTtcbiAgbmluZUhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91clwiKTtcbiAgbmluZUhvdXIudGV4dENvbnRlbnQgPSBcIjlcIjtcblxuICBjb25zdCBuaW5lSG91clRlbXBGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmluZUhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgbmluZUhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5pbmVIb3VyVGVtcEZcIik7XG4gIG5pbmVIb3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjY5RlwiO1xuXG4gIGNvbnN0IG5pbmVIb3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBuaW5lSG91cldlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEljb25cIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuaW5lSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIyOTZcIik7XG4gIG5pbmVIb3VyV2VhdGhlckljb24uc3JjID0gaW1hZ2VQb2ludGVyO1xuXG4gIGNvbnN0IHRlbkhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbkhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RCb3hcIik7XG4gIHRlbkhvdXJGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJGb3JlY2FzdFwiKTtcblxuICBjb25zdCB0ZW5Ib3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVuSG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RIb3VyXCIpO1xuICB0ZW5Ib3VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91clwiKTtcbiAgdGVuSG91ci50ZXh0Q29udGVudCA9IFwiMTBcIjtcblxuICBjb25zdCB0ZW5Ib3VyVGVtcEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW5Ib3VyVGVtcEYuY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0VGVtcEZcIik7XG4gIHRlbkhvdXJUZW1wRi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbkhvdXJUZW1wRlwiKTtcbiAgdGVuSG91clRlbXBGLnRleHRDb250ZW50ID0gXCI3MEZcIjtcblxuICBjb25zdCB0ZW5Ib3VyV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0ZW5Ib3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseUZvcmVjYXN0SWNvblwiKTtcbiAgdGVuSG91cldlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVuSG91cldlYXRoZXJJY29uXCIpO1xuICBpbWFnZVBvaW50ZXIgPSBnZXRJbWFnZVBvaW50ZXIoXCIzNTNcIik7XG4gIHRlbkhvdXJXZWF0aGVySWNvbi5zcmMgPSBpbWFnZVBvaW50ZXI7XG5cbiAgY29uc3QgZWxldmVuSG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEJveFwiKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91ckZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGV2ZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlGb3JlY2FzdEhvdXJcIik7XG4gIGVsZXZlbkhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyXCIpO1xuICBlbGV2ZW5Ib3VyLnRleHRDb250ZW50ID0gXCIxMVwiO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJUZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZXZlbkhvdXJUZW1wRi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RUZW1wRlwiKTtcbiAgZWxldmVuSG91clRlbXBGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWxldmVuSG91clRlbXBGXCIpO1xuICBlbGV2ZW5Ib3VyVGVtcEYudGV4dENvbnRlbnQgPSBcIjcxRlwiO1xuXG4gIGNvbnN0IGVsZXZlbkhvdXJXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZXZlbkhvdXJXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5Rm9yZWNhc3RJY29uXCIpO1xuICBlbGV2ZW5Ib3VyV2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbGV2ZW5Ib3VyV2VhdGhlckljb25cIik7XG4gIGltYWdlUG9pbnRlciA9IGdldEltYWdlUG9pbnRlcihcIjM1NlwiKTtcbiAgZWxldmVuSG91cldlYXRoZXJJY29uLnNyYyA9IGltYWdlUG9pbnRlcjtcblxuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEluZGV4WmVybyk7XG4gIGhvdXJseUZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SW5kZXhPbmUpO1xuICBob3VybHlGb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEluZGV4VHdvKTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFplcm8uYXBwZW5kQ2hpbGQoemVyb0hvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKG9uZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKHR3b0hvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhaZXJvLmFwcGVuZENoaWxkKHRocmVlSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChmb3VySG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChmaXZlSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleE9uZS5hcHBlbmRDaGlsZChzaXhIb3VyRm9yZWNhc3QpO1xuICBob3VybHlGb3JlY2FzdEluZGV4T25lLmFwcGVuZENoaWxkKHNldmVuSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChlaWdodEhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQobmluZUhvdXJGb3JlY2FzdCk7XG4gIGhvdXJseUZvcmVjYXN0SW5kZXhUd28uYXBwZW5kQ2hpbGQodGVuSG91ckZvcmVjYXN0KTtcbiAgaG91cmx5Rm9yZWNhc3RJbmRleFR3by5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyRm9yZWNhc3QpO1xuICB6ZXJvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHplcm9Ib3VyKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh6ZXJvSG91clRlbXBGKTtcbiAgemVyb0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh6ZXJvSG91cldlYXRoZXJJY29uKTtcbiAgb25lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG9uZUhvdXIpO1xuICBvbmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQob25lSG91clRlbXBGKTtcbiAgb25lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG9uZUhvdXJXZWF0aGVySWNvbik7XG4gIHR3b0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0d29Ib3VyKTtcbiAgdHdvSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHR3b0hvdXJUZW1wRik7XG4gIHR3b0hvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0d29Ib3VyV2VhdGhlckljb24pO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZUhvdXIpO1xuICB0aHJlZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZUhvdXJUZW1wRik7XG4gIHRocmVlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlSG91cldlYXRoZXJJY29uKTtcbiAgZm91ckhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3VySG91cik7XG4gIGZvdXJIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm91ckhvdXJUZW1wRik7XG4gIGZvdXJIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm91ckhvdXJXZWF0aGVySWNvbik7XG4gIGZpdmVIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZml2ZUhvdXIpO1xuICBmaXZlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZpdmVIb3VyVGVtcEYpO1xuICBmaXZlSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGZpdmVIb3VyV2VhdGhlckljb24pO1xuICBzaXhIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoc2l4SG91cik7XG4gIHNpeEhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzaXhIb3VyVGVtcEYpO1xuICBzaXhIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoc2l4SG91cldlYXRoZXJJY29uKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoc2V2ZW5Ib3VyKTtcbiAgc2V2ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoc2V2ZW5Ib3VyVGVtcEYpO1xuICBzZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChzZXZlbkhvdXJXZWF0aGVySWNvbik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVpZ2h0SG91cik7XG4gIGVpZ2h0SG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVpZ2h0SG91clRlbXBGKTtcbiAgZWlnaHRIb3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZWlnaHRIb3VyV2VhdGhlckljb24pO1xuICBuaW5lSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKG5pbmVIb3VyKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChuaW5lSG91clRlbXBGKTtcbiAgbmluZUhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChuaW5lSG91cldlYXRoZXJJY29uKTtcbiAgdGVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbkhvdXIpO1xuICB0ZW5Ib3VyRm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVuSG91clRlbXBGKTtcbiAgdGVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbkhvdXJXZWF0aGVySWNvbik7XG4gIGVsZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyKTtcbiAgZWxldmVuSG91ckZvcmVjYXN0LmFwcGVuZENoaWxkKGVsZXZlbkhvdXJUZW1wRik7XG4gIGVsZXZlbkhvdXJGb3JlY2FzdC5hcHBlbmRDaGlsZChlbGV2ZW5Ib3VyV2VhdGhlckljb24pO1xuXG4gIHJldHVybiBob3VybHlGb3JlY2FzdFdpZGdldDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT04M2ViOWU4YTVjZWY0ZjU0OWYxMTQ2MzYyMzE3MDQmcT1cIiArXG4gICAgbG9jYXRpb24gK1xuICAgIFwiJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXCI7XG4gIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICBjb25zdCBsb2NhdGlvbk5hbWUgPSB3ZWF0aGVyRGF0YVtcImxvY2F0aW9uXCJdW1wibmFtZVwiXTtcbiAgY29uc3QgcmVnaW9uTmFtZSA9IHdlYXRoZXJEYXRhW1wibG9jYXRpb25cIl1bXCJyZWdpb25cIl07XG4gIGNvbnN0IGN1cnJlbnREYXlGb3JlY2FzdCA9IHdlYXRoZXJEYXRhW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjBcIl07XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJ0ZXh0XCJdO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSWNvbiA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl07XG4gIGNvbnN0IGN1cnJlbnRIaWdoQ2Vsc2l1cyA9IGN1cnJlbnREYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgY3VycmVudEhpZ2hGYXJlbmhlaXQgPSBjdXJyZW50RGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRMb3dDZWxzaXVzID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9jXCJdO1xuICBjb25zdCBjdXJyZW50TG93RmFyZW5oZWl0ID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50VGVtcENlbHNpdXMgPSB3ZWF0aGVyRGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2NcIl07XG4gIGNvbnN0IGN1cnJlbnRUZW1wRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1widGVtcF9mXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImZlZWxzbGlrZV9jXCJdO1xuICBjb25zdCBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0ID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wiZmVlbHNsaWtlX2ZcIl07XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IHdlYXRoZXJEYXRhW1wiY3VycmVudFwiXVtcImh1bWlkaXR5XCJdO1xuICBjb25zdCBjdXJyZW50V2luZFNwZWVkID0gd2VhdGhlckRhdGFbXCJjdXJyZW50XCJdW1wid2luZF9tcGhcIl07XG4gIGNvbnN0IGN1cnJlbnRSYWluQ2hhbmNlID0gY3VycmVudERheUZvcmVjYXN0W1wiZGF5XCJdW1wiZGFpbHlfd2lsbF9pdF9yYWluXCJdO1xuICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXTtcbiAgY29uc3QgdG9tb3Jyb3dIaWdoQ2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93SGlnaEZhcmVuaGVpdCA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtYXh0ZW1wX2ZcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93Q2Vsc2l1cyA9IHRvbW9ycm93Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IHRvbW9ycm93TG93RmFyZW5oZWl0ID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcIm1pbnRlbXBfZlwiXTtcbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25JY29uID0gdG9tb3Jyb3dGb3JlY2FzdFtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl07XG4gIGNvbnN0IHR3b0RheUZvcmVjYXN0ID0gd2VhdGhlckRhdGFbXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMlwiXTtcbiAgY29uc3QgdHdvRGF5SGlnaENlbHNpdXMgPSB0d29EYXlGb3JlY2FzdFtcImRheVwiXVtcIm1heHRlbXBfY1wiXTtcbiAgY29uc3QgdHdvRGF5SGlnaEZhcmVuaGVpdCA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWF4dGVtcF9mXCJdO1xuICBjb25zdCB0d29EYXlMb3dDZWxzaXVzID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJtaW50ZW1wX2NcIl07XG4gIGNvbnN0IHR3b0RheUxvd0ZhcmVuaGVpdCA9IHR3b0RheUZvcmVjYXN0W1wiZGF5XCJdW1wibWludGVtcF9mXCJdO1xuICBjb25zdCB0d29EYXlDb25kaXRpb25JY29uID0gdHdvRGF5Rm9yZWNhc3RbXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdO1xuXG4gIGNvbnN0IHNwYXJzZWRXZWF0aGVyRGF0YSA9IHtcbiAgICBsb2NhdGlvbk5hbWUsXG4gICAgcmVnaW9uTmFtZSxcbiAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgIGN1cnJlbnRIaWdoQ2Vsc2l1cyxcbiAgICBjdXJyZW50SGlnaEZhcmVuaGVpdCxcbiAgICBjdXJyZW50TG93Q2Vsc2l1cyxcbiAgICBjdXJyZW50TG93RmFyZW5oZWl0LFxuICAgIGN1cnJlbnRUZW1wQ2Vsc2l1cyxcbiAgICBjdXJyZW50VGVtcEZhcmVuaGVpdCxcbiAgICBjdXJyZW50RmVlbHNMaWtlQ2Vsc2l1cyxcbiAgICBjdXJyZW50RmVlbHNMaWtlRmFyZW5oZWl0LFxuICAgIGN1cnJlbnRXaW5kU3BlZWQsXG4gICAgY3VycmVudEh1bWlkaXR5LFxuICAgIGN1cnJlbnRSYWluQ2hhbmNlLFxuICAgIHRvbW9ycm93SGlnaENlbHNpdXMsXG4gICAgdG9tb3Jyb3dIaWdoRmFyZW5oZWl0LFxuICAgIHRvbW9ycm93TG93Q2Vsc2l1cyxcbiAgICB0b21vcnJvd0xvd0ZhcmVuaGVpdCxcbiAgICB0b21vcnJvd0NvbmRpdGlvbkljb24sXG4gICAgdHdvRGF5SGlnaENlbHNpdXMsXG4gICAgdHdvRGF5SGlnaEZhcmVuaGVpdCxcbiAgICB0d29EYXlMb3dDZWxzaXVzLFxuICAgIHR3b0RheUxvd0ZhcmVuaGVpdCxcbiAgICB0d29EYXlDb25kaXRpb25JY29uLFxuICB9O1xuXG4gIHVwZGF0ZURhc2hib2FyZChzcGFyc2VkV2VhdGhlckRhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXNoYm9hcmQod2VhdGhlckRhdGEpIHtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBjb25zdCBsb2NhdGlvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gIGxvY2F0aW9uUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5sb2NhdGlvbk5hbWUgKyBcIiwgXCIgKyB3ZWF0aGVyRGF0YS5yZWdpb25OYW1lO1xuICBjb25zdCBjb25kaXRpb25QYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvblwiKTtcbiAgY29uZGl0aW9uUGFyYW1ldGVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbjtcbiAgY29uc3QgY3VycmVudFRlbXBGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50VGVtcEZcIik7XG4gIGN1cnJlbnRUZW1wRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgZmVlbHNMaWtlRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNMaWtlRlwiKTtcbiAgZmVlbHNMaWtlRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJGRUVMUyBMSUtFOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudEZlZWxzTGlrZUZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3Qgd2luZFNwZWVkUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kU3BlZWRcIik7XG4gIHdpbmRTcGVlZFBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJXSU5EOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnRXaW5kU3BlZWQgKyBcIiBNUEhcIjtcbiAgY29uc3QgaHVtaWRpdHlQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBodW1pZGl0eVBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgXCJIVU1JRElUWTogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50SHVtaWRpdHkgKyBcIiVcIjtcbiAgY29uc3QgdG9kYXlIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlIaWdoRlwiKTtcbiAgdG9kYXlIaWdoRlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50SGlnaEZhcmVuaGVpdCkgKyBcIkZcIjtcbiAgY29uc3QgdG9kYXlMb3dGUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheUxvd0ZcIik7XG4gIHRvZGF5TG93RlBhcmFtZXRlci50ZXh0Q29udGVudCA9XG4gICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b2RheVdlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVdlYXRoZXJJY29uXCIpO1xuICBsZXQgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9uSWNvbi5zbGljZSgzOSwgNDIpO1xuICB0b2RheVdlYXRoZXJJY29uUGFyYW1ldGVyLnNyYyA9IGdldEltYWdlUG9pbnRlcihpbWFnZU51bWJlcik7XG4gIGNvbnN0IHRvbW9ycm93SGlnaEZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93SGlnaEZcIik7XG4gIHRvbW9ycm93SGlnaEZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudG9tb3Jyb3dIaWdoRmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b21vcnJvd0xvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93TG93RlwiKTtcbiAgdG9tb3Jyb3dMb3dGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRvbW9ycm93TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0b21vcnJvd1dlYXRoZXJJY29uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi50b21vcnJvd1dlYXRoZXJJY29uXCJcbiAgKTtcbiAgaW1hZ2VOdW1iZXIgPSB3ZWF0aGVyRGF0YS50b21vcnJvd0NvbmRpdGlvbkljb24uc2xpY2UoMzksIDQyKTtcbiAgdG9tb3Jyb3dXZWF0aGVySWNvblBhcmFtZXRlci5zcmMgPSBnZXRJbWFnZVBvaW50ZXIoaW1hZ2VOdW1iZXIpO1xuICBjb25zdCB0d29EYXlIaWdoRlBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5Ud29EYXlzSGlnaEZcIik7XG4gIHR3b0RheUhpZ2hGUGFyYW1ldGVyLnRleHRDb250ZW50ID1cbiAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnR3b0RheUhpZ2hGYXJlbmhlaXQpICsgXCJGXCI7XG4gIGNvbnN0IHR3b0RheUxvd0ZQYXJhbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluVHdvRGF5c0xvd0ZcIik7XG4gIHR3b0RheUxvd0ZQYXJhbWV0ZXIudGV4dENvbnRlbnQgPVxuICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEudHdvRGF5TG93RmFyZW5oZWl0KSArIFwiRlwiO1xuICBjb25zdCB0d29EYXlXZWF0aGVySWNvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW5Ud29EYXlzV2VhdGhlckljb25cIlxuICApO1xuICBpbWFnZU51bWJlciA9IHdlYXRoZXJEYXRhLnR3b0RheUNvbmRpdGlvbkljb24uc2xpY2UoMzksIDQyKTtcbiAgdHdvRGF5V2VhdGhlckljb25QYXJhbWV0ZXIuc3JjID0gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyZWFJbnB1dFwiKS52YWx1ZTtcbiAgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYUlucHV0XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VQb2ludGVyKGltYWdlTnVtYmVyKSB7XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjExM1wiKSB7XG4gICAgcmV0dXJuIEkxMTM7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTE2XCIpIHtcbiAgICByZXR1cm4gSTExNjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxMTlcIikge1xuICAgIHJldHVybiBJMTE5O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjEyMlwiKSB7XG4gICAgcmV0dXJuIEkxMjI7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTQzXCIpIHtcbiAgICByZXR1cm4gSTE0MztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxNzZcIikge1xuICAgIHJldHVybiBJMTc2O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjE3OVwiKSB7XG4gICAgcmV0dXJuIEkxNzk7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMTgyXCIpIHtcbiAgICByZXR1cm4gSTE4MjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIxODVcIikge1xuICAgIHJldHVybiBJMTg1O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjIwMFwiKSB7XG4gICAgcmV0dXJuIEkyMDA7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjI3XCIpIHtcbiAgICByZXR1cm4gSTIyNztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyMzBcIikge1xuICAgIHJldHVybiBJMjMwO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI0OFwiKSB7XG4gICAgcmV0dXJuIEkyNDg7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjYwXCIpIHtcbiAgICByZXR1cm4gSTI2MDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyNjNcIikge1xuICAgIHJldHVybiBJMjYzO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI2NlwiKSB7XG4gICAgcmV0dXJuIEkyNjY7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjgxXCIpIHtcbiAgICByZXR1cm4gSTI4MTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyODRcIikge1xuICAgIHJldHVybiBJMjg0O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjI5M1wiKSB7XG4gICAgcmV0dXJuIEkyOTM7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMjk2XCIpIHtcbiAgICByZXR1cm4gSTI5NjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIyOTlcIikge1xuICAgIHJldHVybiBJMjk5O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMwMlwiKSB7XG4gICAgcmV0dXJuIEkzMDI7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzA1XCIpIHtcbiAgICByZXR1cm4gSTMwNTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMDhcIikge1xuICAgIHJldHVybiBJMzA4O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMxMVwiKSB7XG4gICAgcmV0dXJuIEkzMTE7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzE0XCIpIHtcbiAgICByZXR1cm4gSTMxNDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMTdcIikge1xuICAgIHJldHVybiBJMzE3O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMyMFwiKSB7XG4gICAgcmV0dXJuIEkzMjA7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzIzXCIpIHtcbiAgICByZXR1cm4gSTMyMztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMjZcIikge1xuICAgIHJldHVybiBJMzI2O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMyOVwiKSB7XG4gICAgcmV0dXJuIEkzMjk7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzMyXCIpIHtcbiAgICByZXR1cm4gSTMzMjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzMzVcIikge1xuICAgIHJldHVybiBJMzM1O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjMzOFwiKSB7XG4gICAgcmV0dXJuIEkzMzg7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzUwXCIpIHtcbiAgICByZXR1cm4gSTM1MDtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNTNcIikge1xuICAgIHJldHVybiBJMzUzO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM1NlwiKSB7XG4gICAgcmV0dXJuIEkzNTY7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzU5XCIpIHtcbiAgICByZXR1cm4gSTM1OTtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNjJcIikge1xuICAgIHJldHVybiBJMzYyO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM2NVwiKSB7XG4gICAgcmV0dXJuIEkzNjU7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzY4XCIpIHtcbiAgICByZXR1cm4gSTM2ODtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzNzFcIikge1xuICAgIHJldHVybiBJMzcxO1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM3NFwiKSB7XG4gICAgcmV0dXJuIEkzNzQ7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzc3XCIpIHtcbiAgICByZXR1cm4gSTM3NztcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzODZcIikge1xuICAgIHJldHVybiBJMzg2O1xuICB9XG4gIGlmIChpbWFnZU51bWJlciA9PSBcIjM4OVwiKSB7XG4gICAgcmV0dXJuIEkzODk7XG4gIH1cbiAgaWYgKGltYWdlTnVtYmVyID09IFwiMzkyXCIpIHtcbiAgICByZXR1cm4gSTM5MjtcbiAgfVxuICBpZiAoaW1hZ2VOdW1iZXIgPT0gXCIzOTVcIikge1xuICAgIHJldHVybiBJMzk1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBJMTEzO1xuICB9XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTGF5b3V0KCkpO1xubGV0IGxvY2F0aW9uID0gXCJHb2xkZW4sIENvbG9yYWRvXCI7XG5nZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==