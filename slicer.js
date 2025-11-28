function slice( stringOrSlice , start, end = stringOrSlice.length-1 ){
    let isArr = Array.isArray(stringOrSlice) ? true : false;
    let Result = isArr ? [] : ""
    start = start >= 0 ? start : -(-start-stringOrSlice.length)
    console.log("start",start)
    for (let i = start ; i < end ; i++){
        if (isArr){
            Result.push(stringOrSlice[i])
        }else{
            Result += stringOrSlice[i]
        }
    }
    return Result
}
console.log( slice('abcdef', 0, 2))