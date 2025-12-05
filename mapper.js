function map(arr,func){
    let result = []
    for (let i =0 ; i < arr.length ; i++){
       result.push(func(arr[i],i,arr)) 
    }
    return result
}
function flatMap(arr,func){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        let temp = func(arr[i],i,arr)
        if (Array.isArray(temp)){
            result.push([...temp])
        }else{
            result.push(temp)
        }
    }
    return result
}