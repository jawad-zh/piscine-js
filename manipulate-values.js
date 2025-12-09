function filterValues(obj,func){
    for (let ele in obj){
        ele = func(ele)
    }
    return obj 
}
function mapValues(obj,func){
    for (let ele in obj){
        ele = func(ele)
    }
    return obj 
}
function reduceValues(obj,func){
    for (let ele in obj){
        ele = func(acc,ele)
    }
    return obj 
}
