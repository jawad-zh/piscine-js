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
            if (func(keyValue[i],obj)){
                result[keyValue[i][0]] = keyValue[i][1] 
            }
        }
         return result
    }
}
// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
function reduceScore(personnel,acc){
    let filters = filterCurry(([k, v]) => v.isForceUser )(personnel)
    console.log(filters);
    
    return reduceCurry((acc,[k,v])=> acc + k.pilotingScore+k.shootingScore)(filters,0)
}
// console.log(reduceScore(personnel));
