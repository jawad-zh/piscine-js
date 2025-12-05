function fold(arr,func,acc=0){
    for (let i =0 ; i < arr.length ; i++){
        acc = func(acc,arr[i])
    }
    return acc
}

