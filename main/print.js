const count = require('../main/count');
const discount = require('../main/discount');
const infor = require('../main/infor');
module.exports=function printInventory(inputs){
var arr=count(inputs);
var array_subtotal =discount(arr);
var pre=infor(array_subtotal);
var sum=0;
var save=0;
var print1="***<没钱赚商店>购物清单***\n";
var print2="";
var print3="----------------------\n";
var print4="挥泪赠送商品：\n";
var print5="";
for(var item of arr){
    print2+="名称："+item.name+"，数量："+String(item.number)+item.unit+"，单价："+String(item.price.toFixed(2))+"(元)，小计："+String(item.count.toFixed(2))+"(元)\n"
    sum+=item.count;
}
for(var item of pre){
    print5+="名称："+item.name+"，数量："+String(item.num)+item.unit+"\n";
    save+=item.num*item.price;
}
var print6="总计："+String(sum.toFixed(2))+"(元)\n";
var print7="节省："+String(save.toFixed(2))+"(元)\n";
var print8="**********************";
return(print1+print2+print3+print4+print5+print3+print6+print7+print8);
}