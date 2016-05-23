//TODO: Please write code in this file.
function printInventory(inputs) {
    var goodsArray = new Array(),total = 0;
    for(x in inputs){
        var goods = barcodeToGoods(inputs[x],loadAllItems());
        insertGoods(goods,goodsArray);
    }
    var out = "***<没钱赚商店>购物清单***\n";
    for(x in goodsArray){
        var totalPrice = goodsArray[x].number*goodsArray[x].price;
        out += "名称：" + goodsArray[x].name +"，数量："+goodsArray[x].number+
            goodsArray[x].unit+"，单价："+goodsArray[x].price.toFixed(2)+"(元)，小计："+
            totalPrice.toFixed(2)+"(元)\n";
        total = total + totalPrice;
    }
    out += '----------------------\n'+'总计：'+total.toFixed(2)+'(元)\n'+'**********************';
    console.log(out);
}

function barcodeToGoods(barcode,goodItemArray){
    for(x in goodItemArray){
        if(goodItemArray[x].barcode==barcode){
            return goodItemArray[x];
        }
    }
    return null;
}
function insertGoods(input,array){
    if (array[input.barcode]){
        array[input.barcode].number++;
    }
    else {
        array[input.barcode] = new Object();
        array[input.barcode].name = input.name;
        array[input.barcode].number = 1;
        array[input.barcode].unit = input.unit;
        array[input.barcode].price = input.price;
        array[input.barcode].barcode = input.barcode;
    }
}