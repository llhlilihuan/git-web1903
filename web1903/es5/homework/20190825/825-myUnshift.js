Array.prototype.myUnshift = function(){
    var len = this.length;
    for(var i = len + arguments.length - 1; i--;){
        if(i>arguments.length-1){
            this[i] = this[i-arguments.length];
        }else{
            this[i] = arguments[i];
        }
    }

    //for(var key in arguments){
        //var item = arguments[key];
        //this[key+(+len)] = item;
    //}
    return this.length + arguments.length;
}

var arr = ["qgw",1,4,8,9];
console.log("插入元素后数组的长度：",arr.length,"插入元素后的数组：",arr);
var result = arr.myUnshift("lilh","wangyx");
console.log("插入元素后数组的长度：",result,"插入元素后的数组：",arr);
