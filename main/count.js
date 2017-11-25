module.exports = function count(array){
    var goods = new Array();
    var key;
    var num;
    var flag=0;
    for(var items of array){
        flag=0;
        if(items.indexOf("-")!=-1){
            var res=items.split("-");
            key=res[0];
            num=parseInt(res[1]);
        }
        else{
            key=items;
            num=1;
        }
        for(var item of goods){
            if(item.code===key){
                item.number+=num;
                flag=1;
            }
        }
        if(flag===0){
                goods.push({code:key,number:num});
            }
        }
        return goods;
    }