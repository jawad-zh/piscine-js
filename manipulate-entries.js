function filterEntries(obj,func){
    let result = {}
    let keyValue = Object.entries(obj)
    for (let i =0 ; i < keyValue.length ; i++){
        if (func(keyValue[i])){
            result[keyValue[i][0]] = keyValue[i][1]
        }
    }
    return result
}
function mapEntries(obj,func){
    let keyValue = Object.entries(obj)
    for (let i =0 ; i < keyValue.length ; i++){
        keyValue[i] = func(keyValue[i])
    }
    return Object.fromEntries(keyValue)
}
function reduceEntries(obj,func,acc=0){
    let keyValue = Object.entries(obj)
    for (let i =0 ; i < keyValue.length ; i++){
        acc = func(keyValue[i])
    }
    return acc
}