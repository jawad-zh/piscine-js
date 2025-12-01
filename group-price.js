function groupPrice(str){
    let all = str.match(/[(USD)|($)]+\d+.\d+/g)
    let normal = str.match(/(?<=[(USD)|($)])\d+(?=.)/g)
    let decimal = str.match(/(?<=\.)\d+/g)
    if (all === null){
        return []
    }
    let temp = []
    let result =[]
    for (let i=0 ; i < all.length ; i++){
        temp.push(`${all[i]}`)
        temp.push(normal[i])
        temp.push(decimal[i])
        result.push(temp)
    }    
    return result
}
console.log(groupPrice('USD19.98', '19', '98'));
