function indexOf(arr ,ele,start){
    let found = false
    let index = 0
    let begn = start ? start :0;
    console.log("begn",begn)
    if ((begn > arr.length-1)){
        return -1
    }
    for (let i= begn ; i < arr.length ; i++){
        if (arr[i] === ele){
            index = i
            found = true
            break
        }
    }
     if (!found){
        return -1
    }
    return index
}
function lastIndexOf(arr ,ele,start){
    let found = false
       let index=0
    let begn = start ? start :0;
    for (let i= begn ; i < arr.length ; i++){
        if (arr[i] === ele){
            found = true
            index = i
        }
    }
    if (!found){
        return -1
    }
    return index
}
function includes(arr,el){
    for (let i =0 ; i < arr.length ; i++){
        if (arr[i] === el){
            return true
        }
    }
    return false
}
console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))