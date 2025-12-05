function filter(arr,func){
    let resutlt =[]
    for (let i = 0 ; i < arr.length ; i++){
        if (func(arr[i],i,arr)){
            resutlt.push(arr[i])
        }
    }
    return resutlt
}
function reject(arr,func){
     let resutlt =[]
    for (let i = 0 ; i < arr.length ; i++){
        if (!func(arr[i],i,arr)){
            resutlt.push(arr[i])
        }
    }
    return resutlt
}
function partition(arr,func){
    let result =[]
    let ok=[]
    let no = []
    for (let i = 0 ; i < arr.length ; i++){
        if(func(arr[i],i,arr)){
            ok.push(arr[i])
        }else{
            no.push(arr[i])
        }
    }
   return  result.push(ok,no)
}