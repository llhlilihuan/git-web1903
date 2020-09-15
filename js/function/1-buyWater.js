function buyWater(money){
    var result;
    switch(money){
        case 2.5:
            result:"芬达";
            break;
        case 3:
            result:"百事可乐";
            break;
        default:
            result:"水";
    }
    return result;
}

var result = buyWater(3);
console.log(result);
