//定义一个函数，sayHello,打印出，hello world
function sayHello(){
    console.log("hello world !");
}
sayHello();

//将该函数赋值给一个变量，通过该变量调用这个函数
var foo = sayHello;
foo();

//将该函数赋值给一个对象中的属性，通过该对象调用该函数
var obj ={
    foo:foo
}
obj.foo();


