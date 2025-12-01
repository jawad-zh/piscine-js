function groupPrice(str){
    let all = str.match(/[(USD)|($)]+\d+.\d+/g)
    console.log("all",all)
    let normal = str.match(/(?<=[(USD)|($)])\d+(?=.)/g)
    let decimal = str.match(/(?<=\.)\d+/g)
    if (all === null){
        return []
    }
    let result =[]
    for (let i=0 ; i < all.length ; i++){
         let temp =`${all[i]},${normal[i]},${decimal[i]}`
        result.push(temp.split(','))
    }    
    return result
}
