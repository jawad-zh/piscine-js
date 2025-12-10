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
function reduceCurry(){
    
}
// console.log(defaultCurry({ http: 403, age: 0, connection: 'close' })({
//       http: 200,
//       age: 30,
//       connection: 'keep-alive',
//       content_type: 'text/css',
//     }));
//  {
//     age: 30,
//     connection: 'keep-alive',
// -   content_type: 'text/css',
//     http: 200
//   }
 console.log(mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' }))
