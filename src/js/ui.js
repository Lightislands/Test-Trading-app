import itemController from './model.js';
let UIController = (() => {

    let DOM = {
        app: '#app'
    };

    // Init Items
    let arrItems = itemController.arrItems;

    let item = '<div class="panel"> \
        <div class="panel__head">%pair%</div><div class="panel__label-l"> \
        <svg><polygon points="4 55,5 57,102 57,105 56,125 38,127 34,127 27,125 23,106 5,103 3,6 3,4 5"></polygon></svg> \
        <div class="data"><div class="buy-sell">Sell <span>USD</span></div><div class="amount"> \
        <span>%buy-a%</span> \
        <span>%buy-b%</span> \
        <span>%buy-c%</span> \
        </div></div></div><div class="panel__pointer"> \
        <svg class="%up-down%"><polygon points="10 0,5 20,0 0"></polygon></svg> \
        </div><div class="panel__label-r"> \
        <svg><polygon points="4 55,5 57,102 57,105 56,125 38,127 34,127 27,125 23,106 5,103 3,6 3,4 5"></polygon></svg> \
        <div class="data"><div class="buy-sell">Buy <span>USD</span></div><div class="amount"> \
        <span>%sell-a%</span> \
        <span>%sell-b%</span> \
        <span>%sell-c%</span> \
        </div></div></div></div>';

    let itemBuilt = '';
    let builtAllItems = '';

    function buildItem(i){
        let randomData = itemController.getRandomBuySell(i);
        let dynamic = itemController.storage.getDynamicData(i) === 1 ? 'up' : 'down';

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

    function buildItemList(){
        setInterval(function() {
            builtAllItems = '';
                for(let i=0; i<arrItems.length; i++){
                    buildItem(i);
                    itemController.storeCourseDymanic(i);
                }
                let appContainer = document.querySelector(DOM.app);
                appContainer.innerHTML = builtAllItems;
        }, 1000);
    }

    return {
        buildItemList: buildItemList,
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();
export default UIController;