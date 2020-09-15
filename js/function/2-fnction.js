var result = buyWater(3);

console.log(buyWater);
function buyWater(money){
  //  var buyWater = function(money){
    var result;
    switch(money){
        case 2:
            result = "农夫山泉";
            break;
        case 3:
            result = "百事可乐";
            break;
        default:
            result = "水";
    }
    return result;

}
console.log(result);

