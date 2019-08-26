//myShift 数组出队
Array.prototype.myShift = function(){
    if(this.length == 0){
        return undefined;
    }else{
        var firstElement = this[0];
        for(var i=1;i<this.length;i++){
            this[i-1] = this[i];
        }
        this.length = this.length-1;
        return firstElement;
    }
}

var arr = ["qgw",1,2,5,6];
var result = arr.myShift();
console.log(result,arr);
