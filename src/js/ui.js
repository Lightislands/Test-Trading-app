// Start ui.js
import itemController from './model.js';
let UIController = (() => {

    let DOM = {
        app: '#app'
    };

    let arrItems = itemController.arrItems;

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

    function buildItem(i){
        itemBuilt = item.replace(/%pair%/g, arrItems[i].pair);
        itemBuilt = itemBuilt.replace(/%buy-a%/g, arrItems[i].buy);
        builtAllItems += itemBuilt;
    }

    function buildItemList(){
        for(let i=0; i<arrItems.length; i++){
            buildItem(i);

        }
        let appContainer = document.querySelector(DOM.app);
        appContainer.innerHTML = builtAllItems;
    }


    return {
        buildItemList: buildItemList,
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();
export default UIController;