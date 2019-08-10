define("db438943-8946-4630-962e-feb78d498253_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","jquery","jqueryui","bootstrap","@microsoft/sp-loader","@microsoft/sp-property-pane","UsefulLinksWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(1);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-webpart-base"
var sp_webpart_base_ = __webpack_require__(2);
var sp_webpart_base__default = /*#__PURE__*/__webpack_require__.n(sp_webpart_base_);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(3);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: external "jqueryui"
var external__jqueryui_ = __webpack_require__(4);
var external__jqueryui__default = /*#__PURE__*/__webpack_require__.n(external__jqueryui_);

// EXTERNAL MODULE: external "bootstrap"
var external__bootstrap_ = __webpack_require__(5);
var external__bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__bootstrap_);

// EXTERNAL MODULE: external "@microsoft/sp-loader"
var sp_loader_ = __webpack_require__(6);
var sp_loader__default = /*#__PURE__*/__webpack_require__.n(sp_loader_);

// EXTERNAL MODULE: external "@microsoft/sp-property-pane"
var sp_property_pane_ = __webpack_require__(7);
var sp_property_pane__default = /*#__PURE__*/__webpack_require__.n(sp_property_pane_);

// EXTERNAL MODULE: external "UsefulLinksWebPartStrings"
var external__UsefulLinksWebPartStrings_ = __webpack_require__(8);
var external__UsefulLinksWebPartStrings__default = /*#__PURE__*/__webpack_require__.n(external__UsefulLinksWebPartStrings_);

// CONCATENATED MODULE: ./lib/webparts/usefulLinks/UsefulLinksTemplate.js
var UsefulLinksTemplate = /** @class */ (function () {
    function UsefulLinksTemplate() {
    }
    UsefulLinksTemplate.templateHtml = "\n      <div class=\"accordion\">\n        <h3>Section 1</h3>\n        <div>\n            <p>\n            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer\n            ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit\n            amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut\n            odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.\n            </p>\n        </div>\n        <h3>Section 2</h3>\n        <div>\n            <p>\n            Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet\n            purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor\n            velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In\n            suscipit faucibus urna.\n            </p>\n        </div>\n        <h3>Section 3</h3>\n        <div>\n            <p>\n            Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.\n            Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero\n            ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis\n            lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.\n            </p>\n            <ul>\n            <li>List item one</li>\n            <li>List item two</li>\n            <li>List item three</li>\n            </ul>\n        </div>\n        <h3>Section 4</h3>\n        <div>\n            <p>\n            Cras dictum. Pellentesque habitant morbi tristique senectus et netus\n            et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in\n            faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia\n            mauris vel est.\n            </p>\n            <p>\n            Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.\n            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per\n            inceptos himenaeos.\n            </p>\n        </div>\n    </div>";
    return UsefulLinksTemplate;
}());
/* harmony default export */ var usefulLinks_UsefulLinksTemplate = (UsefulLinksTemplate);

// CONCATENATED MODULE: ./lib/webparts/usefulLinks/UsefulLinksWebPart.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var UsefulLinksWebPart_UsefulLinksWebPart = /** @class */ (function (_super) {
    __extends(UsefulLinksWebPart, _super);
    function UsefulLinksWebPart() {
        var _this = _super.call(this) || this;
        sp_loader_["SPComponentLoader"].loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
        return _this;
    }
    UsefulLinksWebPart.prototype.render = function () {
        this.domElement.innerHTML = usefulLinks_UsefulLinksTemplate.templateHtml;
        var accordionOptions = {
            animate: true,
            collapsible: false,
            icons: {
                header: 'ui-icon-circle-arrow-e',
                activeHeader: 'ui-icon-circle-arrow-s'
            }
        };
        external__jquery_('.accordion', this.domElement).accordion(accordionOptions);
    };
    Object.defineProperty(UsefulLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    UsefulLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: external__UsefulLinksWebPartStrings_["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: external__UsefulLinksWebPartStrings_["BasicGroupName"],
                            groupFields: [
                                Object(sp_property_pane_["PropertyPaneTextField"])('description', {
                                    label: external__UsefulLinksWebPartStrings_["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return UsefulLinksWebPart;
}(sp_webpart_base_["BaseClientSideWebPart"]));
/* harmony default export */ var usefulLinks_UsefulLinksWebPart = __webpack_exports__["default"] = (UsefulLinksWebPart_UsefulLinksWebPart);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ])});;
//# sourceMappingURL=useful-links-web-part.js.map