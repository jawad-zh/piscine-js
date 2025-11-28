function round(arr){
    let result = [];
    for (let i =0 ; i < arr.length ; i++){
        let splited = arr[i].toString().split(".")
        let initial = +splited[0]
        let decimal= +splited[1]
        if (decimal >= 5){
            if (initial>0){
                result.push(initial+1)  
            }else{
                result.push(initial-1)
            }
        }else{
            result.push(initial)
        }
    }
    return result
}
function ceil(arr){
        let result = [];
    for (let i =0 ; i < arr.length ; i++){
        let splited = arr[i].toString().split(".")
        let initial = +splited[0]
            if (initial>0){
                result.push(initial)  
            }else{
                result.push(initial-1)
            }
        }
    return result
}
function floor(arr){
        let result = [];
    for (let i =0 ; i < arr.length ; i++){
        let splited = arr[i].toString().split(".")
        let initial = +splited[0]
                result.push(initial)  
        }
    return result
}
function trunc(arr){
        let result = [];
    for (let i =0 ; i < arr.length ; i++){
        let splited = arr[i].toString().split(".")
        let initial = +splited[0]
            if (initial>0){
                result.push(initial+1)  
            }else{
                result.push(initial)
            }
        }
    return result

}
