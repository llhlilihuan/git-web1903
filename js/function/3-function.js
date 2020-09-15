var add = function(a,b){
    var result = a + b;
    return result;

}
// 将函数的执行结果返回给bar
var bar = add();

// 将函数的指针赋值给foo
var foo = add;

console.log(bar);

console.log(foo);

var obj = {
    name:"terry",
    foo:foo
}
console.log(add === foo);
console.log(add === obj.foo);
var result = obj.foo(1,100);
console.log(result);
