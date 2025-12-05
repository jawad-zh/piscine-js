function filter(arr,func){
    let resutlt =[]
    for (let i = 0 ; i < arr.length ; i++){
        if (func(arr[i],i,arr)){
            resutlt.push(arr[i])
        }
    }
    return resutlt
}