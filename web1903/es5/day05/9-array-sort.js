var arr = [1,2,8,4,0];

console.log(arr);

arr.sort(function(a,b){
    if(a<b){
        return 1;
    }else{
        return -1;
    }
});
console.log(arr);
