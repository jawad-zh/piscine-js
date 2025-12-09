function filterKeys(obj,func){
    let result = {}
    for (let key in obj){
        if (func(key)){
            result[key] = obj[key]
        }
    }
    return result
}
function mapKeys(obj,func){
    let result = {}
    for (let key in obj){
        let newKey = func(key)
        result[newKey]=obj[key]
    }
    return result
}

function reduceKeys(obj,func,acc){
    let flag = false
    let keys = Object.keys(obj)
    flag = acc!= undefined ? true : false
    if (!flag){
        acc = keys[0]
        keys= keys.slice(1)
    }
    for (let i =0 ; i < keys.length ; i++){
        acc = func(acc,keys[i])
    }
    return acc
}
