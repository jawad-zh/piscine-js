function deepCopy(objOrArr){
    if (objOrArr instanceof RegExp){
        return new RegExp(objOrArr)
    }
    if (Array.isArray(objOrArr)){        
        let arrayResult = []
        for(let i =0 ; i < objOrArr.length ; i++){
            if (typeof objOrArr[i] === 'object'){                
                deepCopy(objOrArr[i])
            }else{                
                arrayResult.push(objOrArr[i])
            }
        }
        return arrayResult
    }else{
            let object = {}
            let keys = Object.keys(objOrArr)
            for (let i =0 ; i < keys.length ; i++){
                if (typeof objOrArr[keys[i]] === 'object'){
                    deepCopy(objOrArr[keys[i]])
                }else{
                    object[keys[i]]= objOrArr[keys[i]]
                }
            }
            return object
        }
}
console.log(deepCopy([1, 'a']));
