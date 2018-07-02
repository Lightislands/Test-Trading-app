'use strict';

require('../sass/main.scss');

import UIController from './ui.js';

let controller = (() => {

    let displayItems =()=> {
        UIController.buildItemList();
    };

    return {
        init: function(){
            console.log('Init');
            displayItems();
        }
    };

})();

controller.init();
















