module.exports =function infor(arr){
        var pre=new Array();
        for(item of arr){
            if(item.price*item.number>item.count){
                pre.push({name:item.name,num:(item.price*item.number-item.count)/item.price,unit:item.unit,price:item.price});
            }
        }
        return pre;
    }