function indexOf(arr ,ele,start){
    let found = false
    let index = 0
    let begn = start ? start :0;
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
    let begn = start ? start :0;
    for (let i= ((arr.length)-1)-begn ; i >=0 ; i--){
        if (arr[i] === ele){
            return i
        }
    }
        return -1
    }
function includes(arr,el){
    for (let i =0 ; i < arr.length ; i++){
        if (arr[i] === el){
            return true
        }
    }
    return false
}
console.log(lastIndexOf(["t", 0, 0, "t"], "t", 2))