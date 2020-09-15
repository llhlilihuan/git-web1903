function foo(a,b){
    console.log(a,b);
    console.log(c);
    if(true){
        var c = 1;
    }
    console.log(c);
    return a+b;
}
//foo(1,2);

console.log(foo);
var result = foo(1,2);
console.log(result);
