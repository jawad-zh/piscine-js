function defaultCurry(obj1){
    let result = {}
    return function(obj2){
    let objKeys = Object.keys(obj1)
    let obj2keys = Object.keys(obj2)
    let found = false
    for (let i =0 ; i < obj2keys.length ;i++ ){
        for (let j =0 ; j < objKeys.length ; j++){
            if (obj2keys[i] == objKeys[j]){
                found = true
            }
        }
        if (!found){
            objKeys.push(obj2keys[i])
        }
        found =false
    }    
    for (let i =0 ; i < objKeys.length ; i++){
            if (obj2[objKeys[i]]=== undefined){
                result[objKeys[i]] = obj1[objKeys[i]]
            }else{
                result[objKeys[i]] = obj2[objKeys[i]]
            }
    }
    return result
    }
  
}
function mapCurry(func){
    return function(obj){
        let keyValue = Object.entries(obj)
    for (let i =0 ; i < keyValue.length ; i++){
        keyValue[i] = func(keyValue[i])
    }
    return Object.fromEntries(keyValue)
    }
}
function reduceCurry(func){
    return function(obj,acc){
        let keyValue = Object.entries(obj)
        for (let i =0 ; i < keyValue.length ; i++){
            acc = func(acc,keyValue[i])
        }
        return acc
    }

}
function filterCurry(func){
    return function(obj){
        let keyValue = Object.entries(obj)
        let result ={}
        for (let i =0 ; i < keyValue.length ;i++){
            if (func(keyValue[i])){
                result[keyValue[i][0]] = keyValue[i][1] 
            }
        }
         return result
    }
}
function reduceScore(personnel,acc){
    let filters = filterCurry(([k, v]) => v.isForceUser )(personnel)
    return reduceCurry((acc,[k,v])=> acc + v.pilotingScore+v.shootingScore)(filters,acc)
}
function filterForce(obj){
    return filterCurry(([k,v])=> v.shootingScore >= 80 &&v.isForceUser)(obj)
}
function mapAverage(ob){

     let filtredKeys = Object.keys(ob)
     for (let i =0 ; i < filtredKeys.length ; i++){
       let avrage = (ob[filtredKeys[i]].pilotingScore + ob[filtredKeys[i]].shootingScore)/2
       ob[filtredKeys[i]]["averageScore"] = avrage
     }
     return ob
}
