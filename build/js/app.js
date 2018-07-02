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

    // Course dynamic states
    let storage = {

        dynamic: [],

        setDynamicData: function (i, randomBuy, randomSell) {

            // Init storage.dynamic
            if (this.dynamic.length != arrItems.length) {
                for (let c = 0; c < arrItems.length; c++) {
                    this.dynamic.push({ indexBuy: 1, indexSell: 1, buy: 0, sell: 0 });
                }
            }

            console.log("Dynamic Init");
            console.log(this.dynamic);

            // Check increase/decrease index comparing to current one
            this.dynamic[i].buy < randomBuy ? this.dynamic[i].indexBuy = 1 : this.dynamic[i].indexBuy = 0;
            this.dynamic[i].sell < randomSell ? this.dynamic[i].indexSell = 1 : this.dynamic[i].indexSell = 0;
            this.dynamic[i].buy = randomBuy;
            this.dynamic[i].sell = randomSell;
        },

        getDynamicData: function (i) {
            if (this.dynamic[i]) {
                console.log("Dynamic");
                console.log(this.dynamic[i].indexBuy);
                return this.dynamic[i].indexBuy;
            }
        }
    };
    // ------- Get Random percent
    function getRandom(e) {
        let num = Math.floor(Math.random() * 10) + 1; // 1 - 10
        let upDown = Math.round(Math.random() * 1 + 0) === 0; // true/false
        let percent = e * (num / 100);

        if (upDown) {
            return e + percent;
        } else {
            return e - percent;
        }
    }
    // ------- Get Random Buy/Sell amount
    function getRandomBuySell(i) {
        let random = {};
        random.buy = getRandom(arrItems[i].buy);
        random.sell = getRandom(arrItems[i].sell);
        return random;
    }

    function storeCourseDymanic(i) {
        let randomData = getRandomBuySell(i);
        storage.setDynamicData(i, randomData.buy, randomData.sell);
    }

    return {
        arrItems: arrItems,
        getRandom: getRandom,
        storage: storage,
        getRandomBuySell: getRandomBuySell,
        storeCourseDymanic: storeCourseDymanic
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

    // let displayItems = setTimeout(function tick() {
    //     UIController.builtAllItems = '';
    //     UIController.buildItemList();
    //     displayItems = setTimeout(tick, 1000);
    // }, 1000);

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

    // Init Items
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
        <span>%buy-b%</span> \
        <span>%buy-c%</span> \
        </div> \
        </div> \
        </div> \
        <div class="panel__pointer"> \
        <svg class="%up-down%"> \
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
        <span>%sell-a%</span> \
        <span>%sell-b%</span> \
        <span>%sell-c%</span> \
        </div> \
        </div> \
        </div> \
        </div> \
        </div>';

    let itemBuilt = '';
    let builtAllItems = '';

    function buildItem(i) {
        let randomData = __WEBPACK_IMPORTED_MODULE_0__model_js__["default"].getRandomBuySell(i);
        let dynamic = __WEBPACK_IMPORTED_MODULE_0__model_js__["default"].storage.getDynamicData(i) === 1 ? 'up' : 'down';

        let buy = {};
        buy.a = randomData.buy.toString().substring(0, 4);
        buy.b = randomData.buy.toString().substring(4, 6);
        buy.c = randomData.buy.toString().substring(6, 7);

        let sell = {};
        sell.a = randomData.sell.toString().substring(0, 4);
        sell.b = randomData.sell.toString().substring(4, 6);
        sell.c = randomData.sell.toString().substring(6, 7);

        itemBuilt = item.replace(/%pair%/g, arrItems[i].pair);
        itemBuilt = itemBuilt.replace(/%buy-a%/g, buy.a);
        itemBuilt = itemBuilt.replace(/%buy-b%/g, buy.b);
        itemBuilt = itemBuilt.replace(/%buy-c%/g, buy.c);

        itemBuilt = itemBuilt.replace(/%up-down%/g, dynamic);

        itemBuilt = itemBuilt.replace(/%sell-a%/g, sell.a);
        itemBuilt = itemBuilt.replace(/%sell-b%/g, sell.b);
        itemBuilt = itemBuilt.replace(/%sell-c%/g, sell.c);
        builtAllItems += itemBuilt;
    }

    function buildItemList() {
        for (let i = 0; i < arrItems.length; i++) {
            buildItem(i);
            __WEBPACK_IMPORTED_MODULE_0__model_js__["default"].storeCourseDymanic(i);
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