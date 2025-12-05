function fold(arr,func,acc){

    for (let i =0 ; i < arr.length ; i++){
        acc = func(arr[i],i,arr)
    }
    return acc
}

