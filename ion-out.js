function ionOut(str){
    const regex = /\w+t+(ion)/g
    let arr = str.match(regex)
    if (arr === null){
        return []
    }
    for(let i =0 ; i < arr.length ;i++){
        arr[i]=arr[i].replace(/(ion)/,"")    }
    return arr
}