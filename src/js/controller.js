'use strict';

require('../sass/main.scss');


// Start model.js

import itemController from './model.js';
import UIController from './ui.js';






// Start controller.js


let controller = (() => {

    // console.log(itemController.arrItems)
    let displayItems =()=> {
        UIController.buildItemList();
    };



    // let displayItems = setTimeout(function tick() {
    //     UIController.builtAllItems = '';
    //     UIController.buildItemList();
    //     displayItems = setTimeout(tick, 1000);
    // }, 1000);

    return {
        init: function(){
            console.log('Init');
            displayItems();
            // setupEventListeners();
        }
    };

})(); // Invoke controller with this parameters, so it can use its methods

controller.init();
















