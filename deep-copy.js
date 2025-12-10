function deepCopy(objOrArr){
    
    if (Array.isArray(objOrArr)){        
        let arrayResult = []
        for(let i =0 ; i < objOrArr.length ; i++){
            if (typeof objOrArr[i] === 'object' && !(objOrArr[i] instanceof RegExp)){                
               arrayResult.push(deepCopy(objOrArr[i]))
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
                   object[keys[i]]= deepCopy(objOrArr[keys[i]])
                }else{
                    object[keys[i]]= objOrArr[keys[i]]
                }
            }
            return object
        }
}
