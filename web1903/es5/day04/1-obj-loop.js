var obj ={
    id:1,
    name:"terry",
    age:12,
    gender:"male"
}

//遍历obj，obj[key]访问obj属性
for(var key in obj){
    var value = obj[key];
    console.log(key,value);
}
