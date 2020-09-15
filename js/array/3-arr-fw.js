//数组的访问
var name = "terry";
var arr = [
    1,
    "terry",
    true,
    name,
    {
        mane:"tom",
        age:12

    },
    function(){
        console.log(this.length);
        return this.length;//没有这个返回语句，25行代码执行的结果是undefined
    }
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[5]());

arr[0]++;


console.log(arr[0]);

