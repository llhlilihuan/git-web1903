Array.prototype.mySort = function(mySort){
    var mySort = mySort || function(a, b){ return a > b; };
    for(var i=0; i<this.length; i++){
        for(var j=i; j<this.length; j++){
            if(mySort(this[i], this[j]) > 0){
                var t = this[i];
                this[i] = this[j];
                this[j] = t;
            }
        }
    }
    return this;
};
var arr = [1,4,8,2,0,5];
console.log("未排序的数组：",arr)
arr.mySort();
console.log("排序后的数组：",arr);
