//数组的创建
var arr = new Array(5,"terry",true);
console.log(arr.length,arr);

for(var i=0;i<arr.length;i++){
    var item = arr[i];
    console.log(item);
}
console.log("----------------------------");
for(var key in arr){
    console.log(arr[key]);
}
