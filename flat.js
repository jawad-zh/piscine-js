function flat(arr,num=1){
    if (num==0){
        return  arr
    }
    let result =[]
    for (let i=0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i]) && num>0){
            result.push(...flat(arr[i],num-1))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log((flat([1, [2]])))