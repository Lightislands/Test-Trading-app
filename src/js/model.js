// Start model.js

let itemController = (() => {

    let arrItems = [
        {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
        {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
        {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
        {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
        {"pair":"USD JPY", "buy":110.467, "sell":110.417},
        {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
    ];

    function random(e){
        let num = Math.floor(Math.random() * 10) + 1; // 1 - 10
        let upDown = Math.round((Math.random() * 1) + 0) === 0; // true/false
        let percent = e * (num / 100);

        if(upDown){
            return e + percent;
        }else {
            return e - percent;
        }
    }
    console.log("Random amount - " + random(20));


    return {
        arrItems: arrItems
    };

})();

export default itemController;
