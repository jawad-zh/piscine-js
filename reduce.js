function fold(arr,func,acc){
    let result =[]
   let temp = [acc,...arr]
    for (let i =0 ; i < temp.length ; i++){
        result.push(func(temp[i],i,temp))
    }
    return result
}