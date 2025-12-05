function fold(arr,func,acc=0){
    for (let i =0 ; i < arr.length ; i++){
        acc = func(acc,arr[i])
    }
    return acc
}

function foldRight(arr,func,acc=0){
    for (let i = arr.length-1 ; i >=0 ; i--){
        acc = func(acc,arr[i])
    }
    return acc
}
function reduce(arr,func,acc=arr[0]){
    for (let i =0 ; i < arr.length ;i++){
        acc = func(acc,arr[i])
    }
    return acc
}