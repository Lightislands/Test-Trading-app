/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Start model.js

let itemController = (() => {

    let arrItems = [{ "pair": "USD CHF", "buy": 0.99143, "sell": 0.99043 }, { "pair": "GBP USD", "buy": 1.28495, "sell": 1.2836 }, { "pair": "GBP CHF", "buy": 1.27378, "sell": 1.27147 }, { "pair": "EUR SEK", "buy": 9.632, "sell": 9.6055 }, { "pair": "USD JPY", "buy": 110.467, "sell": 110.417 }, { "pair": "EUR JPY", "buy": 120.589, "sell": 120.491 }];

    function random(e) {
        let num = Math.floor(Math.random() * 10) + 1; // 1 - 10
        let upDown = Math.round(Math.random() * 1 + 0) === 0; // true/false
        let percent = e * (num / 100);

        if (upDown) {
            return e + percent;
        } else {
            return e - percent;
        }
    }
    console.log("Random amount - " + random(20));

    return {
        arrItems: arrItems
    };
})();

/* harmony default export */ __webpack_exports__["default"] = (itemController);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(0);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

// var appContainer = document.querySelector('#app');
// appContainer.innerHTML = '<div class="main-component"><h1 class="main-component__title">Welcome!</h1></div>';

const aaa = "es6";

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_js__ = __webpack_require__(5);


__webpack_require__(1);

// Start model.js




// Start controller.js


let controller = (() => {

    // console.log(itemController.arrItems)
    let displayItems = () => {
        __WEBPACK_IMPORTED_MODULE_1__ui_js__["a" /* default */].buildItemList();
    };

    return {
        init: function () {
            console.log('Init');
            displayItems();
            // setupEventListeners();
        }
    };
})(); // Invoke controller with this parameters, so it can use its methods

controller.init();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_js__ = __webpack_require__(0);
// Start ui.js

let UIController = (() => {

    let DOM = {
        app: '#app'
    };

    let arrItems = __WEBPACK_IMPORTED_MODULE_0__model_js__["default"].arrItems;

    let item = '<div id="app" class="container"> \
        <div class="panel"> \
        <div class="panel__head">%pair%</div> \
        <div class="panel__label-l"> \
        <svg> \
        <polygon points="4 55,5 57,102 57,105 56,125 38,127 34,127 27,125 23,106 5,103 3,6 3,4 5"></polygon> \
        </svg> \
        <div class="data"> \
        <div class="buy-sell">Sell <span>USD</span></div> \
        <div class="amount"> \
        <span>%buy-a%</span> \
        <span>04</span> \
        <span>3</span> \
        </div> \
        </div> \
        </div> \
        <div class="panel__pointer"> \
        <svg class="up"> \
        <polygon points="10 0,5 20,0 0"></polygon> \
        </svg> \
        </div> \
        <div class="panel__label-r"> \
        <svg> \
        <polygon points="4 55,5 57,102 57,105 56,125 38,127 34,127 27,125 23,106 5,103 3,6 3,4 5"></polygon> \
        </svg> \
        <div class="data"> \
        <div class="buy-sell">Buy <span>USD</span></div> \
        <div class="amount"> \
        <span>0.99</span> \
        <span>04</span> \
        <span>3</span> \
        </div> \
        </div> \
        </div> \
        </div> \
        </div>';

    let itemBuilt = '';
    let builtAllItems = '';

    function buildItem(i) {
        itemBuilt = item.replace(/%pair%/g, arrItems[i].pair);
        itemBuilt = itemBuilt.replace(/%buy-a%/g, arrItems[i].buy);
        builtAllItems += itemBuilt;
    }

    function buildItemList() {
        for (let i = 0; i < arrItems.length; i++) {
            buildItem(i);
        }
        let appContainer = document.querySelector(DOM.app);
        appContainer.innerHTML = builtAllItems;
    }

    return {
        buildItemList: buildItemList,
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();
/* harmony default export */ __webpack_exports__["a"] = (UIController);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map