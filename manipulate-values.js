function filterValues(obj,func){
    let result = {}
    let keys = Object.keys(obj)
    for (let i = 0 ; i < keys.length ; i++){        
         if (func(obj[keys[i]])){
            result[keys[i]] = obj[keys[i]]
         }
    }
    return result 
}
function mapValues(obj,func){
    let result = {}
    for (let ele in obj){        
     result[ele] = func(obj[ele])
     
    }
    return result 
}
function reduceValues(obj,func,acc=0){
    for (let ele in obj){
        acc = func(acc,obj[ele])
    }
    return acc 
}