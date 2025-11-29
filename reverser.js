function reverse(arr){
    let result = Array.isArray(arr)? [] : ""
    for (let i = arr.length-1 ; i >= 0 ; i--){
        if (Array.isArray(result)){
            result.push(arr[i])
        }else{
            result += arr[i]
        }
    }
    return result
}