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
        acc += func(keyValue[i])
    }
    return acc
}

function totalCalories(obj){
    let result =0
     let objKeys = Object.keys(obj)
   for (let i =0 ; i < objKeys.length ; i++){
      let temp = (nutritionDB[objKeys[i]].calories * obj[objKeys[i]])/100
      result+=temp     
   }
    return result
   
}
function lowCarbs(obj){
    let result = {}
    let keys = Object.keys(obj)
    for (let i =0 ; i < keys.length ; i++){
        if ((nutritionDB[keys[i]].carbs*obj[keys[i]])/100<50){
            result[keys[i]]=obj[keys[i]]
        }
    }
    return result
}
function cartTotal(obj){
    let result = {}
    let keys = Object.keys(obj)
    for (let i =0 ; i < keys.length ; i++){
       let temp = mapEntries(nutritionDB[keys[i]],function(arr){
            for (let i =0 ; i < arr.length ;i++){

                arr[i] = [arr[i][0],arr[i][1]*obj[keys[i]]/100]
            }
        })
        result = {temp}
    }
    return result
}
// function mapEntries(obj,func){
//     let keyValue = Object.entries(obj)
//     for (let i =0 ; i < keyValue.length ; i++){
//         keyValue[i] = func(keyValue[i])
//     }
//     return Object.fromEntries(keyValue)
// }