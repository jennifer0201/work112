const datbase = require('../main/datbase');
module.exports = function discount(arr){
        var dat=datbase.loadAllItems();
        var dis=datbase.loadPromotions();
        var num;
        for(itemA of arr){
            for(itemB of dat){
                if(itemA.code===itemB.barcode){
                    itemA.name=itemB.name;
                    itemA.unit=itemB.unit;
                    itemA.price=itemB.price;
                    itemA.count=itemA.number*itemA.price;
                }
            }
        }
        for(itemA of arr){
            for(itemC of dis){
                if(itemC.barcodes.indexOf(itemA.code)!=-1){
                    num = itemA.number - parseInt(itemA.number/3);
                    itemA.count=num*itemA.price;
                }
            }
            
        }
        return arr;
    }