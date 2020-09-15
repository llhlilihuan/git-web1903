//myPop 数组出栈
Array.prototype.myPop = function(){
    if(this.length == 0){
        return undefined;
    }else{
        var last = this[this.length-1];
        this.length = this.length-1;
        return last;
    }
    //console.log(last);
}

var arr = [true,1,"lilh","wyx","qgw","hhh"];
//var result = arr.myPop("wyx");//删除数组中的最后一个元素，不管myPop()括号中是那个元素
//console.log(result,arr);
arr.myPop();
console.log(arr);
