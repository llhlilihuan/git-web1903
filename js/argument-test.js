(function(a){
    console.log(arguments);
})
(1);

(function(a,b,c){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
})
(1,2,3,4);
for(var key in arguments){
    var a = arguments[key];
    console.log(a);
}
console.log(a);
