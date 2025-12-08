function pick(obj,arrOrStr){
    let result = {}
    let keys = Object.keys(obj)
    for (let i =0 ; i < keys.length ; i++ ){
        if(Array.isArray(arrOrStr)){
            for (let j =0 ; j < arrOrStr.length ; j++){
                if (arrOrStr[j] === keys[i]){
                    result[keys[i]]=obj[keys[i]]
                }
            }
     }else{        
        if(arrOrStr === keys[i]){            
            result[keys[i]]= obj[keys[i]]
        }
     }
    }
    return result
}
function omit(obj,arrOrStr){
    let found = false
    let result = {}
    let keys = Object.keys(obj)
    for (let i =0 ; i < keys.length ; i++ ){
        if(Array.isArray(arrOrStr)){
            for (let j =0 ; j < arrOrStr.length ; j++){
                if (arrOrStr[j] === keys[i]){
                    found = true
                }
            }
            if (!found){
                result[keys[i]] = obj[keys[i]]
            }
     }else{        
        if(arrOrStr != keys[i]){            
            result[keys[i]]= obj[keys[i]]
        }
     }
    }
    return result
}
console.log(omit({
    
    'drill': 'bosh',
  'grinders': 'DeWalt',
   'saws': ' Makita'
  

},'grinders'));
