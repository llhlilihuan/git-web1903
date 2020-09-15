Array.prototype.myPush = function(){
    var len = this.length;
    console.log("arguments的值为：",arguments);
    console.log("arguments的值为："+arguments);
    console.log(arguments);
    for(var key in arguments){
        var item = arguments[key];
        this[len+(+key)] = item;
        console.log("key的值为："+key); //输出0 1
    }
    return this.length;
    //console.log("key的值为："+key); //不实现该输出语句
}

var arr = [true,22];
var result = arr.myPush("wyx","lilh","qgw");
console.log("数组长度是(result的值为)："+result,"添加元素后的数组为："+arr); //"+"输出的是""中的字符拼接函数以字符串形式输出
console.log("数组长度是(result的值为)：",result,"添加元素后的数组为：",arr); //","输出的是""中的字符和函数形式输出
console.log(result,arr);

